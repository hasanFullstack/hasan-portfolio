"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 30,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full bg-[#915EFF]/10 blur-[120px]"
    />
  );
}