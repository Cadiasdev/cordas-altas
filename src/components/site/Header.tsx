import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#cordas-vs-andaimes", label: "Cordas vs andaimes" },
  { href: "#processo", label: "Processo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-charcoal/95 shadow-hard backdrop-blur-sm"
          : "bg-gradient-to-b from-charcoal/70 to-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" aria-label="Gomes Vertical — Alpinismo Industrial, página inicial">
          <Logo variant="dark" size="sm" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center font-display text-xs font-bold uppercase tracking-widest text-on-dark/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden min-h-11 items-center gap-2 text-sm font-semibold text-on-dark transition-colors hover:text-primary md:flex"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <Button variant="amber" size="default" asChild className="hidden sm:inline-flex">
            <a href="#orcamento">Orçamento</a>
          </Button>
          <Button
            variant="onDark"
            size="icon"
            className="min-h-11 min-w-11 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-dark-border bg-charcoal lg:hidden"
          >
            <nav aria-label="Navegação móvel" className="flex flex-col px-4 py-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-dark-border py-3 font-display text-sm font-bold uppercase tracking-widest text-on-dark"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={PHONE_HREF}
                className="flex min-h-12 items-center py-3 font-semibold text-primary"
                onClick={() => setOpen(false)}
              >
                {PHONE_DISPLAY}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
