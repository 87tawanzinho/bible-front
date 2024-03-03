"use client";
import React, { useState } from "react";
import jesusBanner from "@/public/Shres ar.png";

import TitleAndLesson from "../../../components/titleAndLesson";
import ImageBanner from "../../../components/ImageBanner";
import TextIntrodutionModel1 from "../../../components/textIntrodution";
import Topic from "../../../components/topic";
import Link from "next/link";
import { axiosToggleCompleted } from "../../ToggleCompleted";
import { useRouter } from "next/navigation";
function page() {
  const router = useRouter();
  return (
    <div className="border p-4">
      <TitleAndLesson title="A História de Davi e Golias" lesson="1" cap="1" />
      <ImageBanner src={jesusBanner} />
      <TextIntrodutionModel1 text="Prepare-se para uma emocionante aventura na história de Davi e Golias! Vamos aprender lições poderosas sobre coragem, fé e confiança em Deus:" />

      <Topic
        titleOne="Davi, o Jovem Pastor"
        textOne="Conheça Davi, um jovem pastor corajoso que confiava em Deus para enfrentar desafios. Assim como Davi cuidava de suas ovelhas, Deus cuida de cada um de nós, guiando-nos com amor."
      />

      <Topic
        titleOne="A Coragem de Davi"
        textOne="Descubra como Davi enfrentou o gigante Golias com coragem e confiança em Deus. Mesmo sendo pequeno, Davi mostrou que, com Deus ao nosso lado, não há desafio que não possamos superar."
      />

      <Topic
        titleOne="A Fé que Vence Obstáculos"
        textOne="A fé de Davi em Deus era tão forte que ele acreditava que podia vencer qualquer dificuldade. Aprenda como a fé pode nos dar forças para superar os obstáculos em nossa vida diária."
      />

      <Topic
        titleOne="Confiar em Deus nas Batalhas"
        textOne="Assim como Davi confiou em Deus na batalha, nós também podemos confiar em Deus nas nossas lutas. Ele é o nosso refúgio e fortaleza, sempre pronto para nos ajudar quando enfrentamos desafios."
      />

      <Topic
        titleOne="A Vitória com Gratidão"
        textOne="Após vencer Golias, Davi expressou gratidão a Deus. Aprenda como a gratidão nos aproxima de Deus e como é importante reconhecer Sua ajuda em nossas vitórias."
      />

      <TextIntrodutionModel1 text="A história de Davi e Golias nos ensina que, não importa quão grandes sejam os desafios, Deus está sempre ao nosso lado. Tenha coragem, confiança e fé, pois Deus é o nosso poderoso aliado. Ele te ama muito!" />

      <div className="flex items-center mt-10 gap-4 ">
        <button
          className=" px-4 py-2 bg-emerald-600 rounded text-white "
          onClick={() => {
            try {
              axiosToggleCompleted("firstChapter", 4);

              router.push("/inicio");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Entendi!
        </button>

        <Link href={"/inicio"}>
          <button className="px-4 py-2 bg-red-600 text-white rounded">
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default page;
