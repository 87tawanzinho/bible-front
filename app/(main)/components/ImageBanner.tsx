import Image, { StaticImageData } from "next/image";
import React from "react";

function ImageBanner({ src }: { src: StaticImageData }) {
  return (
    <Image
      src={src}
      alt="JESUS"
      className="rounded-3xl p-2 border border-gray-100 mt-10 lg:h-96 object-contain object-center "
    />
  );
}

export default ImageBanner;
