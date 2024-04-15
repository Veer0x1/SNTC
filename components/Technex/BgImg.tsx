import { StaticImageData } from "next/legacy/image";
import React from "react";

type BgImgProps = {
  Image: string | StaticImageData;
  alt: string;
};

const BgImg: React.FC<BgImgProps> = (props) => {
  return (
    <div className="bg-img absolute top-0 left-0 rounded-[120px] overflow-hidden h-full w-full">
      <img
        src={props.Image as string}
        alt={props.alt}
        className="h-full w-full max-w-full object-cover object-center-center"
      />
    </div>
  );
};
export default BgImg;

