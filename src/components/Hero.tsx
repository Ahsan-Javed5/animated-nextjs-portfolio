"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personal } from "@/data/portfolio";
import { PRELOAD_MS } from "@/lib/timing";
import Portrait from "./Portrait";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
} satisfies Variants;

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
} satisfies Variants;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % personal.taglines.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), PRELOAD_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-24 md:px-24"
    >
      <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="mb-6 font-sans text-sm text-brass-bright"
          >
            {personal.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-gradient-brass font-display text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-7xl"
          >
            {personal.name}
          </motion.h1>

          <motion.div variants={item} className="mt-5 h-9 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-2xl italic text-bone-dim md:text-3xl"
              >
                {personal.taglines[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {personal.summary}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-brass px-7 py-3 text-sm font-medium text-void transition-colors hover:bg-brass-bright"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-full border border-hairline px-7 py-3 text-sm font-medium text-bone transition-colors hover:border-brass"
            >
              See my work
            </a>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block">
          <Portrait />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-6 hidden items-center gap-2 text-xs text-muted md:left-24 md:flex"
      >
        <ArrowDown size={14} className="animate-bounce" />
        Scroll
      </motion.div>
    </section>
  );
}
