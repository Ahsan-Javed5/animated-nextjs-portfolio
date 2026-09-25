"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personal } from "@/data/portfolio";
import { PRELOAD_MS } from "@/lib/timing";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / PRELOAD_MS) * 100));
      setPct(next);
      if (elapsed < PRELOAD_MS) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);

    const hide = setTimeout(() => setVisible(false), PRELOAD_MS);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl text-bone md:text-3xl"
          >
            {personal.name}
          </motion.p>

          <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-ink-light md:w-64">
            <motion.div
              className="h-full bg-gradient-to-r from-brass via-pink to-brass-bright"
              style={{ width: `${pct}%` }}
            />
          </div>

          <p className="mt-4 font-sans text-sm tabular-nums text-muted">
            {pct}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
