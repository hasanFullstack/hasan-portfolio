"use client";

import About from "./About";
import Feedbacks from "./Feedbacks";
import Navbar from "./Navbar";
import Works from "./Works";
import Experience from "./Experience";
import Hero from "./Hero";
import Contact from "./Contact";
import Tech from "./Tech";

export default function PortfolioContent() {
	return (
		<div className="relative z-0 bg-primary font-sans">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<About />
			<Experience />
			<Tech />
			<Works />
			<Feedbacks />
			<div className="relative z-0">
				<Contact />
			</div>
		</div>
	);
}
