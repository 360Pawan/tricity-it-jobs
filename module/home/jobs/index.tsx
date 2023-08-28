import React from "react";
import { FeaturedJob } from "./featured-job";
import { CTA } from "./cta/cta";

export const Jobs = () => {
  return (
    <section className="my-20 container mx-auto px-10 grid grid-cols-[3fr,1fr] gap-10">
      <div className="">
        <FeaturedJob />
        <FeaturedJob />
        <FeaturedJob />
      </div>
      <div className="">
        <div className="sticky top-5">
          <CTA />
        </div>
      </div>
    </section>
  );
};
