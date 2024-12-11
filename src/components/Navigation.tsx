'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Navigation() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a onClick={(e) => scrollToSection(e, 'home')} className="flex items-center cursor-pointer">
            <Image
              src="/logo.png"
              alt="MaxFinance Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </a>
          
          <div className="hidden md:flex space-x-8 mr-12">
            <a onClick={(e) => scrollToSection(e, 'services')} className="text-lg text-gray-700 hover:text-red-600 cursor-pointer">
              Serviços
            </a>
            <a onClick={(e) => scrollToSection(e, 'about')} className="text-lg text-gray-700 hover:text-red-600 cursor-pointer">
              Sobre Nós
            </a>
            <a onClick={(e) => scrollToSection(e, 'partners')} className="text-lg text-gray-700 hover:text-red-600 cursor-pointer">
              Parceiros
            </a>
            <a onClick={(e) => scrollToSection(e, 'contact')} className="text-lg  text-gray-700 hover:text-red-600 cursor-pointer">
              Contacto
            </a>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - hidden by default */}
      <div className="md:hidden hidden">
        <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
          Serviços
        </a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
          Sobre Nós
        </a>
        <a href="#partners" onClick={(e) => scrollToSection(e, 'partners')} className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
          Parceiros
        </a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
          Contacto
        </a>
      </div>
    </nav>
  );
}
