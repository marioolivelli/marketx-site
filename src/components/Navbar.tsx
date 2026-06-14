import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              MarketX
            </span>
          </a>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#servizi" className="text-dark-900 hover:text-primary-500 font-medium">
              Servizi
            </a>
            <a href="#case-study" className="text-dark-900 hover:text-primary-500 font-medium">
              Case Study
            </a>
            <a href="#chi-siamo" className="text-dark-900 hover:text-primary-500 font-medium">
              Chi Siamo
            </a>
            <button className="btn-primary text-sm">
              Contattaci
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a
              href="#servizi"
              className="block text-dark-900 hover:text-primary-500 font-medium"
            >
              Servizi
            </a>
            <a
              href="#case-study"
              className="block text-dark-900 hover:text-primary-500 font-medium"
            >
              Case Study
            </a>
            <a
              href="#chi-siamo"
              className="block text-dark-900 hover:text-primary-500 font-medium"
            >
              Chi Siamo
            </a>
            <button className="btn-primary w-full text-sm justify-center">
              Contattaci
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
