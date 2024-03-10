import React from "react";

function ChaptersText({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between gap-2 font-serif text-gray-800 px-2 border-b ">
      <h2>{title}</h2>
    </div>
  );
}

export default ChaptersText;
