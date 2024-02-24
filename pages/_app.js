// pages/app.js
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    router.push(`/room/${roomName}`);
  };

  return (
    <SessionProvider session={pageProps.session}>
      <Component
        handleCredChange={(userName, roomName) => {
          setUserName(userName);
          setRoomName(roomName);
        }}
        userName={userName}
        roomName={roomName}
        handleLogin={handleLogin}
        {...pageProps}
      />
    </SessionProvider>
  );
}
