import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-white"
    >
      <div className="big-container">
        <h1 className="text-center md:text-7xl md:mb-12">About Me🕊️</h1>
        <div className="flex flex-col md:flex-row items-start md:gap-12">
          <div className="basis-1/2 md:basis-1/3">
            <div className="aspect-h-1 aspect-w-1 relative">
              <PrismicNextImage
                field={slice.primary.owner_image}
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="basis-1/2 md:basis-2/3">
            <div className="prose md:prose-lg lg:prose-xl">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
