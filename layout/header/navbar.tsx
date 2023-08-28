import React from "react";
import Link from "next/link";

import { NavLinks } from "./data";
import { ChevronDownIcon } from "@/components/ui/icons";

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-5">
      {NavLinks.map((link) => {
        if (link.submenu) {
          return (
            <div className="group relative py-2" key={link.id}>
              <Link
                href={link.slug}
                className="p-3 text-base hover:text-[#0061ff] duration-300 transition-[color] flex items-center gap-2"
              >
                {link.title}
                <ChevronDownIcon className="h-5 w-5 group-hover:-rotate-180 transition-transform duration-300" />
              </Link>
              <div className="invisible absolute z-50 flex w-full flex-col rounded-2xl p-7 group-hover:visible min-w-max shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] opacity-0 group-hover:opacity-100 transition-[opacity] duration-300 bg-white">
                <div className="grid grid-cols-3">
                  {link.submenu.map((submenu) => {
                    return (
                      <div className="" key={submenu.id}>
                        <p className="font-semibold text-base">
                          {submenu.title}
                        </p>
                        <div className="flex flex-col mt-5">
                          {submenu.links.map((submenuLink) => {
                            return (
                              <Link
                                href={submenuLink.slug}
                                className="py-2 text-base hover:text-[#0061ff] duration-300 transition-[color]"
                              >
                                {submenuLink.title}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <Link
              key={link.id}
              href={link.slug}
              className="p-3 text-base hover:text-[#0061ff] duration-300 transition-[color]"
            >
              {link.title}
            </Link>
          );
        }
      })}
    </nav>
  );
};
