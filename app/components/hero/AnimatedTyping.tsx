"use client";

import { useEffect, useState } from "react";

const code = [
  "const developer = {",
  '  name: "Hasan Amin",',
  '  role: "Full Stack Developer",',
  '  backend: ["Node.js","Express"],',
  '  frontend: ["React","Next.js"],',
  '  mobile: ["Flutter"],',
  '  ai: ["Python","Machine Learning"],',
  "};",
  "developer.buildAmazingProducts();",
];

export default function AnimatedTyping() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let line = 0;
    let char = 0;
    let text = "";

    const timer = setInterval(() => {
      if (line >= code.length) {
        clearInterval(timer);
        return;
      }

      text += code[line][char];

      setDisplayed(text);

      char++;

      if (char >= code[line].length) {
        text += "\n";
        line++;
        char = 0;
      }
    }, 28);

    return () => clearInterval(timer);
  }, []);

  return (
    <pre className="font-mono text-sm leading-7 whitespace-pre-wrap text-gray-200">
      {displayed}
      <span className="animate-pulse text-[#915EFF]">|</span>
    </pre>
  );
}