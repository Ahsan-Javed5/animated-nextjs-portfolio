"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navSections, personal } from "@/data/portfolio";

export default function Nav() {
  const [active, setActive] = useState<string>("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-hairline" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <button
            onClick={() => go("hero")}
            className="font-display text-xl tracking-tight text-bone"
          >
            {personal.name.split(" ")[0]}
            <span className="text-gradient-brass">.</span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navSections
              .filter((s) => s.id !== "hero")
              .map((s) => (
                <button
                  key={s.id}
                  onClick={() => go(s.id)}
                  className={`relative text-sm transition-colors ${
                    active === s.id ? "text-bone" : "text-muted hover:text-bone"
                  }`}
                >
                  {s.label}
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-gradient-to-r from-brass via-pink to-brass-bright"
                    />
                  )}
                </button>
              ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("contact");
            }}
            className="hidden rounded-full bg-gradient-to-r from-brass to-pink px-5 py-2 text-sm font-medium text-void md:inline-block"
          >
            Let&apos;s talk
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline md:hidden"
          >
            <Menu size={18} className="text-bone" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex flex-col bg-void/98 px-8 py-6 backdrop-blur md:hidden"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline"
              >
                <X size={18} className="text-bone" />
              </button>
            </div>
            <div className="mt-10 flex flex-1 flex-col justify-center gap-2">
              {navSections.map((s, i) => (
                <motion.button
                  key={s.id}
                  onClick={() => go(s.id)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="py-3 text-left font-display text-3xl text-bone transition-colors hover:text-brass-bright"
                >
                  {s.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}