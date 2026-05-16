window.projectsData = {
    'proj1': {
        title: { pt: 'App de Viagens', en: 'Travel App', es: 'App de Viajes', fr: 'App de Voyage', de: 'Reise-App', it: 'App Viaggi' },
        desc: { 
            pt: 'Uma plataforma completa para viajantes modernos. Este projeto resolve o problema de organizar múltiplos destinos, reservas e atividades em um único lugar, permitindo colaboração em tempo real com amigos.',
            en: 'A complete platform for modern travelers. This project solves the problem of organizing multiple destinations, bookings, and activities in one place, allowing real-time collaboration with friends.'
        },
        tech: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Cloudinary'],
        features: {
            pt: ['Planejamento de rotas otimizado', 'Gestão de orçamento compartilhado', 'Galeria de fotos colaborativa', 'Modo de visualização offline'],
            en: ['Optimized route planning', 'Shared budget management', 'Collaborative photo gallery', 'Offline viewing mode']
        },
        image: 'assets/travel_app.png',
        link: '#',
        github: '#',
        year: '2024',
        status: { pt: 'Concluído', en: 'Completed' }
    },
    'proj2': {
        title: { pt: 'Spark Tracker', en: 'Spark Tracker', es: 'Spark Tracker', fr: 'Spark Tracker', de: 'Spark Tracker', it: 'Spark Tracker' },
        desc: {
            pt: 'Desenvolvido para jogadores de Magic: The Gathering, o Spark Tracker é um contador de vida robusto que foca na experiência do usuário durante partidas competitivas e casuais.',
            en: 'Developed for Magic: The Gathering players, Spark Tracker is a robust life counter that focuses on user experience during competitive and casual matches.'
        },
        tech: ['React Native', 'Firebase', 'Redux', 'Styled Components'],
        features: {
            pt: ['Histórico detalhado de vida', 'Suporte para Commander e Multiplayer', 'Temas baseados nas cores do Magic', 'Sincronização em tempo real'],
            en: ['Detailed life history', 'Commander and Multiplayer support', 'Magic color-based themes', 'Real-time synchronization']
        },
        image: 'assets/spark_tracker.png',
        link: '#',
        github: '#',
        year: '2023',
        status: { pt: 'Concluído', en: 'Completed' }
    }
};

window.currentLang = localStorage.getItem('language') || 'pt';

document.addEventListener('DOMContentLoaded', () => {
    // --- Translations ---
    const translations = {
        'pt': {
            'title': 'William Almeida | Desenvolvedor de Software',
            'nav-about': 'Sobre',
            'nav-projects': 'Projetos',
            'nav-experience': 'Experiência',
            'hero-welcome': 'Bem-vindo ao meu portfólio',
            'hero-greeting': 'Olá, eu sou',
            'hero-role': 'Desenvolvedor de Software',
            'hero-desc': 'Tenho 20 anos e sou apaixonado por criar soluções web elegantes e funcionais.',
            'hero-stat-exp': 'Anos de<br>Experiência',
            'hero-stat-projects': 'Projetos<br>Entregues',
            'about-title-1': 'Sobre',
            'about-title-2': 'Mim',
            'about-subtitle': 'Transformando ideias em experiências digitais excepcionais',
            'about-p1': 'Olá! Sou o William. Aos 20 anos, tenho uma profunda paixão por tecnologia e desenvolvimento de software. Atualmente, focado em criar aplicações web modernas e completas.',
            'about-p2': 'Uma das minhas coisas favoritas para fazer no meu tempo livre é construir novas arquiteturas para me desafiar com novos padrões de desenvolvimento. Além disso, estou sempre interessado em aprender novas tecnologias.',
            'about-btn': 'Ver projetos',
            'skills-title-1': 'Habilidades',
            'skills-title-2': 'Técnicas',
            'skills-subtitle': 'Minhas principais proficiências em desenvolvimento.',
            'skills-stack-title': 'Ferramentas & Tecnologias',
            'projects-title-1': 'Meus',
            'projects-title-2': 'Projetos',
            'projects-subtitle': 'Explore alguns dos meus trabalhos recentes, demonstrando minhas habilidades.',
            'proj1-title': 'App de Viagens',
            'proj1-desc': 'Aplicativo completo de planejamento e gestão de viagens com roteiros inteligentes e compartilhamento de experiências.',
            'proj1-f1': 'Planejamento inteligente de roteiros',
            'proj1-f2': 'Compartilhamento e colaboração em grupo',
            'proj1-f3': 'Modo offline',
            'proj-visit': 'Visitar Website',
            'proj-details': 'Ver Detalhes',
            'proj2-title': 'Spark Tracker',
            'proj2-desc': 'Contador de vida avançado para Magic: The Gathering com suporte multiplayer, estatísticas detalhadas e personalização.',
            'proj2-f1': 'Contador para até 6 jogadores',
            'proj2-f2': 'Acompanhamento de dano de comandante',
            'proj2-f3': 'Temas personalizáveis',
            'proj-app': 'Visitar App',
            'modal-about': 'Sobre o Projeto',
            'modal-features': 'Principais Recursos',
            'modal-status': 'Status',
            'modal-live': 'Live',
            'modal-year': 'Ano',
            'exp-title-1': 'Minha',
            'exp-title-2': 'Jornada',
            'exp1-role': 'Desenvolvedor Full Stack Freelancer',
            'exp-freelance': 'Autônomo',
            'exp1-date': '2023 - Presente',
            'exp1-desc': 'Construção de aplicações web sob medida para clientes, com foco em design responsivo e backends de alta performance. Implementação de soluções de e-commerce e landing pages otimizadas.',
            'exp2-role': 'Estagiário de Desenvolvimento Frontend',
            'exp2-desc': 'Auxiliei no desenvolvimento de interfaces de usuário modernas. Ganhei experiência prática com arquiteturas baseadas em componentes e metodologias ágeis de desenvolvimento.',
            'footer-rights': '© 2026 William Almeida. Todos os direitos reservados.'
        },
        'en': {
            'title': 'William Almeida | Software Developer',
            'nav-about': 'About',
            'nav-projects': 'Projects',
            'nav-experience': 'Experience',
            'hero-welcome': 'Welcome to my portfolio',
            'hero-greeting': "Hi, I'm",
            'hero-role': 'Software Developer',
            'hero-desc': "I'm 20 years old and passionate about creating elegant and functional web solutions.",
            'hero-stat-exp': 'Years of<br>Experience',
            'hero-stat-projects': 'Projects<br>Delivered',
            'about-title-1': 'About',
            'about-title-2': 'Me',
            'about-subtitle': 'Transforming ideas into exceptional digital experiences',
            'about-p1': "Hello! I'm William. At 20, I have a deep passion for technology and software development. Currently focused on creating modern and complete web applications.",
            'about-p2': "One of my favorite things to do in my free time is building new architectures to challenge myself with new development patterns. Also, I'm always interested in learning new technologies.",
            'about-btn': 'View projects',
            'skills-title-1': 'Technical',
            'skills-title-2': 'Skills',
            'skills-subtitle': 'My main development proficiencies.',
            'skills-stack-title': 'Tools & Technologies',
            'projects-title-1': 'My',
            'projects-title-2': 'Projects',
            'projects-subtitle': 'Explore some of my recent work, demonstrating my skills.',
            'proj1-title': 'Travel App',
            'proj1-desc': 'Full travel planning and management app with smart itineraries and experience sharing.',
            'proj1-f1': 'Smart itinerary planning',
            'proj1-f2': 'Group sharing and collaboration',
            'proj1-f3': 'Offline mode',
            'proj-visit': 'Visit Website',
            'proj-details': 'View Details',
            'proj2-title': 'Spark Tracker',
            'proj2-desc': 'Advanced life counter for Magic: The Gathering with multiplayer support, detailed stats, and customization.',
            'proj2-f1': 'Counter for up to 6 players',
            'proj2-f2': 'Commander damage tracking',
            'proj2-f3': 'Customizable themes',
            'proj-app': 'Visit App',
            'modal-about': 'About the Project',
            'modal-features': 'Key Features',
            'modal-status': 'Status',
            'modal-live': 'Live',
            'modal-year': 'Year',
            'exp-title-1': 'My',
            'exp-title-2': 'Journey',
            'exp1-role': 'Freelance Full Stack Developer',
            'exp-freelance': 'Self-employed',
            'exp1-date': '2023 - Present',
            'exp1-desc': 'Building custom web applications for clients, focusing on responsive design and high-performance backends. Implementation of e-commerce solutions and optimized landing pages.',
            'exp2-role': 'Frontend Development Intern',
            'exp2-desc': 'Assisted in the development of modern user interfaces. Gained practical experience with component-based architectures and agile development methodologies.',
            'footer-rights': '© 2026 William Almeida. All rights reserved.'
        },
        'es': {
            'title': 'William Almeida | Desarrollador de Software',
            'nav-about': 'Sobre mí',
            'nav-projects': 'Proyectos',
            'nav-experience': 'Experiencia',
            'hero-welcome': 'Bienvenido a mi portafolio',
            'hero-greeting': 'Hola, soy',
            'hero-role': 'Desarrollador de Software',
            'hero-desc': 'Tengo 20 años y me apasiona crear soluciones web elegantes y funcionales.',
            'hero-stat-exp': 'Años de<br>Experiencia',
            'hero-stat-projects': 'Proyectos<br>Entregados',
            'about-title-1': 'Sobre',
            'about-title-2': 'Mí',
            'about-subtitle': 'Transformando ideas en experiencias digitales excepcionales',
            'about-p1': '¡Hola! Soy William. A los 20 años, tengo una profunda pasión por la tecnología y el desarrollo de software. Actualmente enfocado en crear aplicaciones web modernas.',
            'about-p2': 'Una de mis cosas favoritas en mi tiempo libre é construir nuevas arquitecturas para desafiarme con novos padrões de desenvolvimento.',
            'about-btn': 'Ver proyectos',
            'skills-title-1': 'Habilidades',
            'skills-title-2': 'Técnicas',
            'skills-subtitle': 'Mis principales competencias en desarrollo.',
            'skills-stack-title': 'Herramientas y Tecnologías',
            'projects-title-1': 'Mis',
            'projects-title-2': 'Proyectos',
            'projects-subtitle': 'Explora algunos de mis trabajos recientes.',
            'proj1-title': 'App de Viajes',
            'proj1-desc': 'Aplicación completa de planificación de viajes con itinerarios inteligentes.',
            'proj1-f1': 'Planificación inteligente',
            'proj1-f2': 'Colaboración en grupo',
            'proj1-f3': 'Modo offline',
            'proj-visit': 'Visitar Sitio',
            'proj2-title': 'Spark Tracker',
            'proj2-desc': 'Contador de vida avanzado para Magic: The Gathering con estadísticas.',
            'proj2-f1': 'Hasta 6 jugadores',
            'proj2-f2': 'Daño de comandante',
            'proj2-f3': 'Temas personalizados',
            'proj-app': 'Visitar App',
            'exp-title-1': 'Mi',
            'exp-title-2': 'Trayectoria',
            'exp1-role': 'Desarrollador Full Stack Freelance',
            'exp-freelance': 'Autónomo',
            'exp1-date': '2023 - Presente',
            'exp1-desc': 'Construcción de aplicaciones web a medida, enfoque en diseño responsivo y alto rendimiento.',
            'exp2-role': 'Pasante de Desarrollo Frontend',
            'exp2-desc': 'Asistí en el desarrollo de interfaces modernas con arquitecturas basadas en componentes.',
            'footer-rights': '© 2026 William Almeida. Todos los derechos reservados.'
        },
        'fr': {
            'title': 'William Almeida | Développeur Logiciel',
            'nav-about': 'À propos',
            'nav-projects': 'Projets',
            'nav-experience': 'Expérience',
            'hero-welcome': 'Bienvenue sur mon portfolio',
            'hero-greeting': 'Bonjour, je suis',
            'hero-role': 'Développeur Logiciel',
            'hero-desc': "J'ai 20 ans et je suis passionné par la création de solutions web élégantes et fonctionnelles.",
            'hero-stat-exp': "Années d'<br>Expérience",
            'hero-stat-projects': 'Projets<br>Livrés',
            'about-title-1': 'À propos',
            'about-title-2': 'de moi',
            'about-subtitle': 'Transformer des idées en expériences numériques exceptionnelles',
            'about-p1': "Salut! Je suis William. À 20 ans, j'ai une profonde passion pour la technologie et le développement logiciel.",
            'about-p2': "L'une de mes activités préférées pendant mon temps libre est de construire de nouvelles architectures.",
            'about-btn': 'Voir les projets',
            'skills-title-1': 'Compétences',
            'skills-title-2': 'Techniques',
            'skills-subtitle': 'Mes principales compétences en développement.',
            'skills-stack-title': 'Outils & Technologies',
            'projects-title-1': 'Mes',
            'projects-title-2': 'Projets',
            'projects-subtitle': 'Découvrez certains de mes travaux récents.',
            'proj1-title': 'App de Voyage',
            'proj1-desc': 'Application complète de planification de voyage avec itinéraires intelligents.',
            'proj1-f1': 'Planification intelligente',
            'proj1-f2': 'Collaboration de groupe',
            'proj1-f3': 'Mode hors ligne',
            'proj-visit': 'Visiter le site',
            'proj2-title': 'Spark Tracker',
            'proj2-desc': 'Compteur de vie avancé pour Magic: The Gathering avec statistiques.',
            'proj2-f1': 'Jusqu\'à 6 joueurs',
            'proj2-f2': 'Suivi des dégâts',
            'proj2-f3': 'Thèmes personnalisables',
            'proj-app': 'Visiter l\'app',
            'exp-title-1': 'Mon',
            'exp-title-2': 'Parcours',
            'exp1-role': 'Développeur Full Stack Freelance',
            'exp-freelance': 'Indépendant',
            'exp1-date': '2023 - Présent',
            'exp1-desc': 'Construction d\'applications web sur mesure, focus sur le design réactif.',
            'exp2-role': 'Stagiaire Développeur Frontend',
            'exp2-desc': 'Aide au développement d\'interfaces modernes basées sur les composants.',
            'footer-rights': '© 2026 William Almeida. Tous droits réservés.'
        },
        'de': {
            'title': 'William Almeida | Softwareentwickler',
            'nav-about': 'Über mich',
            'nav-projects': 'Projekte',
            'nav-experience': 'Erfahrung',
            'hero-welcome': 'Willkommen in meinem Portfolio',
            'hero-greeting': 'Hallo, ich bin',
            'hero-role': 'Softwareentwickler',
            'hero-desc': 'Ich bin 20 Jahre alt und entwickle mit Leidenschaft elegante und funktionale Web-Lösungen.',
            'hero-stat-exp': 'Jahre<br>Erfahrung',
            'hero-stat-projects': 'Abgeschlossene<br>Projekte',
            'about-title-1': 'Über',
            'about-title-2': 'mich',
            'about-subtitle': 'Ideen in außergewöhnliche digitale Erlebnisse verwandeln',
            'about-p1': 'Hallo! Ich bin William. Mit 20 Jahren habe ich eine große Leidenschaft für Technologie.',
            'about-p2': 'In meiner Freizeit entwickle ich am liebsten neue Architekturen.',
            'about-btn': 'Projekte ansehen',
            'skills-title-1': 'Technische',
            'skills-title-2': 'Fähigkeiten',
            'skills-subtitle': 'Meine wichtigsten Entwicklungskompetenzen.',
            'skills-stack-title': 'Tools & Technologien',
            'projects-title-1': 'Meine',
            'projects-title-2': 'Projekte',
            'projects-subtitle': 'Entdecken Sie einige meiner aktuellen Arbeiten.',
            'proj1-title': 'Reise-App',
            'proj1-desc': 'Vollständige App zur Reiseplanung mit intelligenten Routen.',
            'proj1-f1': 'Intelligente Planung',
            'proj1-f2': 'Gruppen-Zusammenarbeit',
            'proj1-f3': 'Offline-Modus',
            'proj-visit': 'Website besuchen',
            'proj2-title': 'Spark Tracker',
            'proj2-desc': 'Erweiterter Lebenspunktezähler für Magic: The Gathering.',
            'proj2-f1': 'Bis zu 6 Spieler',
            'proj2-f2': 'Commander-Schaden',
            'proj2-f3': 'Anpassbare Themen',
            'proj-app': 'App besuchen',
            'exp-title-1': 'Mein',
            'exp-title-2': 'Werdegang',
            'exp1-role': 'Freelance Full Stack Entwickler',
            'exp-freelance': 'Selbstständig',
            'exp1-date': '2023 - Heute',
            'exp1-desc': 'Erstellung maßgeschneiderter Webanwendungen com fokus auf Responsive Design.',
            'exp2-role': 'Praktikant Frontend-Entwicklung',
            'exp2-desc': 'Unterstützung bei der Entwicklung moderner Benutzeroberflächen.',
            'footer-rights': '© 2026 William Almeida. Alle Rechte vorbehalten.'
        },
        'it': {
            'title': 'William Almeida | Sviluppatore Software',
            'nav-about': 'Chi sono',
            'nav-projects': 'Progetti',
            'nav-experience': 'Esperienza',
            'hero-welcome': 'Benvenuti nel mio portfolio',
            'hero-greeting': 'Ciao, sono',
            'hero-role': 'Sviluppatore Software',
            'hero-desc': 'Ho 20 anni e sono appassionato nella creazione di soluzioni web eleganti e funzionali.',
            'hero-stat-exp': 'Anni di<br>Esperienza',
            'hero-stat-projects': 'Progetti<br>Consegnati',
            'about-title-1': 'Chi',
            'about-title-2': 'Sono',
            'about-subtitle': 'Trasformare idee in esperienze digitali eccezionali',
            'about-p1': 'Ciao! Sono William. A 20 anni, ho una profonda passione per la tecnologia.',
            'about-p2': 'Una delle mie cose preferite nel tempo libero é costruire nuove architetture.',
            'about-btn': 'Vedi progetti',
            'skills-title-1': 'Competenze',
            'skills-title-2': 'Tecniche',
            'skills-subtitle': 'Le mie principali competenze nello sviluppo.',
            'skills-stack-title': 'Strumenti e Tecnologie',
            'projects-title-1': 'I miei',
            'projects-title-2': 'Progetti',
            'projects-subtitle': 'Esplora alcuni dei miei lavori recenti.',
            'proj1-title': 'App Viaggi',
            'proj1-desc': 'App completa per la pianificazione di viaggi con itinerari intelligenti.',
            'proj1-f1': 'Pianificazione intelligente',
            'proj1-f2': 'Collaborazione di gruppo',
            'proj1-f3': 'Modalità offline',
            'proj-visit': 'Visita il sito',
            'proj2-title': 'Spark Tracker',
            'proj2-desc': 'Contatore di vita avanzato per Magic: The Gathering con statistiche.',
            'proj2-f1': 'Fino a 6 giocatori',
            'proj2-f2': 'Danni del comandante',
            'proj2-f3': 'Temi personalizzabili',
            'proj-app': 'Visita l\'app',
            'exp-title-1': 'Il mio',
            'exp-title-2': 'Percorso',
            'exp1-role': 'Sviluppatore Full Stack Freelance',
            'exp-freelance': 'Autonomo',
            'exp1-date': '2023 - Presente',
            'exp1-desc': 'Costruzione di applicazioni web su misura, focus sul design responsivo.',
            'exp2-role': 'Stagista Sviluppo Frontend',
            'exp2-desc': 'Assistenza nello sviluppo di interfacce moderne basate su componenti.',
            'footer-rights': '© 2026 William Almeida. Tutti i diritti riservati.'
        }
    };

    const newTranslations = {
        'ja': {
            'title': 'William Almeida | ソフトウェア開発者',
            'nav-about': '私について',
            'nav-projects': 'プロジェクト',
            'nav-experience': '経歴',
            'hero-welcome': 'ポートフォリオへようこそ',
            'hero-greeting': 'こんにちは、私は',
            'hero-role': 'ソフトウェア開発者',
            'hero-desc': '私は20歳で、エレガントで機能的なウェブソリューションの作成に情熱を注いでいます。',
            'hero-stat-exp': '年の<br>経験',
            'hero-stat-projects': '完了した<br>プロジェクト',
            'about-title-1': '私に',
            'about-title-2': 'ついて',
            'about-subtitle': 'アイデアを卓越したデジタル体験に変える',
            'about-p1': 'こんにちは！ウィリアムです。20歳で、テクノロジーとソフトウェア開発に深い情熱を持っています。',
            'about-btn': 'プロジェクトを見る',
            'skills-title-1': '技術的な',
            'skills-title-2': 'スキル',
            'projects-title-1': '私の',
            'projects-title-2': 'プロジェクト',
            'proj1-title': '旅行アプリ',
            'proj2-title': 'Spark Tracker',
            'proj-details': '詳細を見る',
            'exp-title-1': '私の',
            'exp-title-2': '歩み',
            'footer-rights': '© 2026 William Almeida. All rights reserved.'
        },
        'ru': {
            'title': 'William Almeida | Разработчик ПО',
            'nav-about': 'Обо мне',
            'nav-projects': 'Проекты',
            'nav-experience': 'Опыт',
            'hero-welcome': 'Добро пожаловать в моё портфолио',
            'hero-greeting': 'Привет, я',
            'hero-role': 'Разработчик программного обеспечения',
            'hero-desc': 'Мне 20 лет, и я увлечен созданием элегантных и функциональных веб-решений.',
            'hero-stat-exp': 'лет<br>опыта',
            'hero-stat-projects': 'проектов<br>сдано',
            'about-title-1': 'Обо',
            'about-title-2': 'мне',
            'about-subtitle': 'Превращение идей в исключительный цифровой опыт',
            'about-btn': 'Посмотреть проекты',
            'skills-title-1': 'Технические',
            'skills-title-2': 'навыки',
            'projects-title-1': 'Мои',
            'projects-title-2': 'проекты',
            'proj1-title': 'Приложение для путешествий',
            'proj2-title': 'Spark Tracker',
            'proj-details': 'Подробнее',
            'exp-title-1': 'Мой',
            'exp-title-2': 'путь',
            'footer-rights': '© 2026 William Almeida. Все права защищены.'
        },
        'zh': {
            'title': 'William Almeida | 软件开发人员',
            'nav-about': '关于我',
            'nav-projects': '项目',
            'nav-experience': '经验',
            'hero-welcome': '欢迎来到我的投资组合',
            'hero-greeting': '你好，我是',
            'hero-role': '软件开发人员',
            'hero-desc': '我今年 20 岁，热衷于创建优雅且实用的网络解决方案。',
            'hero-stat-exp': '年<br>经验',
            'hero-stat-projects': '已交付<br>项目',
            'about-title-1': '关于',
            'about-title-2': '我',
            'about-subtitle': '将创意转化为卓越的数字体验',
            'about-btn': '查看项目',
            'skills-title-1': '技术',
            'skills-title-2': '技能',
            'projects-title-1': '我的',
            'projects-title-2': '项目',
            'proj1-title': '旅游应用',
            'proj2-title': 'Spark Tracker',
            'proj-details': '查看详情',
            'exp-title-1': '我的',
            'exp-title-2': '历程',
            'footer-rights': '© 2026 William Almeida. 版权所有。'
        },
        'ko': {
            'title': 'William Almeida | 소프트웨어 개발자',
            'nav-about': '소개',
            'nav-projects': '프로젝트',
            'nav-experience': '경력',
            'hero-welcome': '제 포트폴리오에 오신 것을 환영합니다',
            'hero-greeting': '안녕하세요, 저는',
            'hero-role': '소프트웨어 개발자',
            'hero-desc': '저는 20살이며 우아하고 기능적인 웹 솔루션을 만드는 데 열정을 가지고 있습니다.',
            'hero-stat-exp': '년 이상의<br>경력',
            'hero-stat-projects': '개의<br>프로젝트 완료',
            'about-title-1': '나에',
            'about-title-2': '대하여',
            'about-subtitle': '아이디어를 뛰어난 디지털 경험으로 전환',
            'about-btn': '프로젝트 보기',
            'skills-title-1': '기술',
            'skills-title-2': '능력',
            'projects-title-1': '나의',
            'projects-title-2': '프로젝트',
            'proj1-title': '여행 앱',
            'proj2-title': 'Spark Tracker',
            'proj-details': '자세히 보기',
            'exp-title-1': '나의',
            'exp-title-2': '여정',
            'footer-rights': '© 2026 William Almeida. 모든 권리 보유.'
        },
        'kp': {
            'title': 'William Almeida | 소프트웨어 개발자',
            'nav-about': '소개',
            'nav-projects': '프로젝트',
            'nav-experience': '경력',
            'hero-welcome': '제 포트폴리오에 오신 것을 환영합니다',
            'hero-greeting': '안녕 하십니까, 저는',
            'hero-role': '소프트웨어 개발자',
            'hero-desc': '저는 20살이며 우아하고 기능적인 웹 솔루션을 만드는 데 열정을 가지고 있습니다.',
            'hero-stat-exp': '년 이상의<br>경력',
            'hero-stat-projects': '개의<br>프로젝트 완료',
            'about-title-1': '나에',
            'about-title-2': '대하여',
            'about-subtitle': '아이디어를 뛰어난 디지털 경험으로 전환',
            'about-btn': '프로젝트 보기',
            'skills-title-1': '기술',
            'skills-title-2': '능력',
            'projects-title-1': '나의',
            'projects-title-2': '프로젝트',
            'proj1-title': '여행 앱',
            'proj2-title': 'Spark Tracker',
            'proj-details': '자세히 보기',
            'exp-title-1': '나의',
            'exp-title-2': '여정',
            'footer-rights': '© 2026 William Almeida. 모든 권리 보유.'
        }
    };

    Object.assign(translations, newTranslations);

    function updateLanguage() {
        const langFlags = {
            'pt': 'https://flagcdn.com/br.svg',
            'en': 'https://flagcdn.com/gb.svg',
            'es': 'https://flagcdn.com/es.svg',
            'fr': 'https://flagcdn.com/fr.svg',
            'de': 'https://flagcdn.com/de.svg',
            'it': 'https://flagcdn.com/it.svg',
            'ja': 'https://flagcdn.com/jp.svg',
            'ru': 'https://flagcdn.com/ru.svg',
            'zh': 'https://flagcdn.com/cn.svg',
            'ko': 'https://flagcdn.com/kr.svg',
            'kp': 'https://flagcdn.com/kp.svg'
        };

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[window.currentLang][key]) {
                el.innerHTML = translations[window.currentLang][key];
            }
        });
        const langText = document.getElementById('current-lang-text');
        if (langText) {
            langText.innerHTML = `<img src="${langFlags[window.currentLang]}" alt="${window.currentLang}" class="flag-icon"> ${window.currentLang.toUpperCase()}`;
        }
        localStorage.setItem('language', window.currentLang);
        
        // Update Title tag
        document.title = translations[window.currentLang]['title'];
    }

    // Handle dropdown clicks
    document.querySelectorAll('.lang-menu li').forEach(item => {
        item.addEventListener('click', () => {
            window.currentLang = item.getAttribute('data-lang');
            updateLanguage();
        });
    });

    updateLanguage();

    // --- Theme Toggle ---
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const body = document.body;
        const themeIcon = themeToggle.querySelector('i');

        function setTheme(theme) {
            if (theme === 'light') {
                body.classList.add('light-theme');
                if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                body.classList.remove('light-theme');
                if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
            localStorage.setItem('theme', theme);
        }

        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);

        themeToggle.addEventListener('click', () => {
            const isLight = body.classList.contains('light-theme');
            setTheme(isLight ? 'dark' : 'light');
        });
    }

    // --- Navbar & Mobile Menu ---
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navActions = document.querySelector('.nav-actions');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            if (navbar) navbar.classList.add('scrolled');
        } else {
            // Only remove if not on a subpage that needs it permanently
            if (navbar && !navbar.classList.contains('permanent-scrolled')) {
                navbar.classList.remove('scrolled');
            }
        }
    });

    if (mobileMenuBtn && navActions) {
        mobileMenuBtn.addEventListener('click', () => {
            navActions.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        navActions.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navActions.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    // --- Intersection Observer ---
    document.querySelectorAll('.glass-card, .section-title, .hero-left, .hero-right').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .section-title, .hero-left, .hero-right').forEach(el => {
        observer.observe(el);
    });

    // --- Typing Effect ---
    const codeElement = document.querySelector('.code-content code');
    if (codeElement) {
        const htmlContent = codeElement.innerHTML.trim();
        codeElement.innerHTML = '';
        let i = 0;
        let currentHTML = '';

        function typeWriter() {
            if (i < htmlContent.length) {
                let char = htmlContent.charAt(i);
                currentHTML += char;
                i++;
                if (char === '<') {
                    while (i < htmlContent.length && htmlContent.charAt(i - 1) !== '>') {
                        currentHTML += htmlContent.charAt(i);
                        i++;
                    }
                }
                codeElement.innerHTML = currentHTML + '<span class="typing-cursor">|</span>';
                setTimeout(typeWriter, Math.random() * 20 + 5);
            } else {
                codeElement.innerHTML = currentHTML + '<span class="typing-cursor">|</span>';
            }
        }
        setTimeout(typeWriter, 1000);
    }
});
