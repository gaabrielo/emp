import React from 'react';
import { ImageGallery } from './ImageGallery';
import { Reviews } from './Reviews';
import { RelatedProducts } from './RelatedProducts';
import { ConsultationForm } from '../Scheduling/ConsultationForm';
import { Product } from '../../types';
import { consultationTypes } from '../../data/consultationTypes';
import { Package, Ruler, Palette } from 'lucide-react';

interface ProductDetailsPageProps {
  product: Product;
  allProducts: Product[];
}

export function ProductDetailsPage({ product, allProducts }: ProductDetailsPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ImageGallery images={product.images} productName={product.name} />
        
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-xl font-semibold text-indigo-600">
              ${product.price}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Product Details</h2>
            <p className="text-gray-600">{product.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.material && (
                <div className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-indigo-600" />
                  <span>Material: {product.material}</span>
                </div>
              )}
              {product.dimensions && (
                <div className="flex items-center space-x-2">
                  <Ruler className="h-5 w-5 text-indigo-600" />
                  <span>
                    Dimensions: {product.dimensions.width}x{product.dimensions.height}{' '}
                    {product.dimensions.unit}
                  </span>
                </div>
              )}
            </div>

            {product.colors.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Palette className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium">Available Colors:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <Reviews reviews={product.reviews} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Schedule a Consultation</h2>
          <ConsultationForm consultationTypes={consultationTypes} />
        </section>

        <section>
          <RelatedProducts products={allProducts} currentProductId={product.id} />
        </section>
      </div>
    </div>
  );
}