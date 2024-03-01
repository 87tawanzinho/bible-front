import React from "react";

function Topic({ titleOne, textOne }: { titleOne: string; textOne: string }) {
  return (
    <div className="mt-10">
      <h2 className="font-bold">{titleOne}</h2>
      <p className="text-sm">{textOne}</p>
    </div>
  );
}

export default Topic;
