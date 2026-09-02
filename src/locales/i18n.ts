import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {
    translation: {
      myName: "I'm Koussay Akchi.",
      heroDescription1: "I'm a passionate ",
      myJobTitle: 'Full Stack Software Engineer',
      heroDescription2:
        " with a strong interest in the concepts of automation and open-source technologies. I'm currently working part-time as a web developer and finishing my studies.",
      heroDescription3:
        'In my free time, you can find me taking on personal projects and collaborating with others in the tech community.',
      resume2: 'CV (English)',
      contact: 'Contact',
      aboutDescription:
        "I started programming when I was 14. I didn't take it too seriously and was just playing around with Discord bot programming with JavaScript  . It was a rogue start, though I managed to continue doing so! I started to take it more seriously from there on and learned many languages and concepts through high school and university. It was a fun journey. I've discovered a lot of knowledge which I probably would never get to learn if I didn't have the motivation to do so.",
      locationLabel: 'Location',
      ageLabel: 'Age',
      nationalityLabel: 'Nationality',
      nationality: 'Tunisian',
      interestsLabel: 'Interests',
      studyLabel: 'Education',
      wecraft: 'Wecraft',
      hexaflow: 'HexaFlow',
      spokenLanguages: 'Spoken Languages',
      frontendDevelopment: 'Frontend Development',
      backendDevelopment: 'Backend Development',
      otherTools: 'Other Tools',
      ftlAutosaveManager: 'FTL AutoSave Manager',
      ftlAutosaveManagerDescription:
        'Autosave and back-up Manager for FTL (Faster than light), helped me learn various things like creating a GUI, proper backup management for files and distributing software releases. Written entirely in Java (and an older obsolete version in python).',
      carTrackingOCR: 'AI Car tracking and licence plate OCR',
      carTrackingOCRDescription:
        'Written in Python : Input Video → split frames to images → Detect cars using YOLO model → Draw rectangles around coordinates in image result → Track and ID cars using SSIM → If >30 frames since last calculation for that car, use contour math to try and find a visible licence plate → if found, extract and run OCR → if succesful, write the result on the result image → compile all result frames into output video.',
      educationEsprit: 'Software engineer',
      educationEspritDetail: '🕒 Currently studying to get my software engineering degree. 🕒',
      educationISTICDetail:
        'Comprehensive program that covers software development, design, algorithms and data structures.',
      experienceContent1:
        'Developed and maintained a CRM platform for pharmaceutical laboratories with React, Quarkus, Docker, JWT, PostgreSQL, and MongoDB, covering both the user interface and backend business logic for research, sales, and compliance workflows.',
      experienceContent1Highlights: [
        'Implemented front-end interfaces for laboratory operations and internal data entry flows.',
        'Built backend services and business rules to support product, customer, and order management.',
        'Added automated testing across the stack to reduce regressions and improve release stability.',
        'Engineered robust RESTful endpoints with role-based access control and token lifecycle verification.',
      ],
      experienceContent2:
        'Worked on the CRM for pharmaceutical laboratories during my internship with React, Quarkus, Docker, JWT, PostgreSQL, and MongoDB, contributing across the stack while learning production-grade web app architecture and development workflows.',
      experienceContent2Highlights: [
        'Participated in the design and initial implementation of the application architecture.',
        'Contributed to both front-end features and back-end services for core business processes.',
        'Collaborated with the team to improve code quality, maintainability, and deployment practices.',
        'Structured data schemas and storage strategies across relational and NoSQL databases for laboratory workflows.',
      ],
      experienceContent3:
        'Developed dynamic web applications with React, Next.js, Node.js, Java, Docker, Terraform, and Azure while improving system architecture with containerized deployments and cloud-ready patterns.',
      experienceContent3Highlights: [
        'Delivered customer-facing features in agile teams with a focus on maintainability and timely releases.',
        'Improved deployment workflows by integrating Docker and cloud infrastructure tooling.',
        'Enhanced frontend performance, state management, and component modularity for seamless user experiences.',
        'Integrated automated CI/CD checks and containerized environments to ensure reliable multi-service deployments.',
      ],
      experienceContentOpkodeLabs:
        'Developed WattLink, a multi-tenant EV charging management platform built on the OCPP 1.6 protocol with Laravel, PostgreSQL, Redis, Socket.IO, Docker, and Grafana, delivering real-time visibility into station status, pricing, sessions, and telemetry data.',
      experienceContentOpkodeLabsHighlights: [
        'Built a real-time monitoring system using Laravel, PostgreSQL, Redis Pub/Sub, Socket.IO, and Grafana.',
        'Implemented remote operator controls for charging sessions, pricing updates, and live telemetry dashboards.',
        'Designed secure multi-tenant workflows to isolate data and operations across customer networks.',
        'Delivered production-ready infrastructure and tooling with Python, Docker, and reliable service orchestration.',
      ],
      experienceContentNextStep:
        'Designed and deployed a unified API and AI Gateway on Apache APISIX and Kubernetes with Kafka, Redis, Node.js, React, PostgreSQL, and observability tools, centralizing API management, load balancing, and AI orchestration in a cloud-native environment.',
      experienceContentNextStepHighlights: [
        'Built AI gateway orchestration with multi-model routing (ai-proxy-multi), prompt templating and decoration, dynamic request rewrites, and PII masking / data anonymization guardrails.',
        'Configured edge traffic management using distributed rate/connection limiting, traffic splitting, circuit breaking (api-breaker), IP/consumer restrictions, and request mirroring.',
        'Implemented payload transformations, gRPC transcoding, response rewrites, and schema validation with custom Lua and serverless functions.',
        'Streamlined observability and centralized audit streaming via OpenTelemetry, Prometheus metrics, Kafka, and Elasticsearch logging pipelines.',
        'Delivered a React and Node.js self-service portal with RBAC and monitoring dashboards.',
        'Validated service resilience using chaos engineering and automated CI/CD deployment pipelines across cloud-native environments.',
      ],
      nextStepTitle: 'Cloud Engineering Internship',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      leetcode: 'LeetCode',
      contactFormTitle: 'Contact Me',
      contactFormDescription: 'Feel free to reach out to me via the form below.',
      contactEmailLabel: 'Email',
      contactPhoneLabel: 'Phone',
      Tunis: 'Tunis, Tunisia',
      employmentLabel: 'Employment',
      interests: 'Automation, DevOps, Web Development',
      aboutMe: 'About me',
      checkOut: 'Check out some of my work',
      fullStackDev: 'Full-Stack Web Developer',
      fullStackEngineer: 'Full-Stack Engineer',
      pfe: 'End of Studies Internship',
      test1:
        'Koussay is an exceptional team player with a keen eye for detail. Their contributions during our hackathons were instrumental in our success. Their technical skills are top-tier, and they have a knack for innovative problem-solving.',
      test2:
        'I have known Koussay for years, and he is a reliable and skilled developer. He consistently produces high-quality work and handles complex tasks with ease. Its always great to work with him.',
      test3:
        "I've had Koussay help me with various projects. He is not just skilled but also great at explaining technical details.",
      contactDescription: 'If you have an idea or just want to chat, feel free to to contact me.',
      getInTouch: 'Get in touch.',
      minesweeperDescription:
        'A basic customizable Minesweeper clone built  from scratch with React and vanilla Javascript.',
      soundgridDescription:
        'An interactive sound grid where users can compose simple musical patterns by toggling individual cells in a grid.',
      tirflyDescription:
        "A modern travel agency integrating AI features and quality of life services. Developed as part of a 5-week PIdev 2024-25 Esprit project. The goal was to create a full-stack web application allowing agency employees to perform CRUD operations for the agency's offers, and allowing app customers to book flights, accommodation, packages, and events. The application is developed with Symfony, Bootstrap, and Tailwind CSS, uses AI models, and communicates with several external APIs.",
      gridImgViewer: 'Grid Image Viewer',
      gridImgViewerDescription:
        'Simple, fast 2x2 image triage tool. Open a folder, view four thumbnails, delete/copy with hotkeys, undo, calculate stats. Built with Python (Tkinter).',
      shortenDescription:
        'A production-ready URL shortener built from scratch with Next.js and MongoDB Atlas. Turns any long URL into a clean slug served under a custom domain, with per-link click analytics and cookie-based session history. Ships through a fully automated CI/CD pipeline: ESLint, build verification, SonarCloud quality gates, and Docker image publishing. All gated sequentially on GitHub Actions.',
      All: 'All',
      Languages: 'Languages',
      Frontend: 'Frontend',
      Backend: 'Backend',
      'Cloud/DevOps': 'Cloud/DevOps',
      AI: 'AI',
      'Other Tools': 'Other Tools',
      'Search skills...': 'Search skills...',
      'No skills found.': 'No skills found',
      certifications: 'Certifications',
      certAzureNetworking:
        'Microsoft Applied Skills: Configure secure access to your workloads using Azure networking',
      certDateAzureNetworking: 'September 2026',
      certAzureManagementTasks:
        'Microsoft Applied Skills: Get started with Azure management tasks',
      certDateAzureManagementTasks: 'September 2026',
      certCCNA: 'CCNA: Switching, Routing, and Wireless Essentials',
      certDateCCNA: 'July 2025',
    },
  },
  fr: {
    translation: {
      myName: 'Je suis Koussay Akchi.',
      heroDescription1: 'Je suis un ',
      myJobTitle: 'Développeur Full Stack',
      heroDescription2:
        " passionné avec un fort intérêt pour les concepts d'automatisation et les technologies open-source. Je travaille actuellement à temps partiel en tant que développeur web et je continue études.",
      heroDescription3:
        'Pendant mon temps libre,  je travaille sur des projets personnels et je collabore avec la communauté technologique.',
      resume2: 'CV (Francais)',
      contact: 'Contact',
      aboutDescription:
        "J'ai commencé à programmer à 14 ans. Je ne le prenais pas trop au sérieux et je m'amusais simplement à programmer des robots Discord avec JavaScript  . C'était un début difficile, mais j'ai réussi à continuer ! J'ai commencé à le prendre plus au sérieux à partir de là et j'ai appris de nombreux langages et concepts au lycée et à l'université. Ce fut un voyage amusant. J'ai découvert beaucoup de connaissances que je n'aurais probablement jamais pu apprendre si je n'avais pas eu la motivation pour le faire.",
      locationLabel: 'Lieu',
      ageLabel: 'Âge',
      nationalityLabel: 'Nationalité',
      nationality: 'Tunisien',
      interestsLabel: 'Intérêts',
      studyLabel: 'Formation',
      employmentLabel: 'Emploi',
      wecraft: 'Wecraft',
      hexaflow: 'HexaFlow',
      spokenLanguages: 'Langues',
      frontendDevelopment: 'Développement Frontend',
      backendDevelopment: 'Développement Backend',
      otherTools: 'Autres outils',
      ftlAutosaveManager: 'Gestionnaire de sauvegardes personnalisable pour jeux vidéo',
      ftlAutosaveManagerDescription:
        "Gestionnaire de sauvegarde et de back-up automatique pour FTL (Faster than light), m'a aidé à apprendre diverses choses comme la création d'une interface graphique, la gestion appropriée des back-ups de fichiers et la distribution des versions de mes logiciels. Entièrement écrit en Java (et une ancienne version obsolète en Python).",
      carTrackingOCR: "Suivi de voiture par IA et OCR de plaque d'immatriculation",
      carTrackingOCRDescription:
        "Écrit en Python : vidéo input → diviser les trames en images → détecter les voitures à l'aide du modèle YOLO → tracer des rectangles autour des coordonnées dans l'image sortie → suivre et identifier les voitures à l'aide de SSIM → si >30 images depuis le dernier calcul pour cette voiture, utiliser des calculs de contour pour essayer de trouver une plaque d'immatriculation visible → si trouvée, extraire et exécuter l'OCR → si réussi, écrire le résultat sur l'image sortie→ compiler toutes les trames de résultat dans la vidéo de sortie.",
      educationEsprit: 'Ingenierie',
      educationEspritDetail: '🕒 En cours d’études pour mon diplôme en ingénierie logicielle. 🕒',
      educationISTICDetail:
        'Programme complet qui couvre le développement de logiciels, la conception, les algorithmes et les structures de données.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      leetcode: 'LeetCode',
      contactFormTitle: 'Contactez-moi',
      contactFormDescription: "N'hésitez pas à me contacter via le formulaire ci-dessous.",
      contactEmailLabel: 'Email',
      contactPhoneLabel: 'Téléphone',
      Tunis: 'Tunis, Tunisie',
      interests: 'Automatisation, DevOps, Développement Web',
      aboutMe: 'Mon Parcours',
      English: 'Anglais',
      French: 'Français',
      Arabic: 'Arabe',
      work: 'Experience',
      checkOut: 'Voici quelques exemples de mes projets',
      fullStackDev: 'Développeur Web Full Stack',
      fullStackEngineer: 'Ingénieur Full Stack',
      experienceContent1:
        "Développer et maintenir une plateforme CRM pour les laboratoires pharmaceutiques avec React, Quarkus, Docker, JWT, PostgreSQL et MongoDB, couvrant à la fois l'interface utilisateur et la logique métier backend pour les workflows de recherche, de vente et de conformité.",
      experienceContent1Highlights: [
        "Mise en œuvre d'interfaces de laboratoire pour les flux de saisie et les processus internes.",
        "Création de services backend et de règles métier pour la gestion des produits, clients et commandes.",
        "Ajout de tests automatisés sur l'ensemble de la stack pour réduire les régressions et améliorer la stabilité des livraisons.",
        "Conception de points d'API REST robustes avec contrôle d'accès basé sur les rôles et vérification du cycle de vie des jetons.",
      ],
      pfe: "Stage de fin d'études",
      experienceContent2:
        "Travailler sur le CRM des laboratoires pharmaceutiques pendant mon stage avec React, Quarkus, Docker, JWT, PostgreSQL et MongoDB, en contribuant sur toute la stack tout en apprenant l'architecture et les workflows de développement d'applications web en production.",
      experienceContent2Highlights: [
        "Participation à la conception et à la mise en œuvre initiale de l'architecture applicative.",
        "Contribution aux fonctionnalités front-end et aux services backend pour les processus métier critiques.",
        "Collaboration avec l'équipe pour améliorer la qualité du code, la maintenabilité et les pratiques de déploiement.",
        "Structuration des schémas de données et stratégies de stockage entre bases relationnelles et NoSQL pour les opérations de laboratoire.",
      ],
      experienceContent3:
        "Développement d'applications web dynamiques avec React, Next.js, Node.js, Java, Docker, Terraform et Azure, tout en améliorant l'architecture système grâce à des déploiements conteneurisés et à des pratiques cloud-ready.",
      experienceContent3Highlights: [
        "Livraison de fonctionnalités orientées client dans des équipes agiles, avec un focus sur la maintenabilité et les livraisons dans les délais.",
        "Amélioration des workflows de déploiement via Docker et des outils d'infrastructure cloud.",
        "Amélioration des performances frontend, de la gestion d'état et de la modularité des composants pour des interfaces fluides.",
        "Intégration de vérifications CI/CD automatisées et d'environnements conteneurisés pour sécuriser les déploiements multi-services.",
      ],
      experienceContentOpkodeLabs:
        "Développement de WattLink, une plateforme de gestion de bornes de recharge multi-tenant basée sur le protocole OCPP 1.6, avec Laravel, PostgreSQL, Redis, Socket.IO, Docker et Grafana, offrant une visibilité en temps réel sur l'état des stations, les tarifs, les sessions et la télémétrie.",
      experienceContentOpkodeLabsHighlights: [
        "Mise en place d'un système de supervision en temps réel avec Laravel, PostgreSQL, Redis Pub/Sub, Socket.IO et Grafana.",
        "Implémentation de contrôles d'administration à distance pour les sessions de charge et les mises à jour de tarification.",
        "Conception de workflows multi-tenant sécurisés pour isoler les données et les opérations entre clients.",
        "Livraison d'une infrastructure de production fiable avec Python, Docker et orchestration de services.",
      ],
      experienceContentNextStep:
        "Conception et déploiement d'une passerelle API & IA sur Apache APISIX et Kubernetes avec Kafka, Redis, Node.js, React, PostgreSQL et outils d'observabilité, centralisant la gestion des API, le load balancing et l'orchestration IA dans un environnement cloud-native.",
      experienceContentNextStepHighlights: [
        "Mise en place de l'orchestration IA multi-modèles (ai-proxy-multi), templating/décoration de prompts, réécriture de requêtes et masquage PII / anonymisation de données.",
        "Configuration de la gestion de trafic : rate/connection limiting distribué, traffic splitting, coupe-circuit (api-breaker), restrictions IP/consommateurs et duplication de requêtes (proxy-mirror).",
        "Implémentation des transformations de payload, transcodage gRPC, réécriture de réponses et validation de requêtes via plugins Lua et fonctions serverless.",
        "Centralisation de l'observabilité et streaming d'audit avec OpenTelemetry, métriques Prometheus, Kafka et pipelines de logging Elasticsearch.",
        "Livraison d'un portail self-service React et Node.js avec RBAC et tableaux de bord de surveillance.",
        "Validation de la résilience grâce au chaos engineering et à l'automatisation des pipelines CI/CD dans des environnements cloud-native.",
      ],
      nextStepTitle: 'Stage en Ingénierie Cloud',
      hero: 'Accueil',
      about: 'À propos',
      portfolio: 'Portfolio',
      resume: 'CV',
      skills: 'Compétences',
      stats: 'Statistiques',
      testimonials: 'Témoignages',
      'June 2024 - January 2025': 'Juin 2024 - Janvier 2025',
      'June 2026 - August 2026': 'Juin 2026 - Août 2026',
      'Febuary 2024 - Present': 'Fevrier 2024 - Present',
      'January 2024 - June 2024': 'Janvier 2024 - Juin 2024',
      'July 2025 - Present': 'Juillet 2025 - Présent',
      test1:
        "Koussay est un membre d'équipe exceptionnel avec un œil attentif aux détails. Ses contributions lors de nos hackathons ont été déterminantes pour notre succès. Ses compétences techniques sont de haut niveau, et il sait résoudre les problèmes de manière innovante.",
      test2:
        "Je connais Koussay depuis des années, et c'est un développeur fiable et compétent. Il fait toujours un travail de haute qualité et gère les tâches complexes avec facilité. C'est toujours un plaisir de travailler avec lui.",
      test3:
        "J'ai fait appel à Koussay pour divers projets. Il n'est pas seulement compétent, mais il excelle également dans l'explication des détails techniques.",
      contactDescription: "Si vous avez une idée ou souhaitez simplement discuter, n'hésitez pas à me contacter.",
      getInTouch: 'Contactez-moi.',
      'Send Email': 'Envoyer Email',
      minesweeperDescription:
        'Un clone de Minesweeper personnalisable construit à partir de zéro avec React et Javascript.',
      soundgridDescription:
        'Une grille sonore interactive où les utilisateurs peuvent composer des motifs musicaux simples en basculant des cellules individuelles dans une grille.',
      tirflyDescription:
        "Agence de voyages moderne intégrant des fonctionnalités d'IA et des services de qualité de vie. Développé dans le cadre d'un projet PIdev 2024-25 Esprit durant 5 semaines. L'objectif était de créer une application web full-stack permettant aux employés de l'agence d'effectuer des opérations CRUD avec les offres proposées par l'agence elle-même, et aux clients de l'application de réserver des offres de voyages, hebergements, packs et evennements. L'application est développée avec Symfony, Bootstrap et Tailwind CSS, utilise des modeles IA et communique avec plusieurs APIs externes.",
      gridImgViewer: 'Grid Image Viewer',
      gridImgViewerDescription:
        "Outil de tri d'images 2x2 simple et rapide. Ouvrez un dossier, affichez quatre vignettes, supprimez/copiez avec des raccourcis, annulez, calculez des statistiques. Développé avec Python (Tkinter).",
      shortenDescription:
        "Un raccourcisseur d'URL prêt pour la production, construit de zéro avec Next.js et MongoDB Atlas. Transforme n'importe quelle URL longue en un slug propre servi sous un domaine personnalisé, avec des analyses de clics par lien et un historique de session basé sur les cookies. Livré via un pipeline CI/CD entièrement automatisé : ESLint, vérification de build, contrôle qualité SonarCloud et publication d'image Docker. Tout enchaîné séquentiellement sur GitHub Actions.",
      All: 'Tout',
      Languages: 'Langues',
      Frontend: 'Frontend',
      Backend: 'Backend',
      'Cloud/DevOps': 'Cloud/DevOps',
      AI: 'IA',
      'Other Tools': 'Autres outils',
      'Search skills...': 'Recherche...',
      'No skills found.': 'Aucune compétence trouvée',
      certifications: 'Certifications',
      certAzureNetworking:
        'Microsoft Applied Skills: Configure secure access to your workloads using Azure networking',
      certDateAzureNetworking: 'Septembre 2026',
      certAzureManagementTasks:
        'Microsoft Applied Skills: Get started with Azure management tasks',
      certDateAzureManagementTasks: 'Septembre 2026',
      certCCNA: 'CCNA: Switching, Routing, and Wireless Essentials',
      certDateCCNA: 'Juillet 2025',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
