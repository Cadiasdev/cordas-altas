import { motion } from "framer-motion";
import { Award, Clock, MapPin, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { WHATSAPP_HREF } from "@/lib/site";
import heroImg from "@/assets/hero-rope-access.jpg";

const TRUST = [
  { icon: Award, label: "Técnicos certificados em acesso por cordas" },
  { icon: ShieldCheck, label: "Seguro de responsabilidade civil" },
  { icon: Clock, label: "Orçamento em 24h" },
  { icon: MapPin, label: "Trabalhamos em todo o Continente" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-charcoal pt-24 pb-16">
      <img
        src={heroImg}
        alt="Técnico de acesso por cordas suspenso na fachada de um edifício alto ao fim da tarde"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent"
        aria-hidden="true"
      />
      <div className="concrete-overlay absolute inset-0" aria-hidden="true" />

      {/* Corda vertical animada */}
      <svg
        className="pointer-events-none absolute right-[8%] top-0 hidden h-full w-16 lg:block"
        viewBox="0 0 40 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M20 0 C 26 160, 12 300, 22 460 C 30 600, 16 700, 20 800"
          stroke="var(--primary)"
          strokeWidth="2.5"
          fill="none"
          strokeOpacity="0.65"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        <motion.circle
          cx="21"
          cy="0"
          r="5"
          fill="var(--primary)"
          initial={{ cy: 40, opacity: 0 }}
          animate={{ cy: [40, 470, 40], opacity: 1 }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
        />
      </svg>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-block border-l-4 border-primary pl-3 font-display text-xs font-bold uppercase tracking-[0.28em] text-primary sm:text-sm"
          >
            Trabalhos em altura · Sem andaimes
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-hero-skew mt-5 text-[2.1rem] leading-[0.98] text-on-dark sm:text-5xl lg:text-6xl"
          >
            Reabilitamos o seu edifício sem montar um único andaime.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-2xl text-base text-on-dark-muted sm:text-lg"
          >
            Reparação de fachadas, pintura, impermeabilização e isolamento de coberturas por
            acesso por cordas. Obra mais rápida, mais barata e sem ocupar a via pública.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button variant="amber" size="xl" asChild>
              <a href="#orcamento">Pedir orçamento gratuito</a>
            </Button>
            <Button variant="onDark" size="xl" asChild>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                Falar por WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.ul
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-dark-border pt-6"
          >
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-xs text-on-dark-muted sm:text-sm">
                <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
