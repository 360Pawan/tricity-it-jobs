import { SearchIcon } from "@/components/ui/icons";
import React from "react";

export const SearchFilter = () => {
  return (
    <div className="relative">
      <SearchIcon className="w-6 h-6 absolute top-[calc(50%-0.75rem)] left-5 stroke-slate-400"/>
      <input
        className="border border-[#e4e4ed] py-5 px-12 rounded-full focus:border-[#0061ff] focus:outline-none hover:border-[#0061ff] transition-[border] duration-300"
        placeholder="Search for jobs"
      />
    </div>
  );
};
