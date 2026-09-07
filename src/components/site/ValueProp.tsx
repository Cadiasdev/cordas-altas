import { Layers, Move3d, Building2 } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { copy } from "@/content";

const ICONS = [Layers, Building2, Move3d];
const POINTS = copy.valor.pontos.map((p, i) => ({ ...p, icon: ICONS[i]! }));

export function ValueProp() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={copy.valor.eyebrow} title={copy.valor.titulo} />
        <p className="mt-6 max-w-3xl break-words hyphens-auto text-sm text-muted-foreground sm:text-base">
          {copy.valor.texto}
        </p>

        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.06}>
              <article className="h-full border-t-4 border-primary bg-card p-5">
                <p.icon className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base text-charcoal">{p.titulo}</h3>
                <p className="mt-2 break-words hyphens-auto text-sm text-muted-foreground">
                  {p.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
