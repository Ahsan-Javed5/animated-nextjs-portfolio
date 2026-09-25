"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data/portfolio";
import { PRELOAD_MS } from "@/lib/timing";

export default function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imgOk, setImgOk] = useState(true);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 10 });
  };

  const initials = personal.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: PRELOAD_MS / 1000 + 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[320px]"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          ref={ref}
          onPointerMove={onMove}
          onPointerLeave={() => setTilt({ x: 0, y: 0 })}
          className="group relative aspect-[4/5] w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Rotating gradient ring behind the frame */}
          <div
            className="absolute -inset-3 rounded-[28px] opacity-70 blur-md animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, var(--color-brass), transparent 30%, var(--color-brass-bright), transparent 70%, var(--color-brass))",
            }}
          />

          <motion.div
            animate={{ rotateX: tilt.x, rotateY: tilt.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="relative h-full w-full overflow-hidden rounded-3xl border border-brass/40 bg-ink shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            {personal.photo && imgOk ? (
              <Image
                src={personal.photo}
                alt={personal.name}
                fill
                sizes="320px"
                priority
                className="object-cover grayscale-[10%] transition-all duration-500 group-hover:grayscale-0"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-light to-void">
                <span className="font-display text-6xl text-bone-dim">
                  {initials}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
