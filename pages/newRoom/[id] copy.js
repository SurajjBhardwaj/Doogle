import { useRouter } from "next/router";
import Pusher from "pusher-js";
import { useEffect, useRef, useState } from "react";

const ICE_SERVERS = {
  iceServers: [
    {
      urls: "stun:openrelay.metered.ca:80",
    },
    {
      urls: "stun:stun.l.google.com:19302",
    },
    {
      urls: "stun:stun2.l.google.com:19302",
    },
  ],
};

export default function Room({ userName, roomName }) {
  const [micActive, setMicActive] = useState(true);
  const [cameraActive, setCameraActive] = useState(true);
  const [screenShareActive, setScreenShareActive] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  const host = useRef(false);
  const pusherRef = useRef();
  const channelRef = useRef();
  const rtcConnection = useRef();
  const userStream = useRef();
  const userVideo = useRef(null);
  const partnerVideo = useRef(null);

  useEffect(() => {
    pusherRef.current = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      authEndpoint: "/api/pusher/auth",
      auth: {
        params: { username: userName },
      },
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    });
    channelRef.current = pusherRef.current.subscribe(`presence-${roomName}`);

    channelRef.current.bind("pusher:subscription_succeeded", (members) => {
      if (members.count === 1) {
        host.current = true;
      }

      if (members.count > 2) {
        router.push("/");
      }
      handleRoomJoined();
    });

    channelRef.current.bind("pusher:member_removed", () => {
      handlePeerLeaving();
    });

    channelRef.current.bind("client-offer", (offer) => {
      if (!host.current) {
        handleReceivedOffer(offer);
      }
    });

    channelRef.current.bind("client-ready", () => {
      initiateCall();
    });

    channelRef.current.bind("client-answer", (answer) => {
      if (host.current) {
        handleAnswerReceived(answer);
      }
    });

    channelRef.current.bind("client-ice-candidate", (iceCandidate) => {
      handlerNewIceCandidateMsg(iceCandidate);
    });

    channelRef.current.bind("client-message", (message) => {
      receiveMessage(message);
    });

    return () => {
      if (pusherRef.current)
        pusherRef.current.unsubscribe(`presence-${roomName}`);
    };
  }, [userName, roomName]);

  const handleRoomJoined = () => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: { width: 1280, height: 720 },
      })
      .then((stream) => {
        userStream.current = stream;
        userVideo.current.srcObject = stream;
        userVideo.current.onloadedmetadata = () => {
          userVideo.current.play();
        };
        if (!host.current) {
          channelRef.current.trigger("client-ready", {});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createPeerConnection = () => {
    const connection = new RTCPeerConnection(ICE_SERVERS);

    connection.onicecandidate = handleICECandidateEvent;
    connection.ontrack = handleTrackEvent;
    connection.onicecandidateerror = (e) => console.log(e);

    if (screenShareActive) {
      navigator.mediaDevices
        .getDisplayMedia({ video: true }) // Get screen sharing stream
        .then((stream) => {
          stream.getTracks().forEach((track) => {
            connection.addTrack(track, stream); // Add screen sharing track to connection
          });
        })
        .catch((err) => {
          console.error("Error accessing screen sharing:", err);
        });
    }

    return connection;
  };

  const initiateCall = () => {
    if (host.current) {
      rtcConnection.current = createPeerConnection();
      userStream.current?.getTracks().forEach((track) => {
        rtcConnection.current?.addTrack(track, userStream.current);
      });
      rtcConnection.current
        .createOffer()
        .then((offer) => {
          rtcConnection.current.setLocalDescription(offer);
          channelRef.current.trigger("client-offer", offer);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleReceivedOffer = (offer) => {
    rtcConnection.current = createPeerConnection();
    userStream.current?.getTracks().forEach((track) => {
      rtcConnection.current?.addTrack(track, userStream.current);
    });

    rtcConnection.current.setRemoteDescription(offer);
    rtcConnection.current
      .createAnswer()
      .then((answer) => {
        rtcConnection.current.setLocalDescription(answer);
        channelRef.current.trigger("client-answer", answer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAnswerReceived = (answer) => {
    rtcConnection.current.setRemoteDescription(answer);
  };

  const handleICECandidateEvent = async (event) => {
    if (event.candidate) {
      channelRef.current.trigger("client-ice-candidate", event.candidate);
    }
  };

  const handlerNewIceCandidateMsg = (incoming) => {
    const candidate = new RTCIceCandidate(incoming);
    rtcConnection.current
      .addIceCandidate(candidate)
      .catch((error) => console.log(error));
  };

  const handleTrackEvent = (event) => {
    partnerVideo.current.srcObject = event.streams[0];
  };

  const toggleMediaStream = (type) => {
    if (type === "screen") {
      if (screenShareActive) {
        console.log("Screen sharing stopped ", screenShareActive);
        stopScreenShare();
      } else {
        navigator.mediaDevices
          .getDisplayMedia({ video: true })
          .then((stream) => {
            userVideo.current.srcObject = stream;
            userStream.current = stream;
            stream.getTracks().forEach((track) => {
              rtcConnection.current.addTrack(track, stream);
            });
            setScreenShareActive(!screenShareActive);
            console.log("Screen sharing started", screenShareActive);
          })
          .catch((error) => {
            console.error("Error accessing screen sharing:", error);
          });
      }
    } else if (type === "video") {
      userStream.current?.getTracks().forEach((track) => {
        if (track.kind === "video") {
          track.enabled = !track.enabled;
        }
      });
      setCameraActive((prev) => !prev);
    }
  };

  const handlePeerLeaving = () => {
    host.current = true;
    if (partnerVideo.current?.srcObject) {
      partnerVideo.current.srcObject
        .getTracks()
        .forEach((track) => track.stop());
    }

    if (rtcConnection.current) {
      rtcConnection.current.ontrack = null;
      rtcConnection.current.onicecandidate = null;
      rtcConnection.current.close();
      rtcConnection.current = null;
    }
  };

  const leaveRoom = () => {
    if (userVideo.current?.srcObject) {
      userVideo.current.srcObject.getTracks().forEach((track) => track.stop());
    }
    if (partnerVideo.current?.srcObject) {
      partnerVideo.current.srcObject
        .getTracks()
        .forEach((track) => track.stop());
    }

    if (rtcConnection.current) {
      rtcConnection.current.ontrack = null;
      rtcConnection.current.onicecandidate = null;
      rtcConnection.current.close();
      rtcConnection.current = null;
    }

    router.push("/");
  };

  const toggleMic = () => {
    toggleMediaStream("audio", micActive);
    setMicActive((prev) => !prev);
  };

  const toggleCamera = () => {
    toggleMediaStream("video", cameraActive);
    setCameraActive((prev) => !prev);
  };

  const stopScreenShare = () => {
    if (screenShareActive) {
      userVideo.current.srcObject = userStream.current;
      userStream.current.getTracks().forEach((track) => {
        if (track.kind === "video" && track.label === "screen") {
          track.stop(); // Stop screen sharing track
          rtcConnection.current.getSenders().forEach((sender) => {
            if (sender.track === track) {
              rtcConnection.current.removeTrack(sender); // Remove screen sharing track from RTC connection
            }
          });
        }
      });
      setScreenShareActive(false);
    }
  };

  const sendMessage = () => {
    if (message.trim() === "") return;
    const newMessage = {
      user: userName,
      text: message.trim(),
    };
    setMessages([...messages, newMessage]);
    channelRef.current.trigger("client-message", newMessage);
    setMessage("");
  };

  const receiveMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <section className="w-screen h-screen bg-purple-100 ">
      <div className="mx-auto max-w-screen-2xl px-8 md:px-16 py-2">
      <div className="flex">
        <div style={{ flex: 1, margin: "0 10px" }}>
          <video
            autoPlay
            ref={userVideo}
            muted
            style={{ width: "100%", border: "1px solid #ccc" }}
          />
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <button onClick={toggleMic} type="button">
              {micActive ? "Mute Mic" : "UnMute Mic"}
            </button>
            <button onClick={leaveRoom} type="button">
              Leave
            </button>
            <button onClick={toggleCamera} type="button">
              {cameraActive ? "Stop Camera" : "Start Camera"}
            </button>
            <button onClick={() => toggleMediaStream("screen")} type="button">
              {screenShareActive ? "Stop Screen Share" : "Start Screen Share"}
            </button>
          </div>
        </div>
        <div style={{ flex: 1, margin: "0 10px" }}>
          <video
            autoPlay
            ref={partnerVideo}
            style={{ width: "100%", border: "1px solid #ccc" }}
          />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div style={{ overflowY: "scroll", height: "200px" }}>
          {messages.map((msg, index) => (
            <div key={index}>
              <strong>{msg.user}: </strong>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      </div>
    </section>
  );
}
