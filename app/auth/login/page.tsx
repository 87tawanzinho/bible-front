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
    <div className="bg-gradient-to-r from-[#f7fffe] to-[#f4fcff] flex flex-col justify-center items-center h-screen bg-login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axiosResponse();
        }}
        className="flex flex-col h-96  w-11/12 lg:w-[28rem] gap-2 relative justify-center mb-4 items-center"
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
            <button
              type="submit"
              className="button-good bg-slate-900 w-32 mt-4"
            >
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
            <Link href={"/auth/register"} className="absolute bottom-16 left-4">
              <p className="link-css">Não tenho uma conta..</p>
            </Link>
          </>
        )}
      </form>
    </div>
  );
}

export default page;
