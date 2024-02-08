import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageRight`.
 */
export type ImageRightProps = SliceComponentProps<Content.ImageRightSlice>;

/**
 * Component for "ImageRight" Slices.
 */
const ImageRight = ({ slice }: ImageRightProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_right (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ImageRight;
