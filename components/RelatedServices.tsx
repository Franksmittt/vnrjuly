'use client';
import React from 'react';
import Link from 'next/link';
import { Book, TrendingUp } from 'lucide-react';

const RelatedServices = () => (
  <section className="bg-slate-100 py-16 sm:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">Explore Other Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link href="/services/tax-advisory" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex items-center space-x-4">
          <div className="bg-teal-100 text-teal-600 p-3 rounded-full"><Book size={24} /></div>
          <div>
            <h3 className="font-bold text-slate-800">Tax Advisory & Compliance</h3>
            <p className="text-sm text-slate-500 mt-1">Navigate complex tax landscapes with strategic foresight.</p>
          </div>
        </Link>
        <Link href="/services/business-structuring" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex items-center space-x-4">
          <div className="bg-teal-100 text-teal-600 p-3 rounded-full"><TrendingUp size={24} /></div>
          <div>
            <h3 className="font-bold text-slate-800">Business Structuring</h3>
            <p className="text-sm text-slate-500 mt-1">Architect the optimal legal and financial structure for your enterprise.</p>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

export default RelatedServices;