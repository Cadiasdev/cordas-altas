import { createFileRoute, Link } from "@tanstack/react-router";

import { Logo } from "@/components/Logo";
import { Footer } from "@/components/site/Footer";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const TITLE = "Política de Privacidade — Gomes Vertical | Alpinismo Industrial";
const DESCRIPTION =
  "Como a Gomes Vertical recolhe, utiliza e conserva os dados pessoais enviados nos pedidos de orçamento, e como exercer os seus direitos ao abrigo do RGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <div>
      <div className="bg-charcoal">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-5 sm:px-6">
          <Link to="/" aria-label="Voltar à página inicial da Gomes Vertical">
            <Logo variant="dark" size="sm" />
          </Link>
          <Link
            to="/"
            className="font-display text-xs font-bold uppercase tracking-widest text-primary"
          >
            Voltar
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h1 className="text-3xl text-charcoal sm:text-4xl">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: janeiro de 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-charcoal">
          <section>
            <h2 className="text-lg">1. Quem trata os seus dados</h2>
            <p className="mt-2">
              Os dados recolhidos através deste site são tratados pela Gomes Vertical —
              Alpinismo Industrial, responsável pelo tratamento. Para qualquer questão
              relacionada com privacidade pode contactar-nos pelo telefone{" "}
              <a href={PHONE_HREF} className="text-primary underline">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg">2. Que dados recolhemos</h2>
            <p className="mt-2">
              Recolhemos apenas os dados que nos fornece voluntariamente no formulário de pedido
              de orçamento: nome, número de telemóvel, endereço de email (opcional), localidade do
              imóvel, tipo de trabalho e de edifício, número aproximado de pisos e a descrição do
              problema. Não recolhemos categorias especiais de dados nem dados de menores.
            </p>
          </section>

          <section>
            <h2 className="text-lg">3. Para que utilizamos os dados</h2>
            <p className="mt-2">
              Utilizamos os seus dados exclusivamente para: responder ao pedido de orçamento,
              agendar a vistoria ao edifício, elaborar e enviar a proposta, e comunicar consigo
              durante a execução da obra, caso avance. Não utilizamos os dados para envio de
              comunicações comerciais não solicitadas nem para criar perfis.
            </p>
          </section>

          <section>
            <h2 className="text-lg">4. Fundamento legal</h2>
            <p className="mt-2">
              O tratamento baseia-se no seu consentimento, dado ao submeter o formulário (artigo
              6.º, n.º 1, alínea a) do RGPD), e nas diligências pré-contratuais e execução do
              contrato quando a obra é adjudicada (alínea b). Quando exista obrigação fiscal ou
              contabilística, o tratamento assenta no cumprimento de obrigações legais (alínea c).
            </p>
          </section>

          <section>
            <h2 className="text-lg">5. Prazo de conservação</h2>
            <p className="mt-2">
              Os pedidos de orçamento que não deem origem a obra são conservados por 12 meses,
              para acompanhamento comercial e histórico técnico. Os dados associados a obras
              executadas são conservados pelo prazo legal aplicável às obrigações fiscais e de
              garantia, findo o qual são eliminados.
            </p>
          </section>

          <section>
            <h2 className="text-lg">6. Partilha com terceiros</h2>
            <p className="mt-2">
              Não vendemos nem cedemos os seus dados. Podem ser acedidos por prestadores de
              serviços que atuam como subcontratantes (alojamento do site, correio eletrónico,
              contabilidade), sujeitos a obrigações de confidencialidade, e por autoridades quando
              legalmente exigido.
            </p>
          </section>

          <section>
            <h2 className="text-lg">7. Os seus direitos</h2>
            <p className="mt-2">
              Pode a qualquer momento solicitar o acesso, a retificação, o apagamento, a limitação
              do tratamento, a portabilidade dos dados e a retirada do consentimento, bastando
              contactar-nos pelos meios indicados. Tem também o direito de apresentar reclamação à
              Comissão Nacional de Proteção de Dados (CNPD).
            </p>
          </section>

          <section>
            <h2 className="text-lg">8. Cookies e dados de navegação</h2>
            <p className="mt-2">
              Este site utiliza apenas os cookies estritamente necessários ao seu funcionamento e
              à segurança. Não são utilizados cookies de publicidade nem de rastreio de terceiros
              sem o seu consentimento prévio.
            </p>
          </section>

          <section>
            <h2 className="text-lg">9. Segurança</h2>
            <p className="mt-2">
              Adotamos medidas técnicas e organizativas razoáveis para proteger os dados contra
              acesso não autorizado, perda ou divulgação, incluindo o acesso restrito aos dados
              apenas a quem precisa deles para responder ao seu pedido.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
