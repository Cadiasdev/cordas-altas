import { useState } from "react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import pintura from "@/assets/gal-pintura.jpg";
import fissura from "@/assets/gal-fissura.jpg";
import impermeabilizacao from "@/assets/gal-impermeabilizacao.jpg";
import vidros from "@/assets/gal-vidros.jpg";
import redes from "@/assets/gal-redes.jpg";
import doisTecnicos from "@/assets/gal-dois-tecnicos.jpg";

const IMAGES = [
  {
    src: pintura,
    w: 1024,
    h: 1280,
    alt: "Técnico suspenso em corda a pintar a fachada de um edifício de habitação",
    caption: "Pintura de fachada · Edifício de habitação",
  },
  {
    src: fissura,
    w: 1024,
    h: 768,
    alt: "Reparação e selagem de fissura em fachada de betão com pistola de selante",
    caption: "Selagem de fissuras · Estrutura em betão",
  },
  {
    src: impermeabilizacao,
    w: 1024,
    h: 768,
    alt: "Aplicação de membrana de impermeabilização num terraço de cobertura",
    caption: "Impermeabilização · Terraço de cobertura",
  },
  {
    src: vidros,
    w: 1024,
    h: 1280,
    alt: "Técnico em acesso por cordas a limpar os vidros de uma torre de escritórios",
    caption: "Limpeza de vidros · Torre de escritórios",
  },
  {
    src: redes,
    w: 1024,
    h: 768,
    alt: "Rede anti-pombo instalada na varanda de um prédio",
    caption: "Rede anti-pombo · Varanda de prédio",
  },
  {
    src: doisTecnicos,
    w: 1024,
    h: 1280,
    alt: "Vista de baixo de dois técnicos suspensos em cordas numa fachada",
    caption: "Trabalho em equipa · Fachada em altura",
  },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : IMAGES[active];

  return (
    <section id="projetos" className="relative overflow-hidden bg-charcoal py-16 sm:py-24">
      <div className="concrete-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Projetos" title="Trabalho feito em altura" tone="dark" />

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
        <DialogContent className="max-w-4xl border-dark-border bg-charcoal p-2 sm:p-3">
          {current ? (
            <>
              <DialogTitle className="px-2 pt-1 font-display text-sm uppercase tracking-widest text-primary">
                {current.caption}
              </DialogTitle>
              <img
                src={current.src}
                alt={current.alt}
                width={current.w}
                height={current.h}
                className="max-h-[75vh] w-full object-contain"
              />
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
