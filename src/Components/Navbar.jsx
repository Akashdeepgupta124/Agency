import React, { useState } from 'react';
import AudioToggle from './NavbarSoundtoggle';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { text: 'Home', id: 'home' },
    { text: 'About', id: 'about' },
    { text: 'Services', id: 'services' },
    { text: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Logo</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <button
                key={link.text}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                {link.text}
                
              </button>
             
            ))}
             <AudioToggle />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-600"></span>
            </button>
          
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map(link => (
                <button
                  key={link.text}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                >
                  {link.text}
                </button>
              ))}
             
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;