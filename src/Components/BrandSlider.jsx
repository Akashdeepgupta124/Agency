import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, X, ArrowRight, Menu, ChevronDown, ChevronUp } from 'lucide-react';


const VerticalBrandBento = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const sectionRef = useRef(null);
  const itemsPerPage = 4;

  // Handle scroll for background transition
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      if (!sectionRef.current) return;
      
      const sectionPosition = sectionRef.current.getBoundingClientRect().top + scrollY;
      const scrollPosition = scrollY - sectionPosition + windowHeight;
      const progressPercentage = Math.min(Math.max(scrollPosition / windowHeight, 0), 1);
      
      setScrollProgress(progressPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a selection is made
  useEffect(() => {
    if (selectedBrand !== null && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [selectedBrand]);

  // Handle smooth brand selection transitions
  const selectBrand = (index) => {
    if (selectedBrand === index) {
      return;
    }
    
    setIsAnimating(true);
    
    // If closing a brand view, just close it
    if (selectedBrand !== null && index === null) {
      setSelectedBrand(null);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return;
    }
    
    // If opening from closed state
    if (selectedBrand === null) {
      setSelectedBrand(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return;
    }
    
    // If switching between brands, close first then open
    setSelectedBrand(null);
    setTimeout(() => {
      setSelectedBrand(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 300);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Pagination controls for vertical menu
  const nextPage = () => {
    if ((currentPage + 1) * itemsPerPage < brands.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Brand data
  const brands = [
    {
      name: 'Systumm.com',
      image: 'system1.jpeg',
      description: 'Website that turns viewers into consumers',
      color: '',
      singleProject: {
        title: "",
        description: "",
        bgColor: "bg-white",
        textColor: "text-gray-800",
        height: "h-[300px] md:h-[400px] lg:h-[400px]", // Increased height
        width: "w-full",
        image: "/project1.png",
        link: "https://thesystumm.com/"
      }
    },
    {
      name: 'ELKANCE',
      image: '/elkancebg.jpeg',
      description: 'website that shows elegance and brand identity',
      color: '',
      singleProject: {
        title: "Branding",
        description: "",
        bgColor: "bg-white",
        textColor: "text-gray-800",
        height: "h-[300px] md:h-[400px] lg:h-[400px]", // Increased height
        width: "w-full",
        image: "/project2.png",
        link: "https://www.elkance.in/"
      }
    },
    {
      name: 'LEOFAST',
      image: '/leofastbg.jpeg',
      description: 'Cutting-edge solutions for tomorrow\'s challenges',
      color: '',
     
      singleProject: {
        title: "",
        description: "",
        bgColor: "bg-white",
        textColor: "text-gray-800",
        height: "h-[300px] md:h-[400px] lg:h-[400px]", // Increased height
        width: "w-full",
        image: "/project3.png",
         link: "https://shop.leofast.in/"
      }
    },
    
  ];

  // Calculate total pages
  const totalPages = Math.ceil(brands.length / itemsPerPage);
  
  // Get current page items
  const pageStartIndex = currentPage * itemsPerPage;
  const currentPageItems = brands.slice(pageStartIndex, pageStartIndex + itemsPerPage);

  // Single project display component with improved design
  const SingleProjectDisplay = ({ item }) => (
    <div 
      className={`${item.bgColor} ${item.textColor} ${item.height} relative overflow-hidden group transition-all duration-500 hover:scale-[1.01] flex flex-col justify-end rounded-lg w-full`}
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute "></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 lg:p-10 transform transition-transform duration-500 group-hover:translate-y-0">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">{item.title}</h3>
        <p className="text-base md:text-lg lg:text-xl opacity-90 mb-4 md:mb-6 max-w-2xl text-white">{item.description}</p>
        
        <div className="flex items-center mt-3">
          <span className="text-sm md:text-base font-medium mr-3 opacity-80 text-black">Explore Project</span>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm">
            <a href={item.link} target="_blank">
            <ArrowRight size={20} className="text-black group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // Render horizontal scrollable menu for mobile
  const MobileVerticalMenu = () => (
    <div className="md:hidden overflow-x-auto pb-4 pt-2 px-4">
      <div className="flex space-x-3 min-w-max">
        {brands.map((brand, index) => (
          <div
            key={index}
            onClick={() => selectBrand(index)}
            className={`relative w-64 h-28 flex-shrink-0 overflow-hidden cursor-pointer group transition-all duration-500 rounded-lg ${
              selectedBrand === index 
                ? 'border-b-4 border-white' 
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            {/* Brand background image */}
            <div className="absolute inset-0">
              <div className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-80 transition-opacity duration-500`}></div>
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="w-full h-full object-cover object-center opacity-50"
              />
            </div>
            
            {/* Content overlay */}
            <div className="relative z-10 h-full flex flex-col justify-between p-3">
              <div>
                <h3 className="text-lg font-bold text-white">{brand.name}</h3>
                <p className="text-xs text-white opacity-80 mt-1 line-clamp-2">{brand.description}</p>
              </div>
              
              <div className="flex justify-end">
                <div className={`flex items-center justify-center w-6 h-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-full transition-all duration-300 ${
                  selectedBrand === index ? 'rotate-90' : 'group-hover:translate-x-1'
                }`}>
                  <ChevronRight size={14} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: `rgba(10, 10, 20, ${Math.max(0.8, scrollProgress)})`,
        transition: 'background-color 0.8s ease'
      }}
    >
      {/* Mobile menu button - only show when no mobile menu is visible */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 bg-black bg-opacity-50 backdrop-blur-md rounded-full text-white hover:bg-opacity-70 transition-all duration-300"
          aria-label="Toggle Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Desktop sidebar menu */}
        <div 
          className={`hidden md:block md:relative w-64 lg:w-80 bg-black bg-opacity-90 md:bg-opacity-40 backdrop-blur-md h-screen flex-shrink-0 transition-all duration-500 z-40 
            ${selectedBrand !== null ? 'md:w-56 lg:w-64' : 'md:w-64 lg:w-80'}`}
        >
          <div className="h-full flex flex-col p-4 md:p-6">
            <div className="flex justify-between items-center mb-6 md:mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-white">Our Portfolio</h2>
            </div>
            
            {/* Navigation pagination controls */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center mb-4 text-white">
                <button 
                  onClick={prevPage} 
                  disabled={currentPage === 0}
                  className={`p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-all ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  aria-label="Previous Page"
                >
                  <ChevronUp size={20} />
                </button>
                <span className="text-sm opacity-70">{currentPage + 1} / {totalPages}</span>
                <button 
                  onClick={nextPage} 
                  disabled={currentPage >= totalPages - 1}
                  className={`p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-all ${currentPage >= totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  aria-label="Next Page"
                >
                  <ChevronDown size={20} />
                </button>
              </div>
            )}
            
            {/* Vertical menu items with pagination */}
            <div className="flex flex-col space-y-3 md:space-y-4 flex-grow overflow-y-auto">
              {currentPageItems.map((brand, index) => {
                const actualIndex = pageStartIndex + index;
                return (
                  <div
                    key={actualIndex}
                    onClick={() => selectBrand(actualIndex)}
                    className={`relative h-24 md:h-28 lg:h-32 overflow-hidden cursor-pointer group transition-all duration-500 rounded-lg ${
                      selectedBrand === actualIndex 
                        ? 'border-l-4 border-white' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    {/* Brand background image */}
                    <div className="absolute inset-0">
                      <div className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-80 transition-opacity duration-500`}></div>
                      <img 
                        src={brand.image} 
                        alt={brand.name} 
                        className="w-full h-full object-cover object-center opacity-50"
                      />
                    </div>
                    
                    {/* Content overlay */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-3 md:p-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">{brand.name}</h3>
                        <p className="text-xs md:text-sm text-white opacity-80 mt-1 line-clamp-2">{brand.description}</p>
                      </div>
                      
                      <div className="flex justify-end">
                        <div className={`flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full transition-all duration-300 ${
                          selectedBrand === actualIndex ? 'rotate-90' : 'group-hover:translate-x-1'
                        }`}>
                          <ChevronRight size={14} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Mobile fullscreen menu overlay */}
        <div 
          className={`md:hidden fixed inset-0 bg-black bg-opacity-95 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <div className="h-full flex flex-col p-6 pt-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Our Portfolio</h2>
              <button
                className="p-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Vertical menu items for mobile */}
            <div className="flex flex-col space-y-3 overflow-y-auto">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  onClick={() => selectBrand(index)}
                  className={`relative h-24 overflow-hidden cursor-pointer group transition-all duration-500 rounded-lg ${
                    selectedBrand === index 
                      ? 'border-l-4 border-white' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Brand background image */}
                  <div className="absolute inset-0">
                    <div className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-80 transition-opacity duration-500`}></div>
                    <img 
                      src={brand.image} 
                      alt={brand.name} 
                      className="w-full h-full object-cover object-center opacity-50"
                    />
                  </div>
                  
                  {/* Content overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{brand.name}</h3>
                      <p className="text-xs text-white opacity-80 mt-1 line-clamp-2">{brand.description}</p>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className={`flex items-center justify-center w-6 h-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-full transition-all duration-300 ${
                        selectedBrand === index ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`}>
                        <ChevronRight size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content area - shows single project when a brand is selected */}
        <div className="flex-grow min-h-screen overflow-auto pt-16 md:pt-0">
          {selectedBrand !== null ? (
            <div className={`p-4 md:p-6 lg:p-8 animate-fadeIn`}>
              <div className="flex justify-between items-center mb-6 md:mb-8">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{brands[selectedBrand].name}</h1>
                  <p className="text-sm md:text-base lg:text-lg text-white opacity-80 mt-2">{brands[selectedBrand].description}</p>
                </div>
                <button
                  onClick={() => selectBrand(null)}
                  className="p-2 bg-white bg-opacity-10 rounded-full text-white hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Single project display */}
              <div className="my-6 md:my-8">
                <SingleProjectDisplay item={brands[selectedBrand].singleProject} />
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center max-w-xl p-4 md:p-8 animate-fadeIn">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Our Projects</h1>
                <p className="text-base md:text-lg lg:text-xl text-white opacity-70">
                  Select a brand from the sidebar to explore our portfolio of work across different industries and disciplines.
                </p>
              </div>
            </div>
          )}
          
          {/* Mobile horizontal scrollable menu - visible all the time on mobile */}
          <MobileVerticalMenu />
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        /* Hide scrollbar but allow scrolling */
        .overflow-y-auto, .overflow-x-auto {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .overflow-y-auto::-webkit-scrollbar, 
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        
        /* Line clamp for text truncation */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default VerticalBrandBento;