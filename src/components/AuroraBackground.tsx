export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#030712]"
    >
      {/* Top Left Bright Cyan/Blue Electric Glow */}
      <div
        className="aurora-blob aurora-blob--a -left-[15%] -top-[15%] h-[85vh] w-[85vh] opacity-80"
        style={{ background: "radial-gradient(circle, #0284c7 0%, #030712 70%)" }}
      />
      
      {/* Top Right Vibrant Purple / Magenta Glow */}
      <div
        className="aurora-blob aurora-blob--b -right-[15%] -top-[10%] h-[80vh] w-[80vh] opacity-75"
        style={{ background: "radial-gradient(circle, #9333ea 0%, #030712 70%)" }}
      />
      
      {/* Center Soft Pink/Violet Accent Glow */}
      <div
        className="aurora-blob aurora-blob--c bottom-[-15%] left-[25%] h-[75vh] w-[75vh] opacity-65"
        style={{ background: "radial-gradient(circle, #db2777 0%, #030712 70%)" }}
      />
      
      {/* Subtle Cyan Flare for Contrast */}
      <div
        className="aurora-blob aurora-blob--a right-[10%] bottom-[10%] h-[55vh] w-[55vh] opacity-50"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 65%)", animationDelay: "-8s" }}
      />
    </div>
  );
}