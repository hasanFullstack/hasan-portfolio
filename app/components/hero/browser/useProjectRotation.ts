"use client";

import { useEffect, useState } from "react";
import { projects } from "./browserData";

export default function useProjectRotation(
  interval = 6000
) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) =>
        current === projects.length - 1
          ? 0
          : current + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return {
    currentProject: projects[index],
    currentIndex: index,
  };
}