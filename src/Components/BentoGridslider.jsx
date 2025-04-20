import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BentoGridSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Sample data - you can replace this with your own content
  const slides = [
    {
      id: 1,
      grid: [
        {
          title: "Feature One",
          description: "Describe your first feature here with engaging content.",
          bgColor: "bg-indigo-500",
          textColor: "text-white",
          size: "col-span-2 row-span-1 h-[403px]", // large left block
          width: "w-[634px]"
        },
        {
          title: "Feature Two",
          description: "Your second feature description goes here.",
          bgColor: "bg-purple-500",
          textColor: "text-white",
          size: "col-span-1 row-span-1 h-[403px]", // right block
          width: "w-[474px]"
        },
        {
          title: "Feature Three",
          description: "Third feature description with important details.",
          bgColor: "bg-blue-500",
          textColor: "text-white",
          size: "col-span-1 row-span-1 h-[347px]", // bottom left
          width: "w-[440px]"
        },
        {
          title: "Feature Four",
          description: "Fourth feature with compelling information about your product.",
          bgColor: "bg-cyan-500",
          textColor: "text-white",
          size: "col-span-2 row-span-1 h-[374px]", // bottom right large block
          width: "w-[668px]"
        }
      ]
    },
    {
      id: 2,
      grid: [
        {
          title: "Innovation",
          description: "Leading the way with innovative solutions.",
          bgColor: "bg-emerald-500",
          textColor: "text-white",
          size: "col-span-2 row-span-1 h-[403px]",
          width: "w-[634px]"
        },
        {
          title: "Creativity",
          description: "Creative approaches to modern challenges.",
          bgColor: "bg-amber-500",
          textColor: "text-white",
          size: "col-span-1 row-span-1 h-[403px]",
          width: "w-[474px]"
        },
        {
          title: "Technology",
          description: "Cutting edge technology for tomorrow's problems.",
          bgColor: "bg-rose-500",
          textColor: "text-white",
          size: "col-span-1 row-span-1 h-[347px]",
          width: "w-[440px]"
        },
        {
          title: "Excellence",
          description: "Commitment to excellence in everything we do.",
          bgColor: "bg-violet-500",
          textColor: "text-white",
          size: "col-span-2 row-span-1 h-[374px]",
          width: "w-[668px]"
        }
      ]
    },
    {
      id: 3,
      grid: [
        {
          title: "Growth",
          description: "Sustainable growth strategies for businesses.",
          bgColor: "bg-pink-500",
          textColor: "text-white",
          size: "col-span-2 row-span-1 h-[403px]",
          width: "w-[634px]"
        },
        {
          title: "Support",
          description: "24/7 support for all your needs.",
          bgColor: "bg-teal-500",
          textColor: "text-white",
          size: "col-span-1 row-span-1 h-[403px]",
          width: "w-[474px]"
        },
        {
          title: "Community",
          description: "Building communities through collaboration.",
          bgColor: "bg-orange-500",
          textColor: "text-white",
          size: "col-span-1 row-span-1 h-[347px]",
          width: "w-[440px]"
        },
        {
          title: "Vision",
          description: "Our vision for a better, connected future.",
          bgColor: "bg-lime-500",
          textColor: "text-white",
          size: "col-span-2 row-span-1 h-[374px]",
          width: "w-[668px]"
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Grid item component to display content in each bento box
  const GridItem = ({ item }) => (
    <div 
      className={`${item.bgColor} ${item.textColor} ${item.width} ${item.size} p-6 flex flex-col justify-between transition-all duration-300 overflow-hidden group`}
    >
      <div>
        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
        <p className="text-lg opacity-90">{item.description}</p>
      </div>
      <div className="mt-4">
        {/* Placeholder for an image */}
        <div className="bg-black bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center">
          <img 
            src="/api/placeholder/100/100" 
            alt="Placeholder" 
            className="w-12 h-12 object-cover opacity-70 group-hover:opacity-100 transition-opacity" 
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      <div className="relative">
        {/* Slide container with transition */}
        <div className="overflow-hidden">
          <div 
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="flex">
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full">
                  <div className="grid grid-cols-3 gap-4">
                    {slide.grid.map((item, idx) => (
                      <GridItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 gap-3">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? "bg-blue-600 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// bentogird slider for projects display