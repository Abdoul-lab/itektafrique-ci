import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Accueil from './pages/Accueil';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch (e) {
      // noop en environnement SSR
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil onPageChange={setCurrentPage} />;
      case 'consultation':
        return <Consultation />;
      case 'contact':
        return <Contact />;
      default:
        return <Accueil />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--brand-blue)]/6 to-[var(--brand-orange)]/6">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}

      {/* Footer */}
      <footer className="bg-[var(--brand-dark)] text-white py-2 sm:py-3">
        <div className="w-full px-3 sm:px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-0.5">
                <img src="images/logost1.png" alt="Logo" className="h-8 sm:h-10" />
              </div>
              <span className="text-xs sm:text-sm font-semibold">ITEKTAFRIQUE CÔTE D'IVOIRE</span>
            </div>
            <p className="text-gray-500 text-xs">© 2026 - Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot autoOpen={false} />
      <ScrollToTop />
    </div>
  );
}

export default App;