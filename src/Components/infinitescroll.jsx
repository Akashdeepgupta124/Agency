import React, { useEffect, useRef } from 'react';

const InfiniteLogoScroll = () => {
  const logos = [
    "Indiana Commerce",
    "Vinni Toys",
    "OIVO",
    "LeoFast",
    "ELKANCE",
    "CAL Beauty",
    "Prapami",
    "US Kart"
  ];
  
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  
  // Duplicate the logos array to ensure seamless looping
  const tripleLogos = [...logos, ...logos, ...logos];
  
  useEffect(() => {
    // We don't need custom JS animation as we'll use pure CSS
    // This ref setup allows for potential future enhancements
  }, []);

  return (
    <>
    <div className="w-full bg-black py-10 relative overflow-hidden">
      {/* Centered Title */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-3xl md:text-4xl font-normal text-white bg-clip-text 
          bg-gradient-to-r from-orange-400 to-orange-600">
          OUR PARTNERS
        </h1>
       
      </div>

      <div className="max-w-7xl mx-auto space-y-8 px-6 relative z-10">
        {/* First Row - Seamless Left Scroll */}
        <div className="relative overflow-hidden whitespace-nowrap">
          <div 
            ref={row1Ref}
            className="inline-flex animate-marquee"
          >
            {tripleLogos.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="inline-block mx-4 px-8 py-3 rounded-xl
                  bg-gradient-to-br from-orange-500/10 to-orange-600/10
                  border border-orange-500/20
                  shadow-[0_0_15px_rgba(234,88,12,0.15)]"
              >
                <span className="text-white font-semibold text-lg tracking-wide whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Seamless Right Scroll */}
        <div className="relative overflow-hidden whitespace-nowrap">
          <div 
            ref={row2Ref}
            className="inline-flex animate-marquee-reverse"
          >
            {tripleLogos.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="inline-block mx-4 px-8 py-3 rounded-xl
                  bg-gradient-to-br from-orange-500/10 to-orange-600/10
                  border border-orange-500/20
                  shadow-[0_0_15px_rgba(234,88,12,0.15)]"
              >
                <span className="text-white font-semibold text-lg tracking-wide whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>
      
      {/* Add custom styling for the animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </div>
       <div className="h-[50vh] flex items-center justify-center">
       <h1 className="text-[3rem] md:text-[7rem] lg:text-[12rem] font-normal tracking-tight leading-none">
         B&W Business
       </h1>
   </div>
   </>
  );
};

export default InfiniteLogoScroll;