'use client';
import React from 'react';
import Image from 'next/image';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, subtitle, imageUrl }) => (
  <section className="relative h-80 bg-slate-800 text-white flex items-center justify-center">
    <Image 
      src={imageUrl} 
      alt={title} 
      fill 
      priority
      className="absolute inset-0 w-full h-full object-cover opacity-20" 
      sizes="100vw"
    />
    <div className="relative z-10 text-center px-4">
      <span className="text-teal-400 font-semibold tracking-wider uppercase">VNR Services</span>
      {/* Added explicit font-size classes to ensure it's always defined */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 max-w-2xl mx-auto text-center text-white">
        {title}
      </h1>
      <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  </section>
);

export default ServiceHero;
