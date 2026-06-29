"use client";

import { motion } from "framer-motion";

interface BackgroundGlowProps {
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export default function BackgroundGlow({
  className = "",
  primaryColor = "#06b6d4", // cyan
  secondaryColor = "#8b5cf6", // violet
}: BackgroundGlowProps) {
  return (
    <div
      className={`${className}`}
    >
      {/* Left Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full blur-[140px]"
        style={{
          background: primaryColor,
          opacity: 0.15,
        }}
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-8rem] bottom-20 h-[26rem] w-[26rem] rounded-full blur-[170px]"
        style={{
          background: secondaryColor,
          opacity: 0.15,
        }}
      />
    </div>
  );
}