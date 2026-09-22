import { motion } from "framer-motion";

import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { copy } from "@/content";

const STEPS = copy.processo.passos;

export function Process() {
  return (
    <section id="processo" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={copy.processo.eyebrow} title={copy.processo.titulo} />

        <div className="relative mt-12">
          {/* Linha tracejada animada — horizontal em desktop */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-1 w-full lg:block"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.line
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeDasharray="10 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </svg>
          {/* Vertical em mobile */}
          <svg
            className="pointer-events-none absolute left-7 top-8 h-[calc(100%-4rem)] w-1 lg:hidden"
            viewBox="0 0 2 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="1000"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeDasharray="10 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </svg>

          <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.titulo} delay={i * 0.12}>
                <li className="flex gap-4 lg:block">
                  <span className="flex size-14 shrink-0 items-center justify-center border-2 border-primary bg-background font-display text-xl font-black text-charcoal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 lg:mt-5 lg:pr-6">
                    <h3 className="text-base text-charcoal">{s.titulo}</h3>
                    <p className="mt-2 break-words hyphens-auto text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
