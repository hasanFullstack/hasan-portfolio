"use client";

import { motion } from "framer-motion";

interface Props {
  technologies: string[];
}

export default function TechChips({
  technologies,
}: Props) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">

      {technologies.map((tech, index) => (

        <motion.span
          key={tech}
          initial={{
            opacity: 0,
            scale: .8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * .05,
            duration: .35,
          }}
          whileHover={{
            y: -2,
            scale: 1.05,
          }}
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-3
            py-1.5
            text-xs
            font-medium
            text-slate-300
            backdrop-blur
            transition-colors
            duration-300
            hover:border-cyan-400/40
            hover:bg-cyan-400/10
            hover:text-cyan-300
          "
        >
          {tech}
        </motion.span>

      ))}

    </div>
  );
}