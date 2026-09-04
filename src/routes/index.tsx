import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ProofBar } from "@/components/site/ProofBar";
import { Services } from "@/components/site/Services";
import { Comparison } from "@/components/site/Comparison";
import { Process } from "@/components/site/Process";
import { Audiences } from "@/components/site/Audiences";
import { Gallery } from "@/components/site/Gallery";
import { TestimonialsFaq, FAQ } from "@/components/site/TestimonialsFaq";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer } from "@/components/site/Footer";
import { StickyCtas } from "@/components/site/StickyCtas";

const TITLE =
  "Alpinismo Industrial | Reparação e Pintura de Fachadas — Gomes Vertical";
const DESCRIPTION =
  "Reparação, pintura e impermeabilização de fachadas e coberturas por acesso por cordas, sem andaimes. Orçamento gratuito em 24h em todo o Continente.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_PT" },
      { property: "og:site_name", content: "Gomes Vertical — Alpinismo Industrial" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://gomesvertical.pt/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Gomes Vertical",
          alternateName: "Gomes Vertical — Alpinismo Industrial",
          description: DESCRIPTION,
          telephone: "+351966307024",
          areaServed: { "@type": "Country", name: "Portugal" },
          address: { "@type": "PostalAddress", addressCountry: "PT" },
          openingHours: "Mo-Sa 08:00-19:00",
          priceRange: "€€",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Trabalhos em altura por acesso por cordas",
            itemListElement: [
              "Reparação e reabilitação de fachadas",
              "Pintura de edifícios em altura",
              "Impermeabilização e isolamento de coberturas",
              "Limpeza de fachadas e vidros",
              "Redes e sistemas de proteção",
              "Inspeção e diagnóstico técnico",
            ].map((name) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <ProofBar />
        <Services />
        <Comparison />
        <Process />
        <Audiences />
        <Gallery />
        <TestimonialsFaq />
        <QuoteForm />
      </main>
      <Footer />
      <StickyCtas />
    </div>
  );
}
