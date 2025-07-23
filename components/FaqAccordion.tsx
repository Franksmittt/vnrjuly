'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
// Assuming FAQ type is imported from a data file like services-data or contact-data
// The path might need adjustment based on where FaqAccordion is used and where FAQ is defined.
// For consistency, let's assume it's used with the FAQ type from services-data.ts or a shared types file.
import { FAQ } from '../data/services-data'; // Adjust path if FAQ is in a different data file or shared types

const FaqAccordion = ({ faqs }: { faqs: FAQ[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleFaq(index)}
            className="flex w-full items-center justify-between text-left"
          >
            {/* Corrected: Use faq.q instead of faq.question */}
            <span className="text-lg font-medium text-gray-900">{faq.q}</span>
            <ChevronDown
              className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openIndex === index ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              {/* Corrected: Use faq.a instead of faq.answer */}
              <p className="text-base text-gray-600">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
