import { Star } from "lucide-react";

import { FAQ } from "@/lib/faq";
import { copy } from "@/content";

import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TESTIMONIALS = copy.testemunhos.itens;


export function TestimonialsFaq() {
  return (
    <section id="faq" className="bg-background py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {copy.testemunhos.eyebrow}
          </p>
          <h2 className="text-3xl text-charcoal sm:text-4xl">{copy.testemunhos.titulo}</h2>
          <span className="mt-4 block h-1 w-16 bg-primary" aria-hidden="true" />

          <div className="mt-8 grid items-stretch gap-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.nome} delay={i * 0.08}>
                <figure className="h-full border border-border border-l-4 border-l-primary bg-card p-5">
                  <div className="flex gap-1" aria-label="Avaliação de 5 em 5 estrelas">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-4 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-3 break-words hyphens-auto text-sm text-charcoal">{t.texto}</blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="font-display font-bold uppercase tracking-wide text-charcoal">
                      {t.nome}
                    </span>
                    <span className="block text-xs text-muted-foreground">{t.papel}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {copy.faq.eyebrow}
          </p>
          <h2 className="text-3xl text-charcoal sm:text-4xl">{copy.faq.titulo}</h2>
          <span className="mt-4 block h-1 w-16 bg-primary" aria-hidden="true" />

          <Accordion type="single" collapsible className="mt-8">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="min-h-11 text-left font-display text-sm font-bold uppercase tracking-wide text-charcoal hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="break-words hyphens-auto text-sm text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

