import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img
          src={selectedImage}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden ${
              selectedImage === image ? 'ring-2 ring-indigo-600' : ''
            }`}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}