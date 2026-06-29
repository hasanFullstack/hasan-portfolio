"use client";

import SectionContainer from "./layout/SectionContainer";
import BackgroundGlow from "./layout/BackgroundGlow";

import AboutHeader from "./about/AboutHeader";
import AboutStats from "./about/AboutStats";
import AboutGrid from "./about/AboutGrid";

export default function About() {
  return (
    <SectionContainer id="about" className="relative">
      <BackgroundGlow />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <AboutHeader />
        <AboutStats />
        <div className="my-20 flex justify-center">
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"/>
        </div>
        <AboutGrid />
      </div>
    </SectionContainer>
  );
}