import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      BemVindo: "Bem-vindo ao meu portfólio",
      Sobre: "Sobre",
      Tecnologias: "Tecnologias",
      Projetos: "Projetos",
      Contato: "Contato",
      Apresentacao:
        "Um desenvolvedor full stack e entusiasta por tecnologia...Conheça os meus projetos abaixo:",
      SobreMim: "Sobre mim",
      SaibaMais: "Saiba mais",
      QuemSou:
        "Interessado por tecnologia desde pequeno, atualmente estou em transição de carreira para o desenvolvimento de software . Acredito que a tecnologia tem o poder de transformar o mundo, trazendo acessibilidade, disrupção e evolução para todos, dessa forma fico entusiasmado em fazer parte dessa transformação. Possuo experiência na construção de projetos full stack e familiaridade com conceitos de reatividade, autenticação, autorização, construção de documentação de APIs com swagger, e desenvolvimento de aplicações em linguagem single-thread, Vivências em utilização de Metodologias ágeis, como dailies ,1:1 e sprints",
      controleEstoque: "Controle de estoque",
      cadastroClient: "Cadastro de clientes/contatos",
      cadastroDevs: "Cadastro de desenvolvedores/tecnologia",
      restaurantApi: "Api para reservas em restaurantes",
      direitos: "Todos os direitos reservados",
      project1Description: "Controle de estoque",
      project2Description: "Cadastro de clientes/contatos",
      project3Description: "API para reservas em restaurantes",
      project4Description: "Cadastro de desenvolvedores/tecnologia",
    },
  },
  en: {
    translation: {
      BemVindo: "Welcome to my portfolio",
      Sobre: "About Me",
      Tecnologias: "Stacks",
      Projetos: "Projects",
      SaibaMais: "Know more",
      Contato: "Contact",
      Apresentacao:
        "A full stack developer and technology enthusiast... Discover my projects below",
      SobreMim: "About me",
      QuemSou:
        "Interested in technology since I was a kid, I'm currently transitioning my career into software development. I believe that technology has the power to transform the world, bringing accessibility, disruption and evolution to everyone, so I am excited to be part of this transformation. I have experience in building full stack projects and familiarity with concepts of reactivity, authentication, authorization, building API documentation with swagger, and developing applications in single-thread language, Experience in using agile methodologies, such as dailies, 1:1 and sprints",
      controleEstoque: "Inventory control",
      cadastroClient: "Customer/contact registration",
      cadastroDevs: "Developer/technology registration",
      restaurantApi: "API for restaurant reservations",
      direitos: "All rights reserved",
      project1Description: "Inventory control",
      project2Description: "Customer/contact registration",
      project3Description: "API for restaurant reservations",
      project4Description: "Developer/technology registration",
    },
  },
};

i18n
  .use(initReactI18next) // inicializa react-i18next
  .init({
    resources,
    lng: "pt", // idioma padrão
    fallbackLng: "pt", // idioma de fallback
    interpolation: {
      escapeValue: false, // não escapar strings traduzidas para HTML
    },
  });

export default i18n;
