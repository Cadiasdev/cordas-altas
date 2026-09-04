import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { HOURS, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/site";

const SERVICES = [
  "Reparação de fachadas",
  "Pintura em altura",
  "Impermeabilização de coberturas",
  "Limpeza de fachadas e vidros",
  "Redes de proteção",
  "Inspeção e diagnóstico",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-dark-border bg-charcoal pb-24 pt-14 md:pb-14">
      <div className="concrete-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="dark" size="md" />
            <p className="mt-5 max-w-xs text-sm text-on-dark-muted">
              Trabalhos em altura por acesso por cordas: reabilitação e pintura de fachadas,
              impermeabilização de coberturas, limpeza e sistemas de proteção. Sem andaimes.
            </p>
          </div>

          <nav aria-label="Serviços">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Serviços
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-on-dark-muted transition-colors hover:text-primary"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Contactos
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-on-dark-muted">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                Pedidos de orçamento pelo{" "}
                <a href="#orcamento" className="underline hover:text-primary">
                  formulário
                </a>
              </li>
              <li>{HOURS}</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Zonas de atuação
            </h2>
            <p className="mt-4 flex gap-2 text-sm text-on-dark-muted">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              Todo o Portugal Continental, com maior presença em Lisboa, Setúbal, Grande Porto e
              zonas envolventes.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="text-on-dark-muted underline transition-colors hover:text-primary"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/termos"
                  className="text-on-dark-muted underline transition-colors hover:text-primary"
                >
                  Termos e Condições
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-1 border-t border-dark-border pt-6">
          <p className="text-[11px] text-on-dark-muted/70">
            Gomes Vertical é a marca comercial de Gleisson Dias Unipessoal Lda. · NIF: [a
            preencher] · Sede: [a preencher]
          </p>
          <p className="text-[11px] text-on-dark-muted/70">
            © 2026 Gomes Vertical. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
