import React from 'react';
import { Code2, Palette, Server, Sparkles } from 'lucide-react';

export default function ModernSkillsCard() {
  const skills = [
    { name: 'MERN Stack', percentage: 100, icon: Code2, color: 'from-cyan-400 to-blue-500' },
    { name: 'JavaScript & TypeScript', percentage: 100, icon: Sparkles, color: 'from-yellow-400 to-orange-500' },
    { name: 'PostgreSQL & MySQL', percentage: 80, icon: Code2, color: 'from-blue-400 to-purple-500' },
    { name: 'UI/UX Design', percentage: 75, icon: Palette, color: 'from-pink-400 to-rose-500' },
    { name: 'Cloud & DevOps', percentage: 80, icon: Server, color: 'from-green-400 to-emerald-500' }
  ];

  return (
    <div id='about' className="w-full min-h-screen flex items-center justify-center p-8 md:p-16">
      <div className="w-full max-w-7xl">
        {/* Header Section - Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="text-left">
            <h1 className="inline-block text-6xl md:text-8xl font-bold mb-4 tracking-tight border-b-4 leading-tight  border-neutral-400">
              About Me
            </h1>
            <p className="text-gray-400 text-xl">Crafting digital experiences</p>
          </div>

          <div className="text-left md:text-right">
            <b>
              <p className="inline-block text-gray-300 text-lg  border-gray-400 leading-loose tracking-wide font-medium pl-4">
                I&apos;m a tech enthusiast who loves turning wild ideas into real, working apps. From full-stack development to <span className='text-cyan-500'>AI-powered solutions</span>, I thrive on building products that actually make a difference. I get a kick out of solving tricky problems, optimizing workflows, and exploring where creativity meets code. <span className='text-fuchsia-700'>Simply put—I turn imagination into digital reality.</span>
              </p>
            </b>
            <p className="text-gray-400 text-base mt-4">
              Coding dreams into reality, one feature at a time.Turning ideas into apps, and apps into experiences that wow.
            </p>
          </div>
        </div>

        {/* Skills grid with glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10"
              >
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-white">{skill.name}</span>
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.percentage}%
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                  </div>

                  {/* Skill level indicator */}
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>

                {/* Decorative corner gradient */}
                <div className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${skill.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Stats footer */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">5+</div>
            <div className="text-sm text-gray-400 mt-2">Skills</div>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">82%</div>
            <div className="text-sm text-gray-400 mt-2">Average</div>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Pro</div>
            <div className="text-sm text-gray-400 mt-2">Level</div>
          </div>
        </div>
      </div>
    </div>
  );
}