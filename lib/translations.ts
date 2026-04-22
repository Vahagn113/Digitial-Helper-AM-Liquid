export type Language = 'en' | 'am' | 'ru';

export const translations = {
  en: {
    nav: {
      services: "Services",
      pricing: "Pricing",
      whyUs: "Why Us",
      contact: "Contact",
      getHelp: "Get Help"
    },
    hero: {
      badge: "DIGITAL SERVICES FOR ARMENIA",
      headline: "Fix Your CV. Grow Your Business. Solve Digital Problems.",
      subheadline: "We help you get hired, improve your business, and solve tech issues — fast and affordable.",
      ctaPrimary: "Get Help Now",
      ctaSecondary: "Contact on Telegram",
      new: "New"
    },
    services: {
      badge: "Capabilities",
      title: "How We Can Help You",
      subtitle: "Tailored digital solutions for your career and business growth.",
      cv: {
        title: "CV & Job Help",
        items: ["CV creation & improvement", "Job applications (we apply)", "LinkedIn optimization"],
        desc: "Every pixel is intentional. We build yours to outperform them all."
      },
      business: {
        title: "Business Digital Fix",
        items: ["Instagram optimization", "Bio, highlights, structure", "Basic marketing setup"],
        desc: "Design so precise, it feels inevitable. Refined and data-backed."
      },
      website: {
        title: "Website Creation",
        items: ["Simple one-page websites", "Mobile-friendly design", "Clean & modern look"],
        desc: "Layouts informed by real conversion data. Results you can measure."
      },
      tech: {
        title: "Tech Help",
        items: ["Excel & data help", "PC & software setup", "General problem solving"],
        desc: "Enterprise-grade problem solving comes standard. Secure and fast."
      }
    },
    pricing: {
      badge: "Pricing",
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the package that fits your needs. No hidden fees.",
      mostPopular: "Most Popular",
      starting: "Starting",
      plans: {
        basic: {
          name: "Basic",
          price: "7,000 AMD",
          features: ["CV Fix", "5 job applications", "Email support"],
          cta: "Start Basic"
        },
        standard: {
          name: "Standard",
          price: "15,000 AMD",
          features: ["CV + LinkedIn Fix", "15 job applications", "Priority support", "Interview tips"],
          cta: "Get Standard"
        },
        premium: {
          name: "Premium",
          price: "30,000 AMD",
          features: ["Full career support", "30 job applications", "1-on-1 consultation", "Cover letter template"],
          cta: "Go Premium"
        }
      },
      business: {
        title: "Business Package",
        desc: "Instagram setup + content plan",
        price: "25,000 AMD"
      },
      webDev: {
        title: "Website Creation",
        desc: "Simple landing page for your brand",
        price: "40,000 AMD"
      }
    },
    whyUs: {
      badge: "Why Us",
      title: "Why Choose Digital Helper AM?",
      items: [
        "Fast results — we don't waste your time",
        "Affordable pricing for everyone",
        "Personalized help tailored to your goals",
        "Real problem solving, not just advice",
        "Focus on results: interviews, clients, growth"
      ],
      chat: {
        status: "Active Now",
        msg1: "Hi! How can we help you today?",
        msg2: "I need to fix my CV and find a job in marketing.",
        msg3: "Perfect! We have a Standard package that includes CV fix and 15 applications. We can start today."
      },
      stats: {
        launched: "Sites launched",
        satisfaction: "Client satisfaction",
        conversions: "More conversions",
        delivery: "Average delivery"
      }
    },
    testimonials: {
      badge: "What They Say",
      title: "Don't take our word for it.",
      items: [
        {
          text: "Helped me fix my CV and I got an interview in just 1 week! Highly recommended for job seekers.",
          author: "Anna S.",
          role: "Marketing Specialist"
        },
        {
          text: "Improved my Instagram page structure and bio. I started getting new clients almost immediately.",
          author: "Karen M.",
          role: "Small Business Owner"
        }
      ]
    },
    contact: {
      badge: "Contact",
      title: "Your next big thing starts here.",
      subtitle: "Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.",
      cta: "Book a Strategy Call",
      telegram: "Telegram",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      footer: {
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact",
        rights: "© 2024 DIGITAL HELPER AM - ALL RIGHTS RESERVED.",
        tagline: "Your partner in solving digital and job problems"
      }
    }
  },
  am: {
    nav: {
      services: "Ծառայություններ",
      pricing: "Գներ",
      whyUs: "Ինչու մենք",
      contact: "Կապ",
      getHelp: "Օգնություն"
    },
    hero: {
      badge: "Թվային ծառայություններ Հայաստանի համար",
      headline: "Ուղղեք ձեր CV-ն: Զարգացրեք ձեր բիզնեսը: Լուծեք թվային խնդիրները:",
      subheadline: "Մենք օգնում ենք ձեզ աշխատանք գտնել, բարելավել ձեր բիզնեսը և լուծել տեխնիկական խնդիրները՝ արագ և մատչելի:",
      ctaPrimary: "Ստանալ օգնություն հիմա",
      ctaSecondary: "Կապվել Telegram-ով",
      new: "Նոր"
    },
    services: {
      badge: "Հնարավորություններ",
      title: "Ինչպես կարող ենք օգնել ձեզ",
      subtitle: "Անհատական թվային լուծումներ ձեր կարիերայի և բիզնեսի աճի համար:",
      cv: {
        title: "CV և աշխատանքի օգնություն",
        items: ["CV-ի ստեղծում և բարելավում", "Աշխատանքի հայտերի ուղարկում", "LinkedIn-ի օպտիմալացում"],
        desc: "Յուրաքանչյուր մանրուք կարևոր է: Մենք կստեղծենք ձեր CV-ն այնպես, որ այն լինի լավագույնը:"
      },
      business: {
        title: "Բիզնեսի թվային շտկում",
        items: ["Instagram-ի օպտիմալացում", "Bio, highlights, կառուցվածք", "Մարքեթինգային կարգավորումներ"],
        desc: "Ճշգրիտ դիզայն և հստակ ռազմավարություն ձեր բիզնեսի համար:"
      },
      website: {
        title: "Կայքերի ստեղծում",
        items: ["Մեկ էջանոց կայքեր", "Բջջայինների համար հարմար", "Ժամանակակից դիզայն"],
        desc: "Կայքեր, որոնք հիմնված են տվյալների վրա և ապահովում են իրական արդյունքներ:"
      },
      tech: {
        title: "Տեխնիկական օգնություն",
        items: ["Excel և տվյալների օգնություն", "Համակարգչի կարգավորում", "Ընդհանուր խնդիրների լուծում"],
        desc: "Բարդ խնդիրների արագ և պրոֆեսիոնալ լուծումներ:"
      }
    },
    pricing: {
      badge: "Գնացուցակ",
      title: "Պարզ և թափանցիկ գներ",
      subtitle: "Ընտրեք ձեր կարիքներին համապատասխան փաթեթը: Առանց թաքնված վճարների:",
      mostPopular: "Ամենահայտնի",
      starting: "Սկսած",
      plans: {
        basic: {
          name: "Բազային",
          price: "7,000 դրամ",
          features: ["CV-ի շտկում", "5 աշխատանքի հայտ", "Էլ. փոստով աջակցություն"],
          cta: "Սկսել Բազայինը"
        },
        standard: {
          name: "Ստանդարտ",
          price: "15,000 դրամ",
          features: ["CV + LinkedIn-ի շտկում", "15 աշխատանքի հայտ", "Առաջնահերթ աջակցություն", "Հարցազրույցի խորհուրդներ"],
          cta: "Ստանալ Ստանդարտը"
        },
        premium: {
          name: "Պրեմիում",
          price: "30,000 դրամ",
          features: ["Ամբողջական կարիերայի աջակցություն", "30 աշխատանքի հայտ", "1-ը-1 խորհրդատվություն", "Ուղեկցող նամակի ձևանմուշ"],
          cta: "Անցնել Պրեմիումին"
        }
      },
      business: {
        title: "Բիզնես փաթեթ",
        desc: "Instagram-ի կարգավորում + բովանդակության պլան",
        price: "25,000 դրամ"
      },
      webDev: {
        title: "Կայքի ստեղծում",
        desc: "Landing էջ ձեր բրենդի համար",
        price: "40,000 դրամ"
      }
    },
    whyUs: {
      badge: "Ինչու մենք",
      title: "Ինչու՞ ընտրել Digital Helper AM-ը",
      items: [
        "Արագ արդյունքներ — մենք չենք վատնում ձեր ժամանակը",
        "Մատչելի գներ բոլորի համար",
        "Անհատական մոտեցում ձեր նպատակներին",
        "Իրական խնդիրների լուծում, ոչ միայն խորհուրդներ",
        "Կենտրոնացում արդյունքի վրա"
      ],
      chat: {
        status: "Ակտիվ է",
        msg1: "Ողջույն: Ինչպե՞ս կարող ենք օգնել ձեզ այսօր:",
        msg2: "Ինձ պետք է ուղղել CV-ն և աշխատանք գտնել մարքեթինգի ոլորտում:",
        msg3: "Հիանալի է: Մենք ունենք Ստանդարտ փաթեթ, որը ներառում է CV-ի շտկում և 15 հայտ: Կարող ենք սկսել այսօր:"
      },
      stats: {
        launched: "Գործարկված կայքեր",
        satisfaction: "Հաճախորդների գոհունակություն",
        conversions: "Բարձր արդյունքներ",
        delivery: "Միջին ժամկետ"
      }
    },
    testimonials: {
      badge: "Հաճախորդների կարծիքը",
      title: "Մեր աշխատանքը խոսում է մեր փոխարեն:",
      items: [
        {
          text: "Օգնեցին ուղղել CV-ս և ես հարցազրույցի հրավեր ստացա ընդամենը 1 շաբաթում: Խորհուրդ եմ տալիս բոլորին:",
          author: "Աննա Ս.",
          role: "Մարքեթինգի մասնագետ"
        },
        {
          text: "Բարելավեցին իմ Instagram-ի էջը: Սկսեցի նոր հաճախորդներ ստանալ գրեթե անմիջապես:",
          author: "Կարեն Մ.",
          role: "Բիզնեսի սեփականատեր"
        }
      ]
    },
    contact: {
      badge: "Կապ",
      title: "Ձեր հաջորդ մեծ հաջողությունը սկսվում է այստեղ:",
      subtitle: "Ամրագրեք անվճար խորհրդատվություն: Տեսեք, թե ինչ կարող է անել պրոֆեսիոնալ դիզայնը ձեզ համար:",
      cta: "Ամրագրել խորհրդատվություն",
      telegram: "Telegram",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      footer: {
        privacy: "Գաղտնիություն",
        terms: "Պայմաններ",
        contact: "Կապ",
        rights: "© 2024 DIGITAL HELPER AM - Բոլոր իրավունքները պաշտպանված են:",
        tagline: "Ձեր գործընկերը թվային և աշխատանքային խնդիրների լուծման գործում"
      }
    }
  },
  ru: {
    nav: {
      services: "Услуги",
      pricing: "Цены",
      whyUs: "Почему мы",
      contact: "Контакты",
      getHelp: "Помощь"
    },
    hero: {
      badge: "ЦИФРОВЫЕ УСЛУГИ ДЛЯ АРМЕНИИ",
      headline: "Исправьте резюме. Развивайте бизнес. Решайте цифровые задачи.",
      subheadline: "Мы помогаем найти работу, улучшить бизнес и решить технические проблемы — быстро и доступно.",
      ctaPrimary: "Получить помощь",
      ctaSecondary: "Связаться в Telegram",
      new: "Новинка"
    },
    services: {
      badge: "Возможности",
      title: "Как мы можем вам помочь",
      subtitle: "Индивидуальные цифровые решения для вашей карьеры и роста бизнеса.",
      cv: {
        title: "Резюме и поиск работы",
        items: ["Создание и улучшение резюме", "Подача заявок за вас", "Оптимизация LinkedIn"],
        desc: "Каждая деталь важна. Мы создаем резюме, которое выделит вас среди конкурентов."
      },
      business: {
        title: "Цифровое развитие бизнеса",
        items: ["Оптимизация Instagram", "Био, хайлайтс, структура", "Настройка маркетинга"],
        desc: "Точный дизайн и стратегия, которые сделают ваш бренд незабываемым."
      },
      website: {
        title: "Создание сайтов",
        items: ["Одностраничные сайты", "Адаптация под мобильные", "Современный дизайн"],
        desc: "Сайты, основанные на данных, которые приносят реальную прибыль."
      },
      tech: {
        title: "Техническая помощь",
        items: ["Excel и работа с данными", "Настройка ПО", "Решение технических проблем"],
        desc: "Профессиональное решение сложных задач быстро и надежно."
      }
    },
    pricing: {
      badge: "Цены",
      title: "Простые и прозрачные цены",
      subtitle: "Выберите пакет, который подходит вам. Никаких скрытых платежей.",
      mostPopular: "Популярный",
      starting: "От",
      plans: {
        basic: {
          name: "Базовый",
          price: "7,000 AMD",
          features: ["Исправление резюме", "5 заявок на работу", "Email поддержка"],
          cta: "Начать Базовый"
        },
        standard: {
          name: "Стандартный",
          price: "15,000 AMD",
          features: ["Резюме + LinkedIn", "15 заявок на работу", "Приоритетная поддержка", "Советы по интервью"],
          cta: "Выбрать Стандартный"
        },
        premium: {
          name: "Премиум",
          price: "30,000 AMD",
          features: ["Полная поддержка", "30 заявок на работу", "1-на-1 консультация", "Шаблон письма"],
          cta: "Перейти на Премиум"
        }
      },
      business: {
        title: "Бизнес-пакет",
        desc: "Настройка Instagram + контент-план",
        price: "25,000 AMD"
      },
      webDev: {
        title: "Создание сайта",
        desc: "Лендинг для вашего бренда",
        price: "40,000 AMD"
      }
    },
    whyUs: {
      badge: "Почему мы",
      title: "Почему выбирают Digital Helper AM?",
      items: [
        "Быстрые результаты — мы ценим ваше время",
        "Доступные цены для каждого",
        "Персонализированный подход к целям",
        "Решение реальных проблем, а не советы",
        "Фокус на результате: рост и успех"
      ],
      chat: {
        status: "В сети",
        msg1: "Привет! Чем мы можем вам помочь сегодня?",
        msg2: "Мне нужно исправить резюме и найти работу в маркетинге.",
        msg3: "Отлично! У нас есть Стандартный пакет, который включает исправление резюме и 15 заявок. Можем начать сегодня."
      },
      stats: {
        launched: "Запущенных сайтов",
        satisfaction: "Довольных клиентов",
        conversions: "Больше конверсий",
        delivery: "Средний срок"
      }
    },
    testimonials: {
      badge: "Отзывы",
      title: "Наши результаты говорят сами за себя.",
      items: [
        {
          text: "Помогли исправить резюме, и я получила приглашение на интервью всего через неделю! Рекомендую.",
          author: "Анна С.",
          role: "Маркетолог"
        },
        {
          text: "Улучшили мой Instagram. Я начал получать новых клиентов почти сразу после правок.",
          author: "Карен М.",
          role: "Владелец бизнеса"
        }
      ]
    },
    contact: {
      badge: "Контакты",
      title: "Ваш следующий большой успех начинается здесь.",
      subtitle: "Запишитесь на бесплатную консультацию. Узнайте, что профессиональный подход может дать вам.",
      cta: "Записаться на сессию",
      telegram: "Telegram",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      footer: {
        privacy: "Конфиденциальность",
        terms: "Условия",
        contact: "Контакты",
        rights: "© 2024 DIGITAL HELPER AM - ВСЕ ПРАВА ЗАЩИЩЕНЫ.",
        tagline: "Ваш партнер в решении цифровых и карьерных задач"
      }
    }
  }
};
