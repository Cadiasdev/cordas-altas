import {
  Brush,
  Building2,
  ClipboardCheck,
  Droplets,
  Grid2x2,
  Sparkles,
} from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";

const SERVICES = [
  {
    icon: Building2,
    title: "Reparação e reabilitação de fachadas",
    desc: "Tratamento de fissuras, reboco, juntas de dilatação e recuperação de elementos degradados.",
    bullets: ["Selagem de fissuras", "Reparação de reboco", "Substituição de juntas"],
  },
  {
    icon: Brush,
    title: "Pintura de edifícios em altura",
    desc: "Pintura e repintura integral de fachadas com tintas de longa duração e acabamento uniforme.",
    bullets: ["Preparação de superfície", "Primário e tinta elastomérica", "Acabamento sem marcas"],
  },
  {
    icon: Droplets,
    title: "Impermeabilização e isolamento de coberturas",
    desc: "Correção de infiltrações e aplicação de sistemas de isolamento térmico e hídrico em telhados.",
    bullets: ["Deteção de infiltrações", "Telas e membranas", "Isolamento térmico"],
  },
  {
    icon: Sparkles,
    title: "Limpeza de fachadas e vidros",
    desc: "Lavagem técnica de superfícies e envidraçados em altura, com produtos adequados a cada material.",
    bullets: ["Hidrolavagem controlada", "Remoção de fungos e musgo", "Vidros em altura"],
  },
  {
    icon: Grid2x2,
    title: "Redes e sistemas de proteção",
    desc: "Instalação de redes anti-pombo, bicos e sistemas de proteção de fachada e cobertura.",
    bullets: ["Redes anti-pombo", "Remoção de ninhos", "Higienização"],
  },
  {
    icon: ClipboardCheck,
    title: "Inspeção e diagnóstico técnico",
    desc: "Vistoria detalhada da fachada com relatório fotográfico e plano de intervenção prioritizado.",
    bullets: ["Relatório fotográfico", "Diagnóstico de patologias", "Orçamento por prioridade"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Serviços"
          title="O que fazemos em altura"
          subtitle="Todos os trabalhos executados por acesso por cordas, com equipa própria e equipamento certificado."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <article className="group h-full border border-border border-b-[3px] border-b-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-b-primary hover:shadow-hard">
                <s.icon className="size-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg text-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-charcoal">
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
