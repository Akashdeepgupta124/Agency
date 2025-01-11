import React from 'react';

const RotatingText = () => {
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="relative group">
        {/* Add rotation animation to the SVG */}
        <svg
          className="w-64 h-64 animate-spin-slow"
          viewBox="0 0 400 400"
        >
          <path
            id="textPath"
            d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
            fill="none"
          />
          <text className="fill-orange-600 text-3xl">
            <textPath href="#textPath">
              ---For All WebSite Development , UI/UX , SHOPIFY, WOrdPress ---
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default RotatingText;
