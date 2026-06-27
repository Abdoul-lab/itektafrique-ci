import React from 'react';
import {
  Code, Users, Monitor, Phone, Mail, MapPin,
  CheckCircle, Server, Smartphone,
  GraduationCap, Heart, ShoppingCart, Building2, Zap, Landmark,
  ArrowRight, Globe, Cloud, Bot,
} from 'lucide-react';
import { CONTACT } from '../constants/contact';
import { useInView } from '../hooks/useInView';
import TechIllustration from '../components/TechIllustration';

const sectors = [
  { icon: GraduationCap, label: 'Éducation',              desc: "Écoles, universités, plateformes e-learning" },
  { icon: Building2,     label: 'PME & Entreprises',      desc: "Digitalisation et pilotage de l'activité" },
  { icon: Heart,         label: 'Santé',                  desc: "Cliniques, laboratoires, gestion des patients" },
  { icon: Landmark,      label: 'Administrations',        desc: "Modernisation et services aux citoyens" },
  { icon: ShoppingCart,  label: 'Commerce & Distribution', desc: "Vente en ligne, stocks et logistique" },
  { icon: Users,         label: 'Sport & Associations',   desc: "Gestion des membres et des événements" },
  { icon: Zap,           label: 'Startups & Innovation',  desc: "MVP, scalabilité et solutions IA" },
];

const heroStats = [
  { value: '7',   label: 'secteurs couverts' },
  { value: '7',   label: 'offres sur mesure' },
  { value: '48h', label: 'réponse garantie' },
];

const serviceCards = [
  {
    img: '/images/service-web.jpg',
    imgAlt: 'Développement web et mobile',
    overlay: 'from-blue-800/70',
    iconBg: 'bg-blue-500',
    Icon: Monitor,
    title: 'Développement Web & Mobile',
    desc: "Votre vitrine en ligne disponible 24h/24 — pour que vos clients vous trouvent, vous fassent confiance et vous contactent sans effort.",
    delay: 'delay-100',
  },
  {
    img: '/images/service-infra.jpg',
    imgAlt: 'Infrastructure IT et réseaux',
    overlay: 'from-orange-700/70',
    iconBg: 'bg-[var(--brand-orange)]',
    Icon: Server,
    title: 'Infrastructure IT',
    desc: "Plus de pannes réseau qui paralysent votre équipe — nous installons et gérons votre infrastructure pour que vous travailliez sans interruption.",
    delay: 'delay-200',
  },
  {
    img: '/images/service-conseil.jpg',
    imgAlt: 'Conseil et formation informatique',
    overlay: 'from-purple-800/70',
    iconBg: 'bg-purple-500',
    Icon: Users,
    title: 'Conseil & Formation',
    desc: "Vos équipes maîtrisent leurs outils et vous prenez les bonnes décisions technologiques — sans vous faire avoir.",
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
    color: 'text-[var(--brand-dark)]',
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
  { bg: 'from-blue-50 to-blue-100',     iconBg: 'bg-blue-500',              Icon: Phone,  title: 'Téléphone',    value: CONTACT.phone,   delay: 'delay-100' },
  { bg: 'from-orange-50 to-orange-100', iconBg: 'bg-[var(--brand-orange)]', Icon: Mail,   title: 'Email',        value: CONTACT.email,   delay: 'delay-200' },
  { bg: 'from-purple-50 to-purple-100', iconBg: 'bg-purple-500',            Icon: MapPin, title: 'Notre site web', value: CONTACT.website, delay: 'delay-300' },
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
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                <span className="w-2 h-2 bg-[var(--brand-orange)] rounded-full animate-pulse-soft inline-block flex-shrink-0" />
                <span className="text-sm font-medium opacity-90">Catalogue 2026 disponible</span>
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
        className="py-12 sm:py-20 bg-white"
      >
        <div className="w-full px-3 sm:px-4">
          <div className={`text-center mb-12 sm:mb-16 reveal ${servicesInView ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Ce que nous faisons</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Des services conçus pour résoudre vos problèmes concrets, pas pour vous vendre de la technologie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {serviceCards.map(({ img, imgAlt, overlay, iconBg, Icon, title, desc, delay }) => (
              <div
                key={title}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group reveal ${delay} ${servicesInView ? 'visible' : ''}`}
              >
                {/* Photo header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={imgAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${overlay} to-black/10`} />
                  <div className="absolute bottom-3 left-4">
                    <div className={`${iconBg} p-2.5 rounded-xl shadow-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 sm:p-7">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Secteurs d'intervention ──────────────────────── */}
      <section
        ref={sectorsRef}
        className="py-12 sm:py-16 bg-gray-50"
      >
        <div className="w-full px-3 sm:px-4">
          <div className={`text-center mb-10 sm:mb-12 reveal ${sectorsInView ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Des solutions pour chaque secteur</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Quel que soit votre domaine, nous adaptons nos solutions à vos réalités métier.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {sectors.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className={`bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-[var(--brand-orange)] group reveal delay-${(i % 4 + 1) * 100} ${sectorsInView ? 'visible' : ''}`}
              >
                <div className="bg-orange-50 group-hover:bg-[var(--brand-orange)] p-3 rounded-xl w-fit mb-3 transition-colors duration-200">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--brand-orange)] group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">{label}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
            <div className={`bg-[var(--brand-blue)] rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col justify-between reveal delay-400 ${sectorsInView ? 'visible' : ''}`}>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">Votre secteur ?</h3>
                <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">Il n'est pas listé ? Parlons-en — nous nous adaptons.</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {engagements.map(({ Icon, color, title, desc, delay }) => (
              <div
                key={title}
                className={`text-center transform hover:scale-105 transition-transform duration-200 reveal ${delay} ${engagementsInView ? 'visible' : ''}`}
              >
                <div className="bg-white/10 hover:bg-white/20 p-4 sm:p-6 rounded-full w-fit mx-auto mb-4 sm:mb-6 backdrop-blur-sm transition-colors duration-200">
                  <Icon className={`h-10 w-10 sm:h-12 sm:w-12 ${color}`} />
                </div>
                <h3 className={`text-lg ${color} sm:text-2xl font-bold mb-3 sm:mb-4`}>{title}</h3>
                <p className="text-base opacity-90 px-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pourquoi nous choisir ────────────────────────── */}
      <section
        ref={strengthsRef}
        className="py-12 sm:py-20 bg-gray-50"
      >
        <div className="w-full px-3 sm:px-4">
          <div className={`text-center mb-12 sm:mb-16 reveal ${strengthsInView ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Pourquoi nous choisir ?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Ce qui change concrètement pour vous quand vous travaillez avec ITEKTAFRIQUE
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
            <div className={`space-y-6 sm:space-y-8 reveal-left ${strengthsInView ? 'visible' : ''}`}>
              {whyUs.map(({ bg, Icon, title, desc }) => (
                <div key={title} className="flex items-start space-x-4 group">
                  <div className={`${bg} p-2 rounded-full flex-shrink-0 mt-1 transition-transform duration-200 group-hover:scale-110`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`relative rounded-2xl overflow-hidden reveal-right ${strengthsInView ? 'visible' : ''}`}
              style={{
                minHeight: '320px',
                backgroundImage: 'url(/images/team-meeting.jpg)',
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
        className="py-12 sm:py-20 bg-white"
      >
        <div className="w-full px-3 sm:px-4">
          <div className={`text-center mb-12 sm:mb-16 reveal ${contactInView ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Contactez-nous</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Disponibles du lundi au vendredi, de 8h à 18h
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {contactCards.map(({ bg, iconBg, Icon, title, value, delay }) => (
              <div
                key={title}
                className={`text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${bg} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 reveal ${delay} ${contactInView ? 'visible' : ''}`}
              >
                <div className={`${iconBg} p-3 sm:p-4 rounded-full w-fit mx-auto mb-4 sm:mb-6`}>
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">{title}</h3>
                <p className="text-gray-600 text-base sm:text-lg">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Accueil;
