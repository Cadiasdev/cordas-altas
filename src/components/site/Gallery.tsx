import { useState } from "react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { copy } from "@/content";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import pintura from "@/assets/gal-pintura.jpg";
import fissura from "@/assets/gal-fissura.jpg";
import impermeabilizacao from "@/assets/gal-impermeabilizacao.jpg";
import vidros from "@/assets/gal-vidros.jpg";
import redes from "@/assets/gal-redes.jpg";
import doisTecnicos from "@/assets/gal-dois-tecnicos.jpg";

const IMAGES_BASE = [
  {
    src: pintura,
    w: 1024,
    h: 1280,
    alt: "Técnico suspenso em corda a pintar a fachada de um edifício de habitação",
      },
  {
    src: fissura,
    w: 1024,
    h: 768,
    alt: "Reparação e selagem de fissura em fachada de betão com pistola de selante",
      },
  {
    src: impermeabilizacao,
    w: 1024,
    h: 768,
    alt: "Aplicação de membrana de impermeabilização num terraço de cobertura",
      },
  {
    src: vidros,
    w: 1024,
    h: 1280,
    alt: "Técnico em acesso por cordas a limpar os vidros de uma torre de escritórios",
      },
  {
    src: redes,
    w: 1024,
    h: 768,
    alt: "Rede anti-pombo instalada na varanda de um prédio",
      },
  {
    src: doisTecnicos,
    w: 1024,
    h: 1280,
    alt: "Vista de baixo de dois técnicos suspensos em cordas numa fachada",
      },
];

const IMAGES = IMAGES_BASE.map((img, i) => ({ ...img, caption: copy.galeria.legendas[i]! }));

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : IMAGES[active];

  return (
    <section id="projetos" className="relative overflow-hidden bg-charcoal py-16 sm:py-24">
      <div className="concrete-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={copy.galeria.eyebrow}
          title={copy.galeria.titulo}
          subtitle={copy.galeria.subtitulo}
          tone="dark"
        />
        <p className="mt-4 max-w-2xl break-words hyphens-auto text-xs text-on-dark-muted">
          {copy.galeria.aviso}
        </p>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {IMAGES.map((img, i) => (
            <Reveal key={img.caption} delay={(i % 3) * 0.06}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full cursor-pointer overflow-hidden border border-dark-border text-left"
                aria-label={`Ampliar imagem: ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  decoding="async"
                  className="w-full transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="block bg-charcoal-soft px-4 py-3 font-display text-xs font-bold uppercase tracking-widest text-on-dark-muted group-hover:text-primary">
                  {img.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[100svh] w-[calc(100vw-1rem)] max-w-4xl overflow-y-auto border-dark-border bg-charcoal p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:p-3">
          {current ? (
            <>
              <DialogTitle className="pr-14 px-2 pt-1 font-display text-sm uppercase tracking-widest text-primary">
                {current.caption}
              </DialogTitle>
              <img
                src={current.src}
                alt={current.alt}
                width={current.w}
                height={current.h}
                className="mx-auto max-h-[70svh] w-full max-w-full object-contain"
              />
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
