import { createFileRoute, Link } from "@tanstack/react-router";

import { Logo } from "@/components/Logo";
import { Footer } from "@/components/site/Footer";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const TITLE = "Termos e Condições — Gomes Vertical | Alpinismo Industrial";
const DESCRIPTION =
  "Termos e condições de utilização do site da Gomes Vertical e regras aplicáveis a orçamentos, execução de trabalhos em altura e garantias.";

export const Route = createFileRoute("/termos")({
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
  component: Termos,
});

function Termos() {
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
        <h1 className="text-3xl text-charcoal sm:text-4xl">Termos e Condições</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: janeiro de 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-charcoal">
          <section>
            <h2 className="text-lg">1. Objeto</h2>
            <p className="mt-2">
              Estes termos regulam a utilização deste site e o enquadramento dos pedidos de
              orçamento para trabalhos em altura por acesso por cordas prestados pela Gomes
              Vertical — Alpinismo Industrial. Ao utilizar o site, aceita estas condições.
            </p>
          </section>

          <section>
            <h2 className="text-lg">2. Informação apresentada</h2>
            <p className="mt-2">
              Os conteúdos deste site têm carácter informativo. As descrições de serviços, prazos
              e vantagens do acesso por cordas são indicativas e não constituem proposta
              contratual. Só o orçamento escrito, assinado ou aceite por escrito pelo cliente,
              vincula as partes.
            </p>
          </section>

          <section>
            <h2 className="text-lg">3. Pedidos de orçamento</h2>
            <p className="mt-2">
              O envio do formulário não constitui contrato nem reserva de data. Após o pedido,
              entramos em contacto para agendar vistoria e apresentamos orçamento, normalmente em
              24 horas úteis. O orçamento indica os trabalhos, materiais, prazo estimado, condições
              de pagamento e prazo de validade.
            </p>
          </section>

          <section>
            <h2 className="text-lg">4. Execução dos trabalhos</h2>
            <p className="mt-2">
              Os trabalhos são executados por técnicos com formação em acesso por cordas, com
              equipamento de proteção individual certificado e plano de segurança específico. Os
              prazos podem ser ajustados por condições meteorológicas adversas, por acessos não
              disponibilizados no dia previsto ou por patologias apenas detetáveis depois de
              iniciada a intervenção — casos em que apresentamos revisão prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-lg">5. Obrigações do cliente</h2>
            <p className="mt-2">
              O cliente assegura o acesso à cobertura e às zonas técnicas necessárias, autoriza a
              utilização de pontos de ancoragem existentes quando aplicável e informa-nos de
              qualquer limitação estrutural conhecida. Compete ao cliente comunicar a intervenção
              aos moradores ou utilizadores do edifício.
            </p>
          </section>

          <section>
            <h2 className="text-lg">6. Preços e pagamento</h2>
            <p className="mt-2">
              Os valores constantes do orçamento indicam expressamente se incluem IVA. As
              condições e o calendário de pagamento são as definidas no orçamento aceite. Emitimos
              sempre fatura com o NIF indicado pelo cliente.
            </p>
          </section>

          <section>
            <h2 className="text-lg">7. Garantias</h2>
            <p className="mt-2">
              Os trabalhos têm garantia nos termos e prazos indicados no orçamento, variáveis com
              o tipo de intervenção e o sistema de materiais aplicado. A garantia não cobre danos
              resultantes de causas externas, alterações feitas por terceiros, falta de manutenção
              ou eventos de força maior.
            </p>
          </section>

          <section>
            <h2 className="text-lg">8. Propriedade intelectual</h2>
            <p className="mt-2">
              Os textos, imagens, marca e demais elementos deste site são propriedade da Gomes
              Vertical ou utilizados com autorização, não podendo ser reproduzidos sem
              consentimento escrito.
            </p>
          </section>

          <section>
            <h2 className="text-lg">9. Reclamações e lei aplicável</h2>
            <p className="mt-2">
              Reclamações podem ser apresentadas pelos nossos contactos ou no Livro de Reclamações
              Eletrónico. Aplica-se a lei portuguesa, sendo competentes os tribunais portugueses.
              Para esclarecimentos, ligue{" "}
              <a href={PHONE_HREF} className="text-primary underline">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
