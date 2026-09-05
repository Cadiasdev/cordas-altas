import { Briefcase, Building, Home, Hotel } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { copy } from "@/content";

const ICONS = [Building, Briefcase, Hotel, Home];
const ITEMS = copy.publicos.itens.map((item, i) => ({ ...item, icon: ICONS[i]! }));

export function Audiences() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={copy.publicos.eyebrow} title={copy.publicos.titulo} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 0.06}>
              <article className="flex h-full items-start gap-4 border-l-4 border-primary bg-card p-5">
                <item.icon className="mt-1 size-7 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-base text-charcoal">{item.titulo}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
