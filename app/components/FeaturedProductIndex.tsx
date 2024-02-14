import { createClient } from "@/prismicio";
import React from "react";
import BackgroundImageCard from "./background-image-card";

const FeaturedProductIndex = async () => {
  const client = createClient();
  const products = await client.getAllByType("products");
  const featuredProducts = products.filter(
    (product) => product.data.is_featured === true
  );
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProducts.map((product, index) => (
          <div key={index}>
            <BackgroundImageCard backgroundImage={product.data.product_image}>
              {null}
            </BackgroundImageCard>
            <div className="text-center mt-4">
              <span className="block font-bold">
                {product.data.product_name}
              </span>
              <span className="block font-semibold">
                ${product.data.product_price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductIndex;
