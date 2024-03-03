import React from "react";
import { HiOutlineArrowSmallDown } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";

function Card_with_citation_square() {
  return (
    <div className="p-4 text-sm bg-gradient-to-r from-[#d4e6e9] to-[#e4f2f5] shadow-sm text-#5c5c5c rounded-xl mt-10 w-full lg:w-7/12 relative flex flex-col items-center lg:items-start ">
      <div className="flex items-center text-gray-900 font-bold gap-2 p-2 bg-white rounded-lg ">
        <p>Mensagem Diária</p>
      </div>
      <p className="pt-4">
        Na luz da fé, encontramos a esperança que eleva nossos corações, pois
        cada amanhecer é uma promessa de redenção, guiados pelo amor que
        transcende todas as limitações terrenas.
      </p>
    </div>
  );
}

export default Card_with_citation_square;
