"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import jesusAndClouds from "@/public/Jesus/JesusAndClouds.png";
import camel from "@/public/Jesus/Camel.png";
import jesusAndSheep from "@/public/JesusFirst/JesusNormalFirstCard/JesusAndYourSheeps.png";
import jesusAndBeach from "@/public/JesusFirst/JesusNormalFirstCard/UnderstandWordsGod.png";
import { MdArrowRightAlt } from "react-icons/md";
function CardsHome() {
  return (
    <div className="flex overflow-x-auto  gap-2 md:gap-4  lg:gap-8  p-0 lg:p-2  text-center  ">
      <OneCard
        bg="bg-blue-100"
        img={jesusAndClouds}
        optionalClassForText="text-[12px]"
      />
      <OneCard
        bg="bg-orange-100"
        img={jesusAndBeach}
        optionalClassForText="text-[14px]"
      />
      <OneCard
        bg="bg-green-100"
        img={jesusAndSheep}
        optionalClassForText="text-[14px]"
      />
      <OneCard bg="bg-red-100" img={camel} optionalClassForText="text-[14px]" />
    </div>
  );
}

export function OneCard({
  bg,
  img,
  title,
  optionalClassForDiv,
  optionalClassForText,
  optionalClassForDivImage,
  optionalClassForImage,
}: {
  bg: string;
  img: any;
  title?: string;
  optionalClassForDiv?: string;
  optionalClassForText?: string;
  optionalClassForDivImage?: string;
  optionalClassForImage?: string;
}) {
  const router = useRouter();
  return (
    <div
      className={`lg:overflow-hidden  ${optionalClassForDiv} `}
      onClick={() => {
        router.push("/devocional");
      }}
    >
      <p className={`mb-2  text-black ${optionalClassForText}`}>{title}</p>
      <div
        className={` w-28 md:w-40 lg:w-48 ${bg} rounded-xl  ${optionalClassForDivImage}`}
      >
        <Image
          src={img}
          alt="img"
          className={`rounded-xl ${optionalClassForImage}  hover:cursor-pointer hover:lg:scale-75 transition-all`}
        />
      </div>
    </div>
  );
}

export default CardsHome;
