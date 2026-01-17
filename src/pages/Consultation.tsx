import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Building, 
  Phone, 
  Mail, 
  CheckCircle, 
  Code, 
  Users, 
  Monitor,
  Server,
  MapPin
} from 'lucide-react';

const Consultation: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const consultationServices = [
    {
      id: 'audit-it',
      title: 'Audit Informatique',
      description: 'Évaluation complète de votre infrastructure IT et recommandations d\'amélioration',
      duration: '3-5 jours',
      price: 'Sur devis',
      icon: Server,
      features: [
        'Analyse de l\'infrastructure existante',
        'Évaluation de la sécurité informatique',
        'Rapport détaillé avec recommandations',
        'Roadmap de modernisation'
      ]
    },
    {
      id: 'developpement-web',
      title: 'Développement Web',
      description: 'Création d\'applications web modernes et responsives',
      duration: '4-12 semaines',
      price: 'À partir de 2M FCFA',
      icon: Monitor,
      features: [
        'Design responsive moderne',
        'Technologies récentes (React, Vue, Angular)',
        'Optimisation SEO',
        'Maintenance incluse 6 mois'
      ]
    },
    {
      id: 'conseil-digital',
      title: 'Conseil en Transformation Digitale',
      description: 'Accompagnement personnalisé pour votre transformation numérique',
      duration: '1-2 semaines',
      price: '500K FCFA/jour',
      icon: Code,
      features: [
        'Stratégie de digitalisation',
        'Choix des technologies adaptées',
        'Formation des équipes',
        'Suivi personnalisé'
      ]
    },
    {
      id: 'maintenance-support',
      title: 'Maintenance & Support',
      description: 'Support technique et maintenance de vos systèmes informatiques',
      duration: 'Contrat annuel',
      price: 'À partir de 100K FCFA/mois',
      icon: Users,
      features: [
        'Support technique 24/7',
        'Maintenance préventive',
        'Mises à jour de sécurité',
        'Sauvegarde automatique'
      ]
    }
  ];

  const strengths = [
    {
      title: 'Expertise Reconnue',
      description: 'Équipe qualifiée avec certifications internationales en technologies modernes',
      icon: CheckCircle
    },
    {
      title: 'Support Réactif',
      description: 'Réponse rapide à vos demandes avec des solutions adaptées à votre contexte',
      icon: Clock
    },
    {
      title: 'Solutions Personnalisées',
      description: 'Approche sur mesure sans solutions génériques, selon vos réels besoins',
      icon: Code
    },
    {
      title: 'Engagement Qualité',
      description: 'Garantie de qualité et suivi régulier de nos prestations',
      icon: CheckCircle
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Votre demande de consultation a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-[var(--brand-orange)] text-white py-12 sm:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full px-3 sm:px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Consultation Personnalisée</h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2">
              Bénéficiez de l'expertise de nos spécialistes en solutions informatiques
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 p-3 sm:p-4 rounded-full backdrop-blur-sm">
                <Calendar className="h-10 w-10 sm:h-16 sm:w-16 text-[var(--brand-orange)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services de Consultation */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Nos Prestations</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Choisissez le service qui correspond le mieux à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-6xl mx-auto">
            {consultationServices.map((service) => {
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
                    <div className={`p-3 rounded-full flex-shrink-0 ${
                      selectedService === service.id ? 'bg-blue-500' : 'bg-orange-500'
                    }`}>
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="w-full px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Demander une Consultation</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
                Remplissez ce formulaire et nous vous contacterons dans les 24h
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
                      Entreprise
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
                      <option value="">Sélectionner une heure</option>
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
                    Service souhaité *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                  >
                    <option value="">Sélectionner un service</option>
                    {consultationServices.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                    placeholder="Décrivez vos besoins spécifiques..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                  >
                    Demander une consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Points Forts */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Pourquoi Nous Choisir</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Nos forces pour accompagner votre transformation numérique
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

      {/* Contact Info */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 px-2">Besoin d'un conseil technique urgent ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-[var(--brand-orange)] flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-[var(--brand-orange)] text-sm sm:text-base">Appelez-nous</p>
                  <p className="text-base sm:text-lg">(( +225 )) 07 78 92 71 14 / 07 79 36 91 80</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-[var(--brand-dark)] flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-[var(--brand-dark)] text-sm sm:text-base">Écrivez-nous</p>
                  <p className="text-base  sm:text-lg break-all">contact@itektafrique-ci.com</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[var(--brand-blue)] flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-[var(--brand-blue)] text-sm sm:text-base">Accéder à la page </p>
                  <p className="text-base sm:text-lg"><a href="http://digital.itektafrique-ci.com" className="italic underline">digital.itektafrique-ci.com</a></p>
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