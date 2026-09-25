import { timeline } from "@/data/portfolio";
import Reveal from "./Reveal";

const typeLabel: Record<string, string> = {
  work: "Work",
  education: "Education",
  teaching: "Teaching",
};

export default function Timeline() {
  return (
    <section id="timeline" className="relative px-6 py-28 md:px-24">
      <Reveal>
        <p className="mb-3 text-sm text-brass-bright">Journey</p>
        <h2 className="max-w-2xl font-display text-3xl text-bone md:text-5xl">
          How I got here.
        </h2>
      </Reveal>

      <div className="mt-16 border-l border-hairline pl-8 md:pl-12">
        {timeline.map((entry, i) => (
          <Reveal key={entry.title + entry.period} delay={i * 0.06}>
            <div className="relative pb-14 last:pb-0">
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-brass bg-void md:-left-[49px]" />
              <p className="text-xs text-muted">{entry.period}</p>
              <h3 className="mt-2 font-display text-xl text-bone md:text-2xl">
                {entry.title}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <p className="text-sm text-bone-dim">{entry.org}</p>
                <span className="rounded-full border border-hairline px-2 py-0.5 text-[11px] text-muted">
                  {typeLabel[entry.type]}
                </span>
              </div>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                {entry.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
