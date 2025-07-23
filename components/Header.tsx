'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Briefcase, Users, Newspaper, Mail, Phone, Menu, X } from 'lucide-react';

// This component now has the correct logic for the active state
const NavItem = ({ href, Icon, children }: { href: string; Icon: React.ElementType; children: React.ReactNode }) => {
  const pathname = usePathname();
  // An item is active ONLY if the pathnames match exactly.
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
        isActive
          ? 'bg-cyan-600 text-white shadow-inner' // Active style
          : 'text-white/80 hover:bg-white/20 hover:text-white' // Inactive style
      }`}
    >
      <Icon className="h-5 w-5" />
      {children}
    </Link>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Corrected: All links point to their REAL destinations.
  const navLinks = [
    { href: '/', label: 'Home', Icon: Home },
    { href: '/services', label: 'Services', Icon: Briefcase },
    { href: '/team', label: 'Our Team', Icon: Users },
    { href: '/insights', label: 'Insights', Icon: Newspaper },
    { href: '/contact', label: 'Contact', Icon: Mail },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-800 to-teal-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" aria-label="VNR Home Page">
          <Image src="/logo.png" alt="VNR Logo" width={110} height={40} priority />
        </Link>

        <nav className="hidden items-center space-x-2 md:flex">
          {navLinks.map((link) => (
            <NavItem key={link.label} href={link.href} Icon={link.Icon}>
              {link.label}
            </NavItem>
          ))}
        </nav>

        <div className="flex items-center">
          <a
            href="tel:+27126531633"
            className="hidden items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-blue-800 transition-transform duration-300 hover:scale-105 lg:inline-flex"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Us
          </a>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="ml-4 p-2 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 transform bg-slate-900/80 backdrop-blur-sm transition-opacity md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute right-0 top-0 h-full w-full max-w-xs transform bg-white p-6 text-slate-800 shadow-xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Menu</h2>
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                    <X className="h-6 w-6" />
                </button>
            </div>
            <nav className="mt-8 flex flex-col space-y-2">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 rounded-lg p-3 text-lg font-medium hover:bg-gray-100"
                    >
                        <link.Icon className="h-6 w-6 text-blue-700" />
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;