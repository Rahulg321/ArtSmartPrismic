import FeaturedProductCard from "@/app/components/FeaturedProductCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type BestSellerSectionProps =
  SliceComponentProps<Content.BestSellerSectionSlice>;

const BestSellerSection = async ({ slice }: BestSellerSectionProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="big-container block-space grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
    ></section>
  );
};

export default BestSellerSection;
