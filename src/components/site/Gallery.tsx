import { useState } from "react";

import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { copy } from "@/content";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import redes from "@/assets/gal-redes.jpg";
import coberturaPintura from "@/assets/gal-cobertura-pintura.webp.asset.json";
import coberturaAntes from "@/assets/gal-cobertura-antes.webp.asset.json";
import predioFachada from "@/assets/gal-predio-fachada.webp.asset.json";
import pinturaEmpena from "@/assets/gal-pintura-cordas-empena.webp.asset.json";
import torreDoisTecnicos from "@/assets/gal-torre-dois-tecnicos.webp.asset.json";
import torreEnvidracada from "@/assets/gal-torre-envidracada.webp.asset.json";
import fachadaVarandas from "@/assets/gal-fachada-varandas.webp.asset.json";
import fachadaPreparacao from "@/assets/gal-fachada-preparacao.webp.asset.json";
import intervencaoLocalizada from "@/assets/gal-intervencao-localizada.webp.asset.json";

type GalleryImage = {
  src: string;
  w: number;
  h: number;
  alt: string;
  caption?: string | undefined;
};

const IMAGES: GalleryImage[] = [
  {
    src: coberturaPintura.url,
    w: 1024,
    h: 1536,
    alt: "Cobertura metálica pintada de vermelho com estruturas pintadas de branco",
  },
  {
    src: coberturaAntes.url,
    w: 1024,
    h: 1536,
    alt: "Cobertura metálica vermelha com estruturas de betão degradadas antes da intervenção",
  },
  {
    src: predioFachada.url,
    w: 1024,
    h: 1536,
    alt: "Fachada de prédio de habitação pintada em tons de laranja, branco e cinzento",
  },
  {
    src: pinturaEmpena.url,
    w: 1086,
    h: 1448,
    alt: "Técnico suspenso em cordas a pintar a empena de um edifício",
  },
  {
    src: torreDoisTecnicos.url,
    w: 1024,
    h: 1536,
    alt: "Dois técnicos em acesso por cordas numa torre de habitação com fachada envidraçada",
  },
  {
    src: torreEnvidracada.url,
    w: 1024,
    h: 1536,
    alt: "Torre de habitação com fachada pintada e corpo de escadas envidraçado",
  },
  {
    src: fachadaVarandas.url,
    w: 1024,
    h: 1536,
    alt: "Técnicos em cordas a intervir numa fachada com varandas",
  },
  {
    src: fachadaPreparacao.url,
    w: 1024,
    h: 1536,
    alt: "Fachada em preparação com reparações localizadas e técnicos suspensos em cordas",
  },
  {
    src: intervencaoLocalizada.url,
    w: 1024,
    h: 1536,
    alt: "Técnico em cordas numa intervenção localizada na fachada de um prédio",
  },
  {
    src: redes,
    w: 1024,
    h: 768,
    alt: "Rede anti-pombo instalada na varanda de um prédio",
    caption: copy.galeria.legendas[4],
  },
];

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
            <Reveal key={img.src} delay={(i % 3) * 0.06}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full cursor-pointer overflow-hidden border border-dark-border text-left"
                aria-label={
                  img.caption ? `Ampliar imagem: ${img.caption}` : `Ampliar imagem: ${img.alt}`
                }
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
                {img.caption ? (
                  <span className="block bg-charcoal-soft px-4 py-3 font-display text-xs font-bold uppercase tracking-widest text-on-dark-muted group-hover:text-primary">
                    {img.caption}
                  </span>
                ) : null}
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
                {current.caption ?? copy.galeria.titulo}
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
