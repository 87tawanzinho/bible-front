"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { Children, useEffect, useState } from "react";
import Loading from "../(main)/loading";

function AuthCheck({ children }: { children: React.ReactNode }) {
  const [IsLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "https://bible-back.onrender.com/test_token",
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setIsLogged(true);
      } catch (error) {
        setIsLogged(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);
  return (
    <>
      {isLoading ? children : IsLogged ? children : router.push("/auth/login")}
    </>
  );
}

export default AuthCheck;
