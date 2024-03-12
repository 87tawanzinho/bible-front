"use client";
import React, { useEffect } from "react";
import Card_with_citation_square from "../components/card_with_citation_square";
import ChaptersText from "../components/chaptersText";
import Back from "../components/back";
import CardsChapter1 from "./chapterOne/chapter";
import CardsChapter2 from "./chapterTwo/chapter";
import Loading from "../loading";
import { useCardsContext } from "../context/cardsData";

function page() {
  const { cardsData, AxiosTakeCards } = useCardsContext();
  useEffect(() => {
    AxiosTakeCards();
  }, []);
  return (
    <>
      {cardsData ? (
        <div className="mt-8 ">
          <Back className="" src="/inicio" size={20} />
          <div className="text-center  lg:text-start text-2xl border-l rounded lg:pl-2 lg:text-4xl pb-12  ">
            <h2 className="text-zinc-800 ">Ensinamentos sobre Jesus</h2>
            <h4 className="text-[12px] text-gray-600">
              Comece a caminhar com <span className="font-bold">Deus</span>.
            </h4>
          </div>

          <div>
            <CardsChapter1 />
          </div>

          <Card_with_citation_square />
          <div className="mt-10">
            <CardsChapter2 />
          </div>

          <div className="mt-10"></div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default page;
