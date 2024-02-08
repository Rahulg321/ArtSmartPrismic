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
  console.log(slice.items);
  let imageUrl =
    "https://images.unsplash.com/photo-1638382875668-3a1751bb6f20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="big-container block-space"
    >
      <h4 className="text-4xl font=extrabold">{slice.primary.heading}</h4>
      {slice.primary.tagline}
      <div className="grid grid-cols-4 gap-2 min-h-[60vh]">
        {slice.items.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
            }}
            className="first-of-type:row-span-2 first-of-type:col-span-2 flex flex-col last-of-type:col-span-2 p-4 items-center justify-end"
          >
            <button className="bg-white text-black font-bold px-6 py-2 w-fit ">
              {item.category_name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategorySlice;
