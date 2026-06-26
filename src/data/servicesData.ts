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
    description: 'Nous analysons votre système informatique et vous remettons un rapport clair avec des recommandations concrètes.',
    duration: '3 à 5 jours',
    price: 'Sur devis',
    icon: Server,
    features: [
      'Analyse de votre matériel et logiciels existants',
      'Évaluation des risques de sécurité',
      'Rapport détaillé en langage clair',
      'Plan d\'action priorisé',
    ],
  },
  {
    id: 'developpement-web',
    title: 'Développement Web & Mobile',
    description: 'Nous créons votre site web ou votre application mobile, de la conception à la mise en ligne.',
    duration: '4 à 12 semaines',
    price: 'À partir de 2M FCFA',
    icon: Monitor,
    features: [
      'Design moderne adapté à tous les écrans',
      'Technologies actuelles et fiables',
      'Référencement Google inclus',
      'Maintenance gratuite 6 mois',
    ],
  },
  {
    id: 'conseil-digital',
    title: 'Accompagnement Digital',
    description: 'Nous vous aidons à moderniser votre entreprise avec le numérique, étape par étape, à votre rythme.',
    duration: '1 à 2 semaines',
    price: '500K FCFA/jour',
    icon: Code,
    features: [
      'Diagnostic de vos outils actuels',
      'Choix des technologies adaptées à votre budget',
      'Formation de vos équipes',
      'Suivi personnalisé',
    ],
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Assistance',
    description: 'Nous assurons le bon fonctionnement de vos outils informatiques au quotidien.',
    duration: 'Contrat annuel',
    price: 'À partir de 100K FCFA/mois',
    icon: Users,
    features: [
      'Assistance disponible 24h/24, 7j/7',
      'Entretien régulier de vos systèmes',
      'Mises à jour de sécurité automatiques',
      'Sauvegarde de vos données',
    ],
  },
];

export const strengths: Strength[] = [
  {
    title: 'Équipe qualifiée',
    description: 'Nos techniciens sont formés et certifiés sur les technologies qu\'ils utilisent pour vos projets.',
    icon: CheckCircle,
  },
  {
    title: 'Réponse rapide',
    description: 'Nous répondons à vos demandes dans les plus brefs délais et proposons des solutions concrètes.',
    icon: Clock,
  },
  {
    title: 'Sur mesure',
    description: 'Pas de solution toute faite. Chaque projet est unique, comme votre entreprise.',
    icon: Code,
  },
  {
    title: 'Résultats garantis',
    description: 'Nous suivons chaque projet jusqu\'à votre entière satisfaction.',
    icon: CheckCircle,
  },
];
