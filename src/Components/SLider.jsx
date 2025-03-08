import  { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DragonSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  // Card data with added links
  const cards = [
    {
      id: 1,
      title: "Electronics",
      description: "SHOPIFY WEBSITE",
      imageUrl: "/elkance.png",
      link: "https://elkance.in"
    },
    {
      id: 2,
      title: "Power Tools",
      description: "SHOPIFY WEBSITE",
      imageUrl: "/leofast.png",
      link: "https://leofast.in"
    },
    {
      id: 3,
      title: "Mens Accessories",
      description: "SHOPIFY WEBSITE",
      imageUrl: "/1.png",
      link: "https://thesystumm.com"
    },
    {
      id: 4,
      title: "UI/UX",
      description: "FIGMA",
      imageUrl: "/figma.jpg",
      link: "https://www.figma.com/design/WgKAYmZss054jQgsMSmhuw/akashdeepguota124's-team-library?node-id=5021-8820&t=1mNkQFGRb9h6XZ1F-1"
    }
  ];

  // Handlers for navigation
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === cards.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Calculate previous and next indices
  const prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;

  // Get the card component with appropriate styling based on position
  const getCardComponent = (index, position) => {
    const card = cards[index];

    // Different styles based on position (prev, current, next)
    const positionStyles = {
      prev: "scale-75 -translate-x-1/2 opacity-50 z-10",
      current: "scale-100 z-20",
      next: "scale-75 translate-x-1/2 opacity-50 z-10"
    };

    return (
      <div
        key={card.id}
        className={`w-[300px] h-[400px] md:w-[400px] md:h-[480px] rounded-xl overflow-hidden absolute transform transition-all duration-300 ${positionStyles[position]}`}
      >
        {/* Background Image */}
        <img
          src={card.imageUrl}
          alt={card.title}
          className="absolute w-full h-full object-cover"
        />

        {/* Side title strip */}
        <div className="absolute left-0 top-8 bg-orange-500 px-4 py-2 rounded-r-lg shadow-md transform -translate-x-1 hover:translate-x-0 transition-transform duration-300">
          <a href={card.link} className="text-white font-bold whitespace-nowrap">
            {card.title}
          </a>
        </div>

        {/* Card content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-sm">
          <p className="text-black">{card.description}</p>
          <a
            href={card.link}
            target="_blank"
            className="mt-2 inline-block text-orange-500 font-medium hover:underline"
          >
            Learn more
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center w-full h-50vh bg-white">
      {/* Main container with fixed height */}
      <div className="relative w-full h-[80vh] md:h-[100vh] max-w-4xl overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-orange-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-orange-700/20 blur-3xl"></div>

        {/* Slider track with all three visible cards */}
        <div className="relative h-[70%] p-4 md:p-20 m-4 md:m-20 flex justify-center items-center">
          {/* Previous card */}
          {getCardComponent(prevIndex, "prev")}

          {/* Current card */}
          {getCardComponent(currentIndex, "current")}

          {/* Next card */}
          {getCardComponent(nextIndex, "next")}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-full p-2 md:p-3 hover:bg-orange-500/20 transition-all z-30"
        >
          <ChevronLeft className="text-orange-500" size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-full p-2 md:p-3 hover:bg-orange-500/20 transition-all z-30"
        >
          <ChevronRight className="text-orange-500" size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute  md:bottom-2  left-1/2 transform -translate-x-1/2 flex justify-center">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 md:w-3 md:h-3 mx-1 md:mx-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-orange-500' : 'bg-orange-500/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragonSlider;