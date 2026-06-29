"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/YOUR_USERNAME",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_USERNAME",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:youremail@example.com",
    icon: Mail,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/YOUR_USERNAME",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/YOUR_USERNAME",
    icon: Facebook,
  },
];

export default function ContactSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-2 mt-10"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
        <h3 className="text-2xl font-bold text-white text-center">
          Connect With Me
        </h3>

        <p className="mt-3 text-center text-slate-400">
          Feel free to reach out through any of these platforms.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-5">
          {socials.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.div
                key={social.name}
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 4 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0b0b13] text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,.25)]"
                >
                  <Icon size={28} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}