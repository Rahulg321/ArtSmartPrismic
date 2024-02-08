import clsx from "clsx";
import React from "react";

type BackgroundImageSectionProps = {
  classname?: string;
  children: React.ReactNode;
  backgroundImageUrl: string;
  minheight: string;
};

const BackgroundImageSection = ({
  children,
  classname,
  backgroundImageUrl,
  minheight,
}: BackgroundImageSectionProps) => {
  return (
    <section
      className={clsx("", classname)}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        minHeight: `${minheight}`,
      }}
    >
      {children}
    </section>
  );
};

export default BackgroundImageSection;
