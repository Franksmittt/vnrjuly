import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li className="mb-2">
    <Link href={href} className="text-gray-200 transition-colors duration-300 hover:text-white">
      {children}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-white">VNR</h3>
            <p className="mt-4 text-sm text-gray-200">
              Your premier partner in strategic tax advisory, business structuring, and intergenerational wealth planning.
              We provide clarity and confidence for South Africa&apos;s leading families and businesses.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {/* Corrected closing tags for FooterLink */}
              <FooterLink href="/services/tax-advisory">Tax Advisory</FooterLink>
              <FooterLink href="/services/business-structuring">Business Structuring</FooterLink>
              <FooterLink href="/services/legacy-planning">Estate Planning</FooterLink>
              <FooterLink href="/services/financial-reporting">Financial Reporting</FooterLink>
              <FooterLink href="/services">View All Services</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/team">Our Team</FooterLink>
              <FooterLink href="/insights">Insights</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-200">1022 Saxby Avenue, Eldoraigne, Centurion, 0157, South Africa</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3" />
                <a href="mailto:info@vnr.co.za" className="text-sm text-gray-200 hover:text-white">info@vnr.co.za</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3" />
                <a href="tel:+27126531633" className="text-sm text-gray-200 hover:text-white">+27 12 653 1633</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-slate-700" />
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} VNR. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
