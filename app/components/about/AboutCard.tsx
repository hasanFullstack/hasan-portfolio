"use client";

import { motion } from "framer-motion";
import TechChips from "./TechChips";

interface AboutCardProps {
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
}

export default function AboutCard({
  title,
  description,
  technologies,
  gradient,
}: AboutCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
     transition={{
    duration:.65,
    ease:[0.22,1,0.36,1]
}}
     whileHover={{
    y:-10,
    rotateX:-2,
    rotateY:2,
    scale:1.02
}}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-7
        backdrop-blur-xl
        transition-all
        duration-500
      "
    >
      {/* Animated Gradient */}

      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${gradient}
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        `}
      />

      {/* Border Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-3xl
          border
          border-cyan-400/0
          transition-all
          duration-500
          group-hover:border-cyan-400/20
        "
      />

      {/* Shine */}

      <motion.div
        animate={{
          x: ["-120%", "890%"],
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 5,
          duration: 2,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-0
          h-full
          w-24
          -skew-x-12
          bg-white/10
          blur-xl
        "
      />

      {/* Content */}

      <div className="relative z-10">

        {/* Small Accent */}

        <div className="mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

        {/* Title */}

        <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-4 leading-8 text-slate-400">
          {description}
        </p>

        {/* Tech */}

        <TechChips
          technologies={technologies}
        />
      </div>
    </motion.article>
  );
}