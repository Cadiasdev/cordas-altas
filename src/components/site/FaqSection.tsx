import { FAQ } from "@/lib/faq";
import { copy } from "@/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {copy.faq.eyebrow}
            </p>
            <h2 className="text-3xl text-charcoal sm:text-4xl">{copy.faq.titulo}</h2>
            <span className="mt-4 block h-1 w-16 bg-primary" aria-hidden="true" />
          </div>

          <Accordion type="single" collapsible className="min-w-0">
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
