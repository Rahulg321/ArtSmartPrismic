import { KeyTextField } from "@prismicio/client";
import React from "react";

type ValueCardProps = {
  index: number;
  valueHeading: KeyTextField;
  valueContent: KeyTextField;
};

const ValueCard = ({ index, valueContent, valueHeading }: ValueCardProps) => {
  return (
    <div className="bg-white px-6 py-4 text-balance text-center">
      <span className="block text-5xl font-extrabold text-center mt-2">
        {index + 1}
      </span>
      <span className="block text-center mb-2 mt-4 text-2xl font-semibold">
        {valueHeading}
      </span>
      <span className="block text-base">{valueContent}</span>
    </div>
  );
};

export default ValueCard;
