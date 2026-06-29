"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FloatingCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

export default function FloatingCard({
  children,
  className = "",
  delay = 0,
  duration = 5,
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{
    y:[-10,10,-10],
    rotate:[-2,2,-2],
    scale:[1,1.03,1],
}}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      className={`
        absolute
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_20px_50px_rgba(0,0,0,.3)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}