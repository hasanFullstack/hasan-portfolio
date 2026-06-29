"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "./browserData";

interface BrowserViewportProps {
  project: Project;
}

const transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function BrowserViewport({
  project,
}: BrowserViewportProps) {
  return (
    <div className="relative h-[280px] overflow-hidden bg-[#0B1120]">

      {/* Background Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <AnimatePresence mode="wait">

        <motion.div
          key={project.id}
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: -40,
            scale: 0.96,
          }}
          transition={transition}
          className="absolute inset-0"
        >

          {/* Screenshot */}

          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover object-top"
          />

          {/* Gradient Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B112055] to-transparent" />

          {/* Top Right Badge */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 backdrop-blur-lg"
          >
            <div className="flex items-center gap-2 text-xs text-white">

              <ExternalLink size={13} />

              Live Preview

            </div>
          </motion.div>

          {/* Bottom Content */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .25,
              duration: .6,
            }}
            className="absolute bottom-0 w-full p-6"
          >

            <h3 className="text-2xl font-bold text-white">

              {project.title}

            </h3>

            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-300">

              {project.subtitle}

            </p>

          </motion.div>

        </motion.div>

      </AnimatePresence>

    </div>
  );
}