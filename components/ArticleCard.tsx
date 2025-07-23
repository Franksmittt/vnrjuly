'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/data/insights-data';

const ArticleCard = ({ article }: { article: Article }) => (
  <Link href={`/insights/${article.slug}`} className="group block">
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-56 w-full">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div>
          <p className="text-sm font-semibold text-blue-600">{article.category}</p>
          <p className="mt-2 text-xl font-bold text-gray-900 group-hover:text-blue-700">
            {article.title}
          </p>
           <p className="mt-3 text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <Image
              className="h-10 w-10 rounded-full object-cover"
              src={article.author.imageUrl}
              alt={article.author.name}
              width={40}
              height={40}
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
            <p className="text-sm text-gray-500">{article.date}</p>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default ArticleCard;