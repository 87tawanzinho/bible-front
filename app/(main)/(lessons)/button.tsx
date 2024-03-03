import React from "react";
import { axiosToggleCompleted } from "./ToggleCompleted";
import { useRouter } from "next/navigation";
import { useCardsContext } from "../context/cardsData";
import { fetchCards } from "../inicio/cards";

function Button({ n }: { n: number }) {
  const { cardsData, setCardsData } = useCardsContext();

  const router = useRouter();
  return (
    <button
      className=" px-4 py-2 bg-emerald-600 rounded text-white "
      onClick={() => {
        try {
          axiosToggleCompleted("firstChapter", n);
          setCardsData(null);
          router.push("/inicio");
        } catch (error) {
          console.log(error);
        }
      }}
    >
      Entendi!
    </button>
  );
}

export default Button;
