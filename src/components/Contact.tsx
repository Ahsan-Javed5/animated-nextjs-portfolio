import { Mail } from "lucide-react";
import { personal, socials } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 md:px-24">
      <Reveal>
        <p className="mb-3 text-sm text-brass-bright">Contact</p>
        <h2 className="max-w-xl font-display text-3xl text-bone md:text-5xl">
          Teaching, hiring, or building something — let&apos;s talk.
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <a
          href={`mailto:${personal.email}`}
          className="mt-10 inline-flex items-center gap-3 font-display text-2xl text-bone transition-colors hover:text-brass-bright md:text-4xl"
        >
          <Mail size={24} className="text-brass" />
          {personal.email}
        </a>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="transition-colors hover:text-brass-bright"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
