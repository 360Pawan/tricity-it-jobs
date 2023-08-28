import React from "react";

import { ChevronDownIcon, LocationIcon } from "@/components/ui/icons";

export const LocationFilter = () => {
  return (
    <div className="group relative">
      <div className="text-base duration-300 transition-[border] flex items-center gap-5 border border-[#e4e4ed] p-5 rounded-full hover:border-[#0061ff]">
        <LocationIcon className="w-6 h-6 stroke-[#0061ff]"  />
        Location
        <ChevronDownIcon className="h-5 w-5 group-hover:-rotate-180 transition-transform duration-300" />
      </div>
      <div className="invisible jus absolute z-50 flex w-full flex-col rounded-2xl p-7 group-hover:visible min-w-max shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] opacity-0 group-hover:opacity-100 transition-[opacity] duration-300 bg-white">
        <button className="btn py-2 text-base hover:text-[#0061ff] duration-300 transition-[color] text-left">
          Mohali
        </button>
        <button className="btn py-2 text-base hover:text-[#0061ff] duration-300 transition-[color] text-left">
          Chandigarh
        </button>
        <button className="btn py-2 text-base hover:text-[#0061ff] duration-300 transition-[color] text-left">
          Panchkula
        </button>
      </div>
    </div>
  );
};
