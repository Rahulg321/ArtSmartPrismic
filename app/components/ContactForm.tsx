import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

type ContactFormProps = {
  ContactImage: ImageField;
};

const ContactForm = ({ ContactImage }: ContactFormProps) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-8 items-center">
      <div className="basis-1/2 md:basis-1/3">
        <div className="aspect-h-1 aspect-w-1 relative">
          <PrismicNextImage
            field={ContactImage}
            fill
            className={"object-cover"}
          />
        </div>
      </div>

      <div className="basis-1/2 md:basis-2/3">
        <form action="">
          <div className="flex flex-col mt-4">
            <label htmlFor="name" className="font-bold italic">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your first or last name"
              className="bg-[#FFFAFA]"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="email" className="font-bold italic">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address..."
              className="bg-[#FFFAFA]"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="contactpoint" className="font-bold italic">
              How did you hear about ART SMART?
            </label>
            <input
              type="text"
              name="contactpoint"
              id="contactpoint"
              placeholder="I'd love to know!"
              className="bg-[#FFFAFA]"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="poi" className="font-bold italic">
              Please share your point of inquiry
            </label>
            <textarea
              name="poi"
              id="poi"
              rows={5}
              placeholder="Whats your question?"
              className="bg-[#FFFAFA]"
            ></textarea>
          </div>
          <button className="bg-[#FFFAFA] px-6 py-2 border-2 border-black font-semibold mt-6 hover:scale-105 transition">
            Send your Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
