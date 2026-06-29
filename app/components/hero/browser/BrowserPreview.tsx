"use client";

import { motion } from "framer-motion";
import BrowserHeader from "./BrowserHeader";
import BrowserViewport from "./BrowserViewport";
import BrowserFooter from "./BrowserFooter";
import useProjectRotation from "./useProjectRotation";

import { projects } from "./browserData";

export default function BrowserPreview() {
  const { currentProject, currentIndex } = useProjectRotation();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1] as const
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        absolute
        right-2
        top-6
        z-30
        w-[430px]
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0f172a]/90
        shadow-[0_30px_120px_rgba(0,0,0,.45)]
        backdrop-blur-xl
      "
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

      {/* Browser Header */}
      <BrowserHeader url={currentProject.url} />

      {/* Browser Content */}
      <BrowserViewport project={currentProject} />

      {/* Footer */}
      <BrowserFooter
        project={currentProject}
        total={projects.length}
        current={currentIndex}
      />
    </motion.div>
  );
}