import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/site";

export function StickyCtas() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Barra fixa em mobile */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-dark-border bg-charcoal/95 p-2 backdrop-blur-sm md:hidden"
          >
            <a
              href={PHONE_HREF}
              className="flex min-h-12 items-center justify-center gap-2 rounded-md border-2 border-on-dark/70 font-display text-sm font-extrabold uppercase tracking-wide text-on-dark"
            >
              <Phone className="size-4" aria-hidden="true" />
              Ligar
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary font-display text-sm font-extrabold uppercase tracking-wide text-primary-foreground"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante em desktop */}
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Gomes Vertical por WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden size-14 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-amber transition-colors hover:bg-primary-light md:flex"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
