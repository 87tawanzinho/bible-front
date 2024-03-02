"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import jesusAndClouds from "@/public/Jesus/JesusAndClouds.png";
import jesusAndCloudsCompleted from "@/public/JesusFirst/JesusCompletedFirstCard/HowBeAFriendOfJesusCompleted.png";

import camel from "@/public/Jesus/Camel.png";
import jesusAndSheep from "@/public/JesusFirst/JesusNormalFirstCard/JesusAndYourSheeps.png";
import jesusAndBeach from "@/public/JesusFirst/JesusNormalFirstCard/UnderstandWordsGod.png";
import jesusAndBeachCompleted from "@/public/JesusFirst/JesusCompletedFirstCard/HowBeAFriendOfJesusCompleted.png";
import axios from "axios";

function CardsChapter1() {
  const [cardsData, setCardsData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://bible-back.onrender.com/take_cards/",
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );

        setCardsData(response.data.allChapters);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  const isCompleted = (chapter: any, number: number) => {
    return cardsData && cardsData[chapter][number].completed === true;
  };
  return (
    <div className="flex overflow-x-auto  gap-2 md:gap-4  lg:gap-8  p-0 lg:p-2  text-center  ">
      <OneCard
        img={jesusAndClouds}
        optionalClassForText="text-[12px]"
        src="/capitulo1/1"
        completed={isCompleted("firstChapter", 0)}
      />
      <OneCard
        img={
          cardsData
            ? cardsData.firstChapter[1].completed === true
              ? jesusAndBeachCompleted
              : jesusAndBeach
            : jesusAndBeach
        }
        optionalClassForText="text-[14px]"
        src="/capitulo1/2"
      />
      <OneCard
        img={jesusAndSheep}
        optionalClassForText="text-[14px]"
        src="/capitulo1/3"
      />
      <OneCard img={camel} optionalClassForText="text-[14px]" />
    </div>
  );
}

export function OneCard({
  img,
  title,
  optionalClassForDiv,
  optionalClassForText,
  optionalClassForDivImage,
  optionalClassForImage,
  src,
  completed,
}: {
  img: any;
  title?: string;
  optionalClassForDiv?: string;
  optionalClassForText?: string;
  optionalClassForDivImage?: string;
  optionalClassForImage?: string;
  src?: string;
  completed?: boolean;
}) {
  const router = useRouter();
  return (
    <div
      className={`lg:overflow-hidden  ${optionalClassForDiv} `}
      onClick={() => {
        router.push(`${src}`);
      }}
    >
      <p className={`mb-2  text-black ${optionalClassForText}`}>{title}</p>
      <div
        className={` w-28 md:w-40 lg:w-48  rounded-xl  ${optionalClassForDivImage}`}
      >
        <div className="relative">
          <Image
            src={img}
            alt="img"
            className={`rounded-xl ${optionalClassForImage}  hover:cursor-pointer   transition-all ${
              completed && "sepia"
            }`}
          />
          {completed && (
            <button className="  rounded-lg absolute top-4 end-3 p-1 text-[12px] bg-emerald-950 text-white">
              Completado
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardsChapter1;

interface chapter {
  firstChapter: string;
}
