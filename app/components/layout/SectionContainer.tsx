"use client";

import { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({ id, children, className = "" }: SectionContainerProps) {
  return (
    <section id={id} className={`relative w-full pt-28 px-6 md:px-10 lg:px-16 ${className}`}>
      {/* We don't put max-w-7xl here because some sections (like BackgroundGlow) 
         need to span the full width of the screen.
      */}
      {children}
    </section>
  );
}