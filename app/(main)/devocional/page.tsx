import React from "react";
import jesusKiss from "@/public/Jesus/JesusKiss.png";
import jesusWord from "@/public/Jesus/jesusWord.png";
import jesusOpenArms from "@/public/JesusIcons/JesusOpenArms.png";
import { OneCard } from "../inicio/cards";
import Image from "next/image";
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";
function page() {
  return (
    <div className="flex flex-col justify-center items-center  border-b-4 relative sm:border-4 shadow-lg border-sky-800 p-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-center text-2xl font-serif  ">Tempo com Jesus</p>

        <Link href={"/inicio"}>
          <button className="absolute end-4 top-2  text-black">
            <FaArrowCircleLeft size={20} />
          </button>
        </Link>

        <Image src={jesusOpenArms} alt="jesus" height={40} />
      </div>
      <div className="mt-10 font-bold text-sm w-full flex justify-center">
        <p className="mt-4   text-[13x] lg:text-sm w-auto  bg-sky-950 lg:w-96 text-gray-200 rounded-xl p-4">
          Ter um tempo com Jesus é como ter um amigo especial. É falar com Ele,
          agradecer, pedir ajuda e ler histórias da Bíblia para aprender coisas
          boas. É se sentir feliz e protegido, sabendo que Jesus está sempre por
          perto.
        </p>
      </div>

      <div className="flex overflow-x-auto  gap-2 md:gap-4  lg:gap-8  p-0 lg:p-2  text-center mt-10 justify-center lg:justify-normal">
        <OneCard
          title="Ser Amigo"
          img={jesusKiss}
          bg=""
          optionalClassForText=" text-sm text-center"
          optionalClassForDiv=" "
          optionalClassForDivImage=""
          buttonGo={true}
        />

        <OneCard
          title="Oração"
          img={jesusWord}
          bg=""
          optionalClassForText=" text-sm text-center"
          optionalClassForDiv=" "
          optionalClassForDivImage=""
          buttonGo={true}
        />
      </div>
    </div>
  );
}

export default page;
