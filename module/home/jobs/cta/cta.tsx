import { Button } from "@/components/ui/button";
import { DepartmentIcon } from "@/components/ui/icons";
import Link from "next/link";
import React from "react";

export const CTA = () => {
  return (
    <div className="border border-[#e4e4ed] rounded-3xl p-6 shadow-[0_7px_14px_0_rgba(8,15,52,0.03)]">
      <div className="bg-[#f2f5ff] w-max p-4 mb-5 rounded-xl">
        <DepartmentIcon className="w-8 h-8 stroke-[#0061ff]"/>
      </div>
      <h2 className="text-xl font-medium">Post a job today</h2>
      <p className="text-[#686781] text-sm mt-2">
        Get your desired candidate without any hassle.
      </p>
      <Button
        href="/"
        className="inline-block mt-5 text-center w-full px-6 py-3 bg-[#0061ff] hover:bg-[#034fcb] text-white"
      >
        Post a featured job
      </Button>
      <Link href="/" className="text-[#686781] font-medium text-center w-full inline-block text-sm underline mt-2 hover:text-[#034fcb] duration-300 transition-[color]">or post a free job</Link>
    </div>
  );
};
