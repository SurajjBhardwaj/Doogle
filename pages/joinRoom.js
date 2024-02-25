import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function JoinRoom({ handleCredChange }) {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Generate a unique socket ID for the user
    const socketId = uuidv4();

    try {
      // Call the API to store the user's details along with the generated socket ID
      const response = await fetch("/api/updateSocket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          roomName,
          socketId,
        }),
      });
      console.log(response);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        // If storing the user data is successful, navigate the user to the room page
        router.push(`/newRoom/${roomName}`);
      } else {
        console.error("Failed to store user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error storing user data:", error);
    }
  };

  useEffect(() => {
    handleCredChange(userName, roomName);
  }, [roomName, userName, handleCredChange]);

  return (
    <div>
      <Head>
        <title>
          Join Room - Native WebRTC API with NextJS and Pusher as the Signalling
          Server
        </title>
        <meta name="description" content="Join a video conferencing room" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form onSubmit={handleLogin}>
        <h1>Join a Room</h1>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="Enter Username"
        />
        <input
          onChange={(e) => setRoomName(e.target.value)}
          value={roomName}
          placeholder="Enter Room Name"
        />
        <button type="submit">Join Room</button>
      </form>
    </div>
  );
}
