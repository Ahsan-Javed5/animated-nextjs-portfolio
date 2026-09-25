"use client";

import { motion } from "framer-motion";
import { roles } from "@/data/portfolio";
import { roleIcons } from "./icons";
import Reveal from "./Reveal";

export default function Roles() {
  return (
    <section id="roles" className="relative px-6 py-28 md:px-24">
      <Reveal>
        <p className="mb-3 text-sm text-brass-bright">What I do</p>
        <h2 className="max-w-2xl font-display text-3xl text-bone md:text-5xl">
          Four disciplines, one way of thinking.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((role, i) => {
          const Icon = roleIcons[role.icon];
          return (
            <Reveal key={role.key} delay={i * 0.08}>
              <motion.div
                whileHover={{ backgroundColor: "var(--color-ink-light)" }}
                className="group h-full bg-ink p-7"
              >
                <Icon
                  size={22}
                  className="text-brass transition-colors group-hover:text-brass-bright"
                />
                <h3 className="mt-6 font-display text-xl text-bone">
                  {role.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {role.blurb}
                </p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
