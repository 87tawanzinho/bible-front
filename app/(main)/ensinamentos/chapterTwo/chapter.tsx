"use client";

import React, { useEffect, useState } from "react";
import jesusAndClouds from "@/public/Jesus/JesusAndClouds.png";

import camel from "@/public/Jesus/Camel.png";
import jesusAndSheep from "@/public/JesusFirst/JesusNormalFirstCard/JesusAndYourSheeps.png";
import jesusAndBeach from "@/public/JesusFirst/JesusNormalFirstCard/UnderstandWordsGod.png";
import OneCard from "../OneCard";
import { useCardsContext } from "../../context/cardsData";
import Loading from "../../loading";
import trin from "@/public/cap2/trin.png";
import two from "@/public/cap2/2.png";
function CardsChapter2({}) {
  const { cardsData, setCardsData, AxiosTakeCards } = useCardsContext();
  useEffect(() => {
    AxiosTakeCards();
  }, []);
  const isCompleted = (chapter: any, number: number) => {
    return false;
  };
  return (
    <>
      {cardsData ? (
        <div className="flex overflow-x-auto  gap-2 md:gap-4  lg:gap-8  p-0 lg:p-2  text-center  ">
          <OneCard
            img={trin}
            optionalClassForText="text-[12px]"
            src="/capitulo2/1"
            border={true}
            isDifferentStory={true}
            completed={isCompleted("firstChapter", 0)}
          />
          <OneCard
            img={two}
            optionalClassForText="text-[14px]"
            border={true}
            isDifferentStory={true}
            src="/capitulo2/2"
            completed={isCompleted("firstChapter", 1)}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CardsChapter2;

interface chapter {
  firstChapter: string;
}
