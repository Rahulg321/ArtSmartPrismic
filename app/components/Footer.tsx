import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-white">
      <div className="bg-slate-900 block-space">
        <div className="narrow-container">
          <div className="flex justify-between">
            <span>Home</span>
            <span>About</span>
            <span>Products</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div className="py-2 big-container">
        <span className="text-black font-semibold ">
          {currentYear} &copy; All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
