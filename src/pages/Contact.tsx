import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { CONTACT } from '../constants/contact';
import { useInView } from '../hooks/useInView';
import CursorHint from '../components/CursorHint';

const infoCards = [
  {
    icon: Phone,
    title: 'Téléphone',
    lines: [CONTACT.phone, CONTACT.phone2],
    href: `tel:${CONTACT.phone.replace(/\s/g, '')}`,
    bg: 'from-blue-50 to-blue-100',
    iconBg: 'bg-[var(--brand-blue)]',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    lines: [CONTACT.phone2],
    href: CONTACT.whatsappUrl,
    bg: 'from-green-50 to-green-100',
    iconBg: 'bg-green-500',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [CONTACT.email],
    href: `mailto:${CONTACT.email}`,
    bg: 'from-orange-50 to-orange-100',
    iconBg: 'bg-[var(--brand-orange)]',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    lines: [CONTACT.address],
    href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`,
    bg: 'from-purple-50 to-purple-100',
    iconBg: 'bg-purple-500',
  },
];

const Contact: React.FC = () => {
  const { ref: cardsRef, inView: cardsInView } = useInView<HTMLDivElement>();
  const { ref: formRef, inView: formInView } = useInView<HTMLDivElement>();

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\nMessage :\n${formData.message}`
    );
    const subject = encodeURIComponent(formData.subject || `Message de ${formData.name}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)] via-blue-700 to-[var(--brand-orange)]" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="relative w-full px-3 sm:px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full backdrop-blur-sm mb-6">
            <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-[var(--brand-orange)]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Contactez-nous
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Une question, un projet, un besoin ? Notre équipe vous répond sous 24h.
          </p>
        </div>
      </section>

      {/* Cartes info */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full px-3 sm:px-4">
          <div className="relative max-w-6xl mx-auto">
            <CursorHint />
          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {infoCards.map(({ icon: Icon, title, lines, href, bg, iconBg }, i) => (
              <a
                key={title}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group text-center p-6 rounded-2xl bg-gradient-to-br ${bg} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 reveal delay-${i * 100} ${cardsInView ? 'visible' : ''}`}
              >
                <div className={`${iconBg} p-3 rounded-full w-fit mx-auto mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                {lines.map(line => (
                  <p key={line} className="text-gray-600 text-sm group-hover:text-[var(--brand-blue)] transition-colors">{line}</p>
                ))}
              </a>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Formulaire + Horaires */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="w-full px-3 sm:px-4">
          <div ref={formRef} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Horaires */}
            <div className={`lg:col-span-2 reveal ${formInView ? 'visible' : ''}`}>
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[var(--brand-blue)] p-2 rounded-full">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Horaires d'ouverture</h2>
                </div>
                <div className="space-y-3 text-sm">
                  {[
                    { day: 'Lundi – Jeudi', time: '08h00 – 18h00' },
                    { day: 'Vendredi', time: 'Fermé' },
                    { day: 'Samedi – Dimanche', time: 'Fermé' },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600">{day}</span>
                      <span className={`font-semibold ${time === 'Fermé' ? 'text-red-400' : 'text-[var(--brand-blue)]'}`}>{time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wide">Réponse garantie sous</p>
                  <div className="flex gap-3">
                    <div className="flex-1 bg-[var(--brand-blue)]/10 rounded-xl p-3 text-center">
                      <p className="text-xl font-bold text-[var(--brand-blue)]">24h</p>
                      <p className="text-xs text-gray-500">Email</p>
                    </div>
                    <div className="flex-1 bg-green-50 rounded-xl p-3 text-center">
                      <p className="text-xl font-bold text-green-600">1h</p>
                      <p className="text-xs text-gray-500">WhatsApp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className={`lg:col-span-3 reveal delay-200 ${formInView ? 'visible' : ''}`}>
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyer un message</h2>

                {submitted ? (
                  <div className="text-center py-10">
                    <div className="text-4xl mb-3">✉️</div>
                    <p className="font-semibold text-green-700 text-lg mb-1">Votre client email s'est ouvert</p>
                    <p className="text-gray-500 text-sm">Cliquez sur Envoyer — le message partira directement à {CONTACT.email}.</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                      className="mt-6 text-sm text-[var(--brand-blue)] underline"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Nom complet *</label>
                        <input
                          type="text" name="name" required value={formData.name} onChange={handleChange}
                          placeholder="Votre nom"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                        <input
                          type="email" name="email" required value={formData.email} onChange={handleChange}
                          placeholder="votre@email.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Sujet</label>
                      <input
                        type="text" name="subject" value={formData.subject} onChange={handleChange}
                        placeholder="Objet de votre message"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                      <textarea
                        name="message" required rows={5} value={formData.message} onChange={handleChange}
                        placeholder="Décrivez votre besoin ou votre question…"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent transition-all text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                    >
                      <Send className="h-4 w-4" />
                      Envoyer le message
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="bg-white py-12 sm:py-16">
        <div className="w-full px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[var(--brand-blue)] p-2 rounded-full">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Nous trouver</h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                title="Localisation ITEKTAFRIQUE"
                src="https://maps.google.com/maps?cid=2881544067528407144&output=embed&hl=fr&gl=CI"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500 text-center">
              📍 {CONTACT.address}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
