import React from "react";
import { axiosToggleCompleted } from "./ToggleCompleted";
import { useRouter } from "next/navigation";
import { useCardsContext } from "../context/cardsData";
import caracol from "@/public/caracol.png";
import Image from "next/image";
function Button({ n }: { n: number }) {
  const { cardsData, setCardsData, AxiosTakeCards } = useCardsContext();

  const router = useRouter();
  return (
    <button
      className=" mt-10 w-full flex justify-center lg:justify-start"
      onClick={() => {
        try {
          axiosToggleCompleted("firstChapter", n);
          AxiosTakeCards();
          router.push("/ensinamentos");
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <button className="bg-white border-2  flex items-center justify-center gap-2  lg:w-96 text-black rounded-lg  p-2 w-11/12 ">
        +1 <Image src={caracol} alt="caracol" className="h-8 w-8" />
      </button>
    </button>
  );
}

export default Button;
