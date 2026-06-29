"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { experiences } from "@/app/constants";

type Experience = (typeof experiences)[0];

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      className="relative"
    >
      {/* Mobile */}

      <div className="flex gap-6 md:hidden">

        {/* Dot */}

        <div className="relative flex w-10 justify-center">

          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            className="mt-3 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 shadow-[0_0_25px_rgba(34,211,238,.35)]"
          >
            <Image
              src={experience.icon}
              alt={experience.company_name}
              width={22}
              height={22}
              className="object-contain"
            />
          </motion.div>

        </div>

        {/* Card */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
        >

          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
            {experience.date}
          </span>

          <h3 className="mt-5 text-2xl font-bold text-white">
            {experience.title}
          </h3>

          <p className="mt-2 text-cyan-300">
            {experience.company_name}
          </p>

          <div className="my-5 h-px bg-white/10" />

          <ul className="space-y-3">
            {experience.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
              >
                <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                <span className="text-slate-300 leading-7">
                  {point}
                </span>
              </li>
            ))}
          </ul>

        </motion.div>

      </div>

      {/* Desktop */}

      <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] md:items-center">

        {/* LEFT */}

        <div
          className={`${
            isLeft ? "block pr-14" : "invisible"
          }`}
        >
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              {experience.date}
            </span>

            <h3 className="mt-5 text-3xl font-bold text-white">
              {experience.title}
            </h3>

            <p className="mt-2 text-cyan-300">
              {experience.company_name}
            </p>

            <div className="my-6 h-px bg-white/10" />

            <ul className="space-y-4">
              {experience.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3"
                >
                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                  <span className="leading-7 text-slate-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

          </motion.div>
        </div>

        {/* CENTER */}

        <div className="relative flex justify-center">

          <motion.div
            whileHover={{
              scale: 1.15,
            }}
            className="relative z-20 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 shadow-[0_0_35px_rgba(34,211,238,.4)]"
          >
            <Image
              src={experience.icon}
              alt={experience.company_name}
              width={32}
              height={32}
            />
          </motion.div>

        </div>

        {/* RIGHT */}

        <div
          className={`${
            !isLeft ? "block pl-14" : "invisible"
          }`}
        >
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              {experience.date}
            </span>

            <h3 className="mt-5 text-3xl font-bold text-white">
              {experience.title}
            </h3>

            <p className="mt-2 text-cyan-300">
              {experience.company_name}
            </p>

            <div className="my-6 h-px bg-white/10" />

            <ul className="space-y-4">
              {experience.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3"
                >
                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                  <span className="leading-7 text-slate-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}