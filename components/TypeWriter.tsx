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
    <div className="flex flex-col items-center justify-center mb-16">
      <TypewriterEffectSmooth words={words} />
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
    </div>
  );
}