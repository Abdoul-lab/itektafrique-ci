import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Accueil from './pages/Accueil';
import Consultation from './pages/Consultation';
import OutilsRessources from './pages/OutilsRessources';
import Chatbot from './components/Chatbot';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  // Au chargement initial, s'assurer que la page est en haut
  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      // noop en cas d'environnement sans window
    }
  }, []);

  // À chaque changement de page, déplacer le scroll en haut
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch (e) {
      // noop
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil />;
      case 'consultation':
        return <Consultation />;
      case 'outils':
        return <OutilsRessources />;
      default:
        return <Accueil />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--brand-blue)]/6 to-[var(--brand-orange)]/6">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}

      {/* Footer */}
      <footer className="bg-[var(--brand-dark)] text-white py-8 sm:py-12">
        <div className="w-full px-3 sm:px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-2 rounded-full shadow-[10px_10px_25px_rgba(0,0,0,0.25),_-10px_-10px_25px_rgba(255,255,255,0.9)]">
                <img
                  src="images/logost1.png"
                  alt="Logo"
                  className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 px-2">ITEKTAFRIQUE CÔTE D'IVOIRE</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base px-2">
              Votre partenaire de confiance en solutions informatiques
            </p>
            <p className="text-gray-500 text-xs sm:text-sm px-2">
              © 2025 - Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot autoOpen={false} />
    </div>
  );
}

export default App;