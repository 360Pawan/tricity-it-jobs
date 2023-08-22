"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Logo } from "@/components/ui/icon";
import { Navigation } from "./navigation";
import { NavLinks } from "./data";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="animate-pulseOnce">
      <nav className="bg-white py-7 relative z-20">
        <div className="max-w-3xl xmd:mx-auto border-2 border-[#0b0b0b] lg:p-4 p-0 rounded-3xl shadow-[-7px_7px_#0b0b0b] flex items-center justify-between mx-5">
          <Link
            href="/"
            className="hover:scale-95 transition-transform duration-300 lg:pl-0 pl-5"
          >
            <Logo />
          </Link>
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </nav>
      <nav
        className={`${
          isMenuOpen ? "-translate-y-2 visible" : "-translate-y-full invisible"
        } lg:hidden transition-all duration-300 absolute left-0 right-0 top-40 rounded-3xl flex-col items-start pl-5 border-2 border-[#0b0b0b] flex py-8 max-w-3xl xmd:mx-auto mx-5 bg-white z-10`}
      >
        {NavLinks.map((link) => (
          <Link
            key={link.id}
            className="font-bold pb-3 text-lg hover:text-[#1c92ff] transition-colors duration-300"
            href={link.slug}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
