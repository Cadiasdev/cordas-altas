import {
  Brush,
  Building2,
  ClipboardCheck,
  Droplets,
  Grid2x2,
  Sparkles,
} from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { copy } from "@/content";

const ICONS = [Building2, Brush, Droplets, Sparkles, Grid2x2, ClipboardCheck];
const SERVICES = copy.servicos.itens.map((s, i) => ({ ...s, icon: ICONS[i]! }));

export function Services() {
  return (
    <section id="servicos" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={copy.servicos.eyebrow}
          title={copy.servicos.titulo}
          subtitle={copy.servicos.subtitulo}
        />

        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 0.06}>
              <article className="group h-full border border-border border-b-[3px] border-b-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-b-primary hover:shadow-hard">
                <s.icon className="size-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg text-charcoal">{s.titulo}</h3>
                <p className="mt-2 break-words hyphens-auto text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 break-words hyphens-auto text-sm text-charcoal">
                      <span
                        className="mt-2 size-1.5 shrink-0 bg-primary"
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
