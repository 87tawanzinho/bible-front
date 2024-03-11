"use client";
import React, { useEffect } from "react";
import { useCardsContext } from "../context/cardsData";
import Button from "./button";
import CompletedButton from "../components/completedButton";

function IsCompleted({
  n,
  index,
  chapter,
  cap,
}: {
  n: number;
  index: number;
  chapter: string;
  cap: string;
}) {
  const { AxiosTakeCards, cardsData, setLoading, loading } = useCardsContext();

  useEffect(() => {
    AxiosTakeCards();
  }, []);

  if (cardsData && cardsData[chapter][index].completed === true) {
    setLoading(false);
  }

  return (
    <div className="flex items-center mt-10 gap-4 ">
      {cardsData && cardsData[chapter][index].completed === false ? (
        <Button n={n} index={index} chapter={chapter} />
      ) : (
        <CompletedButton cap={cap} />
      )}
    </div>
  );
}

export default IsCompleted;
