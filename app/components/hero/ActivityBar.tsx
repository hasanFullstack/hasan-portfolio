"use client";

import {
  FileText,
  Search,
  GitBranch,
  Play,
  Settings,
} from "lucide-react";

const icons = [
  FileText,
  Search,
  GitBranch,
  Play,
  Settings,
];

export default function ActivityBar() {
  return (
    <div className="w-[50px] bg-[#0a0d12] border-r border-white/10 flex flex-col items-center py-3 gap-4">
      {icons.map((Icon, i) => (
        <div
          key={i}
          className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/10 cursor-pointer transition"
        >
          <Icon size={18} className="text-white/70" />
        </div>
      ))}
    </div>
  );
}