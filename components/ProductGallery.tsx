'use client';

import { useState } from 'react';

interface ProductGalleryProps {
  mainImage: string;
  galleryImages?: string[];
  productName: string;
  badge?: string;
}

export default function ProductGallery({ mainImage, galleryImages, productName, badge }: ProductGalleryProps) {
  const images = galleryImages && galleryImages.length > 0 ? galleryImages : [mainImage];
  const [selectedImage, setSelectedImage] = useState<string>(mainImage);

  return (
    <div className="space-y-4">
      {/* Main Active Image Frame */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={selectedImage}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {badge && (
          <span className="absolute top-4 left-4 bg-[#7A1F2B] text-white text-xs font-mono font-bold uppercase px-3 py-1 rounded-xs shadow-md">
            {badge}
          </span>
        )}
      </div>

      {/* Gallery Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((imgUrl, index) => {
            const isSelected = selectedImage === imgUrl;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(imgUrl)}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                  isSelected ? 'border-[#7A1F2B] ring-2 ring-[#7A1F2B]/20 scale-95' : 'border-stone-200 hover:border-stone-400 opacity-80 hover:opacity-100'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgUrl}
                  alt={`${productName} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
