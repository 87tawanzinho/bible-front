"use client";
import React, { useEffect } from "react";
import { useCardsContext } from "../context/cardsData";
import Loading from "../loading";

function page() {
  const { takeDevotional, devotionalText } = useCardsContext();

  useEffect(() => {
    takeDevotional();
  }, []);
  return (
    <>
      {devotionalText ? (
        <div>
          <div className="flex items-center justify-between mt-4 border-b">
            <h2 className=" text-2xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-black ">
              Devocional do Dia
            </h2>
            <div className="bg-slate-900 rounded-lg px-2 text-center ">
              <h2 className="   text-center  text-lg bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">
                Salmo 23
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6 border-l px-1">
            <h2 className="bg-yellow-200 text-black rounded-lg px-2">
              Como salomão sobreviveu?
            </h2>
            <p className="4">{devotionalText.version}</p>
          </div>
          <p className="max-h-[26rem] overflow-auto mt-10 border p-2 rounded   leading-10 text-sm">
            O pastor e escultor Doug Merkey descreveu como os fios da sua vida
            se partiam como o desenrolar de uma corda: “Minha mãe tinha perdido
            sua batalha contra o câncer; um longo relacionamento romântico se
            desfazia; meus recursos financeiros diluíram; minha vocação era
            incerta. A escuridão ao meu redor e em mim era debilitante,
            aparentemente impenetrável”. Tudo isso e o fato de morar num sótão
            apertado tornou-se o cenário a partir do qual surgiu a escultura The
            Hiding Place [O esconderijo]. Ela representa as mãos fortes e
            cicatrizadas de Cristo como uma concha que abriga com segurança.
            Merkey explica a sua obra: Essa “escultura é o convite de Cristo
            para se esconder nele”. Davi escreveu o Salmo 32 como alguém que
            encontrara o lugar mais seguro: o próprio Deus, que nos oferece o
            perdão dos nossos pecados (vv.1-5) e nos encoraja a oferecer-lhe
            orações no meio “da inundação” (v.6). O salmista declara a sua
            confiança em Deus: “és meu esconderijo; tu me guardas da aflição e
            me cercas de cânticos de vitória” (v.7). Quando os problemas
            aparecem, para onde você se volta? Como é bom saber que, quando as
            cordas frágeis de nossa existência terrena começam a se desfazer,
            podemos nos refugiar em Deus que nos proporciona a segurança eterna
            através da obra redentora de Jesus.
          </p>

          {devotionalText.concluded === false ? (
            <div className=" mt-10 w-full flex justify-center lg:justify-start">
              <button className="bg-emerald-800   text-white rounded-lg  p-2 w-7/12 lg:w-auto">
                Concluir Leitura
              </button>
            </div>
          ) : (
            <div className=" mt-10 w-full flex justify-center lg:justify-start">
              <button className="bg-red-800   text-white rounded-lg  p-2 w-7/12 lg:w-auto">
                Desfazer Leitura
              </button>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default page;
