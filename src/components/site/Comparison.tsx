import { Check, X } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";

const ROWS = [
  {
    criterion: "Custo total da obra",
    ropes: "Significativamente mais baixo — sem montagem nem aluguer de estrutura",
    scaffold: "Aluguer, montagem e desmontagem faturados à parte",
  },
  {
    criterion: "Prazo de execução",
    ropes: "Início em dias, sem tempo de montagem",
    scaffold: "Dias ou semanas só para montar e desmontar",
  },
  {
    criterion: "Licenças e via pública",
    ropes: "Sem ocupação da via pública na maioria dos casos",
    scaffold: "Licença camarária e taxas de ocupação",
  },
  {
    criterion: "Impacto nos moradores",
    ropes: "Zero estrutura à volta do edifício, janelas desimpedidas",
    scaffold: "Edifício envolvido durante toda a obra",
  },
  {
    criterion: "Segurança do imóvel",
    ropes: "Sem pontos de fixação invasivos na fachada",
    scaffold: "Fixações e apoios na estrutura",
  },
  {
    criterion: "Acesso a zonas difíceis",
    ropes: "Chegamos a saliências, empenas e recuos",
    scaffold: "Limitado pela geometria da estrutura",
  },
];

export function Comparison() {
  return (
    <section
      id="cordas-vs-andaimes"
      className="relative overflow-hidden bg-charcoal py-16 sm:py-24"
    >
      <div className="concrete-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Comparação direta"
          title="Porque é que o acesso por cordas compensa"
          subtitle="A mesma obra, sem os custos e a burocracia dos andaimes."
          tone="dark"
        />

        {/* Desktop: duas colunas lado a lado */}
        <div className="mt-12 hidden lg:block">
          <div className="grid grid-cols-[minmax(180px,1fr)_1.4fr_1.4fr] gap-px bg-dark-border">
            <div className="bg-charcoal p-4" />
            <div className="bg-primary p-4">
              <p className="font-display text-sm font-black uppercase tracking-[0.2em] text-primary-foreground">
                Acesso por cordas
              </p>
            </div>
            <div className="bg-charcoal-soft p-4">
              <p className="font-display text-sm font-black uppercase tracking-[0.2em] text-on-dark-muted">
                Andaimes
              </p>
            </div>

            {ROWS.map((r) => (
              <Reveal key={r.criterion} className="contents">
                <div className="bg-charcoal-soft p-4">
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-on-dark">
                    {r.criterion}
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-charcoal-soft p-4">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-[oklch(0.72_0.17_150)]"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-on-dark">{r.ropes}</p>
                </div>
                <div className="flex items-start gap-3 bg-charcoal p-4">
                  <X className="mt-0.5 size-5 shrink-0 text-on-dark-muted" aria-hidden="true" />
                  <p className="text-sm text-on-dark-muted">{r.scaffold}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: cards empilhados por critério */}
        <div className="mt-10 space-y-4 lg:hidden">
          {ROWS.map((r, i) => (
            <Reveal key={r.criterion} delay={i * 0.04}>
              <article className="border border-dark-border bg-charcoal-soft">
                <h3 className="border-b border-dark-border px-4 py-3 text-sm text-on-dark">
                  {r.criterion}
                </h3>
                <div className="space-y-3 p-4">
                  <div>
                    <p className="font-display text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                      Acesso por cordas
                    </p>
                    <p className="mt-1 flex items-start gap-2 text-sm text-on-dark">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-[oklch(0.72_0.17_150)]"
                        aria-hidden="true"
                      />
                      {r.ropes}
                    </p>
                  </div>
                  <div className="border-t border-dark-border pt-3">
                    <p className="font-display text-[11px] font-black uppercase tracking-[0.2em] text-on-dark-muted">
                      Andaimes
                    </p>
                    <p className="mt-1 flex items-start gap-2 text-sm text-on-dark-muted">
                      <X className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      {r.scaffold}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs text-on-dark-muted">
          A poupança e o prazo variam com a dimensão e a complexidade da obra — no orçamento
          apresentamos a comparação para o seu caso concreto.
        </p>
      </div>
    </section>
  );
}
