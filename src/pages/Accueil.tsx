import React from 'react';
import { Code, Users, Monitor, Phone, Mail, MapPin, CheckCircle, Server, Smartphone } from 'lucide-react';

const Accueil: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Hero Section */}
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
              Experts en solutions informatiques et transformation digitale
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-2">
              <button className="bg-[var(--brand-orange)] hover:opacity-95 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                Nos solutions
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold backdrop-blur-sm transition-all duration-200 border border-white/30 text-sm sm:text-base">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Nos Principaux Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Des solutions informatiques complètes pour votre transformation digitale
            </p>
          </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-500 p-3 rounded-full w-fit mb-6">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Développement Web & Mobile</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Création d'applications web et mobiles sur mesure pour répondre à vos besoins spécifiques.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-orange/10 to-brand-orange/20 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[var(--brand-orange)] p-3 rounded-full w-fit mb-6">
                <Server className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Infrastructure IT</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Installation, configuration et maintenance de votre infrastructure informatique.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-500 p-3 rounded-full w-fit mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Conseil & Formation</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Accompagnement et formation de vos équipes aux nouvelles technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Engagement Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Notre Engagement</h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto px-2">
              En tant que nouvelle entreprise, nous nous engageons à vous offrir des solutions innovantes et un service de qualité
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="bg-white/10 p-4 sm:p-6 rounded-full w-fit mx-auto mb-4 sm:mb-6 backdrop-blur-sm">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-[var(--brand-orange)]" />
              </div>
              <h3 className="text-lg text-[var(--brand-orange)] sm:text-2xl font-bold mb-3 sm:mb-4">Qualité Garantie</h3>
              <p className="text-base opacity-90 px-2">
                Nous nous engageons à livrer des solutions de haute qualité qui répondent parfaitement à vos besoins
              </p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="bg-white/10 p-4 sm:p-6 rounded-full w-fit mx-auto mb-4 sm:mb-6 backdrop-blur-sm">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-[var(--brand-dark)]" />
              </div>
              <h3 className="text-lg text-[var(--brand-dark)] sm:text-2xl font-bold mb-3 sm:mb-4">Accompagnement Personnalisé</h3>
              <p className="text-base opacity-90 px-2">
                Une équipe dédiée vous accompagne à chaque étape de votre projet de transformation digitale
              </p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="bg-white/10 p-4 sm:p-6 rounded-full w-fit mx-auto mb-4 sm:mb-6 backdrop-blur-sm">
                <Smartphone className="h-10 w-10 sm:h-12 sm:w-12 text-[var(--brand-blue)]" />
              </div>
              <h3 className="text-lg text-[var(--brand-blue)] sm:text-2xl font-bold mb-3 sm:mb-4">Technologies Modernes</h3>
              <p className="text-base opacity-90 px-2">
                Nous utilisons les dernières technologies pour créer des solutions performantes et évolutives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Pourquoi nous choisir ?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Notre expertise et notre engagement font la différence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-2 rounded-full flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Solutions sur mesure</h3>
                  <p className="text-sm sm:text-base text-gray-600">Nous développons des solutions personnalisées adaptées à vos besoins spécifiques.</p>
                </div>
              </div>
              
                <div className="flex items-start space-x-4">
                <div className="bg-[var(--brand-orange)] p-2 rounded-full flex-shrink-0 mt-1">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Support technique 24/7</h3>
                  <p className="text-sm sm:text-base text-gray-600">Notre équipe technique est disponible pour vous assister à tout moment.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 p-2 rounded-full flex-shrink-0 mt-1">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Technologies modernes</h3>
                  <p className="text-sm sm:text-base text-gray-600">Nous utilisons les dernières technologies pour garantir des solutions performantes et évolutives.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-brand-orange/10 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Prêt à digitaliser votre entreprise ?</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Contactez-nous dès aujourd'hui pour un audit gratuit et découvrez comment nous pouvons transformer votre business.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 text-sm sm:text-base">
                Demander un audit gratuit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Contactez-nous</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-500 p-3 sm:p-4 rounded-full w-fit mx-auto mb-4 sm:mb-6">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Téléphone</h3>
              <p className="text-gray-600 text-base sm:text-lg">+225 07 08 92 71 14 / 07 79 36 91 80</p>
            </div>
            
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-orange/10 to-brand-orange/20 hover:shadow-lg transition-all duration-300">
              <div className="bg-[var(--brand-orange)] p-3 sm:p-4 rounded-full w-fit mx-auto mb-4 sm:mb-6">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Email</h3>
              <p className="text-gray-600 text-base sm:text-lg">contact@itektafrique-ci.com</p>
            </div>
            
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-500 p-3 sm:p-4 rounded-full w-fit mx-auto mb-4 sm:mb-6">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Explorer</h3>
              <p className="text-gray-600 text-base sm:text-lg">digital.itektafrique-ci.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;