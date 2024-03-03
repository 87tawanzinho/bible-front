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
      className={`lg:overflow-hidden  ${optionalClassForDiv} border-b pb-2 rounded-lg `}
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
              completed && "filtering"
            }`}
          />
          {completed ? (
            <button className="   w-full mt-2 rounded-2xl p-1 text-[13px] bg-emerald-600 text-white">
              Completo
            </button>
          ) : (
            <button className="   w-full mt-2 rounded-2xl p-1 text-[13px] bg-red-600 text-white">
              Incompleto
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
