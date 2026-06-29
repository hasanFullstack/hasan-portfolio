"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  github: string;
  live: string;
}

export default function BrowserControls({
  live,
}: Props) {
  return (
    <div className="flex gap-3">

      <motion.a
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: .96,
        }}
        href={live}
        target="_blank"
        className="
          flex items-center gap-2
          rounded-xl
          bg-violet-600
          px-4
          py-2
          text-sm
          font-medium
          text-white
        "
      >
        <ExternalLink size={16} />
        Live Demo
      </motion.a>


    </div>
  );
}