import { motion } from "framer-motion";
import { Award, Clock, MapPin, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { WHATSAPP_HREF } from "@/lib/site";
import { copy } from "@/content";
import heroImg from "@/assets/hero-rope-access.jpg";

const TRUST_ICONS = [Award, ShieldCheck, Clock, MapPin];
const TRUST = copy.hero.confianca.map((label, i) => ({ label, icon: TRUST_ICONS[i]! }));

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
    <section className="hero-shell relative flex min-h-screen min-h-[100svh] items-center overflow-hidden bg-charcoal pt-20 pb-10 sm:pt-24 sm:pb-16">
      <img
        src={heroImg}
        alt="Técnico de acesso por cordas suspenso na fachada de um edifício alto ao fim da tarde"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-[72%_center] lg:object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/55 lg:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent lg:block"
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
            className="mt-4 inline-block border-l-4 border-primary pl-3 font-display text-xs font-bold uppercase tracking-[0.28em] text-primary sm:text-sm"
          >
            {copy.hero.etiqueta}
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-hero-skew mt-4 overflow-hidden text-[1.75rem] leading-[0.98] text-on-dark min-[380px]:text-[2.1rem] sm:mt-5 sm:text-5xl lg:text-6xl"
          >
            {copy.hero.titulo}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 max-w-2xl text-sm text-on-dark-muted line-clamp-3 min-[380px]:line-clamp-none sm:mt-6 sm:text-base md:text-lg"
          >
            {copy.hero.subtitulo}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row"
          >
            <Button variant="amber" size="xl" asChild>
              <a href="#orcamento">{copy.hero.ctaPrimario}</a>
            </Button>
            <Button variant="onDark" size="xl" asChild>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                {copy.hero.ctaSecundario}
              </a>
            </Button>
          </motion.div>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-3 max-w-lg break-words hyphens-auto text-xs text-on-dark-muted sm:text-sm"
          >
            {copy.hero.microcopy}
          </motion.p>

          <motion.ul
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-dark-border pt-4 sm:mt-10 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:pt-6"
          >
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label} className="flex min-w-0 items-center gap-2 text-[11px] text-on-dark-muted sm:text-sm">
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
