import Link from 'next/link';
import { servicesData } from '@/data/services-data';
import { Check, ArrowRight, Scale, Building2, GitBranchPlus, FileText, UserCheck, Cloud, Gavel } from 'lucide-react';
import React from 'react';

const iconMap: { [key: string]: React.ReactElement } = {
  Scale: <Scale className="h-8 w-8 text-white" />,
  Building2: <Building2 className="h-8 w-8 text-white" />,
  GitBranchPlus: <GitBranchPlus className="h-8 w-8 text-white" />,
  FileText: <FileText className="h-8 w-8 text-white" />,
  UserCheck: <UserCheck className="h-8 w-8 text-white" />,
  Cloud: <Cloud className="h-8 w-8 text-white" />,
  Gavel: <Gavel className="h-8 w-8 text-white" />,
};

export const metadata = {
  title: 'Our Services | VNR',
  description: 'Explore the comprehensive suite of services offered by VNR, including expert tax advisory, business structuring, legacy planning, and financial reporting.',
};

const ServicesPage = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-100 py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Our Suite of Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            Integrated solutions designed to protect your assets, minimize tax, and facilitate sustainable wealth. We provide the clarity and strategic guidance necessary to navigate your financial journey with confidence.
          </p>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col rounded-2xl bg-slate-800 p-8 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                {/* Now using 'subtitle' as it's more concise for the card view */}
                <p className="mt-6 flex-grow text-slate-300">{service.subtitle}</p>
                <ul className="mt-6 space-y-3 pt-6 border-t border-slate-700">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <Check className="h-6 w-6 flex-shrink-0 text-green-400 mr-3" />
                      <span className="text-slate-200">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;