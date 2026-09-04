import { Briefcase, Building, Home, Hotel } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";

const ITEMS = [
  {
    icon: Building,
    title: "Administradores de condomínios",
    desc: "Intervenções aprovadas em assembleia, com orçamento apresentável aos condóminos.",
  },
  {
    icon: Briefcase,
    title: "Empresas e escritórios",
    desc: "Manutenção de fachadas e envidraçados sem interromper a atividade.",
  },
  {
    icon: Hotel,
    title: "Hotelaria e turismo",
    desc: "Obra discreta, sem andaimes à frente das janelas dos hóspedes.",
  },
  {
    icon: Home,
    title: "Proprietários particulares",
    desc: "Moradias e prédios com problemas pontuais de infiltração ou fachada.",
  },
];

export function Audiences() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Para quem" title="Trabalhamos com" />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="flex h-full items-start gap-4 border-l-4 border-primary bg-card p-5">
                <item.icon className="mt-1 size-7 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-base text-charcoal">{item.title}</h3>
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
