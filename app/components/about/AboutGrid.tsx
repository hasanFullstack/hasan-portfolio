"use client";

import { motion } from "framer-motion";

import AboutCard from "./AboutCard";
import { aboutCards } from "./aboutData";

export default function AboutGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
     
      className="mt-24 grid gap-6 lg:grid-cols-3"
    >
      {/* Card 1 */}

      <div className="lg:col-span-2">
        <AboutCard {...aboutCards[0]} />
      </div>

      {/* Card 2 */}

      <div>
        <AboutCard {...aboutCards[1]} />
      </div>

      {/* Card 3 */}

      <div>
        <AboutCard {...aboutCards[2]} />
      </div>

      {/* Card 4 */}

      <div className="lg:col-span-2">
        <AboutCard {...aboutCards[3]} />
      </div>
    </motion.div>
  );
}