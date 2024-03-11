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
    return (
      cardsData &&
      cardsData[chapter] &&
      cardsData[chapter][number] &&
      cardsData[chapter][number].completed === true
    );
  };
  return (
    <>
      {cardsData ? (
        <div className="flex overflow-x-auto  gap-2 md:gap-4  lg:gap-8  p-0 lg:p-2  text-center  ">
          <OneCard
            img={trin}
            optionalClassForText="text-[12px]"
            src="/capitulo2/1"
            isDifferentStory={true}
            completed={isCompleted("secondChapter", 0)}
          />
          <OneCard
            img={trin}
            optionalClassForText="text-[14px]"
            isDifferentStory={true}
            src="/capitulo2/2"
            completed={isCompleted("secondChapter", 1)}
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
