import DiscountCard from "@/app/components/DiscountCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Button from "@/app/components/Button";
import { IoCube } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import BackgroundImageCard from "@/app/components/background-image-card";

/**
 * Props for `DiscountSection`.
 */
export type DiscountSectionProps =
  SliceComponentProps<Content.DiscountSectionSlice>;

/**
 * Component for "DiscountSection" Slices.
 */
const DiscountSection = ({ slice }: DiscountSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="big-container block-space "
    >
      <div className="text-center mb-8">
        <h2 className="text-5xl">Available Discounts</h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {slice.items.map((item, index) => (
          <BackgroundImageCard
            backgroundImage={item.card_background_image}
            classname=""
            key={index}
          >
            <span className="text-white font-bold text-3xl">
              {item.card_heading}
            </span>
            <span className="text-white font-semibold italic">
              {item.card_tagline}
            </span>
          </BackgroundImageCard>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        <div>
          <div className="text-6xl">
            <IoCube />
          </div>
          <h4>Free Shipping</h4>
          <span className="text-sm font-semibold">
            Free Shipping on order above 500
          </span>
        </div>
        <div>
          <div className="text-6xl">
            <FaCanadianMapleLeaf />
          </div>
          <h4>Returns</h4>
          <span className="text-sm font-semibold">
            Within 30 days for an exchange
          </span>
        </div>
        <div>
          <div className="text-6xl">
            <IoIosChatboxes />
          </div>
          <h4>Online Support</h4>
          <span className="text-sm font-semibold">
            24 hours a day 7 days a week
          </span>
        </div>
        <div>
          <div className="text-6xl">
            <MdPayment />
          </div>
          <h4>Flexible Payment</h4>
          <span className="text-sm font-semibold">
            Pay with multiple credit cards
          </span>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
