import React from "react";

function ChaptersText({ cap, total }: { cap: string; total: string }) {
  return (
    <div className="flex items-center justify-between gap-2 font-serif text-gray-400 px-2 border-b ">
      <h2>Capitulo {cap}</h2>
      <h3>Total de lições: {total}</h3>
    </div>
  );
}

export default ChaptersText;
