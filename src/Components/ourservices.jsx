import React from "react";
import { Video, Code, Brush, FileText } from "lucide-react";

export default function ServicesSection() {
  // Sample tool icons
 

  const services = [
    {
      
      image: "/service1.png" 
    },
    {
     
      image: "/service2.png" // Placeholder image
    },
    {
      
      image: "/service3.png" // Placeholder image
    },
    {
      
      image: "/service4.png" // Placeholder image
    }
  ];

  return (
    <section className="bg-white text-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Info */}
        <div className="lg:col-span-1 flex flex-col justify-center">
          {/* What Do You Needs section - positioned in the middle */}
          <div className="bg-gray-100 p-6 shadow-sm border border-gray-200 my-auto">
            <h3 className="text-2xl font-bold mb-3">
              What Do You Needs<br className="hidden sm:block" />We Can Do it
            </h3>
            <p className="text-gray-600">
              Orders with multiple SKUs can be entered manually, or imported into the Quick Order form. Quick Order can be used!
            </p>
          </div>
        </div>
        
        {/* Right Section - Service Boxes Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Boxes */}
            {services.map((service, index) => (
              <div 
                key={index} 
                className=" shadow-sm border border-black transition-colors duration-300"
                style={{
                  backgroundColor: "white",
                  color: "black"
                }}
              >
                
                {/* Optional Image */}
                {service.image && (
                  <div >
                    <img 
                      src={service.image} 
                    
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}