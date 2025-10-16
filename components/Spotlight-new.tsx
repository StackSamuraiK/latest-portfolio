import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import Button, { Button2, GithubIcon } from "./Button";
import { LayoutTextFlipDemo } from "./TextFlip";

export function SpotlightPreview() {
  return (
    <div id="home" className="relative grid grid-cols-1 md:grid-cols-3 min-h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Image Section - Shows at top on mobile, right side on desktop */}
      <div className="relative z-10 col-span-1 flex items-center justify-center md:justify-center p-4 px-4 sm:px-6 md:pl-8 pt-20 pb-6 md:pt-0 md:pb-0 order-1 md:order-2">
        <img
          src="images/hero-picture.png"
          alt="Profile"
          className="rounded-xl object-cover border border-gray-700 w-full max-w-[240px] sm:max-w-[280px] md:max-w-none md:w-full h-auto aspect-[4/5] shadow-lg shadow-black/20"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 col-span-1 md:col-span-2 flex flex-col items-start justify-center p-4 px-4 sm:px-6 md:pl-16 pt-6 pb-8 md:pt-0 md:pb-0 order-2 md:order-1">
        <div className="w-full text-left">
          <div className="mb-3 sm:mb-4">
            <button className="group relative inline-flex items-center text-xs sm:text-sm md:text-base gap-2 rounded-full border border-cyan-600 bg-cyan-950 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-medium text-white transition-all duration-300 hover:bg-cyan-800 hover:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500">
              Full-Stack Innovator & AI Explorer
            </button>
          </div>
          <div className="text-base sm:text-xl md:text-2xl">
            <LayoutTextFlipDemo />
          </div>
        </div>
        <p className="mt-3 sm:mt-4 max-w-full md:max-w-lg text-left font-normal text-sm sm:text-base text-neutral-300 leading-relaxed">
          Engineering future-ready platforms with precision, performance, and purpose.
          Leveraging full-stack technologies and DevOps workflows to deliver reliability at every layer.
        </p>
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto">
          <a href="https://github.com/StackSamuraiK/" target="_blank" className="w-full sm:w-auto">
            <Button2
              icon={<GithubIcon />}
              className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white w-full sm:w-auto"
            >
            Browse Repos
            </Button2>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1O57-_U4_tBdbXnCmmg0m-T7G-mM79B69/view?usp=sharing"
            className="w-full sm:w-auto"
          >
            <Button className="border-blue-400 hover:border-blue-500 bg-blue-400/5 hover:bg-blue-400/10 backdrop-blur-sm w-full sm:w-auto">
              <span className="text-blue-400">Check My Resume</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}