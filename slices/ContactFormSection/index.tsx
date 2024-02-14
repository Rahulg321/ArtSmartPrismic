import ContactForm from "@/app/components/ContactForm";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { GiLeafSwirl } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";

/**
 * Props for `ContactFormSection`.
 */
export type ContactFormSectionProps =
  SliceComponentProps<Content.ContactFormSectionSlice>;

/**
 * Component for "ContactFormSection" Slices.
 */
const ContactFormSection = ({
  slice,
}: ContactFormSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-white"
    >
      <div className="big-container">
        <div className="flex flex-col items-center mb-12 gap-2">
          <div className="text-7xl">
            <GiLeafSwirl />
          </div>
          <span className="text-5xl tracking-tighter">ART SMART</span>
        </div>
        <div className="text-center mb-6">
          <span className="text-2xl font-semibold">CONTACT ME</span>
          <h1 className="my-6">{slice.primary.heading}</h1>
          <span className="italic font-semibold text-balance">
            {slice.primary.tagline}
          </span>
        </div>
        <ContactForm ContactImage={slice.primary.contact_image} />
        <div className="flex gap-8 block-space">
          <div className="flex-1 ">
            <h2 className="text-6xl">Newsletter</h2>
            <div className="flex flex-col gap-4 mt-12">
              <input
                type="email"
                placeholder="Your Email Address"
                className="font-semibold"
              />
              <button className="bg-black hover:scale-105 transition px-6 py-2 text-white">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <h2 className="text-6xl">Instagram</h2>
            <div className="text-8xl mt-12">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
