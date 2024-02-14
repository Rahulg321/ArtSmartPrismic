import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import BackgroundImageSection from "@/app/components/BackgroundImageSection";
import Button from "@/app/components/Button";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <BackgroundImageSection
      classname="block-space flex"
      minheight="90vh"
      backgroundImageUrl="https://images.unsplash.com/flagged/photo-1569438703127-0a2c75587531?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <div className="flex flex-col justify-center px-12 gap-4">
        <span className="text-2xl font-bold">Essential Items</span>
        <h1 className="font-extrabold block">{slice.primary.hero_heading}</h1>
        <span className="text-pretty block font-semibold">
          {slice.primary.hero_tagline}
        </span>
        <Button classname="bg-gray-900 w-fit hover:bg-gray-800 text-white transition hover:scale-105">
          Contact Us
        </Button>
      </div>
    </BackgroundImageSection>
  );
};

export default Hero;
