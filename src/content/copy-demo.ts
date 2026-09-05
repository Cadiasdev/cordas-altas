import type { Copy } from "./copy-pt";

/**
 * Versão de demonstração: texto descritivo substituído por lorem ipsum,
 * com comprimentos equivalentes à copy real para não alterar o layout.
 * Títulos, nomes de serviços, perguntas do FAQ, botões, formulário,
 * navegação e contactos mantêm-se em português real.
 */
export const copyDemo: Copy = {
  hero: {
    etiqueta: "Trabalhos em altura · Sem andaimes",
    titulo: "Reabilitamos o seu edifício sem montar um único andaime.",
    subtitulo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    confianca: [
      "Técnicos certificados em acesso por cordas",
      "Seguro de responsabilidade civil",
      "Orçamento em 24h",
      "Trabalhamos em todo o Continente",
    ],
  },
  prova: {
    labels: [
      "intervenções concluídas",
      "anos de experiência combinada",
      "acidentes registados",
      "tempo de resposta",
    ],
  },
  servicos: {
    eyebrow: "Serviços",
    titulo: "O que fazemos em altura",
    subtitulo:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    itens: [
      {
        titulo: "Reparação e reabilitação de fachadas",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        bullets: ["Lorem ipsum dolor", "Consectetur adipiscing", "Tempor incididunt"],
      },
      {
        titulo: "Pintura de edifícios em altura",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        bullets: ["Ullamco laboris nisi", "Aliquip ex ea commodo", "Duis aute irure"],
      },
      {
        titulo: "Impermeabilização e isolamento de coberturas",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        bullets: ["Voluptate velit esse", "Cillum dolore eu fugiat", "Nulla pariatur"],
      },
      {
        titulo: "Limpeza de fachadas e vidros",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
        bullets: ["Cupidatat non proident", "Officia deserunt", "Mollit anim id est"],
      },
      {
        titulo: "Redes e sistemas de proteção",
        desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
        bullets: ["Aspernatur aut odit", "Sed quia consequuntur", "Magni dolores eos"],
      },
      {
        titulo: "Inspeção e diagnóstico técnico",
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit sed quia.",
        bullets: ["Dolorem ipsum quia", "Adipisci velit sed", "Numquam eius modi"],
      },
    ],
  },
  comparativo: {
    eyebrow: "Comparação direta",
    titulo: "Porque é que o acesso por cordas compensa",
    subtitulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    colunaCordas: "Acesso por cordas",
    colunaAndaimes: "Andaimes",
    linhas: [
      {
        criterio: "Custo total da obra",
        cordas: "Lorem ipsum dolor sit amet — consectetur adipiscing elit sed do eiusmod tempor",
        andaimes: "Ut labore et dolore magna aliqua enim ad minim",
      },
      {
        criterio: "Prazo de execução",
        cordas: "Quis nostrud exercitation ullamco laboris nisi",
        andaimes: "Aliquip ex ea commodo consequat duis aute irure",
      },
      {
        criterio: "Licenças e via pública",
        cordas: "Reprehenderit in voluptate velit esse cillum dolore",
        andaimes: "Fugiat nulla pariatur excepteur sint",
      },
      {
        criterio: "Impacto nos moradores",
        cordas: "Occaecat cupidatat non proident, sunt in culpa qui officia",
        andaimes: "Deserunt mollit anim id est laborum",
      },
      {
        criterio: "Segurança do imóvel",
        cordas: "Nemo enim ipsam voluptatem quia voluptas",
        andaimes: "Aspernatur aut odit aut fugit",
      },
      {
        criterio: "Acesso a zonas difíceis",
        cordas: "Sed quia consequuntur magni dolores eos",
        andaimes: "Qui ratione voluptatem sequi nesciunt",
      },
    ],
    nota: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor — incididunt ut labore et dolore magna aliqua veniam quis.",
  },
  processo: {
    eyebrow: "Processo",
    titulo: "Como trabalhamos",
    passos: [
      {
        titulo: "Contacto e visita",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
      },
      {
        titulo: "Diagnóstico e orçamento",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      },
      {
        titulo: "Execução em altura",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",
      },
      {
        titulo: "Entrega e garantia",
        desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
      },
    ],
  },
  publicos: {
    eyebrow: "Para quem",
    titulo: "Trabalhamos com",
    itens: [
      {
        titulo: "Administradores de condomínios",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
      },
      {
        titulo: "Empresas e escritórios",
        desc: "Ut enim ad minim veniam quis nostrud exercitation ullamco.",
      },
      {
        titulo: "Hotelaria e turismo",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      },
      {
        titulo: "Proprietários particulares",
        desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
      },
    ],
  },
  galeria: {
    eyebrow: "Projetos",
    titulo: "Trabalho feito em altura",
    legendas: [
      "Lorem ipsum dolor · Sit amet consectetur",
      "Adipiscing elit · Sed do eiusmod",
      "Tempor incididunt · Ut labore magna",
      "Minim veniam · Quis nostrud ullamco",
      "Aliquip commodo · Duis aute irure",
      "Voluptate velit · Cillum dolore eu",
    ],
  },
  testemunhos: {
    eyebrow: "Testemunhos",
    titulo: "Quem já trabalhou connosco",
    itens: [
      {
        nome: "Rui Almeida",
        papel: "Administrador de condomínio, Lisboa",
        texto:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        nome: "Sandra Ferreira",
        papel: "Diretora de hotel, Cascais",
        texto:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      },
      {
        nome: "Paulo Marques",
        papel: "Proprietário de moradia, Setúbal",
        texto:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor.",
      },
    ],
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    titulo: "Dúvidas antes de avançar",
    itens: [
      {
        q: "É seguro trabalhar em cordas na minha fachada?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      },
      {
        q: "Quanto custa uma intervenção por acesso por cordas?",
        a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis. Quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam.",
      },
      {
        q: "Precisam de licença ou de ocupar o passeio?",
        a: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.",
      },
      {
        q: "Quanto tempo demora uma obra de fachada?",
        a: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus.",
      },
      {
        q: "Trabalham com condomínios e emitem fatura?",
        a: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
      },
      {
        q: "Em que zonas do país trabalham?",
        a: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.",
      },
      {
        q: "Dão garantia sobre o trabalho executado?",
        a: "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud.",
      },
    ],
  },
  formulario: {
    eyebrow: "Orçamento",
    titulo: "Peça o seu orçamento gratuito",
    subtitulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  footer: {
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.",
    zonas:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation.",
    servicos: [
      "Reparação de fachadas",
      "Pintura em altura",
      "Impermeabilização de coberturas",
      "Limpeza de fachadas e vidros",
      "Redes de proteção",
      "Inspeção e diagnóstico",
    ],
  },
};
