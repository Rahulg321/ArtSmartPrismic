import DiscountCard from "@/app/components/DiscountCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Button from "@/app/components/Button";
import { IoCube } from "react-icons/io5";

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
      <div className="flex flex-col md:flex-row gap-4">
        <DiscountCard
          classname="flex-1"
          backgroundImageUrl="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <span>New Collection</span>
          <h3>Intensive Glow C+ Serum </h3>
          <Button>Explore Now</Button>
        </DiscountCard>
        <DiscountCard
          classname="flex-1"
          backgroundImageUrl="https://images.unsplash.com/photo-1638382875668-3a1751bb6f20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <h3>25% on Everything</h3>
          <span>Lorem ipsum dolor sit ametlorem2 Lorem, ipsum</span>
          <Button>Shop Now</Button>
        </DiscountCard>
      </div>
      <div className="flex flex-col md:flex-row mt-12 gap-4">
        <div>
          <IoCube />
          <h5>Free Shipping</h5>
          <span>Free Shipping on order above 500</span>
        </div>
        <div>
          <IoCube />
          <h5>Returns</h5>
          <span>Free Shipping on order above 500</span>
        </div>
        <div>
          <IoCube />
          <h5>Online Support</h5>
          <span>Free Shipping on order above 500</span>
        </div>
        <div>
          <IoCube />
          <h5>Flexible Payment</h5>
          <span>Free Shipping on order above 500</span>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
