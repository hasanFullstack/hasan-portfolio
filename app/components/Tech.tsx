"use client";
import { technologies } from "@/app/constants";
import Image from "next/image";
import { SectionWrapper } from "./HigherOrderComponents";
import SectionContainer from "./layout/SectionContainer";
import BackgroundGlow from "./layout/BackgroundGlow";



const Tech = () => {
  return (
    <SectionContainer id="tech" className="relative">
      <BackgroundGlow />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-row flex-wrap justify-center gap-10">
         	{technologies.map((technology) => (
				<div
  key={technology.name}
  className="
    group
    flex
    h-28
    w-28
    items-center
    justify-center
    rounded-2xl
    border
    border-white/10
    bg-white/5
    p-3
    backdrop-blur-xl
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-cyan-400/30
    hover:bg-white/10
    hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
  "
>
  <Image
    src={technology.icon}
    alt={technology.name}
    width={64}
    height={64}
    className="
      object-contain
      transition-transform
      duration-300
      group-hover:scale-110
    "
  />
</div>
			))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default SectionWrapper(Tech, "tech");

