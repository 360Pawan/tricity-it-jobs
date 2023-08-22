import type { Metadata } from "next";

import localFont from "next/font/local";

const Onest = localFont({
  src: [
    {
      path: "../assets/fonts/OnestBlack1602-hint.ttf",
      style: "normal",
      weight: "900",
    },
    {
      path: "../assets/fonts/OnestExtraBold1602-hint.ttf",
      style: "normal",
      weight: "800",
    },
    {
      path: "../assets/fonts/OnestBold1602-hint.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../assets/fonts/OnestMedium1602-hint.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../assets/fonts/OnestRegular1602-hint.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/OnestLight1602-hint.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../assets/fonts/OnestThin1602-hint.ttf",
      style: "normal",
      weight: "100",
    },
  ],
  display: "swap",
});

import { Layout } from "@/common/layout";

import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Results-Driven Software Engineer | MERN Stack Specialist | I Help Companies Boost Conversion Rates by 2x Through Innovative Web Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Onest.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
