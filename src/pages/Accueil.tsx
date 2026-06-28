import React, { useState, useEffect } from 'react';
import {
  Code, Users, Monitor, Phone, Mail, MapPin,
  CheckCircle, Server, Smartphone,
  GraduationCap, Heart, ShoppingCart, Building2, Zap, Landmark,
  ArrowRight, Globe, Cloud, Bot, ShieldCheck, Network,
} from 'lucide-react';
import { CONTACT } from '../constants/contact';
import { useInView } from '../hooks/useInView';
import TechIllustration from '../components/TechIllustration';

const techAnecdotes = [
  { icon: '💡', text: 'ChatGPT a atteint 1 milliard d\'utilisateurs en moins de 2 ans' },
  { icon: '🌍', text: 'L\'Afrique comptera 1,5 milliard d\'internautes d\'ici 2030' },
  { icon: '🤖', text: 'En 2025, l\'IA génère 10 % du code mondial en production' },
  { icon: '🏆', text: 'L\'Afrique de l\'Ouest est le marché fintech à la croissance la plus rapide' },
  { icon: '🔐', text: 'Une cyberattaque survient toutes les 39 secondes dans le monde' },
];

const WMO_ICONS: Record<number, string> = {
  0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
  45: '🌫️', 48: '🌫️',
  51: '🌦️', 53: '🌦️', 55: '🌧️',
  61: '🌧️', 63: '🌧️', 65: '🌧️',
  80: '🌦️', 81: '🌧️', 82: '⛈️',
  95: '⛈️', 96: '⛈️', 99: '⛈️',
};

function getWmoIcon(code: number): string {
  return WMO_ICONS[code] ?? '🌡️';
}

function formatDateAbidjan(): string {
  return new Date().toLocaleDateString('fr-FR', {
    weekday: 'short', day: 'numeric', month: 'short',
    timeZone: 'Africa/Abidjan',
  });
}

function RotatingBadge() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [weather, setWeather] = useState<{ temp: number; icon: string } | null>(null);
  const [hnNews, setHnNews] = useState<Array<{ icon: string; text: string }>>([]);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=5.3599&longitude=-4.0083&current=temperature_2m,weathercode&timezone=Africa%2FAbidjan')
      .then(r => r.json())
      .then(d => setWeather({
        temp: Math.round(d.current.temperature_2m),
        icon: getWmoIcon(d.current.weathercode),
      }))
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(r => r.json())
      .then((ids: number[]) =>
        Promise.all(ids.slice(0, 4).map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json())
        ))
      )
      .then(stories => {
        setHnNews(
          stories
            .filter((s): s is { title: string } => !!s?.title)
            .map(s => ({ icon: '📰', text: s.title.length > 70 ? s.title.slice(0, 67) + '…' : s.title }))
        );
      })
      .catch(() => {});
  }, []);

  const slides = [
    {
      icon: '📍',
      text: weather
        ? `Abidjan — ${formatDateAbidjan()}  ${weather.icon} ${weather.temp}°C`
        : `Abidjan — ${formatDateAbidjan()}`,
    },
    ...techAnecdotes,
    ...hnNews,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(i => (i + 1) % slides.length);
        setVisible(true);
      }, 400);
    }, 9000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const { icon, text } = slides[index];
  return (
    <span
      className="text-sm font-medium transition-opacity duration-500"
      style={{ opacity: visible ? 0.9 : 0 }}
    >
      {icon} {text}
    </span>
  );
}

const sectors = [
  { icon: GraduationCap, label: 'Éducation',               gradient: 'from-sky-400 to-blue-600',      desc: "Écoles, universités, plateformes e-learning" },
  { icon: Building2,     label: 'PME & Entreprises',        gradient: 'from-indigo-400 to-indigo-600', desc: "Digitalisation et pilotage de l'activité" },
  { icon: Heart,         label: 'Santé',                    gradient: 'from-rose-400 to-red-600',      desc: "Cliniques, laboratoires, gestion des patients" },
  { icon: Landmark,      label: 'Administrations',          gradient: 'from-violet-400 to-purple-600', desc: "Modernisation et services aux citoyens" },
  { icon: ShoppingCart,  label: 'Commerce & Distribution',  gradient: 'from-emerald-400 to-green-600', desc: "Vente en ligne, stocks et logistique" },
  { icon: Users,         label: 'Sport & Associations',     gradient: 'from-amber-400 to-yellow-600',  desc: "Gestion des membres et des événements" },
  { icon: Zap,           label: 'Startups & Innovation',    gradient: 'from-orange-400 to-orange-600', desc: "MVP, scalabilité et solutions IA" },
];

const heroStats = [
  { value: '7',   label: 'secteurs couverts' },
  { value: '7',   label: 'offres sur mesure' },
  { value: '48h', label: 'réponse garantie' },
];

const IlluWeb = (
  <svg viewBox="0 0 100 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="4" width="88" height="56" rx="6" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.22" strokeWidth="1.5"/>
    <rect x="6" y="4" width="88" height="17" rx="6" fill="white" fillOpacity="0.2"/>
    <rect x="6" y="14" width="88" height="7" fill="white" fillOpacity="0.2"/>
    <circle cx="17" cy="12" r="3" fill="white" fillOpacity="0.8"/>
    <circle cx="26" cy="12" r="3" fill="white" fillOpacity="0.8"/>
    <circle cx="35" cy="12" r="3" fill="white" fillOpacity="0.8"/>
    <rect x="42" y="7" width="46" height="10" rx="5" fill="white" fillOpacity="0.2"/>
    <path d="M13 26 L20 36 L13 46" stroke="white" strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M28 26 L21 36 L28 46" stroke="white" strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="34" y="27" width="38" height="3.5" rx="1.75" fill="white" fillOpacity="0.4"/>
    <rect x="34" y="35" width="27" height="3.5" rx="1.75" fill="white" fillOpacity="0.28"/>
    <rect x="34" y="43" width="34" height="3.5" rx="1.75" fill="white" fillOpacity="0.4"/>
    <rect x="76" y="26" width="14" height="10" rx="2" fill="white" fillOpacity="0.18" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
    <rect x="78" y="29" width="9" height="2" rx="1" fill="white" fillOpacity="0.45"/>
    <rect x="78" y="33" width="6" height="2" rx="1" fill="white" fillOpacity="0.3"/>
    <rect x="78" y="40" width="9" height="14" rx="2" fill="white" fillOpacity="0.18" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
    <rect x="80" y="44" width="5" height="1.5" rx="0.75" fill="white" fillOpacity="0.45"/>
    <rect x="80" y="47" width="3.5" height="1.5" rx="0.75" fill="white" fillOpacity="0.3"/>
  </svg>
);

const IlluAI = (
  <svg viewBox="0 0 100 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="33" y="13" width="34" height="38" rx="4" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
    <rect x="39" y="19" width="10" height="10" rx="2" fill="white" fillOpacity="0.32"/>
    <rect x="51" y="19" width="10" height="10" rx="2" fill="white" fillOpacity="0.32"/>
    <rect x="39" y="33" width="10" height="10" rx="2" fill="white" fillOpacity="0.32"/>
    <rect x="51" y="33" width="10" height="10" rx="2" fill="white" fillOpacity="0.32"/>
    <line x1="43" y1="4" x2="43" y2="13" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
    <line x1="50" y1="4" x2="50" y2="13" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
    <line x1="57" y1="4" x2="57" y2="13" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
    <line x1="43" y1="51" x2="43" y2="60" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
    <line x1="50" y1="51" x2="50" y2="60" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
    <line x1="57" y1="51" x2="57" y2="60" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="21" x2="33" y2="21" stroke="white" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="32" x2="33" y2="32" stroke="white" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="43" x2="33" y2="43" stroke="white" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="11" cy="21" r="4" fill="white" fillOpacity="0.55"/>
    <circle cx="11" cy="32" r="4" fill="white" fillOpacity="0.55"/>
    <circle cx="11" cy="43" r="4" fill="white" fillOpacity="0.55"/>
    <line x1="67" y1="21" x2="86" y2="21" stroke="white" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="round"/>
    <line x1="67" y1="32" x2="86" y2="32" stroke="white" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="round"/>
    <line x1="67" y1="43" x2="86" y2="43" stroke="white" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="89" cy="21" r="4" fill="white" fillOpacity="0.55"/>
    <circle cx="89" cy="32" r="4" fill="white" fillOpacity="0.55"/>
    <circle cx="89" cy="43" r="4" fill="white" fillOpacity="0.55"/>
    <path d="M84 3 L86 9 L92 7 L88 12 L94 14 L88 15 L86 21 L84 15 L78 14 L83 12 L80 7 L86 9 Z" fill="white" fillOpacity="0.6"/>
  </svg>
);

const IlluMobile = (
  <svg viewBox="0 0 100 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="12" width="22" height="40" rx="6" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.18" strokeWidth="1.5" transform="rotate(-10 21 32)"/>
    <rect x="34" y="4" width="32" height="56" rx="7" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
    <rect x="38" y="13" width="24" height="36" rx="3" fill="white" fillOpacity="0.15"/>
    <rect x="44" y="7" width="12" height="3.5" rx="1.75" fill="white" fillOpacity="0.45"/>
    <rect x="40" y="16" width="8" height="8" rx="2" fill="white" fillOpacity="0.4"/>
    <rect x="52" y="16" width="8" height="8" rx="2" fill="white" fillOpacity="0.4"/>
    <rect x="40" y="27" width="8" height="8" rx="2" fill="white" fillOpacity="0.28"/>
    <rect x="52" y="27" width="8" height="8" rx="2" fill="white" fillOpacity="0.4"/>
    <rect x="40" y="39" width="20" height="2.5" rx="1.25" fill="white" fillOpacity="0.35"/>
    <rect x="40" y="44" width="14" height="2.5" rx="1.25" fill="white" fillOpacity="0.22"/>
    <rect x="44" y="55" width="12" height="2.5" rx="1.25" fill="white" fillOpacity="0.35"/>
    <rect x="68" y="12" width="22" height="40" rx="6" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.18" strokeWidth="1.5" transform="rotate(10 79 32)"/>
    <circle cx="50" cy="32" r="34" stroke="white" strokeOpacity="0.05" strokeWidth="10" fill="none"/>
  </svg>
);

const IlluQuality = (
  <svg viewBox="0 0 100 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 3 L84 15 L84 36 C84 53 68 61 50 65 C32 61 16 53 16 36 L16 15 Z" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.3" strokeWidth="2"/>
    <path d="M50 9 L78 19 L78 36 C78 49 65 55 50 59 C35 55 22 49 22 36 L22 19 Z" fill="white" fillOpacity="0.06"/>
    <path d="M32 33 L44 45 L68 21" stroke="white" strokeOpacity="0.88" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M8 14 L9.5 19 L14.5 19 L10.5 22 L12 27 L8 24.5 L4 27 L5.5 22 L1.5 19 L6.5 19 Z" fill="white" fillOpacity="0.5"/>
    <path d="M92 14 L93.5 19 L98.5 19 L94.5 22 L96 27 L92 24.5 L88 27 L89.5 22 L85.5 19 L90.5 19 Z" fill="white" fillOpacity="0.5"/>
    <ellipse cx="20" cy="56" rx="7" ry="4.5" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.22" strokeWidth="1.5"/>
    <line x1="17" y1="52.5" x2="23" y2="59.5" stroke="white" strokeOpacity="0.42" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="23" y1="52.5" x2="17" y2="59.5" stroke="white" strokeOpacity="0.42" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="80" cy="56" rx="7" ry="4.5" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.22" strokeWidth="1.5"/>
    <line x1="77" y1="52.5" x2="83" y2="59.5" stroke="white" strokeOpacity="0.42" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="83" y1="52.5" x2="77" y2="59.5" stroke="white" strokeOpacity="0.42" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IlluNetwork = (
  <svg viewBox="0 0 100 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="32" r="11" fill="white" fillOpacity="0.22" stroke="white" strokeOpacity="0.5" strokeWidth="2"/>
    <circle cx="50" cy="32" r="5" fill="white" fillOpacity="0.5"/>
    <circle cx="15" cy="14" r="8" fill="white" fillOpacity="0.16" stroke="white" strokeOpacity="0.35" strokeWidth="1.5"/>
    <circle cx="15" cy="14" r="3.5" fill="white" fillOpacity="0.5"/>
    <circle cx="85" cy="14" r="8" fill="white" fillOpacity="0.16" stroke="white" strokeOpacity="0.35" strokeWidth="1.5"/>
    <circle cx="85" cy="14" r="3.5" fill="white" fillOpacity="0.5"/>
    <circle cx="15" cy="50" r="8" fill="white" fillOpacity="0.16" stroke="white" strokeOpacity="0.35" strokeWidth="1.5"/>
    <circle cx="15" cy="50" r="3.5" fill="white" fillOpacity="0.5"/>
    <circle cx="85" cy="50" r="8" fill="white" fillOpacity="0.16" stroke="white" strokeOpacity="0.35" strokeWidth="1.5"/>
    <circle cx="85" cy="50" r="3.5" fill="white" fillOpacity="0.5"/>
    <line x1="23" y1="18" x2="40" y2="27" stroke="white" strokeOpacity="0.27" strokeWidth="1.5" strokeDasharray="4 3"/>
    <line x1="77" y1="18" x2="60" y2="27" stroke="white" strokeOpacity="0.27" strokeWidth="1.5" strokeDasharray="4 3"/>
    <line x1="23" y1="46" x2="40" y2="37" stroke="white" strokeOpacity="0.27" strokeWidth="1.5" strokeDasharray="4 3"/>
    <line x1="77" y1="46" x2="60" y2="37" stroke="white" strokeOpacity="0.27" strokeWidth="1.5" strokeDasharray="4 3"/>
    <circle cx="31" cy="22" r="3.5" fill="white" fillOpacity="0.6"/>
    <circle cx="69" cy="22" r="3.5" fill="white" fillOpacity="0.6"/>
    <circle cx="31" cy="42" r="3.5" fill="white" fillOpacity="0.6"/>
    <circle cx="69" cy="42" r="3.5" fill="white" fillOpacity="0.6"/>
    <circle cx="50" cy="5" r="5" fill="white" fillOpacity="0.18" stroke="white" strokeOpacity="0.28" strokeWidth="1.5"/>
    <circle cx="50" cy="5" r="2" fill="white" fillOpacity="0.6"/>
    <line x1="50" y1="10" x2="50" y2="21" stroke="white" strokeOpacity="0.27" strokeWidth="1.5" strokeDasharray="4 3"/>
    <circle cx="50" cy="59" r="5" fill="white" fillOpacity="0.18" stroke="white" strokeOpacity="0.28" strokeWidth="1.5"/>
    <circle cx="50" cy="59" r="2" fill="white" fillOpacity="0.6"/>
    <line x1="50" y1="43" x2="50" y2="54" stroke="white" strokeOpacity="0.27" strokeWidth="1.5" strokeDasharray="4 3"/>
  </svg>
);

const IlluCloud = (
  <svg viewBox="0 0 100 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M76 31 C83 31 88 26 88 20 C88 14 83 9 77 9 C75 3 69 -1 62 -1 C55 -1 49 4 47 10 C45 9 43 8 41 8 C34 8 28 14 28 21 C26 22 24 25 24 28 C24 31 26.5 33.5 30 34 L76 31 Z" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.3" strokeWidth="1.5"/>
    <rect x="40" y="38" width="18" height="16" rx="3" fill="white" fillOpacity="0.24" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
    <path d="M43 38 L43 32 C43 27 57 27 57 32 L57 38" stroke="white" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="49" cy="45" r="2.5" fill="white" fillOpacity="0.65"/>
    <rect x="48" y="46.5" width="2" height="4" rx="1" fill="white" fillOpacity="0.65"/>
    <rect x="8" y="36" width="18" height="9" rx="2" fill="white" fillOpacity="0.14" stroke="white" strokeOpacity="0.26" strokeWidth="1.5"/>
    <circle cx="22" cy="40.5" r="2" fill="white" fillOpacity="0.55"/>
    <rect x="10" y="39" width="8" height="3" rx="1.5" fill="white" fillOpacity="0.25"/>
    <rect x="8" y="48" width="18" height="9" rx="2" fill="white" fillOpacity="0.14" stroke="white" strokeOpacity="0.26" strokeWidth="1.5"/>
    <circle cx="22" cy="52.5" r="2" fill="white" fillOpacity="0.55"/>
    <rect x="10" y="51" width="8" height="3" rx="1.5" fill="white" fillOpacity="0.25"/>
    <path d="M73 39 C78 36 84 38.5 86 44 C88 49.5 84 54 79 53" stroke="white" strokeOpacity="0.46" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M67 55 C72 58 78 55.5 80 50" stroke="white" strokeOpacity="0.46" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <polygon points="87,40 84,37 84,44" fill="white" fillOpacity="0.5"/>
    <polygon points="66,56 69,59 69,53" fill="white" fillOpacity="0.5"/>
  </svg>
);

const serviceCards = [
  {
    gradient: 'from-blue-500 to-blue-700',
    iconBg: 'bg-white/20',
    Icon: Globe,
    illustration: IlluWeb,
    title: 'Développement Web Performance',
    tags: ['Sites vitrines', 'E-commerce', 'Portails métiers'],
    desc: "Un site professionnel, rapide et sécurisé — vos clients vous trouvent, vous font confiance et vous contactent même quand vous dormez.",
    delay: 'delay-100',
  },
  {
    gradient: 'from-[var(--brand-orange)] to-orange-600',
    iconBg: 'bg-white/20',
    Icon: Bot,
    illustration: IlluAI,
    title: 'Logiciels Sur-Mesure & IA',
    tags: ['ERP / CRM', 'Chatbots IA', 'Automatisation RPA'],
    desc: "Fini les fichiers Excel en double et les saisies répétitives — vos équipes travaillent plus vite, font moins d'erreurs et vous pilotez tout depuis un seul endroit.",
    delay: 'delay-200',
  },
  {
    gradient: 'from-purple-500 to-purple-700',
    iconBg: 'bg-white/20',
    Icon: Smartphone,
    illustration: IlluMobile,
    title: 'Applications Mobiles Intuitives',
    tags: ['Android & iOS', 'IA embarquée', 'Applications terrain'],
    desc: "Vos équipes terrain agissent depuis leur téléphone, vos clients commandent ou réservent en quelques secondes — où qu'ils soient, à toute heure.",
    delay: 'delay-300',
  },
  {
    gradient: 'from-green-500 to-green-700',
    iconBg: 'bg-white/20',
    Icon: ShieldCheck,
    illustration: IlluQuality,
    title: 'Assurance Qualité & Tests',
    tags: ['Tests fonctionnels', 'Contrôle qualité', 'Performance & UX'],
    desc: "Vos utilisateurs ne verront jamais un bug — chaque livraison est testée en profondeur pour que votre réputation ne souffre d'aucune mauvaise surprise.",
    delay: 'delay-100',
  },
  {
    gradient: 'from-indigo-500 to-indigo-700',
    iconBg: 'bg-white/20',
    Icon: Network,
    illustration: IlluNetwork,
    title: 'Interconnexion & Infrastructure',
    tags: ['Intégration APIs', 'Réseaux d\'entreprise', 'Vidéosurveillance IA'],
    desc: "Vos logiciels se parlent, vos équipes accèdent aux bonnes informations sans ressaisie — plus de silos, plus de temps perdu à chercher une donnée.",
    delay: 'delay-200',
  },
  {
    gradient: 'from-cyan-500 to-cyan-700',
    iconBg: 'bg-white/20',
    Icon: Cloud,
    illustration: IlluCloud,
    title: 'Maintenance & Cloud Sécurisé',
    tags: ['Hébergement cloud', 'Sauvegardes auto', 'Support 24/7'],
    desc: "Vos données sont sauvegardées, votre système surveillé 24h/24 — en cas d'incident, on intervient avant même que vous le remarquiez.",
    delay: 'delay-300',
  },
];

const engagements = [
  {
    Icon: CheckCircle,
    color: 'text-[var(--brand-orange)]',
    title: 'Qualité garantie',
    desc: "Chaque livraison est testée — vous ne découvrez pas de mauvaises surprises après le paiement.",
    delay: 'delay-100',
  },
  {
    Icon: Users,
    color: 'text-white',
    title: 'Un seul interlocuteur',
    desc: "Un interlocuteur unique qui connaît votre dossier — fini les explications à répéter à chaque appel.",
    delay: 'delay-200',
  },
  {
    Icon: Smartphone,
    color: 'text-white',
    title: 'Durable dans le temps',
    desc: "Ce que nous construisons aujourd'hui fonctionnera encore dans 5 ans — vous n'avez pas à tout recommencer dans 2 ans.",
    delay: 'delay-300',
  },
];

const whyUs = [
  {
    bg: 'bg-blue-500',
    Icon: CheckCircle,
    title: 'Expertise locale & internationale',
    desc: "Standards internationaux appliqués aux réalités africaines — pas une solution copiée d'ailleurs qui ne s'adapte pas à votre marché.",
  },
  {
    bg: 'bg-[var(--brand-orange)]',
    Icon: Server,
    title: 'Sur-mesure & Intelligence Artificielle',
    desc: "Vos outils s'intègrent dans vos processus existants et l'IA automatise ce que vos équipes font déjà — sans tout réinventer.",
  },
  {
    bg: 'bg-purple-500',
    Icon: Users,
    title: 'Accompagnement de A à Z',
    desc: "De l'analyse de votre besoin à la formation de vos équipes, vous n'êtes jamais seul — nous restons jusqu'à ce que ça fonctionne vraiment.",
  },
  {
    bg: 'bg-green-500',
    Icon: Smartphone,
    title: 'Support ultra-réactif',
    desc: "Quand quelque chose cloche, vous avez une équipe joignable qui connaît votre dossier — pas un ticket qui disparaît dans la nature.",
  },
];

const contactCards = [
  { bg: 'from-blue-50 to-blue-100',     iconBg: 'bg-blue-500',              Icon: Phone,  title: 'Téléphone',    value: CONTACT.phone,   href: `tel:${CONTACT.phone.replace(/\s/g, '')}`, delay: 'delay-100' },
  { bg: 'from-orange-50 to-orange-100', iconBg: 'bg-[var(--brand-orange)]', Icon: Mail,   title: 'Email',        value: CONTACT.email,   href: `mailto:${CONTACT.email}`,                 delay: 'delay-200' },
  { bg: 'from-purple-50 to-purple-100', iconBg: 'bg-purple-500',            Icon: MapPin, title: 'Landing page', value: CONTACT.website, href: CONTACT.websiteUrl,                        delay: 'delay-300' },
];

interface AccueilProps {
  onPageChange: (page: string) => void;
}

const Accueil: React.FC<AccueilProps> = ({ onPageChange }) => {
  const { ref: servicesRef,    inView: servicesInView    } = useInView<HTMLElement>();
  const { ref: sectorsRef,     inView: sectorsInView     } = useInView<HTMLElement>();
  const { ref: engagementsRef, inView: engagementsInView } = useInView<HTMLElement>();
  const { ref: strengthsRef,   inView: strengthsInView   } = useInView<HTMLElement>();
  const { ref: contactRef,     inView: contactInView     } = useInView<HTMLElement>();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">

      {/* ── Hero ─────────────────────────────────────────── */}
      <header className="relative bg-gradient-to-br from-[var(--brand-blue)] via-blue-700 to-blue-800 text-white overflow-hidden">

        {/* Animated background orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-orb pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-80 h-80 rounded-full blur-3xl animate-orb-alt pointer-events-none" style={{ background: 'rgba(255,154,46,0.18)' }} />
        <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-white/5 rounded-full blur-3xl animate-orb pointer-events-none" style={{ animationDelay: '5s' }} />

        {/* Floating decorative icons */}
        <div className="absolute top-10 left-6 opacity-10 animate-float pointer-events-none hidden md:block">
          <Globe className="h-9 w-9 text-white" />
        </div>
        <div className="absolute top-24 right-10 opacity-10 animate-float pointer-events-none hidden md:block" style={{ animationDelay: '1.3s' }}>
          <Server className="h-7 w-7 text-white" />
        </div>
        <div className="absolute bottom-10 left-14 opacity-10 animate-float pointer-events-none hidden md:block" style={{ animationDelay: '0.8s' }}>
          <Bot className="h-8 w-8 text-white" />
        </div>
        <div className="absolute bottom-14 right-8 opacity-10 animate-float pointer-events-none hidden md:block" style={{ animationDelay: '2s' }}>
          <Cloud className="h-7 w-7 text-white" />
        </div>

        <div className="relative w-full px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left: text */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up max-w-full overflow-hidden">
                <span className="w-2 h-2 bg-[var(--brand-orange)] rounded-full animate-pulse-soft inline-block flex-shrink-0" />
                <RotatingBadge />
              </div>

              {/* Logo icon */}
              <div className="flex justify-center lg:justify-start mb-4 animate-fade-in-up delay-100">
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
                  <Code className="h-10 w-10 sm:h-12 sm:w-12 text-[var(--brand-orange)]" />
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-up delay-200">
                ITEKTAFRIQUE CÔTE D'IVOIRE
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed animate-fade-in-up delay-300">
                Nous gérons vos défis informatiques pour que vous puissiez vous concentrer sur votre business.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-in-up delay-400">
                <button
                  onClick={() => document.getElementById('nos-services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[var(--brand-orange)] hover:opacity-95 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  Nos services
                </button>
                <button
                  onClick={() => onPageChange('consultation')}
                  className="bg-white/20 hover:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold backdrop-blur-sm transition-all duration-200 border border-white/30 text-sm sm:text-base"
                >
                  Prendre rendez-vous
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 pt-6 border-t border-white/20 animate-fade-in-up delay-500">
                {heroStats.map(({ value, label }) => (
                  <div key={label} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-[var(--brand-orange)]">{value}</div>
                    <div className="text-xs sm:text-sm opacity-75 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: tech illustration — desktop only */}
            <div className="hidden lg:flex items-center justify-center animate-fade-in-right delay-300">
              <TechIllustration />
            </div>
          </div>

          {/* Tech illustration — mobile only, centred below text */}
          <div className="flex justify-center mt-8 lg:hidden animate-fade-in-up delay-600">
            <TechIllustration />
          </div>
        </div>
      </header>

      {/* ── Bandeau diagnostic ───────────────────────────── */}
      <div className="bg-[var(--brand-blue)] text-white py-4 px-3 sm:px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <ArrowRight className="h-5 w-5 text-[var(--brand-orange)] flex-shrink-0 hidden sm:block" />
            <div>
              <span className="font-bold text-[var(--brand-orange)]">Diagnostic technologique gratuit</span>
              <span className="text-sm opacity-90 ml-2">— Analysez votre situation sans engagement · Réponse sous 48h</span>
            </div>
          </div>
          <button
            onClick={() => onPageChange('consultation')}
            className="bg-[var(--brand-orange)] hover:opacity-90 text-white px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0"
          >
            Demander le diagnostic
          </button>
        </div>
      </div>

      {/* ── Ce que nous faisons ──────────────────────────── */}
      <section
        id="nos-services"
        ref={servicesRef}
        className="py-12 sm:py-20 bg-gradient-to-b from-slate-900 to-blue-950"
      >
        <div className="w-full px-3 sm:px-4">
          <div className={`text-center mb-12 sm:mb-16 reveal ${servicesInView ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Ce que nous faisons</h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 max-w-2xl mx-auto px-2">
              Des services conçus pour résoudre vos problèmes concrets, pas pour vous vendre de la technologie.
            </p>
          </div>

          {/* Mobile / tablette : grille */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:hidden">
            {serviceCards.map(({ gradient, iconBg, Icon, illustration, title, tags, desc, delay }) => (
              <div key={title} className={`bg-gradient-to-br ${gradient} rounded-2xl shadow-xl overflow-hidden reveal ${delay} ${servicesInView ? 'visible' : ''}`}>
                <div className="relative overflow-hidden flex flex-col" style={{ height: '164px' }}>
                  <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/5 rounded-full pointer-events-none" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full pointer-events-none" />
                  <div className="relative z-10 flex-1 flex items-center justify-center px-5 pt-4">{illustration}</div>
                  <div className="relative z-10 flex items-center gap-3 px-5 pb-3">
                    <div className={`${iconBg} p-2 rounded-xl backdrop-blur-sm flex-shrink-0`}><Icon className="h-5 w-5 text-white" /></div>
                    <h3 className="text-sm font-bold text-white leading-tight">{title}</h3>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 border-t border-white/15 bg-black/5">
                  <div className="flex flex-wrap gap-1.5 mb-3">{tags.map(t => <span key={t} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full border border-white/25">{t}</span>)}</div>
                  <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop : disposition en cercle */}
          <div className="hidden lg:block relative mx-auto" style={{ width: '680px', height: '740px' }}>
            {/* Fond illustration tech */}
            <svg viewBox="0 0 680 740" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.18"/>
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                </radialGradient>
                <pattern id="dotGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <circle cx="25" cy="25" r="1.5" fill="#93C5FD" fillOpacity="0.3"/>
                </pattern>
              </defs>
              <rect width="680" height="740" fill="url(#dotGrid)"/>
              <ellipse cx="340" cy="370" rx="300" ry="300" fill="url(#bgGlow)"/>
              <g stroke="#60A5FA" strokeOpacity="0.22" strokeWidth="1.5" strokeLinecap="round">
                <path d="M100 80 L200 80 L200 130 L300 130"/>
                <path d="M500 80 L420 80 L420 150 L380 150"/>
                <path d="M140 210 L250 210"/>
                <path d="M480 190 L580 190 L580 260"/>
                <path d="M50 310 L120 310 L120 380 L170 380"/>
                <path d="M630 330 L560 330 L560 410 L510 410"/>
                <path d="M70 460 L140 460 L140 510"/>
                <path d="M620 440 L540 440"/>
                <path d="M195 265 L240 265 L240 310"/>
                <path d="M445 265 L490 265 L490 320"/>
                <path d="M185 490 L225 490 L225 535"/>
                <path d="M455 500 L500 500 L500 550"/>
                <path d="M115 590 L200 590 L200 630"/>
                <path d="M565 580 L490 580 L490 630"/>
                <path d="M255 690 L340 690 L340 660"/>
                <path d="M425 690 L340 690"/>
              </g>
              <g>
                <circle cx="200" cy="80"  r="5"  fill="#60A5FA" fillOpacity="0.7"/>
                <circle cx="200" cy="80"  r="13" fill="#60A5FA" fillOpacity="0.1"/>
                <circle cx="420" cy="80"  r="5"  fill="#38BDF8" fillOpacity="0.7"/>
                <circle cx="420" cy="80"  r="13" fill="#38BDF8" fillOpacity="0.1"/>
                <circle cx="580" cy="260" r="5"  fill="#60A5FA" fillOpacity="0.7"/>
                <circle cx="580" cy="260" r="13" fill="#60A5FA" fillOpacity="0.1"/>
                <circle cx="120" cy="380" r="5"  fill="#A78BFA" fillOpacity="0.7"/>
                <circle cx="120" cy="380" r="13" fill="#A78BFA" fillOpacity="0.1"/>
                <circle cx="560" cy="410" r="5"  fill="#60A5FA" fillOpacity="0.7"/>
                <circle cx="560" cy="410" r="13" fill="#60A5FA" fillOpacity="0.1"/>
                <circle cx="200" cy="130" r="4"  fill="#93C5FD" fillOpacity="0.5"/>
                <circle cx="380" cy="150" r="4"  fill="#93C5FD" fillOpacity="0.5"/>
                <circle cx="240" cy="310" r="4"  fill="#60A5FA" fillOpacity="0.6"/>
                <circle cx="490" cy="320" r="4"  fill="#60A5FA" fillOpacity="0.6"/>
                <circle cx="225" cy="535" r="4"  fill="#38BDF8" fillOpacity="0.5"/>
                <circle cx="500" cy="550" r="4"  fill="#38BDF8" fillOpacity="0.5"/>
                <circle cx="200" cy="630" r="5"  fill="#60A5FA" fillOpacity="0.7"/>
                <circle cx="200" cy="630" r="13" fill="#60A5FA" fillOpacity="0.1"/>
                <circle cx="490" cy="630" r="5"  fill="#60A5FA" fillOpacity="0.7"/>
                <circle cx="490" cy="630" r="13" fill="#60A5FA" fillOpacity="0.1"/>
                <circle cx="340" cy="690" r="5"  fill="#A78BFA" fillOpacity="0.7"/>
                <circle cx="340" cy="690" r="13" fill="#A78BFA" fillOpacity="0.1"/>
              </g>
              <g fill="#93C5FD" fillOpacity="0.55">
                <rect x="148" y="207" width="6" height="6" rx="1"/>
                <rect x="237" y="262" width="6" height="6" rx="1"/>
                <rect x="487" y="262" width="6" height="6" rx="1"/>
                <rect x="337" y="127" width="6" height="6" rx="1"/>
                <rect x="137" y="457" width="6" height="6" rx="1"/>
                <rect x="537" y="437" width="6" height="6" rx="1"/>
              </g>
              <g stroke="#60A5FA" strokeOpacity="0.14" strokeWidth="1" fill="none">
                <polygon points="55,175 76,163 97,175 97,199 76,211 55,199"/>
                <polygon points="595,155 616,143 637,155 637,179 616,191 595,179"/>
                <polygon points="28,505 49,493 70,505 70,529 49,541 28,529"/>
                <polygon points="610,515 631,503 652,515 652,539 631,551 610,539"/>
              </g>
            </svg>

            {serviceCards.map(({ gradient, iconBg, Icon, illustration, title, desc, delay }, i) => {
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const x = 340 + 250 * Math.cos(angle) - 92;
              const y = 370 + 250 * Math.sin(angle) - 110;
              return (
                <div
                  key={title}
                  className={`absolute bg-gradient-to-br ${gradient} rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group reveal ${delay} ${servicesInView ? 'visible' : ''}`}
                  style={{ left: x, top: y, width: 185 }}
                >
                  {/* Illustration */}
                  <div className="relative overflow-hidden flex items-center justify-center" style={{ height: '100px' }}>
                    <div className="absolute -top-5 -right-5 w-24 h-24 bg-white/5 rounded-full pointer-events-none" />
                    <div className="relative z-10 w-full px-3 pt-2">{illustration}</div>
                  </div>
                  {/* Titre — hors du conteneur overflow:hidden */}
                  <div className="flex items-start gap-2 px-3 py-2 border-t border-white/15">
                    <div className={`${iconBg} p-1.5 rounded-lg backdrop-blur-sm flex-shrink-0 mt-0.5`}><Icon className="h-4 w-4 text-white" /></div>
                    <h3 className="text-xs font-bold text-white leading-snug">{title}</h3>
                  </div>
                  {/* Description */}
                  <div className="px-3 pb-3 bg-black/5">
                    <p className="text-white/90 text-xs leading-relaxed line-clamp-3">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Secteurs d'intervention ──────────────────────── */}
      <section
        ref={sectorsRef}
        className="relative py-12 sm:py-20 overflow-hidden"
      >
        {/* Background photo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/african-meeting-1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(11,79,160,0.93) 0%, rgba(15,15,40,0.91) 100%)' }}
        />

        <div className="relative z-10 w-full px-3 sm:px-4">
          <div className={`text-center mb-10 sm:mb-14 reveal ${sectorsInView ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Des solutions pour chaque secteur</h2>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto px-2">
              Quel que soit votre domaine, nous adaptons nos solutions à vos réalités métier.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {sectors.map(({ icon: Icon, label, desc, gradient }, i) => (
              <div
                key={label}
                className={`bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 sm:p-5 hover:bg-white/18 hover:border-[var(--brand-orange)] transition-all duration-300 transform hover:-translate-y-1 reveal delay-${(i % 4 + 1) * 100} ${sectorsInView ? 'visible' : ''}`}
              >
                <div className={`bg-gradient-to-br ${gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-black/20`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">{label}</h3>
                <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">{desc}</p>
              </div>
            ))}
            <div
              className={`backdrop-blur-sm border border-[var(--brand-orange)]/50 rounded-2xl p-4 sm:p-5 flex flex-col justify-between reveal delay-400 ${sectorsInView ? 'visible' : ''}`}
              style={{ background: 'rgba(255,154,46,0.22)' }}
            >
              <div>
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">Votre secteur ?</h3>
                <p className="text-xs sm:text-sm text-orange-100 leading-relaxed">Il n'est pas listé ? Parlons-en — nous nous adaptons.</p>
              </div>
              <button
                onClick={() => onPageChange('consultation')}
                className="mt-3 text-[var(--brand-orange)] text-xs sm:text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200"
              >
                Contactez-nous <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nos engagements ──────────────────────────────── */}
      <section
        ref={engagementsRef}
        className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white"
      >
        <div className="w-full px-3 sm:px-4">
          <div className={`text-center mb-8 sm:mb-12 reveal ${engagementsInView ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Nos engagements</h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto px-2">
              Ce que vous pouvez exiger de nous à chaque projet.
            </p>
          </div>

          {/* Pyramide de valeurs */}
          <div className="max-w-3xl mx-auto">
            {/* Sommet */}
            <div className="flex justify-center">
              {engagements.slice(0, 1).map(({ Icon, color, title, desc, delay }) => (
                <div
                  key={title}
                  className={`w-full sm:w-80 bg-white/[0.12] backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 reveal ${delay} ${engagementsInView ? 'visible' : ''}`}
                >
                  <div className="bg-white/15 p-4 sm:p-5 rounded-2xl w-fit mx-auto mb-5 shadow-inner">
                    <Icon className={`h-10 w-10 sm:h-12 sm:w-12 ${color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Lignes pyramidales (desktop) */}
            <div className="hidden sm:flex justify-center my-5">
              <svg width="460" height="32" viewBox="0 0 460 32" fill="none">
                <line x1="230" y1="2" x2="75" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="5 4"/>
                <line x1="230" y1="2" x2="385" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="5 4"/>
                <circle cx="230" cy="2" r="3.5" fill="rgba(255,255,255,0.5)"/>
                <circle cx="75" cy="30" r="3" fill="rgba(255,255,255,0.35)"/>
                <circle cx="385" cy="30" r="3" fill="rgba(255,255,255,0.35)"/>
              </svg>
            </div>

            {/* Base */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-0">
              {engagements.slice(1).map(({ Icon, color, title, desc, delay }) => (
                <div
                  key={title}
                  className={`bg-white/[0.12] backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 reveal ${delay} ${engagementsInView ? 'visible' : ''}`}
                >
                  <div className="bg-white/15 p-4 sm:p-5 rounded-2xl w-fit mx-auto mb-5 shadow-inner">
                    <Icon className={`h-10 w-10 sm:h-12 sm:w-12 ${color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi nous choisir ────────────────────────── */}
      <section
        ref={strengthsRef}
        className="py-12 sm:py-20 relative bg-gradient-to-br from-slate-900 via-[#0d1527] to-blue-950 overflow-hidden"
      >
        {/* Grille hexagonale subtile */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(0deg,rgba(255,255,255,.9) 1px,transparent 1px),linear-gradient(60deg,rgba(255,255,255,.9) 1px,transparent 1px),linear-gradient(120deg,rgba(255,255,255,.9) 1px,transparent 1px)', backgroundSize: '48px 84px' }} />
        <div className="w-full px-3 sm:px-4 relative">
          <div className={`text-center mb-12 sm:mb-16 reveal ${strengthsInView ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Pourquoi nous choisir ?</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto px-2">
              Ce qui change concrètement pour vous quand vous travaillez avec ITEKTAFRIQUE
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
            <div className={`space-y-4 reveal-left ${strengthsInView ? 'visible' : ''}`}>
              {whyUs.map(({ bg, Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 group bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-xl p-4 sm:p-5 transition-all duration-200">
                  <div className={`${bg} p-2.5 rounded-xl flex-shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-lg`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`relative rounded-2xl overflow-hidden reveal-right ${strengthsInView ? 'visible' : ''}`}
              style={{
                minHeight: '320px',
                backgroundImage: 'url(/images/african-meeting-2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay rgba inline — var(--brand-blue) hex ne supporte pas /N en Tailwind */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(11,79,160,0.96) 0%, rgba(11,79,160,0.75) 45%, rgba(11,79,160,0.25) 100%)' }}
              />
              <div className="relative flex flex-col justify-end p-6 sm:p-8" style={{ minHeight: '320px' }}>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Votre projet mérite un vrai diagnostic.
                </h3>
                <p className="text-sm sm:text-base text-blue-100 mb-5">
                  En 30 minutes, nous analysons votre situation et vous disons honnêtement ce que l'informatique peut faire pour votre business. Gratuit et sans engagement.
                </p>
                <button
                  onClick={() => onPageChange('consultation')}
                  className="w-full bg-[var(--brand-orange)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:opacity-90 transition-all duration-200 transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  Demander mon audit gratuit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contactez-nous ───────────────────────────────── */}
      <section
        ref={contactRef}
        className="py-16 sm:py-24 relative bg-gradient-to-b from-slate-900 to-[#050d1a] overflow-hidden"
      >
        {/* Effets de fond */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/[0.05] rounded-full blur-3xl" />
        </div>

        <div className="w-full px-3 sm:px-4 relative">
          <div className={`text-center mb-12 sm:mb-16 reveal ${contactInView ? 'visible' : ''}`}>
            <p className="text-[var(--brand-orange)] font-semibold text-sm tracking-widest uppercase mb-3">Parlons de votre projet</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Contactez-nous</h2>
            <p className="text-base sm:text-lg text-white/50 px-2">
              Disponibles du lundi au jeudi, de 8h à 18h
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {contactCards.map(({ iconBg, Icon, title, value, href, delay }) => (
              <div
                key={title}
                className={`text-center p-6 sm:p-8 rounded-2xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 reveal ${delay} ${contactInView ? 'visible' : ''}`}
              >
                <div className={`${iconBg} p-3 sm:p-4 rounded-xl w-fit mx-auto mb-4 sm:mb-6 shadow-lg`}>
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">{title}</h3>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-white/55 text-sm sm:text-base hover:text-[var(--brand-orange)] underline-offset-2 hover:underline transition-colors"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className={`text-center mt-12 sm:mt-16 reveal delay-300 ${contactInView ? 'visible' : ''}`}>
            <p className="text-white/35 text-sm mb-5">Prêt à démarrer votre transformation numérique ?</p>
            <button
              onClick={() => onPageChange('consultation')}
              className="bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:opacity-90 transition-all duration-200 transform hover:-translate-y-1 shadow-lg shadow-blue-900/30"
            >
              Démarrer mon projet →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Accueil;
