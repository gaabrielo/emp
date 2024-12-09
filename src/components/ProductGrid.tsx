import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  category: 'curtains' | 'accessories';
}

export function ProductGrid({ products, category }: ProductGridProps) {
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <section id={category} className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 capitalize">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}