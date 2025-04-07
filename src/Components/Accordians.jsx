import { useState } from 'react';

// Create audio objects
const hoverSound = new Audio('/bg3.mp3');
const clickSound = new Audio('/bg2.mp3');

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      title: 'What is Material Tailwind?',
      content: 'Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.'
    },
    {
      title: 'How to use Material Tailwind?',
      content: 'You can use Material Tailwind by importing its components into your Tailwind CSS project.'
    },
    {
      title: 'What can I do with Material Tailwind?',
      content: 'Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.'
    }
  ];

  const toggleAccordion = (index) => {
    clickSound.play().catch(error => console.log("Audio play failed:", error));
    setOpenIndex(openIndex === index ? null : index);
  };

  const playHoverSound = () => {
    hoverSound.play().catch(error => console.log("Audio play failed:", error));
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {accordionItems.map((item, index) => (
        <div key={index} className="border-b  border-black-500">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-5 text-slate-800 hover:text-black transition-colors duration-200"
          >
            <span className="text-left  text-xl md:text-2xl">{item.title}</span>
            <span
              className={`text-slate-800 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            >
              {openIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div 
              onMouseEnter={playHoverSound}
              className="pb-5 text-sm text-black group hover:bg-black hover:text-white transition-colors duration-200"
            >
              <span 
                className={`inline-block ${
                  openIndex === index 
                    ? 'animate-[textPop_0.5s_ease-in-out ]' 
                    : ''
                }`}
              >
                {item.content}
              </span>
            </div>
            <hr />
          </div>
        </div>
      ))}
   
    </div>
  );
};

export default Accordion;