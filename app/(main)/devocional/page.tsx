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
              <h2 className="   text-center  text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">
                João 14:6
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6 border-l px-1">
            <h2 className="bg-yellow-200 text-black rounded-lg px-2">
              Crescendo nas Pegadas de Jesus
            </h2>
            <p className="italic font-bold">{devotionalText.version}</p>
          </div>

          <h3 className="mt-10">O que você irá aprender?</h3>

          <h3 className=" overflow-auto mt-4 border p-2 rounded  bg-green-50 leading-10  text-sm">
            Exploraremos a profunda declaração de Jesus: "Eu sou o caminho, a
            verdade e a vida" (João 14:6). Descubra como essas palavras moldam
            nossa jornada diária em direção a um relacionamento mais íntimo com
            Ele.
          </h3>

          <p className="mt-10">Leitura</p>
          <p className="max-h-[26rem] overflow-auto mt-4 border p-2 rounded  bg-yellow-50 leading-10 text-sm">
            Queridos amigos e famílias, Em João 14:6, Jesus nos presenteia com
            uma declaração que transcende o tempo e continua a ressoar em nossos
            corações: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai,
            a não ser por mim." Nestas palavras, encontramos não apenas uma
            declaração, mas um convite para uma jornada significativa e
            transformadora. No Caminho de Jesus: Ao se declarar como o caminho,
            Jesus nos oferece uma rota segura e cheia de propósito. Não somos
            deixados à deriva, perdidos na incerteza. Ele não apenas nos mostra
            o caminho, mas é Ele próprio o caminho. Em meio aos desafios e
            decisões diárias, caminhar em Seus passos nos conduz a uma vida
            alinhada com o amor e a vontade de Deus. Na Verdade de Jesus: A
            verdade de Jesus não é apenas um conjunto de princípios, mas uma
            realidade viva que nos liberta. Ao buscar a verdade que Ele oferece,
            somos capacitados a discernir, viver com integridade e experimentar
            a plenitude de ser quem fomos criados para ser. A verdade de Jesus é
            uma luz que ilumina os recantos mais escuros de nossa existência. Na
            Vida que Ele Oferece: A vida em Jesus é mais do que mera existência;
            é uma jornada repleta de significado e alegria. Ele é a fonte da
            verdadeira vida, e ao confiarmos Nele, descobrimos uma plenitude que
            transcende as circunstâncias. Uma vida que não se limita ao tempo
            presente, mas se estende para a eternidade. Hoje, convido cada um de
            vocês a refletir sobre como podem caminhar mais de perto nos passos
            de Jesus. Que Sua verdade guie, Sua vida inspire e Seu caminho os
            conduza a um relacionamento mais profundo com o Pai. Oremos juntos:
            Querido Jesus, somos gratos por seres o caminho, a verdade e a vida.
            Ajuda-nos a seguir em Teus passos, a viver na Tua verdade e a
            experimentar plenamente a vida que Tu ofereces. Amém. Que este
            devocional inspire e fortaleça cada coração, guiando-nos para uma
            jornada mais próxima de Jesus, nosso Caminho, Verdade e Vida.
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
