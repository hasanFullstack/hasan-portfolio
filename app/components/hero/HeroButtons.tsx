"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">

      <motion.a
        whileHover={{
          scale: 1.05,
          y: -4
        }}
        whileTap={{
          scale: .95
        }}
        href="#projects"
        className="rounded-xl bg-[#915EFF] px-8 py-4 font-semibold shadow-[0_0_40px_rgba(145,94,255,.35)]"
      >
        View Projects
      </motion.a>

      <motion.a
        whileHover={{
          scale: 1.05,
          y: -4
        }}
        whileTap={{
          scale: .95
        }}
        href="#contact"
        className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4"
      >
        Contact Me
      </motion.a>

    </div>
  );
}