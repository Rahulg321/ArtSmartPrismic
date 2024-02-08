import { ImageField, KeyTextField, NumberField } from "@prismicio/client";
import React from "react";

type FeaturedProductCardProps = {
  classname?: string;
  productName: KeyTextField;
  productPrice: NumberField;
  productImage: ImageField;
};

const FeaturedProductCard = ({
  classname,
  productImage,
  productName,
  productPrice,
}: FeaturedProductCardProps) => {
  return <div>{productName}</div>;
};

export default FeaturedProductCard;
