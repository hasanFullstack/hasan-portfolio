"use client";

import About from "./About";
import Navbar from "./Navbar";
import Works from "./Works";
import Experience from "./Experience";
import Hero from "./Hero";
import Contact from "./Contact";
import Tech from "./Tech";
import HeroBackground from "./hero/HeroBackground";
import MouseGlow from "./hero/MouseGlow";
import FloatingParticles from "./hero/FloatingParticles";

export default function PortfolioContent() {
	return (
		<div className="relative z-0 bg-primary font-sans overflow-hidden">
			 {/* Background Layers */}
      <HeroBackground />
      <MouseGlow />
      <FloatingParticles />
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<About />
			<FloatingParticles />
			<Experience />
			<Tech />
			<Works />
			<div className="relative z-0">
				<Contact />
			</div>
		</div>
	);
}
