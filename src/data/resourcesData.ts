import type { LucideIcon } from 'lucide-react';
import { BookOpen, Globe, Bot, Smartphone, ClipboardCheck, Server, Cloud } from 'lucide-react';

export interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  type: string;
  size?: string;
  duration?: string;
  downloads?: number;
  views?: number;
  date: string;
  featured: boolean;
  preview: string;
  tags: string[];
}

export const categories: Category[] = [
  { id: 'all',            label: 'Toutes les ressources',             icon: BookOpen },
  { id: 'web',            label: 'Web & E-commerce',                  icon: Globe },
  { id: 'logiciels-ia',   label: 'Logiciels & Intelligence Artificielle', icon: Bot },
  { id: 'mobile',         label: 'Applications Mobiles',              icon: Smartphone },
  { id: 'qualite',        label: 'Qualité & Tests',                   icon: ClipboardCheck },
  { id: 'infrastructure', label: 'Infrastructure & Réseau',           icon: Server },
  { id: 'cloud',          label: 'Cloud & Maintenance',               icon: Cloud },
];

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Guide : Créer un site qui attire vos clients',
    description: 'Les éléments clés d\'un site efficace pour convaincre dès la première visite — sans jargon technique.',
    category: 'web',
    type: 'PDF',
    size: '2.4 MB',
    downloads: 1840,
    date: '2026-01-20',
    featured: true,
    preview: 'Ce guide explique les éléments essentiels d\'un site professionnel efficace : structure des pages, contenu convaincant, optimisation Google et bouton de contact. Conçu pour les PME et indépendants qui veulent une présence digitale qui travaille pour eux, même quand ils dorment.',
    tags: ['Site vitrine', 'PME', 'Google', 'Design'],
  },
  {
    id: 2,
    title: 'Checklist : Lancer une boutique e-commerce',
    description: 'Toutes les étapes à vérifier avant de vendre en ligne : paiement, stocks, livraison, sécurité.',
    category: 'web',
    type: 'PDF',
    size: '1.1 MB',
    downloads: 980,
    date: '2026-02-05',
    featured: false,
    preview: 'Liste de vérification complète pour s\'assurer que votre boutique est prête au lancement : intégration Mobile Money & carte bancaire, gestion des commandes, politique de retour, sécurité SSL et test de la commande client.',
    tags: ['E-commerce', 'Mobile Money', 'Paiement en ligne', 'Checklist'],
  },
  {
    id: 3,
    title: 'Guide : Choisir un ERP pour votre PME',
    description: 'Comment identifier le bon logiciel de gestion pour centraliser vos données sans vous ruiner.',
    category: 'logiciels-ia',
    type: 'PDF',
    size: '3.2 MB',
    downloads: 2150,
    date: '2026-01-10',
    featured: true,
    preview: 'Ce guide compare les critères essentiels pour choisir un ERP adapté à votre taille et votre budget : gestion commerciale, RH, stock, finance. Il explique les pièges à éviter et les 10 questions à poser à votre prestataire avant de signer.',
    tags: ['ERP', 'CRM', 'PME', 'Gestion', 'Logiciel'],
  },
  {
    id: 4,
    title: 'Modèle : Cahier des charges pour un logiciel métier',
    description: 'Modèle prêt à remplir pour décrire votre besoin et obtenir des devis précis auprès de prestataires.',
    category: 'logiciels-ia',
    type: 'DOCX',
    size: '1.5 MB',
    downloads: 1320,
    date: '2026-02-12',
    featured: false,
    preview: 'Modèle structuré en 8 sections pour décrire votre projet logiciel : contexte, besoins fonctionnels, contraintes techniques, budget et calendrier. Idéal pour cadrer votre projet avant de consulter des prestataires et éviter les devis imprécis.',
    tags: ['Cahier des charges', 'Projet', 'Logiciel', 'Modèle'],
  },
  {
    id: 5,
    title: 'Guide : Développer une application mobile — par où commencer ?',
    description: 'Les étapes clés pour transformer votre idée en application mobile fonctionnelle, sans jargon technique.',
    category: 'mobile',
    type: 'PDF',
    size: '2.8 MB',
    downloads: 1650,
    date: '2026-01-28',
    featured: true,
    preview: 'Ce guide vous explique les choix à faire avant de lancer votre projet mobile : natif vs hybride, Android vs iOS, budget réaliste et étapes de développement. Avec un exemple de planning sur 8 semaines pour un MVP. Conçu pour les non-techniciens.',
    tags: ['Application mobile', 'Android', 'iOS', 'MVP', 'Startup'],
  },
  {
    id: 6,
    title: 'Checklist : Tester son application avant le lancement',
    description: '40 points de vérification pour éviter les bugs visibles et les mauvaises surprises le jour du lancement.',
    category: 'qualite',
    type: 'PDF',
    size: '0.9 MB',
    downloads: 870,
    date: '2026-03-01',
    featured: false,
    preview: 'Liste de 40 points de vérification à cocher avant de mettre votre application en ligne : fonctionnalités, performance, sécurité, compatibilité mobile et expérience utilisateur. Testez sur de vrais appareils, pas seulement en simulation.',
    tags: ['Tests', 'Qualité', 'Application', 'Lancement', 'Checklist'],
  },
  {
    id: 7,
    title: 'Guide : Sécuriser le réseau de votre entreprise',
    description: 'Les 10 mesures de base pour protéger vos données et votre réseau contre les cyberattaques les plus courantes.',
    category: 'infrastructure',
    type: 'PDF',
    size: '2.1 MB',
    downloads: 1980,
    date: '2026-01-15',
    featured: true,
    preview: 'Guide pratique sur les 10 mesures de sécurité réseau indispensables pour une PME : gestion des mots de passe, Wi-Fi professionnel séparé, pare-feu, sauvegardes automatiques et sensibilisation des équipes. Applicable sans compétences techniques avancées.',
    tags: ['Sécurité', 'Réseau', 'PME', 'Cybersécurité', 'Protection'],
  },
  {
    id: 8,
    title: 'Guide : Migrer vers le cloud sans risque',
    description: 'Tout ce qu\'il faut savoir avant de passer vos données et applications dans le cloud en toute sécurité.',
    category: 'cloud',
    type: 'PDF',
    size: '3.0 MB',
    downloads: 1420,
    date: '2026-02-20',
    featured: true,
    preview: 'Ce guide explique les étapes d\'une migration cloud réussie : audit de l\'existant, choix du prestataire, test de bascule et plan de retour arrière. Il inclut une liste des 7 erreurs les plus courantes à éviter et un comparatif des formules (mutualisé, dédié, hybride).',
    tags: ['Cloud', 'Migration', 'Sécurité', 'Hébergement', 'Données'],
  },
  {
    id: 9,
    title: 'Modèle : Contrat de maintenance informatique',
    description: 'Modèle de contrat pour encadrer la relation avec votre prestataire de maintenance informatique.',
    category: 'cloud',
    type: 'DOCX',
    size: '1.3 MB',
    downloads: 760,
    date: '2026-03-10',
    featured: false,
    preview: 'Modèle structuré d\'un contrat de maintenance : périmètre d\'intervention, délais de réponse garantis (SLA), conditions de facturation des interventions hors contrat et clause de résiliation. À adapter à votre situation et faire valider avant signature.',
    tags: ['Maintenance', 'Contrat', 'SLA', 'Prestataire', 'Modèle'],
  },
];

export const featuredResources = resources.filter((r) => r.featured);
