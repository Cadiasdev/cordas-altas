import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  const isDark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "text-center" : undefined}>
      {eyebrow ? (
        <p
          className={`mb-3 font-display text-xs font-bold uppercase tracking-[0.3em] ${
            isDark ? "text-primary" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl ${isDark ? "text-on-dark" : "text-charcoal"}`}
      >
        {title}
      </h2>
      <span className="mt-4 block h-1 w-16 bg-primary" aria-hidden="true" />
      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-base ${
            isDark ? "text-on-dark-muted" : "text-muted-foreground"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
