import { teamData } from '@/data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Mail, CheckCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return teamData.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const member = teamData.find((m) => m.slug === params.slug);
  if (!member) {
    return { title: 'Team Member Not Found' };
  }
  return {
    title: `${member.name} - ${member.title} | VNR`,
    description: member.intro,
  };
}

const TeamMemberPage = ({ params }: { params: { slug: string } }) => {
  const member = teamData.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="bg-white text-slate-800">
      {/* Profile Hero Section */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-5xl px-6 py-16 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{member.name}</h1>
          <h2 className="mt-2 text-xl font-semibold text-blue-700">{member.title}</h2>
          <blockquote className="mt-6 max-w-3xl mx-auto md:mx-0 border-l-4 border-blue-600 pl-6">
            <p className="text-lg italic text-slate-600">{member.intro}</p>
          </blockquote>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Sticky Column */}
          <div className="md:col-span-1">
            <div className="sticky top-28">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={500}
                height={500}
                className="rounded-2xl object-cover aspect-square"
                priority
              />
              <div className="mt-6 flex space-x-4">
                 <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label={`${member.name}'s LinkedIn`}>
                    <Linkedin size={24} />
                  </Link>
                  <Link href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-600 transition-colors" aria-label={`Email ${member.name}`}>
                    <Mail size={24} />
                  </Link>
              </div>
            </div>
          </div>

          {/* Right Scrollable Column */}
          <div className="md:col-span-2">
            <div
              className="prose prose-lg prose-slate max-w-none prose-h3:text-blue-800 prose-h3:border-b prose-h3:pb-2"
              dangerouslySetInnerHTML={{ __html: member.bio }}
            />
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-blue-800 border-b pb-2 mb-6">Credentials</h3>
              <ul className="space-y-3">
                {member.credentials.map((cred) => (
                  <li key={cred} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            {member.articles && member.articles.length > 0 && (
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-blue-800 border-b pb-2 mb-6">Published Insights</h3>
                    <ul className="space-y-2">
                        {member.articles.map(article => (
                            <li key={article.title}>
                                <Link href={article.url} className="text-lg text-blue-600 hover:underline">
                                    {article.title}
                                </Link>
                                <span className="text-sm text-slate-500 ml-2">({article.category})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberPage;