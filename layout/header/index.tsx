import React from "react";

import { CTA } from "./cta";
import { Logo } from "./logo";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className="container mx-auto py-5 px-10 flex justify-between items-center">
      <Logo />
      <Navbar />
      <CTA />
    </header>
  );
};
