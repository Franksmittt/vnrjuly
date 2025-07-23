'use client';

import React from 'react';
import { Mail, Phone, Building, Clock } from 'lucide-react';
import ContactHero from '@/components/ContactHero';
import InfoCard from '@/components/InfoCard';
import FaqItem from '@/components/FaqItem';
import { faqs } from '@/data/contact-data';

const ContactPage = () => {
  return (
    <>
      <ContactHero />

      <div className="container mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* --- Left Column: Contact Form --- */}
          <div className="bg-slate-50 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* --- Right Column: Contact Details & Map --- */}
          <div className="space-y-12">
            <div className="space-y-8">
              <InfoCard icon={<Mail size={24} />} title="Email Address">
                <a href="mailto:info@vnr.co.za" className="text-teal-600 hover:text-teal-700">
                  info@vnr.co.za
                </a>
              </InfoCard>
              <InfoCard icon={<Phone size={24} />} title="Phone Number">
                <a href="tel:+27126531633" className="text-teal-600 hover:text-teal-700">
                  +27 12 653 1633
                </a>
              </InfoCard>
              <InfoCard icon={<Building size={24} />} title="Office Address">
                <p>1022 Saxby Avenue, Eldoraigne<br />Centurion, 0157, South Africa</p>
              </InfoCard>
              <InfoCard icon={<Clock size={24} />} title="Business Hours">
                <p>Mon - Fri: 08:00 - 16:30</p>
                <p>Sat - Sun: Closed</p>
              </InfoCard>
            </div>
            <div className="h-64 rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458002.09525288636!2d27.814916022334405!3d-26.25707486893284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95658517133f81%3A0xbac8ebf8c25bc2bf!2sVNR%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1753187356294!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VNR Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 py-16 sm:py-24 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Quick Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.q}>
                <div className="prose" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </FaqItem>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;