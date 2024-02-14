import BackgroundImageCard from "@/app/components/background-image-card";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TalkAbout`.
 */
export type TalkAboutProps = SliceComponentProps<Content.TalkAboutSlice>;

/**
 * Component for "TalkAbout" Slices.
 */
const TalkAbout = ({ slice }: TalkAboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-white"
    >
      <div className="big-container">
        <h2 className="text-center mb-6">Talk About....</h2>
        <div className="flex gap-4">
          {slice.items.map((item, index) => (
            <BackgroundImageCard
              backgroundImage={item.hobby_image}
              key={index}
              classname="flex-1"
            >
              <span className="text-white text-2xl font-bold italic">
                {item.hobby_name}
              </span>
            </BackgroundImageCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalkAbout;
