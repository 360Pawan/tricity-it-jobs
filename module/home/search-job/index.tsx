import React from "react";

import { SearchFilter } from "./search-filter";
import { LocationFilter } from "./location-filter";
import { LevelFilter } from "./level-filter";
import { DepartmentFilter } from "./department-filter";
import { Button } from "@/components/ui/button";

export const SearchJob = () => {
  return (
    <section className="container px-10 mx-auto">
      <div className="-mt-14 rounded-3xl p-10 bg-white border border-[#e4e4ed] mx-auto flex items-center justify-between gap-5 shadow-[0_7px_14px_0_rgba(8,15,52,0.03)]">
        <SearchFilter />
        <LocationFilter />
        <LevelFilter />
        <DepartmentFilter />
        <Button
          href="/"
          className="px-6 py-3 bg-[#0061ff] hover:bg-[#034fcb] text-white"
        >
          Search
        </Button>
      </div>
    </section>
  );
};
