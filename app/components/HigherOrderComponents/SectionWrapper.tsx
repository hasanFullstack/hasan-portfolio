"use client";
import { motion } from "framer-motion";
import type { FC } from "react";

const SectionWrapper = (Component: FC, idName: string) => {
	return function HOC() {
		return (
			<motion.section
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
				className="padding max-w-7xl mx-auto relative z-0"
			>
				<span className="hash-span" id={idName}>
					{" "}
					&nbsp;{" "}
				</span>
				<Component />
			</motion.section>
		);
	};
};

export default SectionWrapper;
