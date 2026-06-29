"use client";

import { motion } from "framer-motion";
import { aboutContent } from "./aboutData";
import { container, item } from "./animations";

export default function AboutHeader() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="max-w-4xl"
    >
      <motion.p
        variants={item}
        className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-400"
      >
        {aboutContent.subtitle}
      </motion.p>

      <motion.h2
        variants={item}
        className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl"
      >
        {aboutContent.title}
      </motion.h2>

      <motion.div
        variants={item}
        className="mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
      />

      <motion.p
        variants={item}
        className="mt-8 max-w-3xl text-lg leading-9 text-slate-400"
      >
        {aboutContent.description}
      </motion.p>
    </motion.div>
  );
}