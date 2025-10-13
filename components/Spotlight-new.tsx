import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import Button, { Button2 } from "./Button";
import { LayoutTextFlipDemo } from "./TextFlip";

export function SpotlightPreview() {
  return (
    <div id="home" className="relative grid grid-cols-1 md:grid-cols-2 h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased">
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


      <div className="relative z-10 col-span-1 md:col-span-1 flex flex-col items-start justify-center p-4 pl-8 md:pl-16 pt-20 md:pt-0">
        <div className="text-2xl">
          <div>
            <button className="group relative inline-flex items-center text-lg gap-2 rounded-full border border-cyan-600 bg-cyan-950 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-cyan-800 hover:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500">
              Full-Stack Innovator & AI Explorer
            </button>
          </div>
          <LayoutTextFlipDemo />
        </div>
        <p className="mt-4 max-w-lg text-left font-normal text-neutral-300">
          Engineering future-ready platforms with precision, performance, and purpose.
          Leveraging full-stack technologies and DevOps workflows to deliver reliability at every layer.
        </p>
        <div className="pt-8 flex flex-wrap gap-4 sm:gap-6">
          <a href="https://www.linkedin.com/in/kshitiz-prakash-srivastava-a9b797256/" target="_blank">
            <Button2

              className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white"
            >
              Let's Connect
            </Button2>
          </a>
          <a target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1x__b7KUlDRL8Z45Yk9f9Yrkv3XNjup5d/view?usp=sharing">
            <Button className="border-blue-400 hover:border-blue-500 bg-blue-400/5 hover:bg-blue-400/10 backdrop-blur-sm">
              <span className="text-blue-400">Check My Resume</span>
            </Button>
          </a>
        </div>
      </div>

      <div className="relative z-10 col-span-1 flex items-center justify-center p-4 pl-0 md:pl-8">
        <img
          src="images/hero-picture.png"
          alt="Profile"
          className="rounded-xl object-cover border border-gray-700 w-200 h-150 shadow-lg shadow-black/20"
        />
      </div>
    </div>
  );
}