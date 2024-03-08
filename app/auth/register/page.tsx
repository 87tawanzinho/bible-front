"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bird from "@/public/kiss-bid.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { instanceWithoutAuthorization } from "@/app/instance";
function page() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const router = useRouter();
  const axiosResponse = async () => {
    setWarning("se conectando...");
    try {
      const response = await instanceWithoutAuthorization.post("login", {
        username: name,
        password: password,
      });
      const token = `Token ${response.data.token}`;
      const username = response.data.user.user.username;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      console.log(response.data);
      setWarning("😊");

      router.push("/inicio");
    } catch (error) {
      setWarning("algo de errado aconteceu.");
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      <form className="flex flex-col h-96  w-11/12 lg:w-[28rem] gap-2 relative justify-center mb-4 ">
        <div className=" text-center">
          <p className="text-xl">Meu amigo Jesus</p>
          <p className="text-sm text-gray-300">Cadastro</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <input type="text" placeholder="Apelido" className="input-p w-2/3" />
          <input type="email" placeholder="E-mail" className="input-p w-2/3" />
          <input
            type="password"
            placeholder="Senha"
            className="input-p w-2/3"
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            className="input-p w-2/3"
          />

          <button className="mt-4 border w-4/12 bg-yellow-200 rounded p-1">
            Vamos lá!
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;
