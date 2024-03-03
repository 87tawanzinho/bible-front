"use client";

import React, { useEffect, useState } from "react";
import jesusAndClouds from "@/public/Jesus/JesusAndClouds.png";

import camel from "@/public/Jesus/Camel.png";
import jesusAndSheep from "@/public/JesusFirst/JesusNormalFirstCard/JesusAndYourSheeps.png";
import jesusAndBeach from "@/public/JesusFirst/JesusNormalFirstCard/UnderstandWordsGod.png";
import jesusAndBeachCompleted from "@/public/JesusFirst/JesusCompletedFirstCard/HowBeAFriendOfJesusCompleted.png";
import { instanceWithAuthorization } from "@/app/instance";
import { useCardsContext } from "../context/cardsData";
import OneCard from "./OneCard";
import Loading from "../loading";

function CardsChapter1() {
  const { cardsData, setCardsData } = useCardsContext();

  useEffect(() => {
    fetchCards(setCardsData);
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
            img={jesusAndClouds}
            optionalClassForText="text-[12px]"
            src="/capitulo1/1"
            completed={isCompleted("firstChapter", 0)}
          />
          <OneCard
            img={jesusAndBeach}
            optionalClassForText="text-[14px]"
            src="/capitulo1/2"
            completed={isCompleted("firstChapter", 1)}
          />
          <OneCard
            img={jesusAndSheep}
            optionalClassForText="text-[14px]"
            src="/capitulo1/3"
            completed={isCompleted("firstChapter", 2)}
          />
          <OneCard
            img={camel}
            src="/capitulo1/4"
            optionalClassForText="text-[14px]"
            completed={isCompleted("firstChapter", 3)}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CardsChapter1;

interface chapter {
  firstChapter: string;
}

export const fetchCards = async (setCardsData: any) => {
  try {
    const response = await instanceWithAuthorization.get("take_cards/");

    setCardsData(response.data.allChapters);
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
};
