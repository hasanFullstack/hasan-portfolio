"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="max-w-3xl"
    >
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
        {title}
      </h2>

      <div className="mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

      {description && (
        <p className="mt-8 text-lg leading-9 text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}