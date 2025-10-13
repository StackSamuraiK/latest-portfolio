import { cn } from "@/lib/utils";
import { Spotlight } from "lucide-react";
import { TypewriterEffectSmoothDemo } from "./TypeWriter";
import SkillsCarousel from "./Skills";

export function SpotlightPreview2() {
  return (
    <div className="relative flex flex-col h-auto min-h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center pt-20">
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
      
      <div className="relative z-10 w-full">
        <TypewriterEffectSmoothDemo/>
        <SkillsCarousel/>
      </div>
    </div>
  );
}