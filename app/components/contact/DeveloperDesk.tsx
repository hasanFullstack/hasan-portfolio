"use client";
"use client";

import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";
import FloatingIcon from "./FloatingIcon";
import { technologies } from "@/app/constants";

// Tighter positions to ensure they don't jump outside the col-span
const positions = [
  "-left-16 top-6", "-left-20 top-1/2", "-left-16 bottom-6",
  "-right-16 top-6", "-right-20 top-1/2", "-right-16 bottom-6",
  "left-1/2 -top-16", "left-1/2 -bottom-16"
];

export default function DeveloperDesk() {
  return (
    <div className="relative flex items-center justify-center p-16">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative w-full max-w-sm group"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:border-cyan-500/30">
          
          {/* Glass Shine */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Portfolio</p>
              <h3 className="mt-1 text-2xl font-bold text-white">Developer Desk</h3>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-emerald-300 font-medium">Active</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
              <p className="text-2xl font-bold text-white">35+</p>
              <p className="text-xs text-slate-400 mt-1">Projects</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
              <p className="text-2xl font-bold text-white">4+</p>
              <p className="text-xs text-slate-400 mt-1">Experience</p>
            </div>
          </div>

          {/* Tech Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech.name} className="px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-500/20 text-cyan-200 text-[10px] uppercase tracking-wider">
                {tech.name}
              </span>
            ))}
          </div>
        </div>

       {/* Floating elements will now stay relative to this group */}
        {technologies.map((tech, index) => (
          <FloatingIcon
            key={tech.name}
            src={tech.icon}
            alt={tech.name}
            className={`absolute transition-all duration-500 ${positions[index % positions.length]}`}
          />
        ))}
      </motion.div>
    </div>
  );
}