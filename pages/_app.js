// pages/app.js
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

import "@/styles/globals.css";
import UserContextProvider from "@/context/userContextProvider";

export default function App({ Component, pageProps }) {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    router.push(`/room/${roomName}`);
  };

  // Fix: Use functional updates to ensure the correct state is set
  const handleCredChange = (newUserName, newRoomName) => {
    setUserName(newUserName);
    setRoomName(newRoomName);
  };

  return (
    <SessionProvider session={pageProps.session}>
    <UserContextProvider>

   
      <Component
        handleCredChange={handleCredChange} // Pass the function directly
        userName={userName}
        roomName={roomName}
        handleLogin={handleLogin}
        {...pageProps}
      />
       </UserContextProvider>
    </SessionProvider>
  );
}
