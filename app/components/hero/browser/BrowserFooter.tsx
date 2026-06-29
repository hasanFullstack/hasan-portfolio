"use client";

import { motion } from "framer-motion";
import BrowserControls from "./BrowserControls";
import TechBadge from "./TechBadge";
import type { Project } from "./browserData";

interface Props {
  project: Project;
  total: number;
  current: number;
}

export default function BrowserFooter({
  project,
  total,
  current,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        border-t
        border-white/10
        bg-[#111827]/90
        p-5
        backdrop-blur-xl
      "
    >
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech) => (
          <TechBadge
            key={tech}
            name={tech}
          />
        ))}
      </div>

      <div className="flex items-center justify-between gap-5 flex-wrap">

        <BrowserControls
          github={project.github}
          live={project.live}
        />

        <div className="flex gap-2">

          {Array.from({ length: total }).map((_, index) => (
            <motion.div
              key={index}
              animate={{
                width: current === index ? 28 : 8,
                opacity: current === index ? 1 : .35,
              }}
              className="
                h-2
                rounded-full
                bg-violet-500
              "
            />
          ))}

        </div>

      </div>
    </motion.div>
  );
}