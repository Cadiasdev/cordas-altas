import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ValueProp } from "@/components/site/ValueProp";
import { Services } from "@/components/site/Services";
import { Authority } from "@/components/site/Authority";
import { Comparison } from "@/components/site/Comparison";
import { Process } from "@/components/site/Process";
import { Audiences } from "@/components/site/Audiences";
import { Gallery } from "@/components/site/Gallery";
import { FaqSection } from "@/components/site/FaqSection";
import { FAQ } from "@/lib/faq";
import { QuoteForm } from "@/components/site/QuoteForm";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { StickyCtas } from "@/components/site/StickyCtas";

const TITLE = "Alpinismo Industrial e Acesso por Cordas | Gomes Vertical";
const DESCRIPTION =
  "Trabalhos em altura por acesso por cordas: reparação e pintura de fachadas, coberturas, impermeabilização, limpeza e redes. Peça uma avaliação.";

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
    links: [{ rel: "canonical", href: "/" }],
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
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Trabalhos em altura por acesso por cordas",
            itemListElement: [
              "Reparação de fachadas",
              "Pintura de fachadas",
              "Impermeabilização e isolamento",
              "Limpeza de fachadas, telhados e vidros",
              "Redes e proteção anti-aves",
              "Outros trabalhos em altura",
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
        <ValueProp />
        <Services />
        <Authority />
        <Comparison />
        <Process />
        <Audiences />
        <Gallery />
        <FaqSection />
        <QuoteForm />
        <FinalCta />
      </main>
      <Footer />
      <StickyCtas />
    </div>
  );
}
