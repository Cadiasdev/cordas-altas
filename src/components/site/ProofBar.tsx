import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { copy } from "@/content";

const STATS = [
  { prefix: "+", value: 250, suffix: "", label: copy.prova.labels[0]! },
  { prefix: "+", value: 15, suffix: "", label: copy.prova.labels[1]! },
  { prefix: "", value: 0, suffix: "", label: copy.prova.labels[2]! },
  { prefix: "", value: 24, suffix: "h", label: copy.prova.labels[3]! },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || value === 0) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1200;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function ProofBar() {
  return (
    <section aria-label="Números da Gomes Vertical" className="bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:py-12">
        {STATS.map((s) => (
          <div key={s.label} className="border-l-2 border-primary pl-4">
            <p className="font-display text-3xl font-black text-charcoal sm:text-4xl">
              {s.prefix}
              <Counter value={s.value} />
              {s.suffix}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
