// pages/join-room.js
import Head from "next/head";
import { useEffect, useState } from "react";
// import styles from "../styles/Home.module.css";

export default function JoinRoom({ handleCredChange, handleLogin }) {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    handleCredChange(userName, roomName);
  }, [roomName, userName, handleCredChange]);

  return (
    <div >
      <Head>
        <title>
          Join Room - Native WebRTC API with NextJS and Pusher as the Signalling
          Server
        </title>
        <meta name="description" content="Join a video conferencing room" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form  onSubmit={handleLogin}>
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
        <button type="submit" >
          Join Room
        </button>
      </form>
    </div>
  );
}
