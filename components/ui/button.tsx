import React from "react";
import Link from "next/link";

export const Button = ({
  className,
  children,
  href,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={`text-base font-semibold rounded-full hover:-translate-y-1 transition-[transform,color,background] duration-300 ${className}`}
    >
      {children}
    </Link>
  );
};
