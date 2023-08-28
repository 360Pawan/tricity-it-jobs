import React from "react";

import { Job } from "./job";
import { JobsData } from "./data";

export const JobTable = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold">Featured jobs</h2>
      <div className="mt-8">
        {JobsData.map((job) => (
          <Job data={job} />
        ))}
      </div>
    </div>
  );
};
