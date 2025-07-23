'use client';
import React from 'react';
import Image from 'next/image';
import { Article } from '@/data/insights-data';

const ArticleHero = ({ article }: { article: Article }) => (
  <section className="relative h-96 bg-slate-800 text-white flex items-end">
    <Image 
      src={article.imageUrl} 
      alt={article.title} 
      fill 
      priority
      className="absolute inset-0 w-full h-full object-cover opacity-30" 
      sizes="100vw"
    />
    <div className="relative z-10 container mx-auto px-6 py-12">
      <p className="text-teal-400 font-semibold tracking-wider uppercase">{article.category}</p>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2 max-w-4xl">{article.title}</h1>
      <div className="mt-6 flex items-center text-sm">
        <Image src={article.author.imageUrl} alt={article.author.name} width={48} height={48} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold text-white">{article.author.name}</p>
          <p className="text-slate-300">{article.date}</p>
        </div>
      </div>
    </div>
  </section>
);

export default ArticleHero;