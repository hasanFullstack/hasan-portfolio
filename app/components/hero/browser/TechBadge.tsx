"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        rounded-full
        border
        border-white/10
        bg-white/5
        px-3
        py-1
        text-[11px]
        font-medium
        text-gray-200
        backdrop-blur-md
      "
    >
      {name}
    </motion.span>
  );
}