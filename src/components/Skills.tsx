import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 md:px-24">
      <Reveal>
        <p className="mb-3 text-sm text-brass-bright">Toolkit</p>
        <h2 className="max-w-2xl font-display text-3xl text-bone md:text-5xl">
          What I build with.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <h3 className="mb-4 border-b border-hairline pb-3 text-sm text-bone-dim">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
