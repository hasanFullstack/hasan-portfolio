"use client";
import { technologies } from "@/app/constants";
import Image from "next/image";
import { SectionWrapper } from "./HigherOrderComponents";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology) => (
				<div
					className="w-28 h-28 rounded-2xl bg-tertiary/60 p-3 flex items-center justify-center"
					key={technology.name}
				>
					<Image
						src={technology.icon}
						alt={technology.name}
						width={64}
						height={64}
						className="object-contain"
					/>
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
