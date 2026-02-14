import React from "react";
import { Lightbulb, Users, Trophy, Rocket } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Develop Ideas",
    description: "Shape your innovative concepts into real-world models and prototypes.",
  },
  {
    icon: Users,
    title: "Collaborate",
    description: "Work with a team of like-minded, tech-savvy, innovation-driven people.",
  },
  {
    icon: Trophy,
    title: "Compete",
    description: "Represent your team in various national and international competitions.",
  },
  {
    icon: Rocket,
    title: "Innovate",
    description: "Push boundaries and create solutions that make a real-world impact.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#050b10]">
      {/* Top fade to smoothly continue hero background */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-[#050b10] via-[#050b10]/80 to-transparent" />
      
      {/* FIXED SPACING: Replaced 'section-container' with standard Tailwind constraints */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#00bcd4]/10 border border-[#00bcd4]/30 rounded-full text-sm text-[#00bcd4] font-medium mb-4">
            About Us
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 text-white">
            A Workplace for{" "}
            <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            ProDex is a platform for technology and research-driven activists who aspire to shape their ideas into reality. We nurture the innovator in you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-[#00bcd4]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,188,212,0.15)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#00bcd4]/10 border border-[#00bcd4]/30 flex items-center justify-center mb-4 group-hover:bg-[#00bcd4]/20 group-hover:border-[#00bcd4]/50 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-[#00bcd4]" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Description */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Side (Spacing Fixed) */}
          <div className="space-y-6 lg:pr-8">
            <p className="text-lg text-gray-400 leading-relaxed">
              ProDex is not just a technical society, it's much more than that. It provides you an opportunity to be a part of a group which strives to nurture the innovator in you.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Here, you will be exposed to various fields and work with different technologies spanning various engineering backgrounds — be it electrical engineering or mechanical engineering, biotech or CSE.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="h-[2px] w-16 bg-gradient-to-r from-[#00bcd4] to-transparent" />
              <span className="text-[#00bcd4] font-semibold tracking-wide">Since 2012</span>
            </div>
          </div>

          {/* Right Glow Box Side */}
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden border border-slate-800 bg-[#0a0d14] glow-box">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#00bcd4]/10 border border-[#00bcd4]/30 flex items-center justify-center mx-auto mb-5 shadow-[inset_0_0_20px_rgba(0,188,212,0.2)]">
                    <Rocket className="w-10 h-10 text-[#00bcd4]" />
                  </div>
                  <span className="font-heading text-2xl font-bold text-gradient">Building the Future</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}