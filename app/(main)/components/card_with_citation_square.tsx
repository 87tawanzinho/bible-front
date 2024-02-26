import React from "react";
import { HiOutlineArrowSmallDown } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";

function Card_with_citation_square() {
  return (
    <div className="p-4  bg-orange-50 mt-10 w-full lg:w-7/12 relative flex flex-col items-center lg:items-start ">
      <div className="flex items-center  gap-2">
        <p>Mensagem do Dia</p>
        <HiOutlineArrowSmallDown />
      </div>
      <p className="font-serif pt-4">
        Na luz da fé, encontramos a esperança que eleva nossos corações, pois
        cada amanhecer é uma promessa de redenção, guiados pelo amor que
        transcende todas as limitações terrenas.
      </p>
    </div>
  );
}

export default Card_with_citation_square;
