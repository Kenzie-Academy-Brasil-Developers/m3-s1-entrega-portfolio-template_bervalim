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
      SaibaMais: "Saiba Mais",
      QuemSou:
        "Interessado por tecnologia desde pequeno, atualmente estou em transição de carreira para o desenvolvimento de software . Acredito que a tecnologia tem o poder de transformar o mundo, trazendo acessibilidade, disrupção e evolução para todos, dessa forma fico entusiasmado em fazer parte dessa transformação. Possuo experiência na construção de projetos full stack e familiaridade com conceitos de reatividade, autenticação, autorização, construção de documentação de APIs com swagger, e desenvolvimento de aplicações em linguagem single-thread, Vivências em utilização de Metodologias ágeis, como dailies ,1:1 e sprints",
      controleEstoque: "Controle de estoque de e-commerce",
      cadastroClient: "Cadastro de clientes/contatos",
      cadastroDevs: "Cadastro de desenvolvedores/tecnologia",
      restaurantApi: "Api para reservas em restaurantes",
      direitos: "Todos os direitos reservados",
      project1Description:
        "Neste projeto, criei um sistema de controle de estoque para e-commerce de roupas, com funcionalidades para administradores e usuários, desenvolvi  telas de cadastro, login, cadastros de produtos e telas de produtos específicos",
      project2Description:
        "Nesta aplicação de cadastro de clientes e contatos, consumi uma API, de minha autoria. No front-end, desenvolvi uma tela de cadastro de cliente, tela de login e uma dashboard onde o cliente é capaz de gerenciar os seus contatos (CRUD)",
      project3Description:
        "Esta API REST  é responsável por gerenciar os serviços de restaurantes. Através da aplicação, é possível realizar o cadastro de restaurantes e clientes interessados em realizar reservas em restaurantes. Além disso, é possível realizar a reserva e consultar os seus respectivos horários disponíveis no banco de dados do restaurante",
      project4Description:
        "Com esta aplicação, tive por objetivo desenvolver uma dashboard para desenvolvedores com as features de cadastro e login. Nesta dashboard, era possível que o desenvolvedor cadastrasse,editasse e deletasse as suas tecnologias.",

      Aplicacao: "Aplicação",
      Repositorio: "Repositório",
      Local: "Onde Moro ?",
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
      project1Description:
        "In this project, I created an inventory control system for clothing e-commerce, with features for administrators and users, I developed registration screens, login screens, product registrations and specific product screens",
      project2Description:
        "In this application for registering customers and contacts, I used an API of my own creation. On the front-end, I developed a customer registration screen, login screen and a dashboard where the customer is able to manage their contacts (CRUD)",
      project3Description:
        "This REST API is responsible for managing restaurant services. Through the application, it is possible to register restaurants and customers interested in making reservations at restaurants. In addition, you can make a reservation and check the respective available times in the restaurant's database.",
      project4Description:
        "With this application, I aimed to develop a dashboard for developers with registration and login features. In this dashboard, it was possible for the developer to register, edit and delete their technologies.",
      Aplicacao: "Application",
      Repositorio: "Repository",
      Local: "Where do I live ?",
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
