"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipDemo() {
  return (
    <div className="text-center sm:text-left w-full overflow-hidden">
      <motion.div
        className="relative flex flex-col items-center sm:flex-row sm:items-start justify-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Responsive text container with proper wrapping */}
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-2 sm:gap-x-3 w-full max-w-full px-2">
          <LayoutTextFlip
            text="Hi, I'm"
            words={[
              "Kshitiz Srivastav",
              "FullStack Dev",
              "DevOps Engineer",
              "Cracked Dev",
            ]}
          />
        </div>
      </motion.div>
    </div>
  );
}