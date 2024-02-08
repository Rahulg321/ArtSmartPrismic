import clsx from "clsx";
import React, { Children } from "react";

type DiscountCardProps = {
  classname?: string;
  backgroundImageUrl?: string;
  children: React.ReactNode;
};

const DiscountCard = ({
  classname,
  backgroundImageUrl,
  children,
}: DiscountCardProps) => {
  return (
    <div
      className={clsx("min-h-[40vh]", classname)}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: `cover`,
      }}
    >
      {children}
    </div>
  );
};

export default DiscountCard;
