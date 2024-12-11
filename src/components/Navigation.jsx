import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fixed top-6 left-6 z-50 p-2 ${
          isMenuOpen 
            ? 'text-black hover:bg-gray-100' 
            : 'text-white hover:bg-red-700'
        } rounded-lg transition-colors duration-200`}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sliding Menu Panel */}
      <div 
        className={`fixed md:left-0 w-full md:w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 
          ${isMenuOpen 
            ? 'translate-y-0' 
            : '-translate-y-full md:-translate-x-full'
          }
          md:h-full h-[60vh] top-0 md:translate-y-0`}
      >
        <div className="h-full flex flex-col justify-center">
          <nav className="space-y-6 text-center">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-red-900 hover:text-red-700 font-medium text-lg"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-blue-900 hover:text-blue-700 font-medium text-lg"
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-blue-900 hover:text-blue-700 font-medium text-lg"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-blue-900 hover:text-blue-700 font-medium text-lg"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay when menu is open */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-30 ${
          isMenuOpen 
            ? 'opacity-50' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </>
  );
};

export default Navigation; 