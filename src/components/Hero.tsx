import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transform Your Space<br />
            With Elegant Drapes
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-xl">
            Discover our curated collection of premium curtains and accessories
            designed to elevate your home's aesthetic.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}