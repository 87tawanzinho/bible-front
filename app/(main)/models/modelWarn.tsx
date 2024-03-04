"use client";
import React from "react";
import { useCardsContext } from "../context/cardsData";
import { useRouter } from "next/navigation";

function ModelWarn({ isDevotional }: { isDevotional: boolean }) {
  const { changeDevotional } = useCardsContext();
  const router = useRouter();
  if (isDevotional) {
    return (
      <div className="absolute top-0 left-0 lg:flex lg:justify-center lg:items-center lg:h-screen lg:bg-black lg:bg-opacity-40 ">
        <div className="bg-white mt-10 flex flex-col  h-screen lg:h-auto pt-20 lg:w-7/12 lg:justify-center lg:p-8 lg:rounded-lg">
          <h2 className="text-center">O QUE É UM DEVOCIONAL?</h2>
          <h4 className="mt-10 px-4">
            Sabe, um devocional é como uma aventura especial com Deus! É como
            abrir um tesouro cheio de histórias incríveis na Bíblia, músicas
            alegres que fazem o coração pular de felicidade e até desafios
            divertidos que nos ensinam sobre o amor de Deus. É como se Deus
            estivesse esperando para ter um momento super legal só com você,
            cheio de coisas legais para descobrir e aprender. É tipo uma festa
            onde você é o convidado ESPECIAL, e Deus está muito animado para
            passar esse tempo maravilhoso contigo
          </h4>
          <div className="flex justify-center">
            <button
              className="mt-10 bg-slate-900 text-white w-48  p-1 rounded-xl"
              onClick={() => {
                changeDevotional();
                router.push("/devocional");
              }}
            >
              Vamos lá!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelWarn;
