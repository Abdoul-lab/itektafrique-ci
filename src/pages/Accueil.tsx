import React from 'react';
import { Code, Users, Monitor, Phone, Mail, MapPin, CheckCircle, Server, Smartphone } from 'lucide-react';
import { CONTACT } from '../constants/contact';

const Accueil: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Hero */}
      <header className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-[var(--brand-orange)] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full px-3 sm:px-4 py-12 sm:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="bg-white/10 p-3 sm:p-4 rounded-full backdrop-blur-sm">
                <Code className="h-10 w-10 sm:h-16 sm:w-16 text-[var(--brand-orange)]" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              ITEKTAFRIQUE CÔTE D'IVOIRE
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed px-2">
              Votre partenaire informatique de confiance en Côte d'Ivoire
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-2">
              <button className="bg-[var(--brand-orange)] hover:opacity-95 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                Nos services
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold backdrop-blur-sm transition-all duration-200 border border-white/30 text-sm sm:text-base">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Ce que nous faisons */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Ce que nous faisons</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Des services adaptés à vos besoins, quelle que soit la taille de votre structure
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-500 p-3 rounded-full w-fit mb-6">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Développement Web & Mobile</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Nous créons votre site web ou application mobile, de la conception à la mise en ligne.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-orange/10 to-brand-orange/20 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[var(--brand-orange)] p-3 rounded-full w-fit mb-6">
                <Server className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Infrastructure IT</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Nous installons, configurons et gérons votre réseau, vos serveurs et vos équipements informatiques.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-500 p-3 rounded-full w-fit mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Conseil & Formation</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Nous formons vos équipes et vous aidons à prendre les bonnes décisions technologiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Nos engagements</h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto px-2">
              Nous mettons tout en œuvre pour vous offrir un service de qualité et des résultats concrets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="bg-white/10 p-4 sm:p-6 rounded-full w-fit mx-auto mb-4 sm:mb-6 backdrop-blur-sm">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-[var(--brand-orange)]" />
              </div>
              <h3 className="text-lg text-[var(--brand-orange)] sm:text-2xl font-bold mb-3 sm:mb-4">Qualité garantie</h3>
              <p className="text-base opacity-90 px-2">
                Nous livrons un travail soigné qui répond exactement à vos besoins.
              </p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="bg-white/10 p-4 sm:p-6 rounded-full w-fit mx-auto mb-4 sm:mb-6 backdrop-blur-sm">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-[var(--brand-dark)]" />
              </div>
              <h3 className="text-lg text-[var(--brand-dark)] sm:text-2xl font-bold mb-3 sm:mb-4">Accompagnement personnalisé</h3>
              <p className="text-base opacity-90 px-2">
                Une équipe dédiée à vos côtés, de la première réunion jusqu'à la livraison finale.
              </p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="bg-white/10 p-4 sm:p-6 rounded-full w-fit mx-auto mb-4 sm:mb-6 backdrop-blur-sm">
                <Smartphone className="h-10 w-10 sm:h-12 sm:w-12 text-[var(--brand-blue)]" />
              </div>
              <h3 className="text-lg text-[var(--brand-blue)] sm:text-2xl font-bold mb-3 sm:mb-4">Outils à jour</h3>
              <p className="text-base opacity-90 px-2">
                Nous utilisons des technologies récentes pour que votre solution soit performante et durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Pourquoi nous choisir ?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Ce qui fait la différence avec ITEKTAFRIQUE
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-2 rounded-full flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Tout sur mesure</h3>
                  <p className="text-sm sm:text-base text-gray-600">Nous ne vendons pas de solutions toutes faites. Chaque projet est unique, comme votre entreprise.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[var(--brand-orange)] p-2 rounded-full flex-shrink-0 mt-1">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Assistance disponible</h3>
                  <p className="text-sm sm:text-base text-gray-600">Notre équipe est joignable pour vous aider, même après la livraison de votre projet.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 p-2 rounded-full flex-shrink-0 mt-1">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Technologie fiable</h3>
                  <p className="text-sm sm:text-base text-gray-600">Nos outils et méthodes sont à jour, pour vous livrer une solution qui tient dans le temps.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-brand-orange/10 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Passons à la suite ensemble ?</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Contactez-nous pour un audit gratuit et sans engagement. Nous vous expliquerons clairement ce que nous pouvons faire pour vous.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 text-sm sm:text-base">
                Demander un audit gratuit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contactez-nous */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Contactez-nous</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Disponibles du lundi au vendredi, de 8h à 18h
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-500 p-3 sm:p-4 rounded-full w-fit mx-auto mb-4 sm:mb-6">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Téléphone</h3>
              <p className="text-gray-600 text-base sm:text-lg">{CONTACT.phone}</p>
            </div>

            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-orange/10 to-brand-orange/20 hover:shadow-lg transition-all duration-300">
              <div className="bg-[var(--brand-orange)] p-3 sm:p-4 rounded-full w-fit mx-auto mb-4 sm:mb-6">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Email</h3>
              <p className="text-gray-600 text-base sm:text-lg">{CONTACT.email}</p>
            </div>

            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-500 p-3 sm:p-4 rounded-full w-fit mx-auto mb-4 sm:mb-6">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Notre site web</h3>
              <p className="text-gray-600 text-base sm:text-lg">{CONTACT.website}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
