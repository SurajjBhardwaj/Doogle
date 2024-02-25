'use client';
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const router = useRouter();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      router.replace("/");
    }
  }, [router]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
