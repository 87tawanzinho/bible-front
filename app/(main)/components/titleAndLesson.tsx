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
      <h2 className="text-xl lg:text-2xl text-center lg:text-start text-slate-900">
        {title}
      </h2>
      <div className="flex justify-between lg:justify-normal mt-2 px-12 lg:px-0 lg:gap-4 text-sm text-gray-400">
        <h4>Lição de numero {lesson}</h4>
        <h4>Capitulo {cap}</h4>
      </div>
    </div>
  );
}

export default TitleAndLesson;
