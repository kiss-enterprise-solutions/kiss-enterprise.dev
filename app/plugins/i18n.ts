import { defineNuxtPlugin } from "nuxt/app";
import { createI18n } from "vue-i18n";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
      ru: {
        company: {
          name: "KISS Enterprise Solutions",
          slogan:
            "Разрабатываем корпоративные системы без избыточной сложности и дорогих лицензий",
        },
        hero: {
          contact: "Связаться с нами",
          advantages: "Узнать больше",
        },
        advantages: {
          whyUs: {
            title: "Почему мы?",
            subtitle:
              "Мы придерживаемся принципа KISS (Keep It Simple, Stupid).",
            listTitle: "Преимущества принципа KISS:",
            list: [
              "системы легко поддерживать и развивать",
              "масштабируются вместе с ростом компании",
              "понятная архитектура без технического долга",
            ],
          },
          trust: {
            title: "Почему нам доверяют?",
            subtitle:
              "При разработке мы учитываем следующие особенности наших продуктов:",
            list: [
              "Open-source стек",
              "прозрачная и документированная архитектура",
              "отсутствие vendor lock-in",
              "возможность on-premise",
              "возможность дальнейшей разработки другими командами",
            ],
          },
        },
        features: {
          title: "Спектр услуг",
          subtitle:
            "Мы предоставляем спектр различных услуг по разработке и поддержке информационных систем для вашего бизнеса",
          list: [
            {
              title: "Разработка профильных веб-систем",
              subtitle:
                "CRM, системы учета, аналитические панели, системы автоматизации",
            },
            {
              title: "Разработка внутренних порталов",
              subtitle:
                "портал сотрудников, клиентские кабинеты, базы знаний, сервис-порталы",
            },
            {
              title: "Размещение и обслуживание в облаке",
              subtitle:
                "VPS / cloud deployment, мониторинг, обновления, резервное копирование",
            },
            {
              title: "On-premise решения",
              subtitle:
                "поставка и внедрение систем, размещение внутри инфраструктуры предприятия, настройка и сопровождение",
            },
          ],
        },
        form: {
          title: "Оставьте заявку на консультацию",
          subtitle:
            "Мы свяжемся с вами, чтобы обсудить все интересующие вас вопросы и подобрать решения, подходящие именно вашему бизнесу",
        },
        locale: {
          title: "Сменить локализацию",
        },
      },
      en: {
        company: {
          name: "KISS Enterprise Solutions",
          slogan:
            "We build enterprise systems without unnecessary complexity or expensive licenses",
        },
        hero: {
          contact: "Contact us",
          advantages: "Learn more",
        },
        advantages: {
          whyUs: {
            title: "Why us?",
            subtitle: "We follow the KISS (Keep It Simple, Stupid) principle.",
            listTitle: "Benefits of the KISS principle:",
            list: [
              "easy to maintain and evolve",
              "scales with your business growth",
              "clear architecture without technical debt",
            ],
          },
          trust: {
            title: "Why do clients trust us?",
            subtitle:
              "During development, we focus on the following product qualities:",
            list: [
              "open-source technology stack",
              "transparent and well-documented architecture",
              "no vendor lock-in",
              "on-premise support",
              "can be extended by other teams",
            ],
          },
        },
        features: {
          title: "Our services",
          subtitle:
            "We provide a wide range of services for developing and maintaining information systems for your business",
          list: [
            {
              title: "Custom web system development",
              subtitle:
                "CRM systems, accounting systems, analytics dashboards, automation tools",
            },
            {
              title: "Internal portal development",
              subtitle:
                "employee portals, client dashboards, knowledge bases, service portals",
            },
            {
              title: "Cloud hosting and maintenance",
              subtitle: "VPS / cloud deployment, monitoring, updates, backups",
            },
            {
              title: "On-premise solutions",
              subtitle:
                "system delivery and implementation, deployment within enterprise infrastructure, setup and support",
            },
          ],
        },
        form: {
          title: "Request a consultation",
          subtitle:
            "We will get in touch with you to discuss your needs and find solutions tailored specifically to your business",
        },
        locale: {
          title: "Change locale",
        },
      },
    },
  });

  vueApp.use(i18n);
});
