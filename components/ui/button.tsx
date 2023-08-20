import React from "react";
import Link from "next/link";

export const Button = ({
  className,
  href,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href="/"
      className={`rounded-2xl font-bold px-10 py-5 text-lg flex items-center gap-2 hover:-translate-y-1 transition-[background,transform,border] duration-300 w-full justify-center border-2 ${className}`}
    >
      {children}
    </Link>
  );
};
