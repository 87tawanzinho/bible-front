"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import bird from "@/public/kiss-bird.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
function page() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const router = useRouter();
  const axiosResponse = async () => {
    setWarning("se conectando...");
    try {
      const response = await axios.post(
        "https://bible-back.onrender.com/login",
        {
          username: name,
          password: password,
        }
      );
      const token = `Token ${response.data.token}`;
      localStorage.setItem("token", token);
      setWarning("😊");
      router.push("/inicio");
    } catch (error) {
      setWarning("algo de errado aconteceu.");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axiosResponse();
        }}
        className="flex flex-col border h-96  w-11/12 lg:w-[28rem] gap-2 relative justify-center mb-4 items-center"
      >
        <Image src={bird} alt="bird" className="h-10 w-10 absolute top-12 " />
        {warning === "se conectando..." ? (
          <p>{warning}</p>
        ) : (
          <>
            {" "}
            <input
              type="text"
              placeholder="nome"
              className="input-p w-2/3"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="senha"
              className="input-p w-2/3"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="button-good w-32 mt-4">
              Entrar
            </button>
            {warning && (
              <p
                className={`text-sm ${
                  warning.includes("algo") ? "text-red-400" : "text-black"
                }`}
              >
                {warning}
              </p>
            )}
            <Link href={"$"} className="absolute bottom-16 left-4">
              <p className="link-css">Não tenho uma conta..</p>
            </Link>
          </>
        )}
      </form>
    </div>
  );
}

export default page;
