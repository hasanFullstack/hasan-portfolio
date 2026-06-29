export default function StatusBar() {
  return (
    <div className="h-6 bg-[#007acc] text-white text-[11px] flex items-center justify-between px-3">
      
      <div className="flex gap-4">
        <span>main</span>
        <span>✔ TypeScript</span>
      </div>

      <div className="flex gap-4">
        <span>UTF-8</span>
        <span>Prettier</span>
        <span>Ln 1, Col 1</span>
      </div>

    </div>
  );
}