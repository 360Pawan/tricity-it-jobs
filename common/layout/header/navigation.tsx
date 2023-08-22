import React from "react";
import Link from "next/link";

import { Menu } from "@/common/layout/header/menu";
import { MessageIcon } from "@/components/ui/icon";

import { NavLinks } from "./data";

export const Navigation = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) => {
  return (
    <>
      <div className="flex items-center gap-1 ml-auto lg:ml-0">
        <div className="hidden lg:block">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              className="font-bold p-3 text-lg hover:text-[#1c92ff] transition-colors duration-300"
              href={link.slug}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <Link
          className="font-bold p-3 text-lg hover:text-[#1c92ff] transition-colors duration-300"
          href="/"
        >
          cart(0)
        </Link>
      </div>
      <Link
        href="/"
        className="bg-[#0b0b0b] p-2 rounded-lg w-12 h-12 text-white flex items-center justify-center transition-[background,transform] hover:bg-[#1c92ff] duration-300 hover:-translate-y-1"
      >
        <MessageIcon className="w-6 h-6" />
      </Link>
      <div
        className="relative lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu />
      </div>
    </>
  );
};
