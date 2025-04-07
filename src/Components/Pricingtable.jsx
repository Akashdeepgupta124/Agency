// PricingTable.jsx
import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const pricingPlans = [
  {
    name: 'Starter Pack',
    monthlyPrice: 15,
    annualPrice: 8,
    description: 'Ideal for individual users and hobbyists looking for essential functionalities.',
    features: [
      '5 MB/PDF',
      '75 pages/PDF',
      '10 messages/Day',
      'Up to 3 PDFs'
    ],
    unavailableFeatures: [
      'GPT-3.5-turbo model',
      'Test mode',
      'Doc summary'
    ],
    bgColor: 'bg-black'
  },
  {
    name: 'Silver Surfer',
    monthlyPrice: 25,
    annualPrice: 20,
    description: 'Perfect for small businesses and startups needing balanced features.',
    features: [
      '10 MB/PDF',
      '150 pages/PDF',
      '25 messages/Day',
      'Up to 5 PDFs',
      'GPT-3.5-turbo model'
    ],
    unavailableFeatures: [
      'Test mode',
      'Doc summary'
    ],
    bgColor: 'bg-black'
  },
  {
    name: 'Golden Unicorn',
    monthlyPrice: 50,
    annualPrice: 40,
    description: 'Tailored for medium-sized businesses with advanced needs.',
    features: [
      '32 MB/PDF',
      '1500 pages/PDF',
      '1000 messages/Day',
      'Up to 50 PDFs',
      'GPT-3.5-turbo-16k model',
      'Test mode',
      'Doc summary'
    ],
    unavailableFeatures: [],
    bgColor: 'bg-black'
  }
];

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80  rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72  rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 py-12 mx-auto max-w-7xl w-full">
        {/* Toggle Buttons */}
        <div className="max-w-sm mx-auto mb-12">
          <div className="flex border rounded-full bg-black border-gray-700 p-1">
            <button
              className={`flex-1 py-2 px-6 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`flex-1 py-2 px-6 rounded-full text-sm font-medium transition-all duration-200 ${
                isAnnual ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-8 rounded-3xl ${plan.bgColor} backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800/50`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{plan.name}</h3>
                <div className="text-white mb-6">
                  <span className="text-3xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-base font-medium">
                    /m
                    {isAnnual && (
                      <span className="text-sm text-gray-400"> (billed annually)</span>
                    )}
                  </span>
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
                className={`mt-8 w-full py-3 px-6 rounded-xl text-base font-medium transition-all duration-200 ${
                  index === 1 
                    ? 'bg-white text-black hover:bg-orange-600' 
                    : 'bg-white text-black hover:bg-orange-600'
                }`}
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