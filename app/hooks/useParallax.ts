"use client";

import { useSpring, useTransform } from "framer-motion";
import useMouse from "./useMouse";

export default function useParallax(strength = 10) {
  const { mouseX, mouseY } = useMouse();

  // Convert normalized mouse values (-1 to 1)
  // into movement values (-strength to strength)
  const x = useTransform(
    mouseX,
    [-1, 1],
    [-strength, strength]
  );

  const y = useTransform(
    mouseY,
    
    [-1, 1],
    [-strength, strength]
  );

  // Smooth the movement
  const smoothX = useSpring(x, {
    stiffness: 120,
    damping: 18,
  });

  const smoothY = useSpring(y, {
    stiffness: 120,
    damping: 18,
  });

  return {
    x: smoothX,
    y: smoothY,
  };
}