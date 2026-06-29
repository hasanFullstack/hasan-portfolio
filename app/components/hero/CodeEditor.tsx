"use client";

import { motion } from "framer-motion";
import AnimatedTyping from "./AnimatedTyping";

export default function CodeEditor() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute left-0 top-0 w-[440px] overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/90 shadow-[0_40px_120px_rgba(0,0,0,.4)] backdrop-blur-xl"
    >
      {/* Header */}

      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

        <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />

        <div className="h-3 w-3 rounded-full bg-[#febc2e]" />

        <div className="h-3 w-3 rounded-full bg-[#28c840]" />

        <span className="ml-4 text-xs text-gray-500">
          portfolio.tsx
        </span>

      </div>

      {/* Code */}

      <div className="p-6">

        <AnimatedTyping />

      </div>

    </motion.div>
  );
}