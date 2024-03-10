import React from 'react';
import logo from '../assets/image.png';
import { FiAlignJustify } from 'react-icons/fi';

import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Adjusted logo size for different screen sizes */}
          <img
            className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            src={logo}
            alt="Logo"
          />
        </div>
        <nav className="hidden items-center font-semibold md:flex">
          <a href="#" className="mr-4">
            Crypto Taxes
          </a>
          <a href="#" className="mr-4">
            Free Tools
          </a>
          <a href="#" className="mr-4">
            Resource Center
          </a>
          <a href="#" className="mr-4">
            <button className="rounded-md bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-2 text-white hover:from-blue-800 hover:to-blue-700">
              Get Started
            </button>
          </a>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FiAlignJustify className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`mt-2 transform bg-gray-500 text-center md:hidden ${
            isMenuOpen
              ? 'translate-y-0 transition-all duration-300 ease-in-out'
              : 'translate-y-full'
          }`}
        >
          <a href="#" className="block border-b px-4 py-2 text-white">
            Crypto Taxes
          </a>
          <a href="#" className="block border-b px-4 py-2 text-white">
            Free Tools
          </a>
          <a href="#" className="block border-b px-4 py-2 text-white">
            Resource Center
          </a>
          <a href="#" className="block border-b px-4 py-2 text-white">
            <button className="rounded-md bg-gradient-to-r from-blue-700 to-blue-600 px-2 py-1 text-white hover:from-blue-800 hover:to-blue-700">
              Get Started
            </button>
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
