"use client";
import React from 'react';

interface Props {
  src: string;
  alt: string;
  caption?: string; // Tanda tanya artinya opsional (boleh kosong)
}

export default function BlogImage({ src, alt, caption }: Props) {
  return (
    <figure className="my-10 w-full">
      {/* Container Gambar dengan Border Radius & Shadow */}
      <div className="overflow-hidden rounded-2xl border-2 border-gray-100 dark:border-slate-800 shadow-game">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Caption di bawah gambar */}
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400 italic font-medium">
          📸 {caption}
        </figcaption>
      )}
    </figure>
  );
}