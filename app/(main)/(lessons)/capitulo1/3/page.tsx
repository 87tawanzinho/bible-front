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
import Button from "../../button";
import IsCompleted from "../../isCompleted";
function page() {
  const router = useRouter();
  return (
    <div className="border p-4">
      <TitleAndLesson title="A Criação de Deus" lesson="1" cap="1" />
      <ImageBanner src={jesusBanner} />
      <TextIntrodutionModel1 text="Vamos explorar juntos a incrível criação de Deus! Ele fez o mundo de maneira especial e maravilhosa. Aqui estão algumas maneiras de aprender mais sobre isso:" />

      <Topic
        titleOne="Observar a Natureza"
        textOne="Passe um tempo ao ar livre observando a natureza ao seu redor. Deus criou árvores, flores, animais e tantas coisas incríveis. Cada detalhe reflete o amor e a sabedoria do nosso Criador."
      />

      <Topic
        titleOne="Agradecer por Tudo"
        textOne="Agradeça a Deus por todas as coisas boas que Ele criou, como o sol que brilha, a chuva que nutre a terra e os animais que trazem alegria. A gratidão nos aproxima de Deus e nos faz apreciar Sua criação."
      />

      <Topic
        titleOne="Histórias da Criação"
        textOne="Peça aos seus pais para lerem as histórias da criação na Bíblia, onde Deus criou o céu, a terra, os animais e, claro, criou você! Essas histórias mostram como somos especiais para Deus."
      />

      <Topic
        titleOne="Cuidar do Mundo"
        textOne="Assim como Deus cuida de nós, devemos cuidar da Sua criação. Aprenda sobre como podemos ser bons zeladores do meio ambiente, ajudando a manter o mundo de Deus bonito e saudável."
      />

      <Topic
        titleOne="Aprender com a Criação"
        textOne="Deus nos ensina muitas coisas através da Sua criação. Observe como as plantas crescem, os animais cuidam de suas crias, e veja como tudo funciona em harmonia. Deus fala conosco através da natureza."
      />

      <TextIntrodutionModel1 text="Lembre-se, a criação de Deus é uma expressão do Seu amor. Ao explorar e cuidar do mundo ao nosso redor, podemos nos aproximar mais dEle e aprender valiosas lições de vida. Deus te ama muito!" />

      <IsCompleted n={3} index={2} />
    </div>
  );
}

export default page;
