import React from "react";

function Topic({
  titleOne,
  textOne,
  cap,
}: {
  titleOne: string;
  textOne: string;
  cap?: string;
}) {
  return (
    <div className="mt-10">
      <h2
        className={`font-bold ${cap === "2" && "text-red-800"} ${
          !cap && "text-slate-800"
        }`}
      >
        {titleOne}
      </h2>
      <p className="text-sm">{textOne}</p>
    </div>
  );
}

export default Topic;
