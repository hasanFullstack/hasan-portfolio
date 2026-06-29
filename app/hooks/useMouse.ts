"use client";

import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

export default function useMouse() {
  // Normalized values from -1 to 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [mouseX, mouseY]);

  return { mouseX, mouseY };
}