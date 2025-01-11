
// Sections.jsx

import SplitSection from './SplitSection';

const Sections = () => {
  // You can move this data to a separate file if you want
  const sectionsData = [
    {
      title: "Agile",
      description: "We are a dynamic company focused on delivering exceptional value to our customers through innovative solutions and dedicated service.",
      isReversed: false
    },
    {
      title: "innovative",
      description: "To transform the digital landscape by providing cutting-edge solutions that empower businesses to reach their full potential.",
      isReversed: false
    },
    {
      title: "cultured",
      description: "From web development to digital marketing, we offer comprehensive solutions tailored to meet your specific business needs.",
      isReversed: false
    }
  ];

  return (
    <div>
      {sectionsData.map((section, index) => (
        <SplitSection 
          key={index}
          title={section.title}
          description={section.description}
          isReversed={section.isReversed}
        />
      ))}
    </div>
  );
};

export default Sections;