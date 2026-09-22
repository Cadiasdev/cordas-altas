# Gomes Vertical Landing

Cria uma landing page de alta conversão para a "Gomes Vertical — Alpinismo Industrial", empresa portuguesa de trabalhos em altura por acesso por cordas. Português de Portugal (PT-PT) em todo o conteúdo. Stack: React + TypeScript + Tailwind + shadcn/ui + framer-motion.

# 1. IDENTIDADE VISUAL (obrigatória, define os tokens no index.css / tailwind config)

Paleta extraída da logo — usa exatamente estes valores como CSS variables semânticas:
- Amarelo âmbar (cor primária, CTAs, destaques): #F5A623
- Amarelo claro (hover, gradientes): #FFC340
- Preto carvão (fundos escuros, texto de títulos): #14171A
- Carvão suave (cards escuros, secções alternadas): #1F2429
- Branco: #FFFFFF
- Cinza claro (fundos de secção): #F4F5F7
- Cinza texto: #6E767D

Regra de uso: fundos alternam entre branco, cinza claro e preto carvão. O amarelo é usado com PARCIMÓNIA — apenas em CTAs, ícones, números de destaque e sublinhados. Nunca amarelo como fundo de grandes áreas. Contraste sempre AA+: texto escuro sobre amarelo, nunca branco sobre amarelo.

Tipografia: títulos em fonte sans condensada, pesada e itálica-industrial (usa "Archivo" ou "Barlow Condensed" com font-weight 800/900, uppercase, letter-spacing apertado, e um leve skew de -3deg apenas no H1 do hero) — para ecoar o estilo da logo. Corpo de texto em "Inter" ou "Barlow", peso 400/500, altura de linha 1.65.

Detalhes de marca: bordas retas (radius máximo 4px, exceto botões que podem ter 6px), traços diagonais/cortes angulares como separadores de secção (clip-path), e uma textura subtil de betão/concreto em overlay nas secções escuras (opacidade máxima 6%).

LOGO: constrói um lockup tipográfico — "GOMES" em amarelo #F5A623, "VERTICAL" em branco (ou preto sobre fundo claro), ambos em maiúsculas ultra-bold com leve itálico, e por baixo uma tarja amarela fina com "ALPINISMO INDUSTRIAL" em preto, maiúsculas, tracking largo. Coloca-o no header e no footer. O ficheiro da logo real será carregado depois — estrutura o componente `Logo.tsx` para que trocar por uma imagem seja trivial.

NOME: no site aparece SEMPRE e APENAS "Gomes Vertical — Alpinismo Industrial". Nunca uses o nome da entidade legal em qualquer título, header ou secção visível. A única exceção é uma linha discreta e pequena no rodapé legal (ver secção 12).

# 2. CONTACTOS (usar em todos os CTAs)
- Telefone: +351 966 307 024 (link `tel:+351966307024`)
- WhatsApp: `https://wa.me/351966307024?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20trabalhos%20em%20altura.`

# 3. HERO (full viewport, fundo escuro)
Imagem de fundo: gera uma fotografia realista de um técnico de acesso por cordas suspenso na fachada de um edifício alto e moderno, com equipamento de segurança laranja/amarelo, luz de fim de tarde. Aplica um gradiente escuro da esquerda (preto 85%) para a direita (transparente) para garantir legibilidade do texto.

- Etiqueta acima do H1: "TRABALHOS EM ALTURA · SEM ANDAIMES"
- H1: "Reabilitamos o seu edifício sem montar um único andaime."
- Subtítulo: "Reparação de fachadas, pintura, impermeabilização e isolamento de coberturas por acesso por cordas. Obra mais rápida, mais barata e sem ocupar a via pública."
- CTA primário (amarelo, grande): "Pedir orçamento gratuito" → faz scroll suave para o formulário
- CTA secundário (contorno branco): "Falar por WhatsApp" com ícone
- Barra de confiança por baixo dos botões, em linha, com ícones pequenos: "Técnicos certificados em acesso por cordas" · "Seguro de responsabilidade civil" · "Orçamento em 24h" · "Trabalhamos em todo o Continente"

Animação: fade-up escalonado dos elementos ao carregar. Uma corda vertical subtil desenhada em SVG a descer pelo lado direito do hero, animada.

# 4. BARRA DE PROVA (logo abaixo do hero, fundo cinza claro, fina)
4 números com contador animado ao entrar no viewport:
"+250 intervenções concluídas" · "+15 anos de experiência combinada" · "0 acidentes registados" · "Resposta em 24h"

# 5. SERVIÇOS (fundo branco)
Título: "O que fazemos em altura" / Subtítulo: "Todos os trabalhos executados por acesso por cordas, com equipa própria e equipamento certificado."

Grelha de 6 cards (3x2 em desktop, 1 coluna em mobile). Cada card: ícone em amarelo, título, descrição de 2 linhas, e uma lista de 3 bullets. Hover: o card sobe ligeiramente, a borda inferior ganha 3px amarelos.

1. **Reparação e reabilitação de fachadas** — Tratamento de fissuras, reboco, juntas de dilatação e recuperação de elementos degradados. Bullets: Selagem de fissuras · Reparação de reboco · Substituição de juntas
2. **Pintura de edifícios em altura** — Pintura e repintura integral de fachadas com tintas de longa duração e acabamento uniforme. Bullets: Preparação de superfície · Primário e tinta elastomérica · Acabamento sem marcas
3. **Impermeabilização e isolamento de coberturas** — Correção de infiltrações e aplicação de sistemas de isolamento térmico e hídrico em telhados. Bullets: Deteção de infiltrações · Telas e membranas · Isolamento térmico
4. **Limpeza de fachadas e vidros** — Lavagem técnica de superfícies e envidraçados em altura, com produtos adequados a cada material. Bullets: Hidrolavagem controlada · Remoção de fungos e musgo · Vidros em altura
5. **Redes e sistemas de proteção** — Instalação de redes anti-pombo, bicos e sistemas de proteção de fachada e cobertura. Bullets: Redes anti-pombo · Remoção de ninhos · Higienização
6. **Inspeção e diagnóstico técnico** — Vistoria detalhada da fachada com relatório fotográfico e plano de intervenção prioritizado. Bullets: Relatório fotográfico · Diagnóstico de patologias · Orçamento por prioridade

# 6. SECÇÃO CORDAS vs ANDAIMES (fundo preto carvão — esta é a secção mais importante da página)
Título: "Porque é que o acesso por cordas compensa"
Subtítulo: "A mesma obra, sem os custos e a burocracia dos andaimes."

Tabela comparativa de duas colunas, lado a lado. Coluna esquerda "ACESSO POR CORDAS" com destaque amarelo e ícone de visto verde em cada linha; coluna direita "ANDAIMES" em cinza esbatido com ícone de x. Linhas a comparar:
- Custo total da obra: "Significativamente mais baixo — sem montagem nem aluguer de estrutura" vs "Aluguer, montagem e desmontagem faturados à parte"
- Prazo de execução: "Início em dias, sem tempo de montagem" vs "Dias ou semanas só para montar e desmontar"
- Licenças e via pública: "Sem ocupação da via pública na maioria dos casos" vs "Licença camarária e taxas de ocupação"
- Impacto nos moradores: "Zero estrutura à volta do edifício, janelas desimpedidas" vs "Edifício envolvido durante toda a obra"
- Segurança do imóvel: "Sem pontos de fixação invasivos na fachada" vs "Fixações e apoios na estrutura"
- Acesso a zonas difíceis: "Chegamos a saliências, empenas e recuos" vs "Limitado pela geometria da estrutura"

Em mobile, converte em cards empilhados por critério (nunca uma tabela com scroll horizontal).

Nota pequena por baixo: "A poupança e o prazo variam com a dimensão e a complexidade da obra — no orçamento apresentamos a comparação para o seu caso concreto."

# 7. PROCESSO (fundo branco)
Título: "Como trabalhamos"
4 passos numerados na horizontal, ligados por uma linha amarela tracejada animada ao fazer scroll (em mobile, vertical):
1. **Contacto e visita** — Falamos consigo e agendamos a vistoria ao edifício, sem custo.
2. **Diagnóstico e orçamento** — Avaliamos a fachada, identificamos as patologias e apresentamos um orçamento detalhado em 24h.
3. **Execução em altura** — A equipa entra em obra com plano de segurança, equipamento certificado e sinalização da zona.
4. **Entrega e garantia** — Verificação final consigo e relatório fotográfico do antes e depois.

# 8. PARA QUEM (fundo cinza claro)
Título: "Trabalhamos com" — 4 cards horizontais com ícone: **Administradores de condomínios** (intervenções aprovadas em assembleia, com orçamento apresentável aos condóminos) · **Empresas e escritórios** (manutenção de fachadas e envidraçados sem interromper a atividade) · **Hotelaria e turismo** (obra discreta, sem andaimes à frente das janelas dos hóspedes) · **Proprietários particulares** (moradias e prédios com problemas pontuais de infiltração ou fachada).

# 9. GALERIA / PROJETOS (fundo preto carvão)
Título: "Trabalho feito em altura". Grelha masonry de 6 imagens geradas por IA, fotorrealistas: técnico em corda a pintar fachada, reparação de fissura em betão, impermeabilização de terraço, limpeza de vidros de torre de escritórios, rede anti-pombo em varanda, vista de baixo de dois técnicos suspensos. Lightbox ao clicar. Legenda curta em cada uma (tipo de trabalho + tipo de edifício, sem inventar nomes de clientes).

# 10. TESTEMUNHOS + FAQ (fundo branco, duas colunas em desktop)
Esquerda: 3 testemunhos em cards, com nome próprio + papel (ex.: "Administrador de condomínio, Lisboa") e 5 estrelas amarelas. Escreve testemunhos credíveis e específicos sobre prazo, limpeza da obra e ausência de andaimes. Adiciona um comentário HTML acima do array a avisar que são exemplos e devem ser substituídos por testemunhos reais antes de publicar.

Direita: FAQ em acordeão (shadcn Accordion) com estas perguntas:
- "É seguro trabalhar em cordas na minha fachada?"
- "Quanto custa uma intervenção por acesso por cordas?"
- "Precisam de licença ou de ocupar o passeio?"
- "Quanto tempo demora uma obra de fachada?"
- "Trabalham com condomínios e emitem fatura?"
- "Em que zonas do país trabalham?"
- "Dão garantia sobre o trabalho executado?"
Respostas honestas, concretas, 2-4 frases, sem promessas absolutas de preço.

# 11. FORMULÁRIO DE ORÇAMENTO (fundo preto carvão, secção final, id="orcamento")
Título: "Peça o seu orçamento gratuito" / Subtítulo: "Resposta em até 24 horas úteis. Sem compromisso."

Formulário multi-passo em 3 etapas com barra de progresso amarela — reduz fricção e aumenta conclusão:
- **Passo 1:** Tipo de trabalho (cards selecionáveis com ícone: Fachada · Pintura · Cobertura/Infiltrações · Limpeza · Redes de proteção · Outro)
- **Passo 2:** Tipo de edifício (Prédio/condomínio · Moradia · Escritório/comércio · Hotel · Industrial) + Número aproximado de pisos (select 1-3, 4-7, 8-15, +15) + Localidade (texto)
- **Passo 3:** Nome, telemóvel, email (opcional), descrição breve do problema (textarea), e checkbox de consentimento RGPD com link para a política de privacidade.

Usa react-hook-form + zod para validação. Validação em PT-PT, mensagens de erro claras por baixo de cada campo. Botão final: "Enviar pedido de orçamento". Estado de loading e ecrã de sucesso com o número de telefone visível ("Recebemos o seu pedido. Se for urgente, ligue já para +351 966 307 024").

Ao lado do formulário (coluna direita em desktop): bloco de contacto direto com telefone clicável grande, botão de WhatsApp, horário ("Segunda a sábado, 8h–19h") e a frase "Prefere falar diretamente? Ligue — atendemos nós, não é call center."

# 12. FOOTER (fundo preto carvão)
Logo · descrição curta · lista de serviços com links âncora · contactos · zonas de atuação · links para Política de Privacidade e Termos (cria as duas páginas com conteúdo real e adequado ao RGPD).

Linha legal discreta na base, texto pequeno e cinza esbatido: "Gomes Vertical é a marca comercial de Gleisson Dias Unipessoal Lda. · NIF: [a preencher] · Sede: [a preencher]" seguida de "© 2026 Gomes Vertical. Todos os direitos reservados."

# 13. CTAs PERSISTENTES
- Header sticky que ganha fundo escuro e sombra ao fazer scroll, com o telefone visível em desktop e um botão amarelo "Orçamento".
- Em mobile: barra fixa no fundo do ecrã com dois botões lado a lado — "Ligar" (contorno) e "WhatsApp" (amarelo). Aparece após 400px de scroll, com animação de entrada.
- Botão flutuante de WhatsApp no canto inferior direito em desktop.

# 14. PERFORMANCE, SEO E ACESSIBILIDADE (não negociável)
- Mobile-first. Testa e garante que tudo funciona a 360px de largura.
- Todas as imagens em formato moderno, com `loading="lazy"` exceto a do hero, dimensões explícitas para evitar CLS, e `alt` descritivo em português.
- Animações com framer-motion apenas em transform/opacity. Respeita `prefers-reduced-motion`.
- Fontes com `display: swap` e preload apenas da fonte do H1.
- SEO: `<title>` "Alpinismo Industrial | Reparação e Pintura de Fachadas — Gomes Vertical", meta description orientada a benefício, Open Graph completo, `lang="pt-PT"`, canonical, hierarquia de headings correta (um único H1).
- Dados estruturados JSON-LD do tipo `LocalBusiness` com nome "Gomes Vertical", telefone, área servida (Portugal) e lista de serviços.
- Acessibilidade: navegação completa por teclado, focus states amarelos visíveis, `aria-label` em todos os botões só com ícone, contraste mínimo AA, e o acordeão e o formulário multi-passo corretamente anunciados por leitores de ecrã.
- Sem dependências pesadas desnecessárias. Sem bibliotecas de carrossel se um scroll-snap em CSS resolver.

# 15. QUALIDADE
Nada de placeholders "lorem ipsum" — escreve copy real, em português de Portugal, com o tom de uma empresa técnica, direta e competente. Nada de linguagem de marketing vazia. O objetivo da página é uma coisa só: fazer o visitante pedir um orçamento ou ligar.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f7bc2480-01b7-47d9-aeae-b9a3166e56ff).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
