import { Check, Minus } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { copy } from "@/content";

const C = copy.comparativo;

export function Comparison() {
  return (
    <section
      id="cordas-vs-andaimes"
      className="relative overflow-hidden bg-charcoal py-16 sm:py-24"
    >
      <div className="concrete-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={C.eyebrow}
          title={C.titulo}
          subtitle={C.subtitulo}
          tone="dark"
        />

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full min-w-0 border border-dark-border bg-charcoal-soft">
              <p className="bg-primary px-4 py-3 font-display text-sm font-black uppercase tracking-[0.2em] text-primary-foreground">
                {C.colunaCordas}
              </p>
              <ul className="space-y-5 p-5">
                {C.cordas.map((item) => (
                  <li key={item.titulo} className="flex min-w-0 items-start gap-3">
                    <Check
                      className="mt-0.5 size-5 shrink-0 text-[oklch(0.72_0.17_150)]"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <h3 className="text-sm text-on-dark">{item.titulo}</h3>
                      <p className="mt-1 break-words hyphens-auto text-sm text-on-dark-muted">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full min-w-0 border border-dark-border bg-charcoal">
              <p className="bg-charcoal-soft px-4 py-3 font-display text-sm font-black uppercase tracking-[0.2em] text-on-dark-muted">
                {C.colunaAndaimes}
              </p>
              <ul className="space-y-5 p-5">
                {C.andaimes.map((item) => (
                  <li key={item.titulo} className="flex min-w-0 items-start gap-3">
                    <Minus className="mt-0.5 size-5 shrink-0 text-on-dark-muted" aria-hidden="true" />
                    <div className="min-w-0">
                      <h3 className="text-sm text-on-dark">{item.titulo}</h3>
                      <p className="mt-1 break-words hyphens-auto text-sm text-on-dark-muted">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <p className="mt-8 max-w-3xl break-words hyphens-auto text-sm text-on-dark">{C.nota}</p>
      </div>
    </section>
  );
}
