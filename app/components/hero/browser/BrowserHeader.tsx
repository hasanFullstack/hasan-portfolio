"use client";

import { Globe, Lock, RotateCw } from "lucide-react";

interface BrowserHeaderProps {
  url: string;
}

export default function BrowserHeader({
  url,
}: BrowserHeaderProps) {
  return (
    <div className="flex h-12 items-center gap-3 border-b border-white/10 bg-[#111827]/80 px-4 backdrop-blur-xl">

      {/* Traffic Lights */}
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>

      {/* Address Bar */}
      <div className="mx-2 flex h-8 flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3">

        <Lock
          size={14}
          className="text-emerald-400"
        />

        <span className="flex-1 truncate text-xs text-gray-300">
          {url}
        </span>

        <RotateCw
          size={14}
          className="text-gray-500"
        />
      </div>

      {/* Browser Icon */}
      <Globe
        size={18}
        className="text-gray-400"
      />
    </div>
  );
}