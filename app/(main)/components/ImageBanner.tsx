import Image, { StaticImageData } from "next/image";
import React from "react";

function ImageBanner({ src }: { src: StaticImageData }) {
  return (
    <Image
      src={src}
      alt="JESUS"
      className="rounded-lg mt-10 lg:h-96 object-cover object-center"
    />
  );
}

export default ImageBanner;
