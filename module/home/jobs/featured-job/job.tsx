import React from "react";

import {
  ArrowUpRight,
  BarIcon,
  DepartmentIcon,
  LocationIcon,
} from "@/components/ui/icons";

export const Job = ({ data }: { data: any }) => {
  return (
    <div className="border border-[#ffde6a] bg-[#fffefa] p-5 rounded-2xl grid grid-cols-2 gap-5 cursor-pointer hover:-translate-y-1 transition-[transform] duration-300 mb-5">
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 bg-[#0061ff] rounded-xl text-white flex items-center justify-center text-2xl">
          W
        </div>
        <div className="">
          <h3 className="text-xl font-semibold">{data.title}</h3>
          <div className="flex items-center gap-1">
            {data.companyName}
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center gap-5">
        <div className="">
          <h4 className="text-base flex items-center gap-1 mb-2 text-[#686781]">
            <LocationIcon className="w-5 h-5" /> Location
          </h4>
          <h3 className="text-base font-medium">{data.location}</h3>
        </div>
        <div className="">
          <h4 className="text-base flex items-center gap-1 mb-2 text-[#686781]">
            <BarIcon className="w-5 h-5" /> Level
          </h4>
          <h3 className="text-base font-medium">{data.level}</h3>
        </div>
        <div className="">
          <h4 className="text-base flex items-center gap-1 mb-2 text-[#686781]">
            <DepartmentIcon className="w-5 h-5" /> Department
          </h4>
          <h3 className="text-base font-medium">{data.department}</h3>
        </div>
      </div>
    </div>
  );
};
