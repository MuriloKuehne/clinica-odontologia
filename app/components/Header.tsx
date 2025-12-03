'use client';

import { useState } from 'react';
import { clinicConfig } from '@/lib/clinic-config';
import { SECTION_SPACING, TYPOGRAPHY } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className={cn('container mx-auto', SECTION_SPACING.CONTAINER_PX_RESPONSIVE)}>
        <div className="flex items-center justify-between h-header">
          {/* Logo */}
          <div className="flex items-center">
            <span className={cn(TYPOGRAPHY.HEADING.H4, TYPOGRAPHY.COLOR.PRIMARY)}>
              {clinicConfig.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className={cn('hidden md:flex items-center', SECTION_SPACING.GAP.SM)}>
            <a
              href="#home"
              className="relative pb-0.5 text-sm text-gray-700 hover:text-straw-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-straw-500 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out after:will-change-transform"
            >
              Início
            </a>
            <a
              href="#about"
              className="relative pb-0.5 text-sm text-gray-700 hover:text-straw-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-straw-500 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out after:will-change-transform"
            >
              Sobre
            </a>
            <a
              href="#services"
              className="relative pb-0.5 text-sm text-gray-700 hover:text-straw-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-straw-500 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out after:will-change-transform"
            >
              Serviços
            </a>
            <a
              href="#team"
              className="relative pb-0.5 text-sm text-gray-700 hover:text-straw-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-straw-500 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out after:will-change-transform"
            >
              Equipe
            </a>
            <a
              href="#testimonials"
              className="relative pb-0.5 text-sm text-gray-700 hover:text-straw-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-straw-500 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out after:will-change-transform"
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="relative pb-0.5 text-sm text-gray-700 hover:text-straw-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-straw-500 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out after:will-change-transform"
            >
              Contato
            </a>
            <a
              href="#contact"
              className="bg-straw-500 text-white px-6 py-2 rounded-lg text-sm hover:bg-straw-600 transition-colors"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-straw-600 transition-colors"
            aria-label="Alternar menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className={cn('flex flex-col', SECTION_SPACING.GAP.SM)}>
              <a
                href="#home"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-straw-600 transition-colors"
              >
                Início
              </a>
              <a
                href="#about"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-straw-600 transition-colors"
              >
                Sobre
              </a>
              <a
                href="#services"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-straw-600 transition-colors"
              >
                Serviços
              </a>
              <a
                href="#team"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-straw-600 transition-colors"
              >
                Equipe
              </a>
              <a
                href="#testimonials"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-straw-600 transition-colors"
              >
                Depoimentos
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-straw-600 transition-colors"
              >
                Contato
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

