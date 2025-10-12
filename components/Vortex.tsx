import React from "react";
import { Vortex } from "./ui/vortex";
import SkillsCarousel from "./Skills";

export function VortexDemo() {
  return (
    <div className="w-max-screen mx-auto rounded-md  h-[40rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <SkillsCarousel/>
      </Vortex>
    </div>
  );
}
