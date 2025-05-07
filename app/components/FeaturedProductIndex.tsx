import { createClient } from "@/prismicio";
import React from "react";
import BackgroundImageCard from "./background-image-card";
import FeaturedProductCard from "./FeaturedProductCard";

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
          <div key={index} className="flex flex-col items-center">
            <BackgroundImageCard backgroundImage={product.data.product_image}>
              {null}
            </BackgroundImageCard>
            <div className="text-center mt-4 w-full">
              <FeaturedProductCard
                productName={product.data.product_name}
                productPrice={product.data.product_price}
                productImage={product.data.product_image}
                productId={product.id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductIndex;
