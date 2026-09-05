import { Check, X } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { copy } from "@/content";

const C = copy.comparativo;
const ROWS = C.linhas;

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

        {/* Desktop: duas colunas lado a lado */}
        <div className="mt-12 hidden lg:block">
          <div className="grid grid-cols-[minmax(180px,1fr)_1.4fr_1.4fr] gap-px bg-dark-border">
            <div className="bg-charcoal p-4" />
            <div className="bg-primary p-4">
              <p className="font-display text-sm font-black uppercase tracking-[0.2em] text-primary-foreground">
                {C.colunaCordas}
              </p>
            </div>
            <div className="bg-charcoal-soft p-4">
              <p className="font-display text-sm font-black uppercase tracking-[0.2em] text-on-dark-muted">
                {C.colunaAndaimes}
              </p>
            </div>

            {ROWS.map((r) => (
              <Reveal key={r.criterio} className="contents">
                <div className="bg-charcoal-soft p-4">
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-on-dark">
                    {r.criterio}
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-charcoal-soft p-4">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-[oklch(0.72_0.17_150)]"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-on-dark">{r.cordas}</p>
                </div>
                <div className="flex items-start gap-3 bg-charcoal p-4">
                  <X className="mt-0.5 size-5 shrink-0 text-on-dark-muted" aria-hidden="true" />
                  <p className="text-sm text-on-dark-muted">{r.andaimes}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: cards empilhados por critério */}
        <div className="mt-10 space-y-4 lg:hidden">
          {ROWS.map((r, i) => (
            <Reveal key={r.criterio} delay={i * 0.04}>
              <article className="border border-dark-border bg-charcoal-soft">
                <h3 className="border-b border-dark-border px-4 py-3 text-sm text-on-dark">
                  {r.criterio}
                </h3>
                <div className="space-y-3 p-4">
                  <div>
                    <p className="font-display text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                      {C.colunaCordas}
                    </p>
                    <p className="mt-1 flex items-start gap-2 text-sm text-on-dark">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-[oklch(0.72_0.17_150)]"
                        aria-hidden="true"
                      />
                      {r.cordas}
                    </p>
                  </div>
                  <div className="border-t border-dark-border pt-3">
                    <p className="font-display text-[11px] font-black uppercase tracking-[0.2em] text-on-dark-muted">
                      {C.colunaAndaimes}
                    </p>
                    <p className="mt-1 flex items-start gap-2 text-sm text-on-dark-muted">
                      <X className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      {r.andaimes}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs text-on-dark-muted">{C.nota}</p>
      </div>
    </section>
  );
}
