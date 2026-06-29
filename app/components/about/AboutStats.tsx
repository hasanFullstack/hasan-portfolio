"use client";

import { motion } from "framer-motion";

import AnimatedCounter from "./AnimatedCounter";
import { stats } from "./aboutData";

export default function AboutStats() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="
        mt-20
        grid
        grid-cols-2
        gap-6
        lg:grid-cols-4
      "
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "
        >
          {/* Glow */}

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <AnimatedCounter
            value={stat.value}
            suffix={stat.suffix}
          />

          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}