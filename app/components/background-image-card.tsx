import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import React from "react";

type BackgroundImageSectionProps = {
  classname?: string;
  children: React.ReactNode;
  backgroundImage: ImageField;
  imageAspectRatio?: string;
};

const BackgroundImageCard = ({
  children,
  imageAspectRatio,
  classname,
  backgroundImage,
}: BackgroundImageSectionProps) => {
  return (
    <div
      className={clsx("group relative overflow-hidden bg-slate-900", classname)}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center px-2">
        {children}
      </div>
      <div
        className={clsx({
          imageAspectRatio: imageAspectRatio,
          "aspect-w-1 aspect-h-1": imageAspectRatio === undefined,
        })}
      >
        <PrismicNextImage
          className="trasition absolute left-0 right-0 object-cover"
          field={backgroundImage}
          fill
        />
      </div>
    </div>
  );
};

export default BackgroundImageCard;
