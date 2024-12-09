import React from 'react';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard';

interface RelatedProductsProps {
  products: Product[];
  currentProductId: string;
}

export function RelatedProducts({ products, currentProductId }: RelatedProductsProps) {
  const currentProduct = products.find(p => p.id === currentProductId);
  const relatedProducts = products.filter(p => 
    currentProduct?.relatedProducts.includes(p.id)
  );

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Related Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}