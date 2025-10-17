import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { GlowingBorderButton } from "./GlowingButton";

export function TimelineDemo() {
  const data = [
    {
      title: "Nexus AI",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center justify-between gap-4">
            <span>
              Build full-stack mobile apps in minutes — with a browser-based VS Code and AI co-pilot that writes, debugs, and improves your code while you sip coffee ☕.
            </span>
            <a className="text-violet-500 underline whitespace-nowrap font-medium hover:text-violet-400 transition-colors" href="https://drive.google.com/file/d/1yOs6EgcJhO2tQs13hmpP2hE1O3YHtWHy/view?usp=sharing" target="_blank">
              Live Preview
            </a>
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Build mobile apps in minutes — your dream app, no sweat.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ VS Code in your browser — code anywhere, anytime, zero setup drama.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ AI co-pilot on steroids — writes, debugs, and improves while you sip coffee.
            </div>
          </div>
          <a href="https://drive.google.com/file/d/1yOs6EgcJhO2tQs13hmpP2hE1O3YHtWHy/view?usp=sharing" target="_blank">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/nexus1.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="/images/nexus2.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="/images/nexus3.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="/images/nexus4.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </a>
        </div>
      ),
    },
    {
      title: "Blitz AI",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center justify-between gap-4">
            <span>
              Build stunning websites in minutes — Blitz AI handles design, code, and deployment while you focus on the fun stuff. From concept to launch, your AI-powered co-pilot has got your back.
            </span>
            <a className="text-violet-500 underline whitespace-nowrap font-medium hover:text-violet-400 transition-colors" href="http://blitz-new.vercel.app/" target="_blank">
              Live Preview
            </a>
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Websites in a flash — turn your ideas into live sites in blink of an eye.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ AI co-pilot included — writes, designs, and polishes while you chill.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Smart code, zero headaches — clean, optimized, ready-to-go websites every time.
            </div>
          </div>
          <a href="http://blitz-new.vercel.app/" target="_blank">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/blitz1.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="/images/blitz2.png"
                alt="feature template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="/images/blitz3.png"
                alt="bento template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="/images/blitz4.png"
                alt="cards template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </a>
        </div>
      ),
    },
    {
      title: "Stepping Stones",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            There&apos;s never enough to explore!
          </p>
          <div className="mb-8">
            <div className="flex items-center justify-between gap-4 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="flex items-center gap-2">
                ✅ AI Lesson Plan Generator
              </span>
              <a className="text-violet-500 underline whitespace-nowrap font-medium hover:text-violet-400 transition-colors text-xs md:text-sm" href="https://ai-lesson-plan-generator.vercel.app/" target="_blank">
                Live Preview
              </a>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="flex items-center gap-2">
                ✅ Calendly- Your Friendly Calender
              </span>
              <a className="text-violet-500 underline whitespace-nowrap font-medium hover:text-violet-400 transition-colors text-xs md:text-sm" href="https://goole-cal.vercel.app/" target="_blank">
                Live Preview
              </a>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="flex items-center gap-2">
                ✅ BlogIT- Blogging Website
              </span>
              <a className="text-violet-500 underline whitespace-nowrap font-medium hover:text-violet-400 transition-colors text-xs md:text-sm" href="https://blog-medium-omega.vercel.app/signup" target="_blank">
                Live Preview
              </a>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="flex items-center gap-2">
                ✅ PayWave- Digital Wallet
              </span>
              <a className="text-violet-500 underline whitespace-nowrap font-medium hover:text-violet-400 transition-colors text-xs md:text-sm" href="https://paytm-chi-six.vercel.app/" target="_blank">
                Live Preview
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://ai-lesson-plan-generator.vercel.app/" target="_blank">
              <img
                src="/images/lesson.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
            <a href="https://goole-cal.vercel.app/" target="_blank">
              <img
                src="/images/cal.png"
                alt="feature template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
            <a href="https://blog-medium-omega.vercel.app/signup" target="_blank">
              <img
                src="/images/blog.png"
                alt="bento template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
            <a href="https://paytm-chi-six.vercel.app/" target="_blank">
              <img
                src="/images/paytm.png"
                alt="cards template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
          </div>
          <a href="https://speckle-fine-06c.notion.site/My-Projects-286bb6fe4b2280ec9ecfe255e5e1687c" target="_blank">
            <div className="pt-10 flex justify-end">
              <GlowingBorderButton className="text-base md:text-lg font-bold">
                <span className="flex items-center gap-3">
                  Wanna Explore More About My Projects?
                  <span className="text-cyan-400 text-xl animate-bounce">➡️</span>
                </span>
              </GlowingBorderButton>
            </div>
          </a>
        </div>
      ),
    },
  ];
  return (
    <div id="projects" className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
