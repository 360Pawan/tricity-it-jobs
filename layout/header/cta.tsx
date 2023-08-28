import React from "react";

import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <Button
      href="/"
      className="px-6 py-3 bg-[#0061ff] hover:bg-[#034fcb] text-white"
    >
      Post a job
    </Button>
  );
};
