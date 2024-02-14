import ValueCard from "@/app/components/ValueCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MyValues`.
 */
export type MyValuesProps = SliceComponentProps<Content.MyValuesSlice>;

/**
 * Component for "MyValues" Slices.
 */
const MyValues = ({ slice }: MyValuesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <div>
        <h2 className="text-center text-4xl font-extrabold mb-8">My Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slice.items.map((item, index) => (
            <ValueCard
              key={index}
              index={index}
              valueContent={item.value_text}
              valueHeading={item.value_heading}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyValues;
