import { personal } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-24">
      <div className="grid gap-12 md:grid-cols-[220px_1fr] md:gap-20">
        <Reveal>
          <p className="text-sm text-brass-bright">About</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl font-display text-2xl leading-snug text-bone md:text-3xl">
            {personal.longBio}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
