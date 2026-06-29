"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";
import { ProjectModal } from "./ProjectModal";
import BackgroundGlow from "./layout/BackgroundGlow";

const ProjectCard = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
     <motion.div
  onClick={() => setIsModalOpen(true)}
  animate={{
    y: [-8, 8, -8],
    rotate: [-1.2, 1.2, -1.2],
  }}
  transition={{
    duration: 4 + (props.index || 0) * 0.4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{
    y: -12,
    scale: 1.02,
    rotate: 0,
  }}
  className="group relative flex flex-col h-full bg-[#0b0b13] border border-white/10 p-6 rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
>
        {/* Top Section: Image & Stack Icon */}
        <div className="relative w-full h-[200px] rounded-2xl overflow-hidden mb-5">
          <Image src={props.image} fill alt={props.name} className="object-cover transition-transform duration-700 group-hover:scale-110" />
          
          {/* Tech Stack Icon (Top Right) */}
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-white/10">
            <Image src={props.platformIcon || "/web.webp"} width={24} height={24} alt="stack" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {props.name}
          </h3>
          <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
            {props.description}
          </p>
        </div>

        {/* Tags (Bottom Left) */}
        <div className="mt-auto flex flex-wrap gap-2">
          {props.tags.map((tag: any) => (
            <span key={tag.name} className={`text-[11px] font-medium px-3 py-1 rounded-full bg-white/5 border border-white/5 text-slate-400`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </motion.div>

      {isModalOpen && <ProjectModal project={props} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

const Works = () => {
  return (
    // Wrap in standard layout logic
    <div className="mx-auto w-full max-w-7xl">
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">My work</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>
	  <BackgroundGlow/>

     <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
  <ProjectCard
    key={`project-${index}`}
    {...project}
    index={index}
    platformIcon={
      project.platform === "Netlify"
        ? "/tech/netlify.webp"
        : project.platform === "Vercel"
        ? "/tech/vercel.svg"
        : project.platform === "Wordpress"
        ? "/tech/wordpress.webp"
        : project.platform === "Figma"
        ? "/tech/figma.webp"
        : "/web.webp"
    }
  />
))}
</div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");