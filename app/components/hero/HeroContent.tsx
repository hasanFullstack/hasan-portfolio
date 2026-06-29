"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        className="mb-6 tracking-[0.35em] uppercase text-[#915EFF] text-sm font-semibold"
      >
        Full Stack Developer • ML Engineer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .15, duration: .8 }}
        className="text-5xl md:text-7xl font-black leading-none"
      >
        Hi, I'm
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .3, duration: .8 }}
        className="mt-2 bg-gradient-to-r from-[#915EFF] via-[#b892ff] to-[#54d2ff] bg-clip-text text-transparent text-6xl md:text-8xl font-black"
      >
        Hasan Amin
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .6 }}
        className="mt-8 text-lg leading-8 text-gray-300 max-w-xl"
      >
        I design and build modern web applications,
        scalable backend systems and AI-powered solutions.

        Passionate about crafting clean user experiences,
        high-performance architectures and production-ready products.
      </motion.p>

      <HeroButtons />

      <HeroStats />

    </div>
  );
}