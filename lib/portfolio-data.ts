/**
 * KOINONOS — Portfolio Case Study Data
 *
 * This file is the single source of truth for all portfolio category data.
 * Each category maps to a full Case Study page (/portfolio/[slug]).
 *
 * Guidelines:
 * - Never invent quantitative results — use qualitative descriptions if no real data is available.
 * - All image paths must reference files that actually exist in /public/
 * - video field is optional — omit entirely if no video exists for that category.
 */

export type Lang = 'fr' | 'en'

export interface BilingualText {
  fr: string
  en: string
}

export interface SolutionStep {
  num: string
  title: BilingualText
  desc: BilingualText
}

export interface ProjectResult {
  value?: string        // e.g. "99,9%" — only set if real data is available
  label: BilingualText
  qualitative?: boolean // if true, displayed as a text card instead of a big number
}

export interface PortfolioCategory {
  slug: string
  accentColor: string            // Tailwind color name, e.g. 'red', 'blue'
  icon: string                   // Lucide icon name for display
  title: BilingualText
  shortDescription: BilingualText
  description: BilingualText     // longer paragraph(s) for the "Le Projet" section
  heroImage: string              // main hero image path
  gallery: string[]              // array of image paths for the gallery
  video?: string                 // optional — path to a local video file
  client: BilingualText          // e.g. 'Client confidentiel'
  sector: BilingualText
  location: string
  projectType: BilingualText
  technologies: string[]
  challenge: BilingualText
  solution: SolutionStep[]
  results: ProjectResult[]
  seo: {
    fr: { title: string; description: string; keywords: string[] }
    en: { title: string; description: string; keywords: string[] }
  }
}

// ---------------------------------------------------------------------------
// Category Data
// ---------------------------------------------------------------------------

export const portfolioCategories: PortfolioCategory[] = [
  // ── SECURITY ──────────────────────────────────────────────────────────────
  {
    slug: 'security',
    accentColor: 'red',
    icon: 'Shield',
    title: {
      fr: 'Sécurité Électronique',
      en: 'Electronic Security',
    },
    shortDescription: {
      fr: 'Systèmes de protection physique intégrés pour vos infrastructures critiques : vidéosurveillance IP, contrôle d\'accès biométrique, détection d\'intrusion et alarme incendie.',
      en: 'Integrated physical protection systems for critical infrastructures: IP video surveillance, biometric access control, intrusion detection and fire alarm.',
    },
    description: {
      fr: 'KOINONOS conçoit et déploie des systèmes de sécurité électronique sur mesure pour les organisations les plus exigeantes. Nos solutions couvrent l\'ensemble du spectre de la sécurité physique : de la surveillance vidéo haute définition à la gestion des accès, en passant par la détection d\'intrusion périmétrique et les systèmes d\'alarme incendie adressables.\n\nChaque projet commence par une analyse complète des risques et des flux de personnes. Nous concevons ensuite une architecture de sécurité cohérente, en sélectionnant les équipements les mieux adaptés aux contraintes environnementales et budgétaires du client. L\'installation est réalisée par nos techniciens certifiés, et nous assurons la formation des équipes de supervision.',
      en: 'KOINONOS designs and deploys custom electronic security systems for the most demanding organizations. Our solutions cover the full spectrum of physical security: from high-definition video surveillance to access management, perimeter intrusion detection and addressable fire alarm systems.\n\nEach project begins with a thorough risk and people-flow analysis. We then design a coherent security architecture, selecting equipment best suited to the client\'s environmental and budgetary constraints. Installation is carried out by our certified technicians, and we provide training for supervision teams.',
    },
    heroImage: '/images/portofolio/portfolio-videosurveillance.jpg',
    gallery: [
      '/images/portofolio/portfolio-videosurveillance.jpg',
      '/images/camera.jpg',
      '/images/securite.png',
      '/images/portofolio/portfolio-audit-securite.jpg',
    ],
    client: { fr: 'Clients institutionnels & entreprises', en: 'Institutional clients & enterprises' },
    sector: { fr: 'Banques · Hôtels · Institutions gouvernementales', en: 'Banks · Hotels · Government institutions' },
    location: 'République Démocratique du Congo',
    projectType: { fr: 'Déploiement de systèmes de sécurité', en: 'Security system deployment' },
    technologies: ['Hikvision', 'CCTV IP HD', 'Contrôle d\'accès biométrique', 'VLAN sécurisé', 'Système anti-intrusion', 'Alarme incendie NFPA', 'NVR / Stockage redondant', 'Portiques de sécurité'],
    challenge: {
      fr: 'Nos clients font face à des risques croissants de vols, d\'intrusions et d\'incidents internes. La plupart disposaient de systèmes obsolètes, mal intégrés et sans supervision centralisée. L\'enjeu était de moderniser intégralement les dispositifs de sécurité physique tout en assurant une continuité de service et une intégration avec les systèmes informatiques existants.',
      en: 'Our clients face growing risks of theft, intrusion and internal incidents. Most had outdated, poorly integrated systems with no centralized supervision. The challenge was to fully modernize physical security devices while ensuring service continuity and integration with existing IT systems.',
    },
    solution: [
      {
        num: '01',
        title: { fr: 'Audit de sécurité', en: 'Security audit' },
        desc: { fr: 'Analyse des risques, cartographie des flux, identification des zones sensibles et évaluation des dispositifs existants.', en: 'Risk analysis, flow mapping, identification of sensitive zones and evaluation of existing systems.' },
      },
      {
        num: '02',
        title: { fr: 'Conception du système', en: 'System design' },
        desc: { fr: 'Élaboration de l\'architecture technique : positionnement des caméras, plan de câblage, choix des équipements et intégration des sous-systèmes.', en: 'Technical architecture design: camera positioning, cabling plan, equipment selection and subsystem integration.' },
      },
      {
        num: '03',
        title: { fr: 'Installation & configuration', en: 'Installation & configuration' },
        desc: { fr: 'Déploiement par nos techniciens certifiés, paramétrage des systèmes de gestion vidéo et de contrôle d\'accès, tests de performance.', en: 'Deployment by our certified technicians, configuration of video management and access control systems, performance testing.' },
      },
      {
        num: '04',
        title: { fr: 'Formation & supervision', en: 'Training & supervision' },
        desc: { fr: 'Formation des agents de sécurité et des équipes IT, mise en place des procédures d\'exploitation et transfert de compétences.', en: 'Training of security agents and IT teams, establishment of operating procedures and skills transfer.' },
      },
    ],
    results: [
      { label: { fr: 'Couverture vidéo complète des sites sécurisés', en: 'Full video coverage of secured sites' }, qualitative: true },
      { label: { fr: 'Réduction significative des incidents de sécurité', en: 'Significant reduction in security incidents' }, qualitative: true },
      { label: { fr: 'Supervision centralisée 24h/24', en: '24/7 centralized supervision' }, qualitative: true },
      { label: { fr: 'Traçabilité complète des accès et mouvements', en: 'Full traceability of access and movements' }, qualitative: true },
    ],
    seo: {
      fr: {
        title: 'Sécurité Électronique | KOINONOS',
        description: 'Découvrez nos réalisations en sécurité électronique : vidéosurveillance IP, contrôle d\'accès biométrique et systèmes anti-intrusion déployés pour des banques, hôtels et institutions en RDC.',
        keywords: ['sécurité électronique', 'vidéosurveillance', 'contrôle accès', 'CCTV', 'Kinshasa', 'RDC', 'KOINONOS', 'Hikvision', 'alarme incendie'],
      },
      en: {
        title: 'Electronic Security | KOINONOS',
        description: 'Explore our electronic security projects: IP video surveillance, biometric access control and intrusion detection systems deployed for banks, hotels and institutions in DRC.',
        keywords: ['electronic security', 'video surveillance', 'access control', 'CCTV', 'Kinshasa', 'DRC', 'KOINONOS', 'Hikvision', 'fire alarm'],
      },
    },
  },

  // ── NETWORK ───────────────────────────────────────────────────────────────
  {
    slug: 'network',
    accentColor: 'blue',
    icon: 'Cpu',
    title: {
      fr: 'Datacenter & Infrastructure Réseau',
      en: 'Datacenter & Network Infrastructure',
    },
    shortDescription: {
      fr: 'Conception, déploiement et optimisation d\'infrastructures réseau sécurisées : datacenter hôtelier, interconnexion SD-WAN multi-sites, réseau sans fil métropolitain et audit de performance.',
      en: 'Design, deployment and optimization of secure network infrastructures: hotel datacenter, SD-WAN multi-site interconnection, metropolitan wireless network and performance audit.',
    },
    description: {
      fr: 'KOINONOS est le partenaire de référence pour la conception et l\'implémentation d\'infrastructures réseau robustes en République Démocratique du Congo. Notre expertise couvre l\'ensemble du cycle de vie d\'un projet réseau : de l\'audit initial à la mise en production, en passant par la conception de l\'architecture et la configuration des équipements.\n\nNos réalisations phares incluent le déploiement d\'un datacenter sécurisé et d\'une infrastructure Wi-Fi 6 pour un hôtel 5 étoiles à Kinshasa, l\'interconnexion de 12 succursales via SD-WAN haute disponibilité, et le déploiement d\'une boucle locale sans fil métropolitaine pour une entreprise publique.',
      en: 'KOINONOS is the reference partner for designing and implementing robust network infrastructures in the Democratic Republic of Congo. Our expertise covers the entire lifecycle of a network project: from the initial audit to production deployment, including architecture design and equipment configuration.\n\nOur flagship achievements include deploying a secure datacenter and Wi-Fi 6 infrastructure for a 5-star hotel in Kinshasa, interconnecting 12 branches via high-availability SD-WAN, and deploying a metropolitan wireless local loop for a public company.',
    },
    heroImage: '/images/portofolio/portfolio-datacenter-reseau.jpg',
    gallery: [
      '/images/portofolio/portfolio-datacenter-reseau.jpg',
      '/images/cisco.png',
      '/images/infrastructure reseau.jpg',
      '/images/portofolio/portfolio-audit-securite.jpg',
    ],
    video: '/images/mp4.mp4',
    client: { fr: 'Client confidentiel — secteur hôtelier & télécom', en: 'Confidential client — hotel & telecom sector' },
    sector: { fr: 'Hôtellerie · Télécommunications · Entreprises', en: 'Hospitality · Telecommunications · Enterprises' },
    location: 'République Démocratique du Congo',
    projectType: { fr: 'Déploiement d\'infrastructure réseau & Audit', en: 'Network infrastructure deployment & Audit' },
    technologies: ['Cisco', 'Wi-Fi 6', 'SD-WAN', 'VLAN', 'Firewall', 'Routage BGP/OSPF', 'QoS', 'Pont radio point-à-point', 'NAS / SAN', 'UPS & alimentation redondante'],
    challenge: {
      fr: 'L\'établissement hôtelier avait besoin d\'une infrastructure réseau capable de supporter plusieurs centaines d\'utilisateurs simultanés (clients, personnel, IoT) tout en garantissant disponibilité, sécurité et performance. Le réseau existant était obsolète, non segmenté et présentait de nombreuses vulnérabilités. La mission incluait également la création d\'une salle serveur sécurisée conforme aux normes internationales.',
      en: 'The hotel needed a network infrastructure capable of supporting several hundred simultaneous users (guests, staff, IoT) while guaranteeing availability, security and performance. The existing network was obsolete, unsegmented and had numerous vulnerabilities. The mission also included creating a secure server room compliant with international standards.',
    },
    solution: [
      {
        num: '01',
        title: { fr: 'Audit de l\'existant', en: 'Existing infrastructure audit' },
        desc: { fr: 'Analyse complète de l\'infrastructure réseau en place, identification des points de défaillance et des risques de sécurité.', en: 'Complete analysis of the existing network infrastructure, identification of failure points and security risks.' },
      },
      {
        num: '02',
        title: { fr: 'Architecture & conception', en: 'Architecture & design' },
        desc: { fr: 'Conception de la nouvelle architecture : plan d\'adressage IP, segmentation VLAN, redondance, salle serveur et plan de câblage.', en: 'Design of the new architecture: IP addressing plan, VLAN segmentation, redundancy, server room and cabling plan.' },
      },
      {
        num: '03',
        title: { fr: 'Déploiement & configuration', en: 'Deployment & configuration' },
        desc: { fr: 'Installation des équipements actifs (switchs, routeurs, bornes Wi-Fi 6, firewall), configuration des protocoles et tests de charge.', en: 'Installation of active equipment (switches, routers, Wi-Fi 6 access points, firewall), protocol configuration and load testing.' },
      },
      {
        num: '04',
        title: { fr: 'Sécurisation & supervision', en: 'Security & monitoring' },
        desc: { fr: 'Mise en place du système de supervision réseau (NMS), politique de sécurité, segmentation des flux invités/métier et formation des administrateurs.', en: 'Implementation of network monitoring system (NMS), security policy, guest/business flow segmentation and administrator training.' },
      },
    ],
    results: [
      { label: { fr: 'Infrastructure réseau entièrement modernisée et redondante', en: 'Fully modernized and redundant network infrastructure' }, qualitative: true },
      { label: { fr: 'Couverture Wi-Fi 6 complète sur l\'ensemble du site', en: 'Full Wi-Fi 6 coverage across the entire site' }, qualitative: true },
      { label: { fr: 'Haute disponibilité et basculement automatique', en: 'High availability and automatic failover' }, qualitative: true },
      { label: { fr: 'Sécurité réseau renforcée avec segmentation des flux', en: 'Enhanced network security with traffic segmentation' }, qualitative: true },
    ],
    seo: {
      fr: {
        title: 'Datacenter & Infrastructure Réseau | KOINONOS',
        description: 'Découvrez comment KOINONOS a conçu et déployé des infrastructures réseau sécurisées (Wi-Fi 6, SD-WAN, datacenter) pour des hôtels et entreprises en République Démocratique du Congo.',
        keywords: ['datacenter', 'infrastructure réseau', 'Wi-Fi 6', 'SD-WAN', 'Cisco', 'VLAN', 'Kinshasa', 'RDC', 'KOINONOS', 'audit réseau'],
      },
      en: {
        title: 'Datacenter & Network Infrastructure | KOINONOS',
        description: 'See how KOINONOS designed and deployed secure network infrastructures (Wi-Fi 6, SD-WAN, datacenter) for hotels and enterprises in the Democratic Republic of Congo.',
        keywords: ['datacenter', 'network infrastructure', 'Wi-Fi 6', 'SD-WAN', 'Cisco', 'VLAN', 'Kinshasa', 'DRC', 'KOINONOS', 'network audit'],
      },
    },
  },

  // ── DEV (Bureau d'étude & conseil) ────────────────────────────────────────
  {
    slug: 'dev',
    accentColor: 'purple',
    icon: 'Code',
    title: {
      fr: 'Bureau d\'Étude & Conseil IT',
      en: 'Design Office & IT Consulting',
    },
    shortDescription: {
      fr: 'Études techniques, conseil stratégique et développement de solutions logicielles sur mesure pour accompagner la transformation digitale de votre organisation.',
      en: 'Technical studies, strategic consulting and custom software development to support your organization\'s digital transformation.',
    },
    description: {
      fr: 'Le bureau d\'étude et conseil de KOINONOS accompagne les organisations dans leur transformation numérique en combinant expertise technique et vision stratégique. Nous intervenons à toutes les phases d\'un projet IT : de l\'étude de faisabilité à la livraison de la solution, en passant par la rédaction des spécifications techniques et l\'assistance à maîtrise d\'ouvrage.\n\nNos réalisations incluent des plateformes hospitalières de gestion des dossiers patients, des applications mobiles de gestion de flotte connectées aux ERP, des portails clients cloud sécurisés et des systèmes de gestion de stocks (WMS). Chaque solution est conçue sur mesure et documentée selon les meilleures pratiques de l\'industrie.',
      en: 'KOINONOS\'s design and consulting office supports organizations in their digital transformation by combining technical expertise and strategic vision. We intervene at all phases of an IT project: from feasibility study to solution delivery, including writing technical specifications and project management assistance.\n\nOur achievements include hospital patient record management platforms, fleet management mobile applications connected to ERPs, secure cloud client portals and warehouse management systems (WMS). Every solution is custom-designed and documented according to industry best practices.',
    },
    heroImage: '/images/portofolio/portfolio-audit-securite.jpg',
    gallery: [
      '/images/portofolio/portfolio-audit-securite.jpg',
      '/images/maintance infirmatique.jpg',
      '/images/Evolutive Systems.jpeg',
      '/images/portofolio/portfolio-datacenter-reseau.jpg',
    ],
    client: { fr: 'Clients secteur santé, logistique & finance', en: 'Healthcare, logistics & finance sector clients' },
    sector: { fr: 'Santé · Logistique · Finance · Secteur public', en: 'Healthcare · Logistics · Finance · Public sector' },
    location: 'République Démocratique du Congo',
    projectType: { fr: 'Conseil IT · Développement logiciel · AMO', en: 'IT consulting · Software development · Project management' },
    technologies: ['React / Next.js', 'Node.js', 'PostgreSQL', 'REST API', 'Android / iOS', 'Docker', 'Cloud Azure / AWS', 'ERP Integration', 'Architecture microservices'],
    challenge: {
      fr: 'Les organisations clientes faisaient face à des processus manuels coûteux, une information fragmentée entre différents outils non connectés, et un manque de visibilité sur leurs opérations. L\'enjeu était de centraliser les données, automatiser les flux de travail et fournir des interfaces modernes adaptées aux besoins métier spécifiques de chaque client.',
      en: 'Client organizations faced costly manual processes, fragmented information across disconnected tools, and lack of operational visibility. The challenge was to centralize data, automate workflows, and provide modern interfaces tailored to each client\'s specific business needs.',
    },
    solution: [
      {
        num: '01',
        title: { fr: 'Étude & cadrage', en: 'Study & scoping' },
        desc: { fr: 'Analyse des processus métier, recueil des besoins auprès des utilisateurs finaux, rédaction du cahier des charges fonctionnel et technique.', en: 'Business process analysis, requirements gathering from end users, drafting of functional and technical specifications.' },
      },
      {
        num: '02',
        title: { fr: 'Conception de la solution', en: 'Solution design' },
        desc: { fr: 'Architecture logicielle, maquettes UX/UI, modélisation des données et choix technologiques adaptés aux contraintes du client.', en: 'Software architecture, UX/UI mockups, data modeling and technology choices adapted to client constraints.' },
      },
      {
        num: '03',
        title: { fr: 'Développement & tests', en: 'Development & testing' },
        desc: { fr: 'Développement agile en sprints, tests unitaires et d\'intégration, recettes fonctionnelles avec les équipes métier du client.', en: 'Agile development in sprints, unit and integration testing, functional acceptance with the client\'s business teams.' },
      },
      {
        num: '04',
        title: { fr: 'Déploiement & transfert', en: 'Deployment & handover' },
        desc: { fr: 'Mise en production, formation des utilisateurs et administrateurs, documentation technique et accompagnement post-déploiement.', en: 'Production deployment, training of users and administrators, technical documentation and post-deployment support.' },
      },
    ],
    results: [
      { label: { fr: 'Automatisation des processus clés et suppression des saisies manuelles', en: 'Automation of key processes and elimination of manual data entry' }, qualitative: true },
      { label: { fr: 'Centralisation et sécurisation des données métier', en: 'Centralization and security of business data' }, qualitative: true },
      { label: { fr: 'Amélioration de la productivité des équipes opérationnelles', en: 'Improved productivity of operational teams' }, qualitative: true },
      { label: { fr: 'Solutions scalables et maintenables sur le long terme', en: 'Scalable and maintainable solutions for the long term' }, qualitative: true },
    ],
    seo: {
      fr: {
        title: 'Bureau d\'Étude & Conseil IT | KOINONOS',
        description: 'KOINONOS vous accompagne dans votre transformation digitale : études techniques, conseil IT, développement de plateformes métier et applications mobiles sur mesure en RDC.',
        keywords: ['bureau d\'étude', 'conseil IT', 'développement logiciel', 'transformation digitale', 'Kinshasa', 'RDC', 'KOINONOS', 'application mobile', 'ERP'],
      },
      en: {
        title: 'Design Office & IT Consulting | KOINONOS',
        description: 'KOINONOS supports your digital transformation: technical studies, IT consulting, business platform development and custom mobile applications in DRC.',
        keywords: ['design office', 'IT consulting', 'software development', 'digital transformation', 'Kinshasa', 'DRC', 'KOINONOS', 'mobile application', 'ERP'],
      },
    },
  },

  // ── TRAINING ──────────────────────────────────────────────────────────────
  {
    slug: 'training',
    accentColor: 'amber',
    icon: 'GraduationCap',
    title: {
      fr: 'Renforcement des Capacités en TIC',
      en: 'ICT Capacity Building',
    },
    shortDescription: {
      fr: 'Programmes de formation professionnelle en TIC pour développer l\'expertise de vos équipes : certifications Cisco, cybersécurité, SecOps, DevOps et gouvernance ITIL.',
      en: 'Professional ICT training programs to develop your teams\' expertise: Cisco certifications, cybersecurity, SecOps, DevOps and ITIL governance.',
    },
    description: {
      fr: 'KOINONOS conçoit et anime des programmes de formation TIC adaptés aux besoins spécifiques de chaque organisation, qu\'il s\'agisse de techniciens, d\'ingénieurs, de décideurs ou de collaborateurs non-techniciens. Nos formateurs sont des praticiens certifiés disposant d\'une expérience terrain significative.\n\nNos programmes phares couvrent la préparation aux certifications Cisco (CCNA, CCNP), la cybersécurité opérationnelle (SecOps), le DevOps sécurisé, la gouvernance IT (ITIL, ISO 27001) et la sensibilisation à la cybersécurité pour les utilisateurs finaux. Chaque formation intègre des exercices pratiques sur des équipements réels ou des labs virtuels.',
      en: 'KOINONOS designs and delivers ICT training programs tailored to the specific needs of each organization, whether for technicians, engineers, decision-makers or non-technical staff. Our trainers are certified practitioners with significant field experience.\n\nOur flagship programs cover Cisco certification preparation (CCNA, CCNP), operational cybersecurity (SecOps), secure DevOps, IT governance (ITIL, ISO 27001) and cybersecurity awareness for end users. Each training includes practical exercises on real equipment or virtual labs.',
    },
    heroImage: '/images/portofolio/portfolio-renforcement-capacite.jpg',
    gallery: [
      '/images/portofolio/portfolio-renforcement-capacite.jpg',
      '/images/Mbum\'s.jpeg',
      '/images/Microsoft.png',
      '/images/Orange Corners.png',
    ],
    client: { fr: 'Entreprises télécom, institutions & organisations', en: 'Telecom companies, institutions & organizations' },
    sector: { fr: 'Télécommunications · Secteur public · Entreprises', en: 'Telecommunications · Public sector · Enterprises' },
    location: 'République Démocratique du Congo',
    projectType: { fr: 'Formation professionnelle & certification', en: 'Professional training & certification' },
    technologies: ['Cisco IOS', 'CCNA / CCNP', 'Cybersécurité', 'ITIL v4', 'ISO 27001', 'Docker / Kubernetes', 'SAST / DAST', 'Microsoft 365', 'MikroTik', 'Packet Tracer / GNS3'],
    challenge: {
      fr: 'Les organisations font face à une pénurie de compétences TIC et à un fossé croissant entre les technologies disponibles et la capacité des équipes à les maîtriser. Le défi était de proposer des formations pratiques, certifiantes et directement applicables dans le contexte professionnel congolais, en tenant compte des contraintes budgétaires et logistiques.',
      en: 'Organizations face a shortage of ICT skills and a growing gap between available technologies and teams\' ability to master them. The challenge was to provide practical, certifying training directly applicable in the Congolese professional context, taking into account budget and logistical constraints.',
    },
    solution: [
      {
        num: '01',
        title: { fr: 'Évaluation des besoins', en: 'Needs assessment' },
        desc: { fr: 'Audit des compétences existantes, identification des gaps, définition des objectifs pédagogiques et construction du plan de formation.', en: 'Assessment of existing skills, identification of gaps, definition of learning objectives and construction of the training plan.' },
      },
      {
        num: '02',
        title: { fr: 'Conception des programmes', en: 'Program design' },
        desc: { fr: 'Élaboration des contenus pédagogiques, création des labs pratiques, sélection des certifications cibles et planification des sessions.', en: 'Development of educational content, creation of practical labs, selection of target certifications and session planning.' },
      },
      {
        num: '03',
        title: { fr: 'Animation des formations', en: 'Training delivery' },
        desc: { fr: 'Sessions de formation en présentiel ou hybride animées par nos formateurs certifiés, avec exercices pratiques sur équipements réels ou simulateurs.', en: 'In-person or hybrid training sessions led by our certified trainers, with practical exercises on real equipment or simulators.' },
      },
      {
        num: '04',
        title: { fr: 'Certification & suivi', en: 'Certification & follow-up' },
        desc: { fr: 'Préparation aux examens de certification, passage des examens officiels, bilan de formation et plan de développement continu des compétences.', en: 'Preparation for certification exams, official exam passing, training review and continuous skills development plan.' },
      },
    ],
    results: [
      { label: { fr: 'Équipes formées aux dernières technologies et certifiées', en: 'Teams trained on the latest technologies and certified' }, qualitative: true },
      { label: { fr: 'Montée en compétence rapide et mesurable des participants', en: 'Rapid and measurable skills improvement for participants' }, qualitative: true },
      { label: { fr: 'Application immédiate des connaissances en contexte professionnel', en: 'Immediate application of knowledge in a professional context' }, qualitative: true },
      { label: { fr: 'Renforcement de la posture de cybersécurité des organisations', en: 'Strengthened cybersecurity posture for organizations' }, qualitative: true },
    ],
    seo: {
      fr: {
        title: 'Renforcement des Capacités TIC | KOINONOS',
        description: 'Formations TIC professionnelles à Kinshasa : certifications Cisco CCNA/CCNP, cybersécurité, SecOps, DevOps et gouvernance ITIL pour développer les compétences de vos équipes.',
        keywords: ['formation TIC', 'Cisco CCNA', 'cybersécurité', 'SecOps', 'ITIL', 'Kinshasa', 'RDC', 'KOINONOS', 'certification réseau', 'formation informatique'],
      },
      en: {
        title: 'ICT Capacity Building | KOINONOS',
        description: 'Professional ICT training in Kinshasa: Cisco CCNA/CCNP certifications, cybersecurity, SecOps, DevOps and ITIL governance to develop your teams\' skills.',
        keywords: ['ICT training', 'Cisco CCNA', 'cybersecurity', 'SecOps', 'ITIL', 'Kinshasa', 'DRC', 'KOINONOS', 'network certification', 'IT training'],
      },
    },
  },
]

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getCategoryData(slug: string): PortfolioCategory | undefined {
  return portfolioCategories.find((c) => c.slug === slug)
}

export function getRelatedCategories(currentSlug: string): PortfolioCategory[] {
  return portfolioCategories.filter((c) => c.slug !== currentSlug)
}
