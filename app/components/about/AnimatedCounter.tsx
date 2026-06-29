"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1800,
}: AnimatedCounterProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.7,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;

    const step = value / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}