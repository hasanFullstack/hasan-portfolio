"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const commands = [
  "$ npm run build",
  "▲ Next.js 16",
  "Creating optimized production build...",
  "✓ Build successful",
  "Deploying...",
  "✓ Portfolio Ready",
];

export default function Terminal() {
  const [text, setText] = useState("");

  useEffect(() => {
    let line = 0;
    let char = 0;
    let output = "";

    const timer = setInterval(() => {
      if (line >= commands.length) {
        clearInterval(timer);
        return;
      }

      output += commands[line][char];

      setText(output);

      char++;

      if (char >= commands[line].length) {
        output += "\n";
        line++;
        char = 0;
      }
    }, 35);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-10 right-0 w-[290px] rounded-2xl border border-white/10 bg-black/80 p-5 shadow-2xl backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center gap-2">

        <div className="h-2 w-2 rounded-full bg-green-400" />

        <span className="font-mono text-xs text-gray-400">
          terminal
        </span>

      </div>

      <pre className="whitespace-pre-wrap font-mono text-xs leading-6 text-green-400">
        {text}
        <span className="animate-pulse">|</span>
      </pre>

    </motion.div>
  );
}