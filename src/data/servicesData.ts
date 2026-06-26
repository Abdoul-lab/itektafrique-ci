import type { LucideIcon } from 'lucide-react';
import { Server, Monitor, Code, Users, CheckCircle, Clock } from 'lucide-react';

export interface ConsultationService {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  icon: LucideIcon;
  features: string[];
}

export interface Strength {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const consultationServices: ConsultationService[] = [
  {
    id: 'audit-it',
    title: 'Audit Informatique',
    description: "Vous ne savez pas pourquoi votre système ralentit ou où vous perdez des données ? Nous analysons tout et vous disons exactement quoi corriger, dans quel ordre.",
    duration: '3 à 5 jours',
    price: 'Sur devis',
    icon: Server,
    features: [
      "Vous découvrez exactement ce qui coûte de l'argent inutilement dans votre système",
      "Vos données clients et financières sont identifiées et protégées",
      "Un rapport que vous comprenez sans avoir besoin d'un technicien à côté",
      "Vous savez quoi faire en premier, sans gaspiller votre budget",
    ],
  },
  {
    id: 'developpement-web',
    title: 'Développement Web & Mobile',
    description: "Vos clients vous trouvent sur Google, font confiance à votre image et peuvent vous contacter facilement — nous créons le site qui travaille pour vous.",
    duration: '4 à 12 semaines',
    price: 'À partir de 2M FCFA',
    icon: Monitor,
    features: [
      "Vos clients vous font confiance dès la première visite, sur téléphone comme sur ordinateur",
      "Votre site ne tombe pas en panne aux mauvais moments",
      "Vos clients vous trouvent sur Google sans payer de publicité",
      "Vous gérez votre business — nous nous occupons des problèmes techniques",
    ],
  },
  {
    id: 'conseil-digital',
    title: 'Accompagnement Digital',
    description: "Trop d'outils, pas assez de résultats ? Nous choisissons avec vous ce qui est vraiment utile pour votre activité — et on vous montre comment l'utiliser vraiment.",
    duration: '1 à 2 semaines',
    price: '500K FCFA/jour',
    icon: Code,
    features: [
      "Vous arrêtez de payer pour des outils que personne n'utilise",
      "Vous investissez au bon endroit, sans vous ruiner ni vous tromper",
      "Vos employés utilisent vraiment les nouveaux outils — sans résistance",
      "Vous n'êtes jamais bloqué seul face à un problème",
    ],
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Assistance',
    description: "Une panne informatique peut vous faire perdre une journée entière. Avec notre contrat, nous réglons les problèmes avant même qu'ils vous impactent.",
    duration: 'Contrat annuel',
    price: 'À partir de 100K FCFA/mois',
    icon: Users,
    features: [
      "Vous ne perdez jamais une journée de travail à cause d'une panne",
      "Vos équipements restent rapides et fiables dans la durée",
      "Vos données sont toujours protégées, même sans y penser",
      "Même en cas de problème grave, vos données ne disparaissent jamais",
    ],
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
