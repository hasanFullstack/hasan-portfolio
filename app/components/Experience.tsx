"use client";

import { motion } from "framer-motion";

import { SectionWrapper } from "@/app/components/HigherOrderComponents";

import SectionContainer from "./layout/SectionContainer";
import SectionHeading from "./layout/SectionHeading";
import BackgroundGlow from "./layout/BackgroundGlow";

import ExperienceCard from "./ExperienceCard";

import { experiences } from "@/app/constants";

function Experience() {
  return (
    <SectionContainer id="experience" className="relative">
      <BackgroundGlow />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <SectionHeading 
          eyebrow="Career Journey" 
          title="Work Experience" 
          description="..." 
        />
        <div className="relative mt-24">

          {/* Animated Line */}

          <motion.div
  initial={{ scaleY: 0 }}
  animate={{ scaleY: 1 }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
  style={{ originY: 0 }}
  className="absolute left-5 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent md:left-1/2 md:-translate-x-1/2"
/>

          {/* Cards */}
<div className="space-y-16">
  {experiences.map((experience, index) => (
    <motion.div
      key={index}
      animate={{
        y: [-8, 8, -8],
      }}
      transition={{
        duration: 4 + index * 0.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ExperienceCard
        experience={experience}
        index={index}
      />
    </motion.div>
  ))}
</div>
          

        </div>
      </div>
    </SectionContainer>
  );
}
export default SectionWrapper(Experience, "experience");