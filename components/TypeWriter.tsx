"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Tools",
    },
    {
      text: "&",
    },
    {
      text: "Technologies.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 md:mb-16 px-4">
      {/* Mobile-first text sizing: text-3xl for mobile, scales up to sm:text-4xl, md:text-5xl, lg:text-6xl */}
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        <TypewriterEffectSmooth words={words} />
      </div>
      
      {/* Responsive gradient bar */}
      <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-3 sm:mt-4 md:mt-5"></div>
    </div>
  );
}