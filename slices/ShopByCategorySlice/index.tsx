import BackgroundImageCard from "@/app/components/background-image-card";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ShopByCategorySlice`.
 */
export type ShopByCategorySliceProps =
  SliceComponentProps<Content.ShopByCategorySliceSlice>;

/**
 * Component for "ShopByCategorySlice" Slices.
 */
const ShopByCategorySlice = ({
  slice,
}: ShopByCategorySliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="big-container block-space"
    >
      <div className="text-center mb-8">
        <h2 className="text-5xl font-extrabold mb-4">
          {slice.primary.heading}
        </h2>
        <span>{slice.primary.tagline}</span>
      </div>
      <div className="grid grid-cols-4 gap-2 ">
        {slice.items.map((item, index) => (
          <BackgroundImageCard
            backgroundImage={item.category_image}
            key={index}
            classname=""
          >
            <span className="text-3xl text-white font-semibold italic">
              {item.category_name}
            </span>
          </BackgroundImageCard>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategorySlice;
