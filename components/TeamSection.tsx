import Image from 'next/image';
import Link from 'next/link';
import { teamData } from '../data/team-data';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const TeamSection = () => {
  const featuredMembers = teamData.slice(0, 3);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wider uppercase">Our Leadership Cadre</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Architects of Your Financial Legacy
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Meet the seasoned experts dedicated to providing the strategic foresight and meticulous guidance your wealth deserves.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredMembers.map((member) => (
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
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  {/* Accessibility Fix: Increased contrast from blue-400 to blue-300 */}
                  <p className="mt-1 text-base text-blue-300">
                    {member.title}
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 translate-y-full transform transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                <div className="flex items-center justify-center gap-x-4 bg-slate-900/80 p-4 backdrop-blur-sm">
                  {/* Best Practice Fix: Added rel="noopener noreferrer" for security */}
                  <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors" aria-label={`${member.name}'s LinkedIn`}>
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
  );
};

export default TeamSection;