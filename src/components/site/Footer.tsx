import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { HOURS, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/site";
import { copy } from "@/content";

const SERVICES = copy.footer.servicos;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-dark-border bg-charcoal pb-[calc(6rem+env(safe-area-inset-bottom))] pt-14 lg:pb-14">
      <div className="concrete-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="dark" size="md" />
            <p className="mt-5 max-w-xs break-words hyphens-auto text-sm text-on-dark-muted">
              {copy.footer.descricao}
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
                    className="flex min-h-11 items-center break-words text-on-dark-muted transition-colors hover:text-primary"
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
                  className="flex min-h-11 items-center gap-2 [overflow-wrap:anywhere] transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-2 transition-colors hover:text-primary"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>{HOURS}</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Zonas de atuação
            </h2>
            <p className="mt-4 flex gap-2 break-words hyphens-auto text-sm text-on-dark-muted">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {copy.footer.zonas}
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a
                  href="#orcamento"
                  className="group flex min-h-11 items-start gap-2 text-sm text-on-dark-muted transition-colors hover:text-primary"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="[overflow-wrap:anywhere]">
                    Pedidos de orçamento pelo{" "}
                    <span className="underline group-hover:text-primary">formulário</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-1 border-t border-dark-border pt-6">
          <p className="break-words hyphens-auto text-[11px] text-on-dark-muted/70">
            Gleisson Dias Unipessoal Lda: · NIF: 253895421 / NIPC: 519432142 · Sede: Rua de
            Damão, 12, 2º Dtº
          </p>
          <p className="break-words hyphens-auto text-[11px] text-on-dark-muted/70">
            © 2026 Gomes Vertical. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
