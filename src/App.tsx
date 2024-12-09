import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailsPage } from './components/ProductDetails/ProductDetailsPage';
import { products } from './data/products';

function App() {
  // For demonstration, showing the first product's details page
  const selectedProduct = products[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <main>
        <ProductDetailsPage product={selectedProduct} allProducts={products} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid products={products} category="curtains" />
          <ProductGrid products={products} category="accessories" />
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Elegant Drapes has been providing quality curtains and accessories
                since 1990. We pride ourselves on exceptional craftsmanship and
                customer service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: info@elegantdrapes.com<br />
                Phone: (555) 123-4567<br />
                Address: 123 Drapery Lane, Design District
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Pinterest</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;