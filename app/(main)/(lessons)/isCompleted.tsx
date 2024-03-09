"use client";
import React, { useEffect } from "react";
import { useCardsContext } from "../context/cardsData";
import Button from "./button";
import CompletedButton from "../components/completedButton";

function IsCompleted({ n, index }: { n: number; index: number }) {
  const { AxiosTakeCards, cardsData, setLoading, loading } = useCardsContext();

  useEffect(() => {
    AxiosTakeCards();
  }, []);

  if (cardsData && cardsData.firstChapter[index].completed === true) {
    setLoading(false);
  }

  return (
    <div className="flex items-center mt-10 gap-4 ">
      {cardsData && cardsData.firstChapter[index].completed === false ? (
        <Button n={n} index={index} />
      ) : (
        <CompletedButton />
      )}
    </div>
  );
}

export default IsCompleted;
