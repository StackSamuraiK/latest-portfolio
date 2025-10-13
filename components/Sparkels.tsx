"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Services } from "./Services";

export function SpotlightNewDemo2() {
  return (
    <div className="w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <Services/>
    </div>
  );
}
