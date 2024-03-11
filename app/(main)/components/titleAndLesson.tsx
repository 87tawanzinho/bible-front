import React from "react";

function TitleAndLesson({
  title,
  lesson,
  cap,
}: {
  title: string;
  lesson: string;
  cap: string;
}) {
  return (
    <div>
      {" "}
      <h2 className="text-xl lg:text-2xl text-center lg:text-start text-black">
        {title}
      </h2>
      <div
        className={` ${cap === "2" && "bg-red-950  text-white rounded-lg"}  ${
          cap === "1" && "bg-slate-950  text-white rounded-lg"
        } flex justify-between lg:justify-between mt-2 px-12 lg:px-4 lg:gap-4 text-sm text-gray-400 lg:w-max `}
      >
        <h4>Lição de numero {lesson}</h4>
        <h4>Capitulo {cap}</h4>
      </div>
    </div>
  );
}

export default TitleAndLesson;
