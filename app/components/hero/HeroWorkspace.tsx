"use client";

import {
  motion,
  useSpring,
  useTransform,
} from "framer-motion";

import useMouse from "../../hooks/useMouse";

import CodeEditor from "./CodeEditor";
import Terminal from "./Terminal";
import BrowserPreview from "./browser/BrowserPreview";

export default function HeroWorkspace() {
  const { mouseX, mouseY } = useMouse();

  /* =========================
     Code Editor Movement
  ========================= */

  const editorX = useSpring(
    useTransform(mouseX, [-1, 1], [-18, 18]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const editorY = useSpring(
    useTransform(mouseY, [-1, 1], [-18, 18]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  /* =========================
     Terminal Movement
  ========================= */

  const terminalX = useSpring(
    useTransform(mouseX, [-1, 1], [-10, 10]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const terminalY = useSpring(
    useTransform(mouseY, [-1, 1], [-10, 10]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1] as const
      }}
      className="relative h-[650px] w-[900px]"
    >
      {/* Grid */}

      <div
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background Glow */}

      <div className="absolute inset-0 z-10 rounded-full bg-[#915EFF]/15 blur-[120px]" />

      <div className="absolute left-10 top-10 z-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* Workspace */}

      <div className="absolute inset-0 z-20">

        {/* Code Editor */}

        <motion.div
          style={{
            x: editorX,
            y: editorY,
          }}
          className="absolute left-0 top-14"
        >
          <CodeEditor />
        </motion.div>

        {/* Browser (Static) */}

        {/* <div className="absolute right-0 top-0 z-30">
          <BrowserPreview />
        </div> */}

        {/* Terminal */}

        <motion.div
          style={{
            x: terminalX,
            y: terminalY,
          }}
          className="absolute bottom-0 right-8"
        >
          <Terminal />
        </motion.div>

      </div>
    </motion.div>
  );
}