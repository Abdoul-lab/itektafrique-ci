import type { LucideIcon } from 'lucide-react';
import { Globe, TrendingUp, Zap, Building2, Landmark, Bot, Cloud, CheckCircle, Clock, Code } from 'lucide-react';

export interface ConsultationService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  profiles: string[];
  badge?: string;
}

export interface Strength {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const profileLabels = ['Tous', 'PME', 'Startup', 'Grande entreprise', 'Institution', 'Professions libérales'];

export const consultationServices: ConsultationService[] = [
  {
    id: 'starter-digital',
    title: 'Starter Digital',
    subtitle: 'Get online — fast and affordably.',
    description: "Lancez votre présence en ligne avec un site professionnel moderne, sans vous ruiner. L'essentiel pour démarrer et être trouvé par vos clients.",
    duration: '2 à 4 semaines',
    price: 'Sur devis — paiement échelonné possible',
    icon: Globe,
    features: [
      'Site vitrine 5 pages (Accueil, À propos, Services, Réalisations, Contact)',
      'Domaine personnalisé + hébergement sécurisé 1 an',
      'Formulaire de contact & bouton WhatsApp intégré',
      'Optimisation mobile 100% responsive (Android, iOS, tablette)',
      'SEO de base : Google Maps, balises méta, vitesse',
      'Support & corrections inclus 3 mois',
    ],
    profiles: ['PME', 'Startup', 'Professions libérales'],
  },
  {
    id: 'croissance-pme',
    title: 'Croissance PME',
    subtitle: 'Scale your operations and sales.',
    description: "Digitalisez vos opérations, boostez vos ventes et pilotez votre activité depuis une plateforme unique. L'offre complète pour passer à la vitesse supérieure.",
    duration: '6 à 12 semaines',
    price: 'Sur devis — périmètre ajustable selon vos priorités',
    icon: TrendingUp,
    features: [
      'Site web pro optimisé SEO & performance',
      'Boutique e-commerce avec gestion des stocks',
      'CRM sur mesure (clients, prospects, pipeline, relances)',
      'Application mobile Android & iOS pour vos clients et équipes',
      'Paiement en ligne : Mobile Money + carte bancaire',
      'Maintenance & support 6 mois inclus',
    ],
    profiles: ['PME'],
    badge: 'Populaire',
  },
  {
    id: 'mvp-startup',
    title: 'MVP Startup',
    subtitle: 'From idea to product, fast.',
    description: "Transformez votre idée en produit fonctionnel en un temps record. Testez votre marché, convainquez vos investisseurs et lancez-vous avec un produit solide et évolutif.",
    duration: '4 à 8 semaines',
    price: 'Sur devis — délai de livraison rapide garanti',
    icon: Zap,
    features: [
      'Conception UX/UI : wireframes, prototype, design system',
      'App web ou mobile sur la plateforme la plus adaptée',
      'Intégration IA dès le départ (chatbot, recommandations, recherche vocale)',
      'Tests qualité fonctionnels & anti-régression',
      'Hébergement cloud évolutif inclus 6 mois',
      'Architecture scalable — évolue sans tout recommencer',
    ],
    profiles: ['Startup'],
  },
  {
    id: 'enterprise-360',
    title: 'Enterprise 360',
    subtitle: 'Centralize. Automate. Secure.',
    description: "Centralisez, automatisez et sécurisez l'ensemble de votre système d'information. L'offre la plus complète pour piloter votre croissance avec des outils de haut niveau.",
    duration: 'Sur mesure — contrat annuel',
    price: 'Sur devis — périmètre entièrement aux mesures',
    icon: Building2,
    features: [
      'ERP personnalisé (RH, Finance, Stock, Opérations)',
      'Intégration APIs — connexion de tous vos systèmes existants',
      'Automatisation RPA des tâches répétitives (saisies, workflows)',
      'IA embarquée dans vos processus métier critiques',
      'Cloud dédié hautement sécurisé avec réplication',
      'Support 24/7 dédié avec SLA garanti',
    ],
    profiles: ['Grande entreprise'],
  },
  {
    id: 'numerique-public',
    title: 'Numérique Public',
    subtitle: 'Modern public services.',
    description: "Modernisez vos services aux citoyens avec des solutions fiables, sécurisées et adaptées aux réalités institutionnelles africaines.",
    duration: 'Sur mesure',
    price: "Sur devis — adapté aux marchés publics & appels d'offres",
    icon: Landmark,
    features: [
      'Portail citoyen accessible en ligne (espace citoyen, demandes en ligne)',
      'Gestion numérique des dossiers & formulaires administratifs',
      'OCR intelligent — extraction automatique depuis vos documents officiels',
      'Infrastructure sécurisée & conforme (chiffrement, rôles, audit logs)',
      'Formation complète des agents à chaque étape',
      'Maintenance préventive & supervision continue',
    ],
    profiles: ['Institution'],
  },
  {
    id: 'intelligence-ia',
    title: 'Intelligence IA',
    subtitle: 'AI for your business.',
    description: "Intégrez la puissance de l'IA dans vos processus métier pour gagner en productivité, réduire les erreurs et prendre de meilleures décisions. Offre modulaire — choisissez uniquement ce dont vous avez besoin.",
    duration: 'Modulaire',
    price: 'Sur devis',
    icon: Bot,
    features: [
      'Chatbot IA 24/7 (service client, FAQ auto, WhatsApp)',
      'OCR intelligent — extraction automatique de données (factures, contrats)',
      'Analyse prédictive — tendances, risques & opportunités de croissance',
      'Automatisation RPA des tâches répétitives & workflows',
      'Dashboard temps réel avec KPIs visuels et alertes automatiques',
      'Recommandations IA personnalisées (e-commerce, RH, contenu)',
    ],
    profiles: ['PME', 'Startup', 'Grande entreprise', 'Institution'],
  },
  {
    id: 'serenite-cloud',
    title: 'Sérénité Cloud',
    subtitle: 'Peace of mind, always on.',
    description: "Protégez votre infrastructure, sécurisez vos données et garantissez la continuité de vos opérations — concentrez-vous sur votre cœur de métier, ITEKT s'occupe du reste.",
    duration: 'Contrat mensuel ou annuel',
    price: 'Sur devis — formules Essentiel, Business & Enterprise',
    icon: Cloud,
    features: [
      'Hébergement cloud performant, évolutif et sécurisé',
      "Sauvegardes automatiques avec restauration rapide en cas d'incident",
      'Maintenance préventive & mises à jour régulières',
      'Supervision continue 24/7 avec alertes automatiques',
      'Assistance utilisateurs — HelpDesk & tickets',
      'Sécurisation anti-cyberattaques & pare-feu',
    ],
    profiles: ['PME', 'Startup', 'Grande entreprise', 'Institution'],
  },
];

export const strengths: Strength[] = [
  {
    title: 'Expertise locale & internationale',
    description: "Vous bénéficiez de standards internationaux appliqués aux réalités africaines — pas une solution copiée d'ailleurs qui ne s'adapte pas à votre marché.",
    icon: CheckCircle,
  },
  {
    title: 'Sur-mesure & Intelligence Artificielle',
    description: "Vos outils s'intègrent dans vos processus existants et l'IA automatise ce que vos équipes font déjà — sans tout réinventer.",
    icon: Code,
  },
  {
    title: 'Accompagnement de A à Z',
    description: "De l'analyse de votre besoin à la formation de vos équipes, vous n'êtes jamais seul — nous restons jusqu'à ce que ça fonctionne vraiment.",
    icon: Clock,
  },
  {
    title: 'Support ultra-réactif',
    description: "Quand quelque chose cloche, vous avez une équipe joignable qui connaît votre dossier — pas un ticket qui disparaît dans la nature.",
    icon: CheckCircle,
  },
];
