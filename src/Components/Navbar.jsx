import React, { useState } from 'react';
import AudioToggle from './NavbarSoundtoggle';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('home');

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
      setActiveTab(sectionId);
    }
  };

  return (
    <div className="flex justify-center w-[80vw] sticky top-4 z-50 px-4 my-6">
      <nav className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl backdrop-blur-lg bg-white/20 border border-white/30 relative">
        {/* Subtle glass highlights */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          <div className="absolute -top-20 left-10 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
          <div className="absolute -bottom-8 right-10 w-24 h-24 rounded-full bg-white/20 blur-xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="px-3 md:px-6 py-2 md:py-3">
            <div className="flex items-center justify-center w-full">
              {/* Navigation menu - same for all screen sizes */}
              <div className="flex items-center justify-center w-full space-x-1 md:space-x-4">
                {links.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative px-2 md:px-5 py-1 md:py-2 rounded-lg transition-all duration-300 group ${
                      activeTab === link.id ? 'text-white' : 'text-white'
                    } text-xs md:text-base`}
                  >
                    {/* Active background with white transparent effect */}
                    {activeTab === link.id && (
                      <span className="absolute inset-0 rounded-lg bg-white/50 shadow-lg"></span>
                    )}
                    
                    {/* Hover effect */}
                    <span className={`absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                      activeTab === link.id ? 'opacity-0' : 'bg-white/30'
                    }`}></span>
                    
                    {/* Text with subtle transition */}
                    <span className="relative z-10 font-medium tracking-wide">{link.text}</span>
                    
                    {/* Active indicator dot */}
                    {activeTab === link.id && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gray-800"></span>
                    )}
                  </button>
                ))}
                <div className="relative z-10">
                  <AudioToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;