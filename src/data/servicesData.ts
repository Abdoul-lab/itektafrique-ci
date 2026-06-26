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
    description: "Vous n'êtes pas encore en ligne, ou votre site actuel ne vous ramène aucun client ? On vous lance une présence professionnelle en quelques semaines, sans vous ruiner.",
    duration: '2 à 4 semaines',
    price: 'Sur devis',
    icon: Globe,
    features: [
      'Vos clients vous trouvent sur Google dès le lancement',
      'Votre image est crédible et professionnelle dès la première visite',
      'Vos clients peuvent vous contacter via WhatsApp en un clic',
      'Support inclus 3 mois — vous n\'êtes pas seul après la livraison',
    ],
    profiles: ['PME', 'Startup'],
  },
  {
    id: 'croissance-pme',
    title: 'Croissance PME',
    subtitle: 'Digitalisez vos opérations et boostez vos ventes.',
    description: "Vous perdez du temps sur des tâches manuelles et vos ventes ne décollent pas ? On vous donne les outils pour piloter votre activité depuis une seule plateforme.",
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
    description: "Vous avez une idée de produit mais pas encore de version à montrer à vos clients ou investisseurs ? On vous livre un MVP solide, rapide, et prêt à évoluer.",
    duration: '4 à 8 semaines',
    price: 'Sur devis',
    icon: Zap,
    features: [
      'Vous testez votre marché avant d\'investir massivement',
      'Vous convaincez vos investisseurs avec un vrai produit, pas des slides',
      'L\'architecture est pensée pour évoluer — vous ne recommencez pas tout dans 6 mois',
      'L\'IA est intégrée dès le départ si vous en avez besoin',
    ],
    profiles: ['Startup'],
  },
  {
    id: 'enterprise-360',
    title: 'Enterprise 360',
    subtitle: 'Centralisez, automatisez et sécurisez tout votre SI.',
    description: "Vos systèmes ne communiquent pas entre eux, vos équipes perdent du temps en ressaisies, et la sécurité vous préoccupe ? On centralise tout et on automatise ce qui peut l'être.",
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
    description: "Vos services sont encore sur papier, vos délais de traitement sont longs, et vos agents perdent du temps sur des tâches administratives ? On modernise vos processus pour les citoyens et vos équipes.",
    duration: 'Sur mesure',
    price: 'Sur devis',
    icon: Landmark,
    features: [
      'Vos citoyens accèdent à vos services en ligne, sans se déplacer',
      'Vos délais de traitement diminuent significativement',
      'Moins de papier, moins d\'erreurs de saisie, plus de temps utile',
      'Vos données sont sécurisées et conformes aux normes en vigueur',
    ],
    profiles: ['Institution'],
  },
  {
    id: 'intelligence-ia',
    title: 'Intelligence IA',
    subtitle: 'Intégrez l\'IA dans vos processus métier.',
    description: "Certaines tâches de votre activité pourraient être faites automatiquement — extraction de données, réponses clients, analyses. On identifie ce qui vaut la peine d'être automatisé et on l'implémente.",
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
    description: "Vous ne voulez plus vous inquiéter des pannes, des sauvegardes ou des cyberattaques ? On prend en charge toute votre infrastructure pour que vous puissiez vous concentrer sur votre métier.",
    duration: 'Contrat mensuel ou annuel',
    price: 'Sur devis',
    icon: Cloud,
    features: [
      'Vos données sont sauvegardées automatiquement — rien ne disparaît jamais',
      'On détecte les problèmes avant qu\'ils vous impactent',
      'Vos équipes ont une assistance réactive quand quelque chose ne fonctionne pas',
      'Vos systèmes sont protégés contre les cyberattaques en permanence',
    ],
    profiles: ['PME', 'Startup', 'Grande entreprise', 'Institution'],
  },
];

export const strengths: Strength[] = [
  {
    title: 'Équipe qualifiée',
    description: "Vous confiez votre projet à des professionnels certifiés — pas à des débutants qui apprennent sur votre budget.",
    icon: CheckCircle,
  },
  {
    title: 'Réponse rapide',
    description: "Pas de ticket d'assistance qui traîne — vous obtenez une réponse et une solution concrète rapidement.",
    icon: Clock,
  },
  {
    title: 'Sur mesure',
    description: "Vous n'achetez pas un produit standard à adapter — on part de vos besoins réels dès le début.",
    icon: Code,
  },
  {
    title: 'Résultats garantis',
    description: "Vous ne signez pas un chèque en blanc — nous restons jusqu'à ce que vous soyez pleinement satisfait.",
    icon: CheckCircle,
  },
];
