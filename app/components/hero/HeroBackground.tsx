"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base */}

      <div className="absolute inset-0 bg-[#050816]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
        `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* Purple */}

      <motion.div
        animate={{
          x: [0, 140, 0],
          y: [0, -70, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-48 top-0 h-[600px] w-[600px] rounded-full bg-[#915EFF]/20 blur-[140px]"
      />

      {/* Blue */}

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 120, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-56 bottom-0 h-[650px] w-[650px] rounded-full bg-cyan-500/15 blur-[150px]"
      />

      {/* Pink */}

      <motion.div
        animate={{
          y: [0, 90, 0],
          x: [0, -80, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 top-16 h-[280px] w-[280px] rounded-full bg-fuchsia-500/15 blur-[120px]"
      />

      {/* Center Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[160px]" />

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(255,255,255,.3) 1px,transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* Vignette */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,.55)_100%)]" />

    </div>
  );
}