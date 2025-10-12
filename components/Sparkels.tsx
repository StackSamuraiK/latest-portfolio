"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { Services } from "./Services";

export function SparklesPreview() {
  return (
    <div className=" relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-20 w-full">
        <Services/>
      </div>
    </div>
  );
}