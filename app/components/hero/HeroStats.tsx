"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "3+",
    title: "Years Experience"
  },
  {
    number: "30+",
    title: "Projects Built"
  },
  {
    number: "10+",
    title: "Technologies"
  }
];

export default function HeroStats() {
  return (
    <div className="mt-16 flex flex-wrap gap-10">

      {stats.map((stat, index) => (

        <motion.div
          key={stat.title}
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: .9 + index * .15
          }}
        >

          <h2 className="text-4xl font-black text-[#915EFF]">

            {stat.number}

          </h2>

          <p className="mt-2 text-sm text-gray-400">

            {stat.title}

          </p>

        </motion.div>

      ))}

    </div>
  );
}