'use client';

import { useState } from 'react';
import Image from 'next/image';

interface NavigationProps {
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a onClick={(e) => scrollToSection(e, 'home')} className="flex items-center cursor-pointer">
            <Image
              src="/logo.png"
              alt="MaxFinance Vista Nova Logo"
              width={110}
              height={40}
              className="cursor-pointer"
            />
          </a>
          
          <div className="hidden md:flex space-x-8 mr-12">
            <a onClick={(e) => scrollToSection(e, 'about')} className="text-lg font-semibold text-gray-700 hover:text-gray-500 cursor-pointer">
              Sobre Nós
            </a>
            <a onClick={(e) => scrollToSection(e, 'services')} className="text-lg font-semibold text-gray-700 hover:text-gray-500 cursor-pointer">
              Serviços
            </a>
            <a onClick={(e) => scrollToSection(e, 'partners')} className="text-lg font-semibold text-gray-700 hover:text-gray-500 cursor-pointer">
              Parceiros
            </a>
            <a onClick={(e) => scrollToSection(e, 'contact')} className="text-lg font-semibold text-gray-700 hover:text-gray-500 cursor-pointer">
              Contacto
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a onClick={(e) => {scrollToSection(e, 'about'); setIsMenuOpen(!isMenuOpen)}} className="block py-2 px-4 font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer">
          Sobre Nós
        </a>
        <a onClick={(e) => {scrollToSection(e, 'services'); setIsMenuOpen(!isMenuOpen)}} className="block py-2 px-4 font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer">
          Serviços
        </a>
        <a onClick={(e) => {scrollToSection(e, 'partners'); setIsMenuOpen(!isMenuOpen)}} className="block py-2 px-4 font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer">
          Parceiros
        </a>
        <a onClick={(e) => {scrollToSection(e, 'contact'); setIsMenuOpen(!isMenuOpen)}} className="block py-2 px-4 font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer">
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
