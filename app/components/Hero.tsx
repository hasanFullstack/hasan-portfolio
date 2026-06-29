"use client";

import {
  HeroContent,
  HeroWorkspace,
} from "./hero";
import FloatingParticles from "./hero/FloatingParticles";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
     <div className="absolute inset-0">
         <FloatingParticles />
     </div>
      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 py-24 lg:flex-row">

        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <HeroContent />
        </div>

        {/* Right Side */}
        <div className="mt-20 flex w-full justify-center lg:mt-0 lg:w-1/2">
          <HeroWorkspace />
        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">

        <a href="#about">

          <div className="flex h-16 w-9 items-start justify-center rounded-full border border-white/20">

            <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-[#915EFF]" />

          </div>

        </a>

      </div>

    </section>
  );
}