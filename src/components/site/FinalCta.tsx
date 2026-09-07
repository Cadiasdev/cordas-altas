import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PHONE_HREF } from "@/lib/site";
import { copy } from "@/content";

export function FinalCta() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl text-charcoal sm:text-3xl lg:text-4xl">
            {copy.ctaFinal.titulo}
          </h2>
          <span className="mt-4 block h-1 w-16 bg-primary" aria-hidden="true" />
          <p className="mt-5 break-words hyphens-auto text-sm text-muted-foreground sm:text-base">
            {copy.ctaFinal.texto}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button variant="amber" size="xl" asChild>
              <a href="#orcamento">{copy.ctaFinal.ctaPrimario}</a>
            </Button>
            <Button variant="onLight" size="xl" asChild>
              <a href={PHONE_HREF}>
                <Phone className="size-5" aria-hidden="true" />
                {copy.ctaFinal.ctaSecundario}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
