"use client";
import React, { useState, useEffect } from 'react';
import { Code2, Server, Wrench, Sparkles, Coffee } from 'lucide-react';
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

function GlowingBorderCard({
  children,
  containerClassName,
  className,
  duration = 2,
  clockwise = true,
}: React.PropsWithChildren<{
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
}>) {
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
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-xl content-center bg-cyan-500/20 hover:bg-cyan-500/30 transition-all duration-500 items-center flex-col flex-nowrap h-min justify-center overflow-visible p-[2px] w-full",
        containerClassName
      )}
    >
      <div
        className={cn(
          "relative w-full z-10 bg-black px-8 py-8 rounded-xl transition-all duration-300",
          hovered && "scale-[1.02]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-xl"
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
          "bg-black absolute z-[1] flex-none inset-[2px] rounded-xl transition-shadow duration-300",
          hovered && "shadow-xl shadow-cyan-500/40"
        )} 
      />
    </div>
  );
}

export function SpotlightNewDemo() {
  const passions = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Crafting seamless experiences from pixel-perfect frontends to robust backend architectures that scale"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "DevOps & Cloud",
      description: "Building scalable infrastructure with Docker, Kubernetes, and AWS that actually stays up and performs"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Agents & Automation",
      description: "Creating intelligent GPT wrappers and AI-powered tools that make life easier and workflows smoother"
    }
  ];

  return (
    <section className="min-h-screen w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden py-20 px-6">
      <Spotlight />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Coffee className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Fueled by coffee and curiosity</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-3xl mx-auto">
            Building the web, one commit at a time — where code meets creativity and bugs meet their maker
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Story - Left Side */}
          <div>
            <GlowingBorderCard duration={3}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-neutral-100 flex items-center gap-3">
                  <span className="text-4xl"></span>
                  My Story
                </h3>
                <div className="space-y-5 text-neutral-300 text-lg leading-relaxed">
                  <p>
                    Hey! I'm a Full Stack Developer from Noida who gets a kick out of building stuff that just works — web apps that don't crash, AI agents that actually do things, and infrastructure that laughs at chaos.
                  </p>
                  <p>
                    I've been known to chase bugs at 2 AM, containerize literally everything, and turn caffeine into clean code ☕💻. Learning new tech? Bring it on — I dive in headfirst, figure it out, and probably have fun doing it.
                  </p>
                  <p>
                    When I'm not debugging or optimizing workflows, you'll find me experimenting with AI tools, diving deep into DevOps trends, contributing to open-source projects, or probably brewing another cup of coffee. I believe great software is built on clean code, solid architecture, endless curiosity, and just the right amount of caffeine.
                  </p>
                  <p className="text-xl font-semibold text-neutral-100">
                    If you want someone who writes solid code, experiments with the latest tools, and isn't afraid to tackle the tricky stuff with a grin, you've found your person 🚀
                  </p>
                </div>
              </div>
            </GlowingBorderCard>
          </div>

          {/* What I Love Building - Right Side */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-neutral-100 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-cyan-400" />
              What I Love Building
            </h3>
            <div className="space-y-6">
              {passions.map((passion, index) => (
                <GlowingBorderCard key={index} duration={2 + index * 0.5}>
                  <div className="flex items-start gap-5">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-4 rounded-xl flex-shrink-0">
                      {passion.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-neutral-100 mb-3">{passion.title}</h4>
                      <p className="text-neutral-400 text-base leading-relaxed">{passion.description}</p>
                    </div>
                  </div>
                </GlowingBorderCard>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "1+" },
            { label: "Projects Built", value: "10+" },
            { label: "Coffee Cups", value: "∞" },
            { label: "Bugs Fixed", value: "999+" }
          ].map((stat, index) => (
            <GlowingBorderCard key={index} duration={1.5 + index * 0.3}>
              <div className="text-center py-4">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-400 text-sm font-medium">{stat.label}</div>
              </div>
            </GlowingBorderCard>
          ))}
        </div>
      </div>
    </section>
  );
}