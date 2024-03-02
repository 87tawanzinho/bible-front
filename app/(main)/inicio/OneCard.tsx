"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCardsContext } from "../context/cardsData";

export default function OneCard({
  img,
  title,
  optionalClassForDiv,
  optionalClassForText,
  optionalClassForDivImage,
  optionalClassForImage,
  src,
  completed,
}: {
  img: any;
  title?: string;
  optionalClassForDiv?: string;
  optionalClassForText?: string;
  optionalClassForDivImage?: string;
  optionalClassForImage?: string;
  src?: string;
  completed?: boolean;
}) {
  const router = useRouter();
  const { cardsData, setCardsData } = useCardsContext();
  return (
    <div
      className={`lg:overflow-hidden  ${optionalClassForDiv} `}
      onClick={() => {
        router.push(`${src}`);
      }}
    >
      <p className={`mb-2  text-black ${optionalClassForText}`}>{title}</p>
      <div
        className={` w-28 md:w-40 lg:w-48  rounded-xl  ${optionalClassForDivImage}`}
      >
        <div className="relative">
          <Image
            src={img}
            alt="img"
            className={`rounded-xl ${optionalClassForImage}  hover:cursor-pointer   transition-all ${
              completed && "sepia"
            }`}
          />
          {completed && (
            <button className="  rounded-lg absolute top-4 end-3 p-1 text-[12px] bg-emerald-950 text-white">
              Completado
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
