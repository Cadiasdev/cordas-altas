import { Button } from "@/components/ui/button";
import { copy } from "@/content";

export function Authority() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-16 sm:py-20">
      <div className="concrete-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl border-l-4 border-primary pl-5 sm:pl-7">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {copy.autoridade.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl text-on-dark sm:text-3xl lg:text-4xl">
            {copy.autoridade.titulo}
          </h2>
          <p className="mt-5 break-words hyphens-auto text-sm text-on-dark-muted sm:text-base">
            {copy.autoridade.texto}
          </p>
          <Button variant="amber" size="xl" asChild className="mt-7">
            <a href="#orcamento">{copy.autoridade.cta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
