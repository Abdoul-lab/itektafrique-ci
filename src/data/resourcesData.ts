import type { LucideIcon } from 'lucide-react';
import { BookOpen, FileText, Video, Code, Users } from 'lucide-react';

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
  { id: 'all', label: 'Toutes les ressources', icon: BookOpen },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'videos', label: 'Tutoriels vidéo', icon: Video },
  { id: 'outils', label: 'Outils & Modèles', icon: Code },
  { id: 'formations', label: 'Formations', icon: Users },
];

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Guide du développement web moderne',
    description: 'Un manuel pratique pour créer des sites et applications web avec React et Node.js',
    category: 'documents',
    type: 'PDF',
    size: '3.2 MB',
    downloads: 2150,
    date: '2024-01-15',
    featured: true,
    preview: 'Ce guide vous accompagne pas à pas dans la création d\'applications web. Il contient des exemples concrets, des bonnes pratiques et des exercices pratiques pour progresser rapidement.',
    tags: ['React', 'Node.js', 'JavaScript', 'Web'],
  },
  {
    id: 2,
    title: 'Tutoriel : Mettre en ligne une application React',
    description: 'Formation vidéo pour déployer votre application React sur internet',
    category: 'videos',
    type: 'MP4',
    duration: '25 min',
    views: 4320,
    date: '2024-01-10',
    featured: true,
    preview: 'Cette vidéo vous montre, étape par étape, comment publier une application React sur différentes plateformes cloud, sans jargon technique inutile.',
    tags: ['React', 'Mise en ligne', 'Cloud'],
  },
  {
    id: 3,
    title: 'Modèle d\'API REST avec Node.js',
    description: 'Un modèle prêt à l\'emploi pour créer une API sécurisée avec Node.js',
    category: 'outils',
    type: 'ZIP',
    size: '1.2 MB',
    downloads: 1890,
    date: '2024-01-08',
    featured: false,
    preview: 'Modèle complet avec connexion sécurisée, vérification des données, gestion des erreurs et documentation intégrée. Idéal pour démarrer rapidement.',
    tags: ['Node.js', 'API', 'Express', 'Sécurité'],
  },
  {
    id: 4,
    title: 'Formation JavaScript Avancé — Support de cours',
    description: 'Tout ce qu\'il faut savoir sur JavaScript ES6+ pour les développeurs',
    category: 'formations',
    type: 'PDF',
    size: '5.8 MB',
    downloads: 3100,
    date: '2024-01-05',
    featured: true,
    preview: 'Support complet pour maîtriser JavaScript moderne. Contient la théorie, des exercices pratiques et des projets réels pour mettre en pratique vos apprentissages.',
    tags: ['JavaScript', 'ES6+', 'Formation'],
  },
  {
    id: 5,
    title: 'Calculateur de coût de projet informatique',
    description: 'Tableur Excel pour estimer le budget d\'un projet informatique',
    category: 'outils',
    type: 'XLSX',
    size: '2.1 MB',
    downloads: 1250,
    date: '2024-01-03',
    featured: false,
    preview: 'Tableur automatisé pour estimer le coût d\'un projet selon sa complexité et les technologies choisies. Pratique pour préparer un budget ou une proposition client.',
    tags: ['Budget', 'Estimation', 'Projet', 'Excel'],
  },
  {
    id: 6,
    title: 'Tutoriel : Configurer un serveur Linux',
    description: 'Vidéo pratique pour installer et configurer un serveur web Linux',
    category: 'videos',
    type: 'MP4',
    duration: '35 min',
    views: 2980,
    date: '2023-12-28',
    featured: false,
    preview: 'Vidéo claire sur l\'installation et la configuration d\'un serveur Linux pour héberger vos applications web. Accessible même sans expérience avancée.',
    tags: ['Linux', 'Serveur', 'Hébergement'],
  },
  {
    id: 7,
    title: 'Modèle de documentation technique',
    description: 'Modèle Word pour rédiger une documentation technique professionnelle',
    category: 'documents',
    type: 'DOCX',
    size: '1.5 MB',
    downloads: 2250,
    date: '2023-12-25',
    featured: true,
    preview: 'Modèle professionnel avec une structure type et des exemples concrets pour documenter vos projets. Prêt à personnaliser.',
    tags: ['Documentation', 'Modèle', 'Projet'],
  },
  {
    id: 8,
    title: 'Guide de sécurité informatique',
    description: 'Les bonnes pratiques de sécurité expliquées simplement aux développeurs',
    category: 'documents',
    type: 'PDF',
    size: '2.8 MB',
    downloads: 1820,
    date: '2023-12-20',
    featured: false,
    preview: 'Guide illustré des bonnes pratiques de sécurité pour les développeurs. Contient des exemples concrets et des check-lists faciles à appliquer.',
    tags: ['Sécurité', 'Développement', 'Bonnes pratiques'],
  },
];

export const featuredResources = resources.filter((r) => r.featured);
