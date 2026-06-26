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

export const profileLabels = ['Tous', 'PME', 'Startup', 'Grande entreprise', 'Institution'];

export const consultationServices: ConsultationService[] = [
  {
    id: 'starter-digital',
    title: 'Starter Digital',
    subtitle: 'Lancez votre présence en ligne rapidement et à moindre coût.',
    description: "La plupart de vos futurs clients cherchent en ligne avant de vous appeler. Être absent — ou avoir un site vieillissant — c'est laisser vos concurrents capter vos opportunités à votre place.",
    duration: '2 à 4 semaines',
    price: 'Sur devis',
    icon: Globe,
    features: [
      'Vos clients vous trouvent sur Google dès le lancement',
      'Votre image est crédible et professionnelle dès la première visite',
      'Vos clients peuvent vous contacter via WhatsApp en un clic',
      "Support inclus 3 mois — vous n'êtes pas seul après la livraison",
    ],
    profiles: ['PME', 'Startup'],
  },
  {
    id: 'croissance-pme',
    title: 'Croissance PME',
    subtitle: 'Digitalisez vos opérations et boostez vos ventes.',
    description: "Vous gérez vos ventes sur WhatsApp, vos stocks dans un fichier Excel et vos clients dans un carnet ? Ça fonctionne jusqu'à un certain point — mais ça bloque votre croissance.",
    duration: '6 à 12 semaines',
    price: 'Sur devis',
    icon: TrendingUp,
    features: [
      'Vos clients achètent 24h/24 même quand vous dormez',
      'Vous voyez en temps réel où en sont vos ventes et vos clients',
      'Vos équipes gagnent des heures chaque semaine sur les tâches répétitives',
      'Vos clients reviennent — le CRM relance automatiquement',
    ],
    profiles: ['PME'],
    badge: 'Populaire',
  },
  {
    id: 'mvp-startup',
    title: 'MVP Startup',
    subtitle: "De l'idée au produit fonctionnel en un temps record.",
    description: "Vous avez une idée, peut-être un pitch deck, mais rien de concret à montrer à vos clients ou investisseurs. Chaque semaine sans produit fonctionnel, c'est du terrain perdu.",
    duration: '4 à 8 semaines',
    price: 'Sur devis',
    icon: Zap,
    features: [
      "Vous testez votre marché avant d'investir massivement",
      'Vous convaincez vos investisseurs avec un vrai produit, pas des slides',
      "L'architecture est pensée pour évoluer — vous ne recommencez pas tout dans 6 mois",
      "L'IA est intégrée dès le départ si vous en avez besoin",
    ],
    profiles: ['Startup'],
  },
  {
    id: 'enterprise-360',
    title: 'Enterprise 360',
    subtitle: 'Centralisez, automatisez et sécurisez tout votre SI.',
    description: "Vos équipes travaillent en silos, les informations se perdent entre départements, et les erreurs de double saisie ralentissent tout. On connecte et centralise votre système d'information de bout en bout.",
    duration: 'Sur mesure',
    price: 'Sur devis',
    icon: Building2,
    features: [
      'Toutes vos données au même endroit — fini les fichiers Excel qui se contredisent',
      'Vos tâches répétitives sont exécutées par des robots, sans erreur',
      'Vos données sont protégées et conformes — sans y penser',
      'Vous prenez des décisions basées sur vos vrais chiffres, en temps réel',
    ],
    profiles: ['Grande entreprise'],
  },
  {
    id: 'numerique-public',
    title: 'Numérique Public',
    subtitle: 'Modernisez vos services aux citoyens.',
    description: "Vos services fonctionnent encore sur papier, les délais s'allongent, et vos agents passent plus de temps sur l'administratif que sur le service aux citoyens. On modernise vos processus pour que tout le monde y gagne.",
    duration: 'Sur mesure',
    price: 'Sur devis',
    icon: Landmark,
    features: [
      'Vos citoyens accèdent à vos services en ligne, sans se déplacer',
      'Vos délais de traitement diminuent significativement',
      "Moins de papier, moins d'erreurs de saisie, plus de temps utile",
      'Vos données sont sécurisées et conformes aux normes en vigueur',
    ],
    profiles: ['Institution'],
  },
  {
    id: 'intelligence-ia',
    title: 'Intelligence IA',
    subtitle: "Intégrez l'IA dans vos processus métier.",
    description: "Fichiers Excel en double, saisies manuelles répétitives, erreurs de copier-coller : ces tâches ralentissent vos équipes et leur font perdre un temps précieux qui pourrait aller à votre cœur de métier.",
    duration: 'Modulaire',
    price: 'Sur devis',
    icon: Bot,
    features: [
      'Vos tâches répétitives sont exécutées sans erreur, 24h/24',
      'Vos clients obtiennent des réponses instantanées à toute heure',
      'Vous prenez de meilleures décisions grâce à des analyses prédictives',
      'Vous réduisez vos coûts opérationnels sans réduire la qualité',
    ],
    profiles: ['PME', 'Startup', 'Grande entreprise'],
  },
  {
    id: 'serenite-cloud',
    title: 'Sérénité Cloud',
    subtitle: 'Hébergement, supervision et continuité de service.',
    description: "Une panne, une cyberattaque ou une perte de données peuvent paralyser votre activité en quelques heures — parfois sans retour en arrière possible. On sécurise votre infrastructure et gère les problèmes avant qu'ils vous impactent.",
    duration: 'Contrat mensuel ou annuel',
    price: 'Sur devis',
    icon: Cloud,
    features: [
      'Vos données sont sauvegardées automatiquement — rien ne disparaît jamais',
      "On détecte les problèmes avant qu'ils vous impactent",
      'Vos équipes ont une assistance réactive quand quelque chose ne fonctionne pas',
      'Vos systèmes sont protégés contre les cyberattaques en permanence',
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
