import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

// Monthly subscription plans
const monthlyPlans = [
  {
    name: 'Starter Pack',
    price: "₹29,997",
    month: "3 months",
    description: 'Perfect for agencies handling small to mid-sized client projects.',
    features: [
      'Custom Shopify Store Design',
      'Theme Setup',
      'Product Listing (Up to 50 products)',
      'UI/UX Design',
      'React/Next.js Development (Basic)'
    ],
    unavailableFeatures: [
      'Custom API Integration',
      'social media management',
      '24*7 Support'
    ],
    bgColor: 'bg-black'
  },
  {
    name: 'Silver Surfer',
    price:  "₹49,997",
    month: "6 months",
    description: ' Ideal for agencies scaling high-ticket eCommerce brands.',
    features: [
      'Custom Shopify Store Design',
      'Theme Setup',
      'Product Listing ',
      'UI/UX Design',
      'Shopify Custom Codes',
      'React/Next.js Development (intermediate)',
      'Social Media Management',
      
    ],
    unavailableFeatures: [
      'Custom Payment Gateways',      
    ],
    bgColor: 'bg-black'
  },
  {
    name: 'Golden Unicorn',
    price: " ₹99,997 ",
    month: "12 months",
    description: 'Best for brands seeking long-term leadership in their market.',
    features: [
      'Shopify Store Setup & Maintenance',
       'React/Next.js Development(Advance)',
      'Shopify SEO',  
      'UI/UX',
      'Custom Social Media Marketing Plan',
      'Custom API Integration',
      '24*7 Support',
      'Branding services'
    ],
    unavailableFeatures: [],
    bgColor: 'bg-black'
  }
];

// Project-based plans
const projectPlans = [
  {
    name: 'Shopify Website',
    price: '₹8,997',
    description: 'Ideal for new entrepreneurs who want a professional store without tech stress.',
    features: [
      'Custom Shopify Store Design',
      'Theme Customization',
      'Product Listing (Up to 30 products)',
      'Basic UI/UX Design',
      '2 Revisions Included',
      'APP intregrations',
      'Domain Setup & Payment Gateway',
      'Custom Checkout Experience',
      'Post-launch Support'
    ],
    unavailableFeatures: [
      
    ],
    bgColor: 'bg-black'
  },
  {
    name: 'UI/UX Designs',
    price: '₹3,997',
    description: 'Perfect for landing pages and startup websites that need to convert.',
    features: [
      'custom pages (Home, About, Services, Contact, etc.)',
      'Fully Responsive Design (Mobile + Desktop)',
      ' Wireframe + Prototype',
      'Advanced UI/UX Design',
      ' 6 Design Revisions',
      ' Color Palette & Typography',
    ],
    unavailableFeatures: [
      
    ],
    bgColor: 'bg-black'
  },
  {
    name: 'Social Media Management',
    price: '₹3,997',
    description: 'Great for brands looking to stand out in a crowded market.',
    features: [
      ' Complete Social Media Strategy',
      ' Content Calendar Planning',
      'Platform Management (Instagram, QUORA, LinkedIn, etc.)',
      'Custom Creatives & Captions',
      'Hashtag & Trend Research',
      'Performance Tracking & Monthly Report',
      '30 Days of Support'
    ],
    unavailableFeatures: [],
    bgColor: 'bg-black'
  }
];

const PricingTable = () => {
  const [pricingMode, setPricingMode] = useState('monthly'); // 'monthly' or 'project'

  // Determine which plans to display based on the selected mode
  const plansToDisplay = pricingMode === 'monthly' ? monthlyPlans : projectPlans;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 py-12 mx-auto max-w-7xl w-full">
        {/* Pricing Mode Toggle */}
        <div className="max-w-sm mx-auto mb-12">
          <div className="flex border rounded-full bg-black border-gray-700 p-1">
            <button
              className={`flex-1 py-2 px-6 rounded-full text-sm font-medium transition-all duration-200 ${
                pricingMode === 'monthly' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setPricingMode('monthly')}
            >
              Monthly Plans
            </button>
            <button
              className={`flex-1 py-2 px-6 rounded-full text-sm font-medium transition-all duration-200 ${
                pricingMode === 'project' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setPricingMode('project')}
            >
              Project Based
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plansToDisplay.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-8 rounded-3xl ${plan.bgColor} backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800/50`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{plan.name}</h3>
                <div className="text-white mb-6">
                  <span className="text-3xl font-bold">
                    {pricingMode === 'monthly' ? `${plan.price}` : plan.price}
                  </span>
                  {pricingMode === 'monthly' && (
                    <span className="text-base font-medium">/{plan.month}</span>
                  )}
                </div>
                <p className="text-sm text-gray-300 mb-8">{plan.description}</p>
                
                <ul className="space-y-4 text-sm text-white">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-orange-400" />
                      {feature}
                    </li>
                  ))}
                  {plan.unavailableFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 opacity-50">
                      <XCircleIcon className="w-5 h-5 text-gray-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 w-full py-3 px-6 rounded-xl text-base font-medium transition-all duration-200 bg-white text-black hover:bg-orange-600"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;