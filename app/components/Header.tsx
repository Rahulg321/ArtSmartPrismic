import { createClient } from "@/prismicio";
import React from "react";

const Header = async () => {
  const client = createClient();
  return (
    <header className="">
      <nav></nav>
      Art Smart
    </header>
  );
};

export default Header;
