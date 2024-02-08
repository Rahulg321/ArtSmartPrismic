import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageLeft`.
 */
export type ImageLeftProps = SliceComponentProps<Content.ImageLeftSlice>;

/**
 * Component for "ImageLeft" Slices.
 */
const ImageLeft = ({ slice }: ImageLeftProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_left (variation: {slice.variation}) Slices
    </section>
  );
};

export default ImageLeft;
