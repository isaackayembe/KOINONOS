export type Lang = 'fr' | 'en'

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      partners: 'Partenaires',
      solutions: 'Solutions',
      portfolio: 'Portfolio',
      blog: 'Blog',
      about: 'À propos',
      contact: 'Contact',
      quote: 'Demander un devis',
    },
    hero: {
      headline: 'KOINONOS',
      sub: 'Votre partenaire en Technologies de l\'Information et Sécurité Électronique',
      ctaPrimary: 'Demander un devis',
      ctaSecondary: 'Découvrir nos services',
      stat1: 'Disponibilité',
      stat2: 'Conformité',
    },
    services: {
      tag: '',
      title: 'Des solutions technologiques de bout en bout',
      subtitle:
        'Une expertise complète pour protéger, connecter et transformer votre entreprise.',
      items: [
        {
          title: 'Sécurité Électronique',
          desc: 'Protection physique intégrée pour vos sites sensibles.',
          features: ['Vidéosurveillance (CCTV)', 'Contrôle d\'accès', 'Systèmes biométriques', 'Alarmes incendie', 'Audit de sécurité'],
        },
        {
          title: 'Cybersécurité',
          desc: 'Défense proactive contre les menaces numériques.',
          features: ['Évaluation de sécurité', 'Analyse de vulnérabilités', 'Gestion des risques', 'Protection d\'infrastructure'],
        },
        {
          title: 'Infrastructure Réseau',
          desc: 'Des réseaux fiables, rapides et évolutifs.',
          features: ['LAN / WAN', 'Solutions Wi-Fi', 'Administration serveurs', 'Intégration Cloud'],
        },
        {
          title: 'Développement Logiciel',
          desc: 'Des applications sur mesure pour votre métier.',
          features: ['Applications Web', 'Applications Mobiles', 'Solutions métier', 'Systèmes d\'automatisation'],
        },
        {
          title: 'Maintenance Informatique',
          desc: 'Un parc IT performant et toujours opérationnel.',
          features: ['Maintenance préventive', 'Maintenance corrective', 'Support technique'],
        },
        {
          title: 'Formation IT',
          desc: 'Montez en compétence vos équipes techniques.',
          features: ['Réseaux', 'Cybersécurité', 'Administration système', 'Transformation digitale'],
        },
      ],
    },
    stats: {
      items: [
        { value: 100, suffix: '+', label: 'Projets réalisés' },
        { value: 50, suffix: '+', label: 'Clients satisfaits' },
        { value: 24, suffix: '/7', label: 'Support disponible' },
        { value: 4, suffix: '+', label: 'Années d\'expérience' },
      ],
    },
    partners: {
      tag: 'Partenaires',
      title: 'Nos partenaires',
      subtitle:
        'Un réseau de partenaires technologiques et institutionnels qui renforce notre capacité à livrer des solutions fiables.',
    },
    why: {
      tag: 'Pourquoi nous choisir',
      title: 'L\'excellence au service de votre sécurité',
      subtitle: 'Des standards internationaux appliqués à chaque mission.',
      items: [
        { title: 'Expertise professionnelle', desc: 'Des ingénieurs certifiés et expérimentés sur chaque projet.' },
        { title: 'Accompagnement personnalisé', desc: 'Des solutions adaptées à vos besoins et votre budget.' },
        { title: 'Standards de sécurité élevés', desc: 'Conformité aux meilleures pratiques internationales.' },
        { title: 'Solutions innovantes', desc: 'Des technologies de pointe au service de votre croissance.' },
        { title: 'Satisfaction client', desc: 'Une relation de confiance et des résultats mesurables.' },
        { title: 'Assistance continue', desc: 'Un support réactif disponible à tout moment.' },
      ],
    },
    portfolio: {
      tag: 'Portfolio',
      title: 'Des réalisations qui parlent',
      subtitle: 'Une sélection de projets livrés pour nos clients.',
      filters: { all: 'Tous les projets', security: 'Sécurité', network: 'Réseaux', dev: 'Développement', training: 'Formation' },
      items: [
        {
          title: 'Vidéosurveillance bancaire',
          cat: 'security',
          tag: 'Sécurité',
          desc: "Déploiement d'un système de surveillance IP haute définition avec stockage redondant et analyse vidéo intelligente pour une grande banque commerciale."
        },
        {
          title: 'Datacenter & réseau hôtelier',
          cat: 'network',
          tag: 'Réseaux',
          desc: "Conception et implémentation de l'infrastructure réseau (Wi-Fi 6, commutation, routage) et d'une salle serveur sécurisée pour un hôtel 5 étoiles."
        },
        {
          title: 'Plateforme métier hospitalière',
          cat: 'dev',
          tag: 'Développement',
          desc: "Logiciel de gestion des dossiers patients, de facturation et de planification des soins conçu sur mesure pour une clinique de référence."
        },
        {
          title: 'Contrôle d\'accès gouvernemental',
          cat: 'security',
          tag: 'Sécurité',
          desc: "Sécurisation des accès d'un bâtiment administratif via des systèmes biométriques de dernière génération et des portiques de sécurité connectés."
        },
        {
          title: 'Programme de formation cyber',
          cat: 'training',
          tag: 'Formation',
          desc: "Formation intensive sur les principes de sécurité de l'information et sensibilisation au phishing pour plus de 300 employés de bureau."
        },
        {
          title: 'Application mobile entreprise',
          cat: 'dev',
          tag: 'Développement',
          desc: "Application mobile Android/iOS connectée au système ERP pour la gestion de la flotte de livraison et le suivi logistique en temps réel."
        },
        {
          title: 'Système Anti-intrusion Industriel',
          cat: 'security',
          tag: 'Sécurité',
          desc: "Installation de barrières infrarouges, de capteurs sismiques et d'une alarme centralisée reliée à un centre de télésurveillance pour un site minier."
        },
        {
          title: 'Détection Incendie Connectée',
          cat: 'security',
          tag: 'Sécurité',
          desc: "Système de détection de fumée et de chaleur adressable de dernière génération conforme aux normes NFPA pour un grand entrepôt logistique."
        },
        {
          title: 'Interconnexion Multi-sites SD-WAN',
          cat: 'network',
          tag: 'Réseaux',
          desc: "Liaison sécurisée par tunnel SD-WAN hautement disponible reliant le siège social et 12 succursales à travers la République Démocratique du Congo."
        },
        {
          title: 'Réseau Sans-Fil Outdoor Métropolitain',
          cat: 'network',
          tag: 'Réseaux',
          desc: "Déploiement d'une boucle locale sans-fil à haut débit et de ponts radio point-à-point pour interconnecter des sites distants d'une entreprise publique."
        },
        {
          title: 'Audit & Optimisation Réseau',
          cat: 'network',
          tag: 'Réseaux',
          desc: "Analyse de performance, refonte du plan d'adressage IP, mise en place de la QoS et renforcement des politiques de sécurité pour un opérateur de services."
        },
        {
          title: 'Portail Client & Facturation Cloud',
          cat: 'dev',
          tag: 'Développement',
          desc: "Application web hautement sécurisée permettant aux abonnés de consulter leurs factures, d'effectuer des paiements en ligne et d'ouvrir des tickets de support."
        },
        {
          title: 'Système de Gestion de Stocks (WMS)',
          cat: 'dev',
          tag: 'Développement',
          desc: "Solution web d'automatisation des entrées/sorties de marchandises, avec suivi par code-barres et alertes intelligentes de réapprovisionnement."
        },
        {
          title: 'Certification Cisco CCNA & CCNP',
          cat: 'training',
          tag: 'Formation',
          desc: "Atelier pratique intensif préparant les ingénieurs réseaux d'un partenaire télécom aux examens officiels d'administration réseau."
        },
        {
          title: 'Formation SecOps & DevOps',
          cat: 'training',
          tag: 'Formation',
          desc: "Programme d'accompagnement sur le déploiement continu sécurisé, l'intégration des tests de sécurité (SAST/DAST) et Docker/Kubernetes."
        },
        {
          title: 'Gouvernance ITIL & Cybersécurité',
          cat: 'training',
          tag: 'Formation',
          desc: "Session stratégique pour les décideurs et directeurs informatiques sur les cadres réglementaires, la gestion des risques et la norme ISO 27001."
        }
      ],
    },
    industries: {
      tag: 'Solutions par secteur',
      title: 'Des solutions adaptées à votre industrie',
      subtitle: 'Nous accompagnons les organisations les plus exigeantes.',
      items: ['Banques', 'Hôtels', 'Hôpitaux', 'Écoles', 'Institutions gouvernementales', 'Entreprises'],
    },
    testimonials: {
      tag: 'Témoignages',
      title: 'Ils nous font confiance',
      items: [
        { quote: 'KOINONOS a transformé notre posture de sécurité. Un partenaire fiable et réactif.', name: 'Direction IT', role: 'Groupe bancaire' },
        { quote: 'Une équipe professionnelle qui a déployé notre réseau dans les délais et le budget.', name: 'Responsable Technique', role: 'Chaîne hôtelière' },
        { quote: 'Leur expertise en cybersécurité nous a évité des incidents majeurs.', name: 'RSSI', role: 'Institution publique' },
      ],
    },
    blog: {
      tag: 'Blog',
      title: 'Actualités & Insights',
      subtitle: 'Les dernières tendances en cybersécurité et technologie.',
      readMore: 'Lire l\'article',
      items: [
        { title: 'Les ransomwares en 2026 : comment se protéger', cat: 'Cybersécurité', date: '12 Jan 2026' },
        { title: 'Zero Trust : repenser la sécurité réseau', cat: 'Réseaux', date: '04 Fév 2026' },
        { title: 'IA et détection des menaces avancées', cat: 'Innovation', date: '21 Fév 2026' },
      ],
    },
    faq: {
      tag: 'FAQ',
      title: 'Questions fréquentes',
      items: [
        { q: 'Quels secteurs accompagnez-vous ?', a: 'Banques, hôtellerie, santé, éducation, institutions gouvernementales et entreprises de toutes tailles.' },
        { q: 'Proposez-vous un support 24/7 ?', a: 'Oui, nos équipes assurent une assistance continue avec des temps de réponse garantis.' },
        { q: 'Comment se déroule un projet ?', a: 'Audit, recommandation, déploiement et accompagnement : chaque étape est cadrée et suivie.' },
        { q: 'Intervenez-vous en dehors de Kinshasa ?', a: 'Oui, nous intervenons sur l\'ensemble du territoire et à l\'international selon les besoins.' },
      ],
    },
    quote: {
      tag: 'Devis',
      title: 'Demandez votre devis gratuit',
      subtitle: 'Décrivez votre besoin, nous revenons vers vous rapidement.',
      name: 'Nom complet',
      company: 'Entreprise',
      phone: 'Téléphone',
      email: 'Email',
      service: 'Type de service',
      servicePlaceholder: 'Sélectionnez un service',
      description: 'Description du projet',
      submit: 'Envoyer la demande',
      success: 'Merci ! Votre demande a bien été envoyée.',
    },
    contact: {
      tag: 'Contact',
      title: 'Parlons de votre projet',
      subtitle: 'Notre équipe est à votre écoute.',
      address: 'Adresse',
      phone: 'Téléphone',
      email: 'Email',
    },
    footer: {
      about: 'Votre partenaire en Technologies de l\'Information et Sécurité Électronique à Kinshasa, RDC.',
      quickLinks: 'Liens rapides',
      servicesTitle: 'Services',
      newsletter: 'Newsletter',
      newsletterDesc: 'Recevez nos actualités et conseils sécurité.',
      newsletterPlaceholder: 'Votre email',
      subscribe: 'S\'abonner',
      rights: 'Tous droits réservés.',
    },
    chat: {
      title: 'Assistant KOINONOS',
      status: 'En ligne',
      greeting: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
      placeholder: 'Écrivez votre message...',
      quick: {
        quote: 'Demander un devis',
        support: 'Contacter le support',
        services: 'Nos services',
        training: 'Programmes de formation',
      },
      replies: {
        quote: 'Avec plaisir ! Remplissez le formulaire de devis dans la section dédiée ou appelez le +243 812949128.',
        support: 'Notre support est disponible 24/7. Écrivez à contactkoinonos@gmail.com ou appelez nos lignes directes.',
        services: 'Nous couvrons la sécurité électronique, la cybersécurité, les réseaux, le développement logiciel, la maintenance et la formation.',
        training: 'Nos formations couvrent les réseaux, la cybersécurité, l\'administration système et la transformation digitale.',
        default: 'Merci pour votre message ! Un conseiller KOINONOS vous répondra. Vous pouvez aussi utiliser les actions rapides ci-dessous.',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      partners: 'Partners',
      solutions: 'Solutions',
      portfolio: 'Portfolio',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
      quote: 'Request a quote',
    },
    hero: {
      badge: 'Next-Generation Security & Technology',
      headline: 'KOINONOS',
      sub: 'Your partner in Information Technology and Electronic Security',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'Discover our services',
      stat1: 'Uptime',
      stat2: 'Compliance',
    },
    services: {
      tag: 'Our Services',
      title: 'End-to-end technology solutions',
      subtitle: 'Comprehensive expertise to protect, connect and transform your business.',
      items: [
        {
          title: 'Electronic Security',
          desc: 'Integrated physical protection for your sensitive sites.',
          features: ['CCTV', 'Access Control', 'Biometric Systems', 'Fire Alarm Systems', 'Security Audit'],
        },
        {
          title: 'Cybersecurity',
          desc: 'Proactive defense against digital threats.',
          features: ['Security Assessment', 'Vulnerability Analysis', 'Risk Management', 'Infrastructure Protection'],
        },
        {
          title: 'Network Infrastructure',
          desc: 'Reliable, fast and scalable networks.',
          features: ['LAN / WAN', 'Wi-Fi Solutions', 'Server Administration', 'Cloud Integration'],
        },
        {
          title: 'Software Development',
          desc: 'Custom applications built for your business.',
          features: ['Web Applications', 'Mobile Applications', 'Business Solutions', 'Automation Systems'],
        },
        {
          title: 'IT Maintenance',
          desc: 'A high-performing, always-on IT estate.',
          features: ['Preventive Maintenance', 'Corrective Maintenance', 'Technical Support'],
        },
        {
          title: 'IT Training',
          desc: 'Upskill your technical teams.',
          features: ['Networking', 'Cybersecurity', 'System Administration', 'Digital Transformation'],
        },
      ],
    },
    stats: {
      items: [
        { value: 100, suffix: '+', label: 'Projects delivered' },
        { value: 50, suffix: '+', label: 'Happy clients' },
        { value: 24, suffix: '/7', label: 'Support available' },
        { value: 4, suffix: '+', label: 'Years of experience' },
      ],
    },
    partners: {
      tag: 'Partners',
      title: 'They move forward with KOINONOS',
      subtitle:
        'A network of technology and institutional partners that strengthens our ability to deliver reliable solutions.',
    },
    why: {
      tag: 'Why choose us',
      title: 'Excellence at the service of your security',
      subtitle: 'International standards applied to every engagement.',
      items: [
        { title: 'Professional expertise', desc: 'Certified, experienced engineers on every project.' },
        { title: 'Personalized support', desc: 'Solutions tailored to your needs and budget.' },
        { title: 'High security standards', desc: 'Compliant with international best practices.' },
        { title: 'Innovative solutions', desc: 'Cutting-edge technology driving your growth.' },
        { title: 'Customer satisfaction', desc: 'A trusted relationship with measurable results.' },
        { title: 'Continuous assistance', desc: 'Responsive support available anytime.' },
      ],
    },
    portfolio: {
      tag: 'Portfolio',
      title: 'Work that speaks for itself',
      subtitle: 'A selection of projects delivered for our clients.',
      filters: { all: 'All projects', security: 'Security', network: 'Networking', dev: 'Development', training: 'Training' },
      items: [
        {
          title: 'Banking video surveillance',
          cat: 'security',
          tag: 'Security',
          desc: 'Deployment of a high-definition IP surveillance system with redundant storage and intelligent video analysis for a major commercial bank.'
        },
        {
          title: 'Hotel datacenter & network',
          cat: 'network',
          tag: 'Networking',
          desc: 'Design and implementation of network infrastructure (Wi-Fi 6, switching, routing) and a secure server room for a 5-star hotel.'
        },
        {
          title: 'Hospital business platform',
          cat: 'dev',
          tag: 'Development',
          desc: 'Custom-designed patient file management, billing, and care scheduling software for a reference clinic.'
        },
        {
          title: 'Government access control',
          cat: 'security',
          tag: 'Security',
          desc: 'Securing access to an administrative building via state-of-the-art biometric systems and connected security gates.'
        },
        {
          title: 'Cybersecurity training program',
          cat: 'training',
          tag: 'Training',
          desc: 'Intensive training on information security principles and phishing awareness for over 300 office employees.'
        },
        {
          title: 'Enterprise mobile application',
          cat: 'dev',
          tag: 'Development',
          desc: 'Android/iOS mobile application connected to the ERP system for delivery fleet management and real-time logistics tracking.'
        },
        {
          title: 'Industrial Anti-intrusion System',
          cat: 'security',
          tag: 'Security',
          desc: 'Installation of infrared barriers, seismic sensors, and a centralized alarm connected to a remote monitoring center for a mining site.'
        },
        {
          title: 'Connected Fire Detection',
          cat: 'security',
          tag: 'Security',
          desc: 'Latest generation addressable smoke and heat detection system complying with NFPA standards for a large logistics warehouse.'
        },
        {
          title: 'Multi-site SD-WAN Interconnection',
          cat: 'network',
          tag: 'Networking',
          desc: 'Secure connection via highly available SD-WAN tunnel linking the headquarters and 12 branches across the Democratic Republic of Congo.'
        },
        {
          title: 'Metropolitan Outdoor Wireless Network',
          cat: 'network',
          tag: 'Networking',
          desc: 'Deployment of a high-speed wireless local loop and point-to-point radio bridges to interconnect remote sites of a public company.'
        },
        {
          title: 'Network Audit & Optimization',
          cat: 'network',
          tag: 'Networking',
          desc: 'Performance analysis, redesign of the IP addressing plan, implementation of QoS and reinforcement of security policies for a service provider.'
        },
        {
          title: 'Client Portal & Cloud Billing',
          cat: 'dev',
          tag: 'Development',
          desc: 'Highly secure web application allowing subscribers to view invoices, make online payments, and open support tickets.'
        },
        {
          title: 'Warehouse Management System (WMS)',
          cat: 'dev',
          tag: 'Development',
          desc: 'Web solution for automating goods receipt/issue, with barcode tracking and intelligent replenishment alerts.'
        },
        {
          title: 'Cisco CCNA & CCNP Certification',
          cat: 'training',
          tag: 'Training',
          desc: 'Intensive hands-on workshop preparing network engineers from a telecom partner for official network administration exams.'
        },
        {
          title: 'SecOps & DevOps Training',
          cat: 'training',
          tag: 'Training',
          desc: 'Mentoring program on secure continuous deployment, security test integration (SAST/DAST) and Docker/Kubernetes.'
        },
        {
          title: 'ITIL Governance & Cybersecurity',
          cat: 'training',
          tag: 'Training',
          desc: 'Strategic session for IT decision-makers and directors on regulatory frameworks, risk management and the ISO 27001 standard.'
        }
      ],
    },
    industries: {
      tag: 'Industry solutions',
      title: 'Solutions tailored to your industry',
      subtitle: 'We support the most demanding organizations.',
      items: ['Banks', 'Hotels', 'Hospitals', 'Schools', 'Government Institutions', 'Enterprises'],
    },
    testimonials: {
      tag: 'Testimonials',
      title: 'Trusted by leaders',
      items: [
        { quote: 'KOINONOS transformed our security posture. A reliable and responsive partner.', name: 'IT Department', role: 'Banking group' },
        { quote: 'A professional team that deployed our network on time and on budget.', name: 'Technical Manager', role: 'Hotel chain' },
        { quote: 'Their cybersecurity expertise prevented major incidents.', name: 'CISO', role: 'Public institution' },
      ],
    },
    blog: {
      tag: 'Blog',
      title: 'News & Insights',
      subtitle: 'The latest trends in cybersecurity and technology.',
      readMore: 'Read article',
      items: [
        { title: 'Ransomware in 2026: how to protect yourself', cat: 'Cybersecurity', date: 'Jan 12, 2026' },
        { title: 'Zero Trust: rethinking network security', cat: 'Networking', date: 'Feb 04, 2026' },
        { title: 'AI and advanced threat detection', cat: 'Innovation', date: 'Feb 21, 2026' },
      ],
    },
    faq: {
      tag: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        { q: 'Which industries do you serve?', a: 'Banking, hospitality, healthcare, education, government institutions and enterprises of all sizes.' },
        { q: 'Do you offer 24/7 support?', a: 'Yes, our teams provide continuous assistance with guaranteed response times.' },
        { q: 'How does a project unfold?', a: 'Audit, recommendation, deployment and support: every stage is scoped and tracked.' },
        { q: 'Do you operate outside Kinshasa?', a: 'Yes, we operate nationwide and internationally as needed.' },
      ],
    },
    quote: {
      tag: 'Quote',
      title: 'Request your free quote',
      subtitle: 'Describe your need and we will get back to you quickly.',
      name: 'Full name',
      company: 'Company',
      phone: 'Phone',
      email: 'Email',
      service: 'Service type',
      servicePlaceholder: 'Select a service',
      description: 'Project description',
      submit: 'Send request',
      success: 'Thank you! Your request has been sent.',
    },
    contact: {
      tag: 'Contact',
      title: 'Let\'s talk about your project',
      subtitle: 'Our team is here to help.',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
    },
    footer: {
      about: 'Your partner in Information Technology and Electronic Security in Kinshasa, DRC.',
      quickLinks: 'Quick links',
      servicesTitle: 'Services',
      newsletter: 'Newsletter',
      newsletterDesc: 'Get our news and security tips.',
      newsletterPlaceholder: 'Your email',
      subscribe: 'Subscribe',
      rights: 'All rights reserved.',
    },
    chat: {
      title: 'KOINONOS Assistant',
      status: 'Online',
      greeting: 'Hello! How can I help you today?',
      placeholder: 'Type your message...',
      quick: {
        quote: 'Request a quote',
        support: 'Contact support',
        services: 'Our services',
        training: 'Training programs',
      },
      replies: {
        quote: 'Happy to help! Fill out the quote form in the dedicated section or call +243 812949128.',
        support: 'Our support is available 24/7. Email contactkoinonos@gmail.com or call our direct lines.',
        services: 'We cover electronic security, cybersecurity, networking, software development, maintenance and training.',
        training: 'Our training covers networking, cybersecurity, system administration and digital transformation.',
        default: 'Thanks for your message! A KOINONOS advisor will reply. You can also use the quick actions below.',
      },
    },
  },
} as const

export type Dict = (typeof translations)['fr']
