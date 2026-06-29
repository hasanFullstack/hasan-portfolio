"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 20 });

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {particles.map((_, i) => (

        <motion.span
          key={i}
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: [0, .5, 0],
            y: [-50, -600],
            x: [0, (i % 2 === 0 ? 40 : -40)],
          }}
          transition={{
            duration: 12 + i,
            repeat: Infinity,
            delay: i * .4,
            ease: "linear",
          }}
          className="absolute rounded-full bg-white/20"
          style={{
            width: 3 + (i % 4),
            height: 3 + (i % 4),
            left: `${5 + i * 5}%`,
            bottom: "-20px",
          }}
        />

      ))}

    </div>
  );
}