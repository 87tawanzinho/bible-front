"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bird from "@/public/kiss-bid.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { instanceWithoutAuthorization } from "@/app/instance";
import Back from "@/app/(main)/components/back";
function page() {
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [warning, setWarning] = useState("");
  const router = useRouter();

  const axiosResponse = async () => {
    setWarning("se conectando...");

    if (confirmPassword !== password) {
      return setWarning("Senhas não coincidem");
    }

    if (surname.length < 4) {
      return setWarning("Apelido precisa de no minimo 4 digitos.");
    }

    if (email === "") {
      return setWarning("Preencha seu e-mail corretamente");
    }
    try {
      const response = await instanceWithoutAuthorization.post("signup", {
        username: surname,
        email: email,
        password: password,
      });
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
      setWarning("algo de errado aconteceu.");
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      <form
        className="flex flex-col h-96  w-11/12 lg:w-[28rem] gap-2 relative justify-center mb-4 "
        onSubmit={(e) => {
          e.preventDefault();
          axiosResponse();
        }}
      >
        <div className=" text-center">
          <Back className="" src="/auth/login" size={20} />
          <h2 className="text-xl font-bold mb-4">Crie o seu Perfil</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <input
            type="text"
            placeholder="Apelido"
            className="input-p w-2/3"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="input-p w-2/3"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="input-p w-2/3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            className="input-p w-2/3"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="mt-4 border w-4/12 bg-yellow-200 rounded p-1 font-bold">
            Vamos lá!
          </button>
        </div>
        {warning && <p className="text-orange-600 mt-4">{warning}</p>}
      </form>
    </div>
  );
}

export default page;
