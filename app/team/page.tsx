import Image from 'next/image';
import Link from 'next/link';
import { teamData } from '../../data/team-data';
import { Linkedin, Mail, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Our Team of Experts | VNR',
  description: 'Meet the team of seasoned financial and tax experts at VNR. Our leadership is dedicated to providing strategic foresight and meticulous guidance for your wealth in Centurion and across South Africa.',
};

const TeamPage = () => {
  return (
    <div className="bg-white">
      {/* 1. Page Hero */}
      <section className="bg-slate-100 py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Meet Our Experts
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
            Our strength lies in our people. We are a collective of seasoned professionals committed to the financial success and security of our clients.
          </p>
        </div>
      </section>

      {/* 2. Leadership Cadre Section (MOVED UP) */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Leadership Cadre
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamData.map((member) => (
              <div key={member.slug} className="group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg">
                <div className="p-8 text-center">
                  <Image
                    className="mx-auto h-36 w-36 rounded-full object-cover ring-4 ring-slate-700 transition-all duration-300 group-hover:ring-blue-500"
                    src={member.imageUrl}
                    alt={member.name}
                    width={144}
                    height={144}
                  />
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="mt-1 text-base text-blue-300">{member.title}</p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 translate-y-full transform transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  <div className="flex items-center justify-center gap-x-4 bg-slate-900/80 p-4 backdrop-blur-sm">
                    <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors" aria-label={`${member.name}&apos;s LinkedIn`}>
                      <Linkedin size={24} />
                    </Link>
                    <Link href={`mailto:${member.email}`} className="text-slate-300 hover:text-white transition-colors" aria-label={`Email ${member.name}`}>
                      <Mail size={24} />
                    </Link>
                    <Link href={`/team/${member.slug}`} className="text-slate-300 hover:text-white transition-colors" aria-label={`View profile for ${member.name}`}>
                      <ArrowUpRight size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Approach Section */}
      <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                  <div>
                      <div className="flex items-center gap-4">
                          <Award className="h-10 w-10 text-blue-600 flex-shrink-0" />
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ability Should Be Rewarded</h2>
                      </div>
                      <p className="mt-4 text-lg text-gray-600">
                          Our foundational belief is that capable entrepreneurs and businesses deserve a strategic partner that enables their success. We position our services as a direct investment in your potential and ambition.
                      </p>
                  </div>
                  <div>
                      <div className="flex items-center gap-4">
                          <ShieldCheck className="h-10 w-10 text-blue-600 flex-shrink-0" />
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Facilitating Sustainable Wealth</h2>
                      </div>
                      <p className="mt-4 text-lg text-gray-600">
                          Our mission extends beyond short-term gains. We focus on long-term financial health, asset protection, and strategic legacy planning to ensure your prosperity endures for generations.
                      </p>
                  </div>
              </div>
              <div className="relative h-96 lg:h-full w-full rounded-2xl overflow-hidden">
                  <Image 
                      src="/images/slider/strategic-business-growth-south-africa.jpg" 
                      alt="Strategic planning session"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                  />
              </div>
          </div>
      </section>

      {/* 4. Accreditations Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Verifiable Authority. Unwavering Trust.</h2>
          <p className="mt-4 text-lg text-gray-600">Our expertise is recognized by the industry&apos;s most respected governing bodies.</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
              <div className="text-center">
                  <p className="text-xl font-bold text-slate-700">SAIPA</p>
                  <p className="text-sm text-slate-500">South African Institute of Professional Accountants</p>
              </div>
              <div className="text-center">
                  <p className="text-xl font-bold text-slate-700">SAIT</p>
                   <p className="text-sm text-slate-500">South African Institute of Tax Professionals</p>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                   <p className="text-xl font-bold text-slate-700">Sage Platinum Partner</p>
                   <p className="text-sm text-slate-500">Highest Tier of Expertise</p>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
