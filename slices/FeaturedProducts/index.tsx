import FeaturedProductIndex from "@/app/components/FeaturedProductIndex";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Props for `FeaturedProducts`.
 */
export type FeaturedProductsProps =
  SliceComponentProps<Content.FeaturedProductsSlice>;

/**
 * Component for "FeaturedProducts" Slices.
 */
const FeaturedProducts = ({ slice }: FeaturedProductsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container text-center">
        <h2 className="text-5xl">Our Featured Products</h2>
        <span className="block mb-8 mt-3 text-2xl italic">
          My best selling products
        </span>
        <Suspense fallback={<p>Loading feed...</p>}>
          <FeaturedProductIndex />
        </Suspense>
      </div>
    </section>
  );
};

export default FeaturedProducts;
