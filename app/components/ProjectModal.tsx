"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-[#0b0b13] border border-white/10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-white/10 rounded-full backdrop-blur-md transition-all text-white/70 hover:text-white"
          >
            ✕
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Image Hero */}
            {/* Left: Image Hero */}
<div className="relative h-64 md:h-auto min-h-[300px] bg-black/40 overflow-hidden">
  <Image 
    src={project.image} 
    fill 
    alt={project.name} 
    className="object-cover transition-transform duration-700 hover:scale-105" 
  />
  {/* Optional: Add a subtle overlay so text over the image (if you add any) stays readable */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b13] via-transparent to-transparent opacity-60" />
</div>

            {/* Right: Content */}
            <div className="p-8 flex flex-col justify-center">
              {/* Header with Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  <Image src={project.platformIcon || "/web.webp"} width={32} height={32} alt="stack" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                  <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Featured Project</p>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag: any) => (
                  <span key={tag.name} className="text-[12px] font-semibold px-3 py-1.5 rounded-lg bg-cyan-950/30 text-cyan-200 border border-cyan-500/20">
                    #{tag.name}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.deploy_link} 
                  target="_blank" 
                  className="flex-1 text-center bg-cyan-500 text-black font-bold py-3 rounded-xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  Live Demo
                </a>
                {project.source_code_link && (
                  <a 
                    href={project.source_code_link} 
                    target="_blank" 
                    className="flex-1 text-center border border-white/10 text-white py-3 rounded-xl hover:bg-white/5 transition-all"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};