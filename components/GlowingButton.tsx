"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function GlowingBorderButton({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 2,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #06b6d4 0%, rgba(6, 182, 212, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #06b6d4 0%, rgba(6, 182, 212, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #06b6d4 0%, rgba(6, 182, 212, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.199999999999996% at 100% 50%, #06b6d4 0%, rgba(6, 182, 212, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #3b82f6 0%, rgba(59, 130, 246, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full content-center bg-cyan-500/20 hover:bg-cyan-500/30 transition-all duration-500 items-center flex-col flex-nowrap h-min justify-center overflow-visible p-[2px] w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "relative w-auto text-white z-10 bg-black px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
          hovered && "scale-105",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-full"
        style={{
          filter: "blur(4px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 2 }}
      />
      <div 
        className={cn(
          "bg-black absolute z-[1] flex-none inset-[2px] rounded-full transition-shadow duration-300",
          hovered && "shadow-xl shadow-cyan-500/40"
        )} 
      />
    </Tag>
  );
}