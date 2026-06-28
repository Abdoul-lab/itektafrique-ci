import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT } from '../constants/contact';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'consultation', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Liseré de marque */}
      <div className="h-[3px] bg-gradient-to-r from-[var(--brand-blue)] via-sky-400 to-[var(--brand-orange)]" />
      <div className="w-full px-2 sm:px-4">
        <div className="flex justify-between items-center py-2 sm:py-4">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => onPageChange('accueil')}
          >
            <div className="bg-white">
              <img src="images/logost1.png" alt="Logo de la société" className="h-20 sm:h-24 md:h-32" />
            </div>
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-3 py-2 text-sm xl:text-base xl:px-4 rounded-full font-semibold transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] text-white shadow-lg'
                    : 'text-gray-700 hover:text-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Contact Info */}
            <div className="flex items-center space-x-2 xl:space-x-4 text-xs xl:text-sm text-gray-600 border-l pl-4">
              <div className="flex items-center space-x-1 hidden xl:flex">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{CONTACT.phone}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline">{CONTACT.email}</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
                className="lg:hidden p-2 rounded-lg hover:bg-[var(--brand-blue)]/6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 sm:py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold text-left transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] text-white'
                      : 'text-gray-700 hover:bg-[var(--brand-blue)]/6'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-3 sm:pt-4 border-t space-y-2">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>{CONTACT.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>{CONTACT.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>{CONTACT.website}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;