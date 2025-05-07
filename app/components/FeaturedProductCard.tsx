import { ImageField, KeyTextField, NumberField } from "@prismicio/client";
import React from "react";
import BuyNowButton from "./BuyNowButton";

type FeaturedProductCardProps = {
  classname?: string;
  productName: KeyTextField;
  productPrice: NumberField;
  productImage: ImageField;
  productId: string;
};

const FeaturedProductCard = ({
  classname,
  productImage,
  productName,
  productPrice,
  productId,
}: FeaturedProductCardProps) => {
  return (
    <div className={`product-card ${classname || ""}`}>
      <div className="product-name font-bold text-lg mb-2">{productName}</div>
      <div className="product-price text-gray-700 mb-4">${productPrice}</div>
      <BuyNowButton 
        productName={productName?.toString() || ""}
        productPrice={Number(productPrice) || 0}
        productId={productId}
        className="mt-2"
      />
    </div>
  );
};

export default FeaturedProductCard;
