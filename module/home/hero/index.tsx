import Link from "next/link";

import { HeroImage } from "./hero-image";
import { BagIcon, MessageIcon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export const HomeHero = () => {
  return (
    <div className="py-8 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 justify-items-center items-center">
        <div className="text-center lg:text-left max-w-lg lg:max-w-full animate-translateY">
          <h1 className="font-bold text-4xl leading-tight md:text-6xl md:leading-tight xl:text-7xl xl:leading-tight">
            I’m{" "}
            <span
              className="text-white px-1 whitespace-nowrap"
              style={{
                background: "linear-gradient(rgba(0, 0, 0, 0) 6%, #ff4a60 6%)",
              }}
            >
              Pawan Js
            </span>
            , a Web Developer from{" "}
            <span
              className="text-white px-1 whitespace-nowrap"
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0) 10%, #1c92ff 10%)",
              }}
            >
              Himalayas!
            </span>
          </h1>
          <p className="text-lg font-medium mt-5 opacity-75">
            Quirky React Developer with a knack for making code as enjoyable as
            a carnival ride! My superpower? Crafting robust and scalable
            applications that bring smiles to user&apos;s faces.
          </p>
          <div className="mt-8 grid sm:grid-cols-[max-content,max-content] items-center justify-items-start gap-4 lg:justify-start">
            <Button
              href="/"
              className="bg-[#0b0b0b] hover:bg-[#1c92ff] text-white border-[#0b0b0b] hover:border-[#1c92ff]"
            >
              <MessageIcon className="w-5 h-5" />
              Get in touch
            </Button>
            <Button
              href="/"
              className="border-[#0b0b0b] hover:bg-[#0b0b0b] hover:text-white "
            >
              <BagIcon />
              View portfolio
            </Button>
          </div>
        </div>
        <div className="md:h-[500px] border-4 border-[#0b0b0b] rounded-3xl shadow-[-13px_13px_#0b0b0b] overflow-hidden lg:justify-self-end animate-translateYSlow">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};
