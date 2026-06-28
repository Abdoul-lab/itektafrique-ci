import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Clock,
  User,
  Building,
  Phone,
  Mail,
  CheckCircle,
  MapPin,
  MousePointer2,
} from 'lucide-react';
import { consultationServices, strengths, profileLabels } from '../data/servicesData';
import { CONTACT } from '../constants/contact';
import { useInView } from '../hooks/useInView';
import { MeetingIllu } from '../components/Illustrations';

const HEX_W = 210;
const HEX_H = Math.round(HEX_W * Math.sqrt(3) / 2); // 182px — flat-top regular hexagon

const SERVICE_COLORS: Record<string, { gradient: string; glow: string }> = {
  'starter-digital':  { gradient: 'from-sky-500 to-blue-700',      glow: '#38BDF8' },
  'croissance-pme':   { gradient: 'from-orange-400 to-orange-600',  glow: '#FB923C' },
  'mvp-startup':      { gradient: 'from-violet-500 to-purple-700',  glow: '#A78BFA' },
  'enterprise-360':   { gradient: 'from-indigo-500 to-blue-800',    glow: '#6366F1' },
  'numerique-public': { gradient: 'from-emerald-500 to-teal-700',   glow: '#34D399' },
  'intelligence-ia':  { gradient: 'from-cyan-400 to-sky-600',       glow: '#22D3EE' },
  'serenite-cloud':   { gradient: 'from-slate-400 to-slate-700',    glow: '#94A3B8' },
};

const Consultation: React.FC = () => {
  const { ref: stepsRef, inView: stepsInView } = useInView<HTMLDivElement>();
  const [selectedService, setSelectedService] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('Tous');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    profile: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredHex, setHoveredHex] = useState<{ id: string; rect: DOMRect } | null>(null);

  const handleServiceCardClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setFormData((prev) => ({ ...prev, service: serviceId }));
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const filteredServices = useMemo(() => {
    if (selectedProfile === 'Tous') return consultationServices;
    return consultationServices.filter((s) => s.profiles.includes(selectedProfile));
  }, [selectedProfile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Nom : ${formData.name}`,
      formData.company ? `Entreprise : ${formData.company}` : '',
      `Email : ${formData.email}`,
      `Téléphone : ${formData.phone}`,
      formData.profile ? `Profil : ${formData.profile}` : '',
      formData.service ? `Service souhaité : ${formData.service}` : '',
      formData.preferredDate ? `Date souhaitée : ${formData.preferredDate}` : '',
      formData.preferredTime ? `Heure souhaitée : ${formData.preferredTime}` : '',
      formData.message ? `\nMessage :\n${formData.message}` : '',
    ].filter(Boolean).join('\n');

    const subject = encodeURIComponent(`Demande de consultation — ${formData.service || 'Non précisé'} — ${formData.name}`);
    const body = encodeURIComponent(lines);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Hero avec photo */}
      <section className="relative text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/consultation-bg.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)]/92 via-blue-700/85 to-[var(--brand-orange)]/75" />
        </div>
        <div className="relative w-full px-3 sm:px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-3 sm:p-4 rounded-full backdrop-blur-sm">
                <Calendar className="h-10 w-10 sm:h-16 sm:w-16 text-[var(--brand-orange)]" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Demande de consultation
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2 animate-fade-in-up delay-200">
              Décrivez-nous votre projet — nous vous rappelons sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="w-full px-3 sm:px-4">
          <div className={`text-center mb-8 sm:mb-10 reveal ${stepsInView ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Comment ça marche ?</h2>
            <p className="text-base text-gray-600">De votre première demande à la livraison, voici les étapes.</p>
          </div>
          <div
            ref={stepsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
          >
            {[
              { step: '01', title: 'Diagnostic gratuit', desc: 'On analyse votre situation en 30 minutes, sans engagement.' },
              { step: '02', title: 'Proposition sur mesure', desc: 'On vous présente une offre adaptée à votre budget et vos priorités.' },
              { step: '03', title: 'Réalisation', desc: 'On développe votre projet étape par étape avec des points réguliers.' },
              { step: '04', title: 'Livraison & suivi', desc: 'On forme vos équipes et restons disponibles après la mise en ligne.' },
            ].map(({ step, title, desc }, i, arr) => (
              <div
                key={step}
                className={`relative flex flex-col items-center text-center sm:items-start sm:text-left reveal delay-${(i + 1) * 100} ${stepsInView ? 'visible' : ''}`}
              >
                <div className="flex items-center gap-3 mb-3 w-full">
                  <div
                    className={`w-10 h-10 rounded-full bg-[var(--brand-blue)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all duration-500 ${stepsInView ? 'shadow-lg shadow-blue-500/30 scale-110' : ''}`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block flex-1 h-0.5 bg-blue-100 overflow-hidden">
                      <div
                        className={`h-full bg-[var(--brand-blue)] ${stepsInView ? 'animate-draw-line' : ''}`}
                        style={{ animationDelay: `${i * 0.25 + 0.4}s` }}
                      />
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">{title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos offres */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        {/* Fond sombre tech */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07101e] via-[#0c1a2e] to-slate-900" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(96,165,250,0.035) 1px, transparent 1px), linear-gradient(to right, rgba(96,165,250,0.035) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative z-10 w-full px-3 sm:px-4">
          {/* En-tête */}
          <div className="text-center mb-8 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5">Nos offres</h2>
            <p className="text-base sm:text-lg text-blue-100/80 max-w-3xl mx-auto px-2 mb-8">
              Chaque offre est packagée par profil et chiffrée sur devis, au plus près de votre besoin réel.
            </p>
            {/* Filtre */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {profileLabels.map((profile) => (
                <button
                  key={profile}
                  onClick={() => setSelectedProfile(profile)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedProfile === profile
                      ? 'bg-[var(--brand-blue)] text-white shadow-md shadow-blue-500/30'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/15'
                  }`}
                >
                  {profile}
                </button>
              ))}
            </div>
          </div>

          {/* ── Desktop : nid d'abeille hexagonal ── */}
          <div className="hidden lg:flex lg:justify-center mb-16">
            {(() => {
              const n = filteredServices.length;
              if (n === 0) return null;
              const cols1 = Math.ceil(n / 2);
              const cols2 = Math.floor(n / 2);
              const containerW = Math.max(cols1, cols2 + 0.5) * HEX_W;
              const containerH = cols2 > 0 ? HEX_H * 2 : HEX_H;

              const hovSvc = hoveredHex ? filteredServices.find(s => s.id === hoveredHex.id) : null;

              return (
                <>
                  <div className="relative" style={{ width: containerW, height: containerH }}>
                    {filteredServices.map((service, i) => {
                      const inRow2 = i >= cols1;
                      const col   = inRow2 ? i - cols1 : i;
                      const left  = col * HEX_W + (inRow2 ? HEX_W / 2 : 0);
                      const top   = inRow2 ? HEX_H : 0;
                      const Icon  = service.icon;
                      const clrs  = SERVICE_COLORS[service.id] ?? { gradient: 'from-blue-500 to-blue-700', glow: '#3B82F6' };
                      const sel   = selectedService === service.id;
                      return (
                        <div
                          key={service.id}
                          className={`absolute cursor-pointer transition-transform duration-300 ${sel ? 'scale-105 z-10' : 'hover:scale-[1.04] z-0'}`}
                          style={{ left, top, width: HEX_W, height: HEX_H }}
                          onClick={() => handleServiceCardClick(service.id)}
                          onMouseEnter={(e) => setHoveredHex({ id: service.id, rect: e.currentTarget.getBoundingClientRect() })}
                          onMouseLeave={() => setHoveredHex(null)}
                        >
                          {sel && (
                            <div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                background: clrs.glow,
                                filter: 'blur(22px)',
                                transform: 'scale(1.25)',
                                opacity: 0.55,
                              }}
                            />
                          )}
                          <div
                            className={`relative w-full h-full bg-gradient-to-br ${clrs.gradient} transition-[filter] duration-300 ${sel ? 'brightness-110' : 'hover:brightness-110'}`}
                            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                          >
                            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/18 to-transparent pointer-events-none" />
                            <div
                              className="absolute inset-0 flex flex-col items-center justify-center text-center"
                              style={{ padding: '32px 44px 28px' }}
                            >
                              <div className="w-11 h-11 bg-white/25 rounded-full flex items-center justify-center mb-2 flex-shrink-0 shadow-inner">
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              {service.badge && (
                                <span className="text-[9px] font-bold bg-white/30 text-white px-2 py-0.5 rounded-full tracking-wide uppercase mb-1 flex-shrink-0">
                                  {service.badge}
                                </span>
                              )}
                              <h3 className="text-white font-bold text-[11px] leading-tight line-clamp-2 flex-shrink-0">
                                {service.title}
                              </h3>
                              <p className="text-white/60 text-[9px] italic mt-1 line-clamp-1 flex-shrink-0">
                                {service.subtitle}
                              </p>
                              {sel && (
                                <div className="mt-1.5 w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                  <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tooltip fixe — position:fixed pour échapper au overflow:hidden */}
                  {hovSvc && (() => {
                    const { rect } = hoveredHex!;
                    const clrs = SERVICE_COLORS[hovSvc.id] ?? { gradient: 'from-blue-500 to-blue-700', glow: '#3B82F6' };
                    const Icon = hovSvc.icon;
                    const leftSide = rect.left + rect.width / 2 < window.innerWidth / 2;
                    const tipTop = Math.max(8, Math.min(rect.top + rect.height / 2 - 195, window.innerHeight - 430));
                    const tipStyle: React.CSSProperties = {
                      position: 'fixed',
                      zIndex: 9999,
                      top: tipTop,
                      ...(leftSide ? { left: rect.right + 14 } : { right: window.innerWidth - rect.left + 14 }),
                    };
                    return (
                      <div
                        className="w-80 bg-[#0c1628]/98 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden pointer-events-none"
                        style={tipStyle}
                      >
                        {/* En-tête coloré */}
                        <div className={`bg-gradient-to-r ${clrs.gradient} px-4 py-3 flex items-center gap-3`}>
                          <div className="w-9 h-9 bg-white/25 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-white font-bold text-sm leading-tight">{hovSvc.title}</h3>
                            {hovSvc.badge && (
                              <span className="text-[9px] bg-white/30 text-white px-2 py-0.5 rounded-full font-bold">
                                {hovSvc.badge}
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Corps */}
                        <div className="px-4 py-3 space-y-2.5">
                          <p className="text-blue-300 text-[11px] italic">{hovSvc.subtitle}</p>
                          <p className="text-white/70 text-[11px] leading-relaxed">{hovSvc.description}</p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-white/45">
                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{hovSvc.duration}</span>
                            <span className="text-orange-300">{hovSvc.price.split('—')[0].trim()}</span>
                          </div>
                          <ul className="space-y-1.5 pt-0.5">
                            {hovSvc.features.map((f, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 text-[11px] text-white/65">
                                <CheckCircle className="h-3 w-3 text-cyan-400 flex-shrink-0 mt-0.5" />
                                {f}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1 pt-0.5">
                            {hovSvc.profiles.map(p => (
                              <span key={p} className="text-[10px] bg-white/10 text-white/50 border border-white/10 px-2 py-0.5 rounded-full">
                                {p}
                              </span>
                            ))}
                          </div>
                          <p className="text-center text-[10px] text-cyan-400/60 italic pt-0.5">
                            Cliquer pour sélectionner cette offre →
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </>
              );
            })()}
          </div>

          {/* Indice de survol — desktop uniquement */}
          <p className="hidden lg:flex items-center justify-center gap-2 text-white/35 text-xs italic -mt-10 mb-12">
            <MousePointer2 className="h-3.5 w-3.5 animate-bounce" />
            Survolez une offre pour voir tous les détails
          </p>

          {/* ── Mobile / tablette : cartes glassmorphisme ── */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12 max-w-4xl mx-auto">
            {filteredServices.map((service) => {
              const Icon  = service.icon;
              const clrs  = SERVICE_COLORS[service.id] ?? { gradient: 'from-blue-500 to-blue-700', glow: '#3B82F6' };
              const sel   = selectedService === service.id;
              return (
                <div
                  key={service.id}
                  className={`p-5 sm:p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    sel
                      ? 'border-white/40 bg-white/15 shadow-xl'
                      : 'border-white/15 bg-white/[0.08] hover:bg-white/[0.12] hover:border-white/25'
                  }`}
                  onClick={() => handleServiceCardClick(service.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2.5 rounded-xl flex-shrink-0 bg-gradient-to-br ${clrs.gradient} shadow-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <h3 className="text-sm font-bold text-white">{service.title}</h3>
                        {service.badge && (
                          <span className="text-[10px] font-bold bg-[var(--brand-orange)] text-white px-2 py-0.5 rounded-full">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-blue-200 italic mb-2">{service.subtitle}</p>
                      <p className="text-xs text-white/60 mb-3 line-clamp-2">{service.description}</p>
                      <div className="flex items-center gap-3 mb-3 text-[11px] text-white/45">
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{service.duration}</span>
                        <span className="text-orange-300 font-medium">Sur devis</span>
                      </div>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((f, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[11px] text-white/55">
                            <CheckCircle className="h-3 w-3 text-cyan-400 flex-shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {service.profiles.map((p) => (
                          <span key={p} className="text-[10px] bg-white/10 text-white/55 border border-white/10 px-1.5 py-0.5 rounded-full">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="form-section" className="relative py-12 sm:py-20 overflow-hidden">
        {/* Fond dégradé tech */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)] via-blue-800 to-slate-900" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #93C5FD 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 w-full px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="inline-block text-[var(--brand-orange)] text-xs font-bold tracking-widest uppercase mb-3">Formulaire de contact</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Votre demande</h2>
              <p className="text-base sm:text-lg text-blue-100 px-2">
                Remplissez ce formulaire — nous vous recontactons sous 24h
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

              {/* Panneau gauche glassmorphisme */}
              <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8">
                <MeetingIllu className="w-full max-w-[220px] mx-auto mb-6" />
                <div className="space-y-4">
                  {[
                    { Icon: CheckCircle, text: 'Diagnostic gratuit et sans engagement', color: 'text-green-400' },
                    { Icon: Clock,       text: 'Réponse sous 24h garantie',             color: 'text-[var(--brand-orange)]' },
                    { Icon: User,        text: 'Un interlocuteur dédié à votre projet', color: 'text-blue-300' },
                    { Icon: Calendar,    text: 'Devis détaillé et transparent',         color: 'text-purple-400' },
                  ].map(({ Icon, text, color }) => (
                    <div key={text} className="flex items-center gap-3">
                      <Icon className={`h-5 w-5 flex-shrink-0 ${color}`} />
                      <span className="text-sm text-white/90">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 space-y-2">
                  <p className="text-xs text-blue-200 font-semibold uppercase tracking-wider mb-3">Contact direct</p>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-white/85 hover:text-[var(--brand-orange)] transition-colors text-sm">
                    <Phone className="h-4 w-4 flex-shrink-0" />{CONTACT.phone}
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-white/85 hover:text-[var(--brand-orange)] transition-colors text-sm">
                    <Mail className="h-4 w-4 flex-shrink-0" />{CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Formulaire */}
              <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[var(--brand-blue)] to-blue-600 px-6 sm:px-8 py-4">
                <h3 className="text-white font-bold text-lg">Informations de contact</h3>
                <p className="text-blue-100 text-xs mt-0.5">* champs obligatoires</p>
              </div>
              <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      <Building className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Entreprise / Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="+225 XX XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Heure préférée
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                    >
                      <option value="">Choisir une heure</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Votre profil *
                  </label>
                  <select
                    name="profile"
                    value={formData.profile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                  >
                    <option value="">Sélectionner votre profil</option>
                    <option value="PME">PME</option>
                    <option value="Startup">Startup</option>
                    <option value="Grande entreprise">Grande entreprise / Groupe / Multinationale</option>
                    <option value="Institution">Institution / Administration / Collectivité</option>
                    <option value="Professions libérales">Profession libérale</option>
                    <option value="Porteur de projet">Porteur de projet / Investisseur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Offre souhaitée *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                  >
                    <option value="">Choisir une offre</option>
                    {consultationServices.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title} — {service.subtitle}
                      </option>
                    ))}
                  </select>
                  {formData.service && (
                    <p className="mt-1 text-xs text-blue-600">
                      ✓ Offre sélectionnée depuis les cartes — vous pouvez la modifier ici
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Décrivez votre projet
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                    placeholder="Quel est votre besoin principal ? Quels problèmes voulez-vous résoudre ?"
                  />
                </div>

                {submitted ? (
                  <div className="text-center bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="text-3xl mb-2">✉️</div>
                    <p className="font-semibold text-green-700 text-lg">Votre client email s'est ouvert</p>
                    <p className="text-green-600 text-sm mt-1">
                      Vérifiez qu'il s'est bien ouvert et cliquez sur Envoyer. Le message partira directement à {CONTACT.email}.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-sm text-blue-600 underline"
                    >
                      Nouvelle demande
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                    >
                      Envoyer ma demande
                    </button>
                  </div>
                )}
              </form>
            </div>
            </div>{/* end formulaire card */}
              </div>{/* end form side */}
            </div>{/* end grid */}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        {/* Fond sombre */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
        {/* Grille hexagonale CSS */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              'linear-gradient(0deg,   transparent 24%, rgba(6,182,212,0.07) 25%, rgba(6,182,212,0.07) 26%, transparent 27%, transparent 74%, rgba(6,182,212,0.07) 75%, rgba(6,182,212,0.07) 76%, transparent 77%)',
              'linear-gradient(60deg,  transparent 24%, rgba(6,182,212,0.07) 25%, rgba(6,182,212,0.07) 26%, transparent 27%, transparent 74%, rgba(6,182,212,0.07) 75%, rgba(6,182,212,0.07) 76%, transparent 77%)',
              'linear-gradient(120deg, transparent 24%, rgba(6,182,212,0.07) 25%, rgba(6,182,212,0.07) 26%, transparent 27%, transparent 74%, rgba(6,182,212,0.07) 75%, rgba(6,182,212,0.07) 76%, transparent 77%)',
            ].join(','),
            backgroundSize: '48px 84px',
          }}
        />
        {/* Éléments HUD décoratifs */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="hudGlowL" cx="0%" cy="50%" r="40%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.18"/>
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="hudGlowR" cx="100%" cy="50%" r="40%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Halos */}
          <rect width="1200" height="600" fill="url(#hudGlowL)"/>
          <rect width="1200" height="600" fill="url(#hudGlowR)"/>
          {/* Cercles concentriques gauche */}
          <circle cx="0"    cy="300" r="140" stroke="#06B6D4" strokeOpacity="0.14" strokeWidth="1"/>
          <circle cx="0"    cy="300" r="210" stroke="#06B6D4" strokeOpacity="0.09" strokeWidth="0.8"/>
          <circle cx="0"    cy="300" r="280" stroke="#06B6D4" strokeOpacity="0.05" strokeWidth="0.6"/>
          {/* Arc tirets gauche */}
          <path d="M0,160 A140,140 0 0,1 121,221" stroke="#06B6D4" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="7 4"/>
          {/* Cercles concentriques droite */}
          <circle cx="1200" cy="300" r="140" stroke="#3B82F6" strokeOpacity="0.14" strokeWidth="1"/>
          <circle cx="1200" cy="300" r="210" stroke="#3B82F6" strokeOpacity="0.09" strokeWidth="0.8"/>
          <circle cx="1200" cy="300" r="280" stroke="#3B82F6" strokeOpacity="0.05" strokeWidth="0.6"/>
          {/* Arc tirets droite */}
          <path d="M1200,160 A140,140 0 0,0 1079,221" stroke="#3B82F6" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="7 4"/>
          {/* Lignes scan horizontales */}
          <line x1="0"   y1="110" x2="380" y2="110" stroke="#06B6D4" strokeOpacity="0.08" strokeWidth="0.8"/>
          <line x1="820" y1="110" x2="1200" y2="110" stroke="#06B6D4" strokeOpacity="0.08" strokeWidth="0.8"/>
          <line x1="0"   y1="490" x2="380" y2="490" stroke="#06B6D4" strokeOpacity="0.08" strokeWidth="0.8"/>
          <line x1="820" y1="490" x2="1200" y2="490" stroke="#06B6D4" strokeOpacity="0.08" strokeWidth="0.8"/>
          {/* Coins HUD */}
          <path d="M22,22 L82,22 L82,28"   stroke="#06B6D4" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M22,22 L22,82 L28,82"   stroke="#06B6D4" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M1178,22 L1118,22 L1118,28"  stroke="#06B6D4" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M1178,22 L1178,82 L1172,82"  stroke="#06B6D4" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M22,578 L82,578 L82,572"  stroke="#06B6D4" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M22,578 L22,518 L28,518"  stroke="#06B6D4" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M1178,578 L1118,578 L1118,572" stroke="#06B6D4" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M1178,578 L1178,518 L1172,518" stroke="#06B6D4" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Particules */}
          <circle cx="210"  cy="90"  r="2"   fill="#06B6D4" fillOpacity="0.55"/>
          <circle cx="340"  cy="170" r="1.5" fill="#3B82F6" fillOpacity="0.45"/>
          <circle cx="95"   cy="410" r="2"   fill="#06B6D4" fillOpacity="0.5"/>
          <circle cx="1060" cy="140" r="2"   fill="#3B82F6" fillOpacity="0.5"/>
          <circle cx="1110" cy="430" r="2"   fill="#06B6D4" fillOpacity="0.45"/>
          <circle cx="890"  cy="510" r="1.5" fill="#3B82F6" fillOpacity="0.4"/>
          <circle cx="600"  cy="40"  r="2"   fill="#06B6D4" fillOpacity="0.3"/>
          <circle cx="600"  cy="560" r="2"   fill="#3B82F6" fillOpacity="0.3"/>
          {/* Lignes diagonales légères */}
          <line x1="140" y1="0"   x2="290" y2="150" stroke="#06B6D4" strokeOpacity="0.05" strokeWidth="1"/>
          <line x1="910" y1="450" x2="1060" y2="600" stroke="#3B82F6" strokeOpacity="0.05" strokeWidth="1"/>
        </svg>

        <div className="relative z-10 w-full px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Pourquoi nous choisir</h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 px-2">
              Ce qui fait la différence avec ITEKTAFRIQUE
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {strengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/15 p-6 sm:p-8 rounded-2xl hover:bg-white/15 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{strength.title}</h3>
                      <p className="text-sm sm:text-base text-white/70">{strength.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Barre de contact */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 px-2">Besoin d'un conseil rapide ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-[var(--brand-orange)] flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-[var(--brand-orange)] text-sm sm:text-base">Appelez-nous</p>
                  <p className="text-base sm:text-lg">{CONTACT.phone}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-[var(--brand-dark)] flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-[var(--brand-dark)] text-sm sm:text-base">Écrivez-nous</p>
                  <p className="text-base sm:text-lg break-all">{CONTACT.email}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[var(--brand-blue)] flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-[var(--brand-blue)] text-sm sm:text-base">Landing page</p>
                  <p className="text-base sm:text-lg">
                    <a href={CONTACT.websiteUrl} target="_blank" rel="noopener noreferrer" className="italic underline hover:text-[var(--brand-blue)] transition-colors">{CONTACT.website}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
