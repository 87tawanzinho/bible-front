"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import jesusAndClouds from "@/public/Jesus/JesusAndClouds.png";
import camel from "@/public/Jesus/Camel.png";
import jesusAndSheep from "@/public/Jesus/JesusAndSheep.png";
import jesusAndBeach from "@/public/Jesus/JesusAndBeach.png";
function CardsHome() {
  return (
    <div className="flex overflow-x-auto  gap-2 md:gap-4  lg:gap-8  p-0 lg:p-2  text-center  ">
      <OneCard bg="bg-blue-100" img={jesusAndClouds} title="Historinhas" />
      <OneCard bg="bg-orange-100" img={jesusAndBeach} title="Quadrinhos" />
      <OneCard bg="bg-green-100" img={jesusAndSheep} title="Ensinamentos" />
      <OneCard bg="bg-red-100" img={camel} title="Cristo" />
    </div>
  );
}

function OneCard({ bg, img, title }: { bg: string; img: any; title: string }) {
  const router = useRouter();
  return (
    <div
      className="lg:overflow-hidden  "
      onClick={() => {
        router.push("/devocional");
      }}
    >
      <p className="mb-2 text-sm">{title}</p>
      <div className={` w-28 md:w-40 lg:w-48 ${bg} rounded-xl scale`}>
        <Image src={img} alt="img" className="rounded-xl" />
      </div>
    </div>
  );
}

export default CardsHome;
