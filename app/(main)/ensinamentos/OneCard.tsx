"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCardsContext } from "../context/cardsData";
import { FcCheckmark } from "react-icons/fc";
import { TbBible } from "react-icons/tb";
import { BiSolidBible } from "react-icons/bi";
import { GiCampingTent } from "react-icons/gi";

export default function OneCard({
  img,
  title,
  optionalClassForDiv,
  optionalClassForText,
  optionalClassForDivImage,
  optionalClassForImage,
  src,
  completed,
  border,
}: {
  img: any;
  title?: string;
  optionalClassForDiv?: string;
  optionalClassForText?: string;
  optionalClassForDivImage?: string;
  optionalClassForImage?: string;
  src?: string;
  completed?: boolean;
  border?: boolean;
}) {
  const router = useRouter();
  const { cardsData, setCardsData } = useCardsContext();
  return (
    <div
      className={`lg:overflow-hidden  ${optionalClassForDiv}   rounded-lg `}
      onClick={() => {
        router.push(`${src}`);
      }}
    >
      <p className={`mb-2  text-black ${optionalClassForText}`}>{title}</p>
      <div
        className={` w-28 md:w-40 lg:w-40  rounded-xl  ${optionalClassForDivImage}`}
      >
        <div className="flex flex-col justify-center items-center">
          <Image
            src={img}
            alt="img"
            className={`rounded-xl ${optionalClassForImage} hover:cursor-pointer ${
              border && "border-2 border-slate-900 "
            } transition-all ${completed && "sepia-[40%] contrast-75"}`}
          />
        </div>
      </div>
    </div>
  );
}
