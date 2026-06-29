"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type FloatingIconProps = {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
};

export default function FloatingIcon({
  src,
  alt,
  className = "",
  delay = 0,
}: FloatingIconProps) {
  return (
    <motion.div
      animate={{
  y: [-8, 8, -8],
  rotate: [-1.5, 1.5, -1.5],
  scale: [1, 1.02, 1],
}}
      transition={{
  duration: 4 + delay,
  repeat: Infinity,
  ease: "easeInOut",
}}
      whileHover={{
        scale: 1.15,
        rotate: 0,
      }}
      className={`
        absolute
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_15px_40px_rgba(0,0,0,.3)]
        ${className}
      `}
    >
      <Image
        src={src}
        alt={alt}
        width={34}
        height={34}
        className="object-contain"
      />
    </motion.div>
  );
}