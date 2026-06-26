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
} from 'lucide-react';
import { consultationServices, strengths, profileLabels } from '../data/servicesData';
import { CONTACT } from '../constants/contact';

const Consultation: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('Tous');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });

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
    alert('Votre demande a bien été envoyée ! Nous vous contacterons dans les plus brefs délais.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-[var(--brand-orange)] text-white py-12 sm:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full px-3 sm:px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Demande de consultation</h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2">
              Décrivez-nous votre projet — nous vous rappelons sous 24h.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 p-3 sm:p-4 rounded-full backdrop-blur-sm">
                <Calendar className="h-10 w-10 sm:h-16 sm:w-16 text-[var(--brand-orange)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Comment ça marche ?</h2>
            <p className="text-base text-gray-600">De votre première demande à la livraison, voici les étapes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Diagnostic gratuit', desc: 'On analyse votre situation en 30 minutes, sans engagement.' },
              { step: '02', title: 'Proposition sur mesure', desc: 'On vous présente une offre adaptée à votre budget et vos priorités.' },
              { step: '03', title: 'Réalisation', desc: 'On développe votre projet étape par étape avec des points réguliers.' },
              { step: '04', title: 'Livraison & suivi', desc: 'On forme vos équipes et restons disponibles après la mise en ligne.' },
            ].map(({ step, title, desc }, i, arr) => (
              <div key={step} className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-blue)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block flex-1 h-0.5 bg-blue-100 w-full" />
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
      <section className="py-12 sm:py-20 bg-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Nos offres</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2 mb-8">
              Chaque offre est packagée par profil et chiffrée sur devis, au plus près de votre besoin réel.
            </p>

            {/* Filtre par profil */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {profileLabels.map((profile) => (
                <button
                  key={profile}
                  onClick={() => setSelectedProfile(profile)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedProfile === profile
                      ? 'bg-[var(--brand-blue)] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {profile}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-6xl mx-auto">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                    selectedService === service.id
                      ? 'border-blue-500 bg-blue-50 shadow-xl'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`p-3 rounded-full flex-shrink-0 ${selectedService === service.id ? 'bg-blue-500' : 'bg-[var(--brand-orange)]'}`}>
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">{service.title}</h3>
                        {service.badge && (
                          <span className="text-xs font-bold bg-[var(--brand-orange)] text-white px-2 py-0.5 rounded-full">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[var(--brand-blue)] font-medium mb-2 italic">{service.subtitle}</p>
                      <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>

                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 text-xs sm:text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 flex-shrink-0" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="font-semibold text-orange-600">{service.price}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-[var(--brand-blue)] flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-1">
                        {service.profiles.map((p) => (
                          <span key={p} className="text-xs bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full">
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
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="w-full px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Votre demande</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
                Remplissez ce formulaire — nous vous recontactons sous 24h
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
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

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                  >
                    Envoyer ma demande
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Pourquoi nous choisir</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Ce qui fait la différence avec ITEKTAFRIQUE
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {strengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-blue-600 text-white">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{strength.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{strength.description}</p>
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
                  <p className="font-semibold text-[var(--brand-blue)] text-sm sm:text-base">Notre site web</p>
                  <p className="text-base sm:text-lg">
                    <a href={CONTACT.websiteUrl} className="italic underline">{CONTACT.website}</a>
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
