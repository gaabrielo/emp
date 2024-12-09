import React from 'react';
import { Blinds } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Blinds className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-semibold text-gray-900">Elegant Drapes</h1>
          </div>
          <nav className="flex space-x-8">
            <a href="#curtains" className="text-gray-600 hover:text-indigo-600">Curtains</a>
            <a href="#accessories" className="text-gray-600 hover:text-indigo-600">Accessories</a>
          </nav>
        </div>
      </div>
    </header>
  );
}