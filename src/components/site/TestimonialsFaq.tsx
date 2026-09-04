import { Star } from "lucide-react";

import { FAQ } from "@/lib/faq";

import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

{
  /* ATENÇÃO: os testemunhos abaixo são exemplos ilustrativos escritos para
     estruturar a página. Substituir por testemunhos reais, com autorização
     dos clientes, antes de publicar o site. */
}
const TESTIMONIALS = [
  {
    name: "Rui Almeida",
    role: "Administrador de condomínio, Lisboa",
    text: "Tínhamos orçamentos com andaimes que duplicavam o valor da obra. A equipa da Gomes Vertical fez a reparação e a pintura da fachada norte em nove dias, sem qualquer estrutura montada e sem pedir licença à câmara. Os condóminos nem tiveram as janelas tapadas.",
  },
  {
    name: "Sandra Ferreira",
    role: "Diretora de hotel, Cascais",
    text: "O que nos convenceu foi poder manter o hotel a funcionar. Trabalharam de manhã, fora das zonas de acesso dos hóspedes, e no fim do dia não havia sinal de obra. A limpeza no final de cada dia foi impecável.",
  },
  {
    name: "Paulo Marques",
    role: "Proprietário de moradia, Setúbal",
    text: "Tinha uma infiltração no topo da parede que já ninguém queria resolver sem andaime. Vieram fazer a vistoria, mandaram relatório com fotografias e o orçamento no dia seguinte. Resolveram numa manhã e ainda não voltou a entrar água.",
  },
];


export function TestimonialsFaq() {
  return (
    <section id="faq" className="bg-background py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Testemunhos
          </p>
          <h2 className="text-3xl text-charcoal sm:text-4xl">Quem já trabalhou connosco</h2>
          <span className="mt-4 block h-1 w-16 bg-primary" aria-hidden="true" />

          <div className="mt-8 space-y-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="border border-border border-l-4 border-l-primary bg-card p-5">
                  <div className="flex gap-1" aria-label="Avaliação de 5 em 5 estrelas">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-4 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm text-charcoal">{t.text}</blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="font-display font-bold uppercase tracking-wide text-charcoal">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Perguntas frequentes
          </p>
          <h2 className="text-3xl text-charcoal sm:text-4xl">Dúvidas antes de avançar</h2>
          <span className="mt-4 block h-1 w-16 bg-primary" aria-hidden="true" />

          <Accordion type="single" collapsible className="mt-8">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-sm font-bold uppercase tracking-wide text-charcoal hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
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

