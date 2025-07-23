    import { insightsData } from '@/data/insights-data';
    import { notFound } from 'next/navigation'; // This import should now resolve
    import ArticleHero from '@/components/ArticleHero';
    import KeyTakeaways from '@/components/KeyTakeaways';
    import CtaSection from '@/components/CtaSection';
    import LeadExpertCard from '@/components/LeadExpertCard';
    import { teamData } from '@/data/team-data';
    import type { Metadata } from 'next'; // This import should now resolve

    // Define a type for the params object for clarity and type safety
    interface InsightPageParams {
      slug: string;
    }

    // generateStaticParams is used for Static Site Generation (SSG)
    export async function generateStaticParams() {
      return insightsData.map((article) => ({ slug: article.slug }));
    }

    // generateMetadata is used to dynamically generate SEO metadata for each insight page
    export async function generateMetadata({ params }: { params: InsightPageParams }): Promise<Metadata> {
      const article = insightsData.find((a) => a.slug === params.slug);
      // Handle case where article might not be found for metadata
      if (!article) {
        return { title: 'Insight Not Found | VNR', description: 'The requested insight could not be found.' };
      }
      return {
        title: `${article.title} | VNR`, // Removed optional chaining as article is now guaranteed
        description: article.excerpt, // Removed optional chaining
      };
    }

    // The main page component for a single insight article
    const InsightPage = async ({ params }: { params: InsightPageParams }) => { 
      const article = insightsData.find((a) => a.slug === params.slug);
      if (!article) notFound(); // notFound() will stop execution here if article is undefined

      // After notFound(), 'article' is guaranteed to be defined.
      // Use non-null assertion operator (!) or rely on TypeScript's control flow analysis.
      const expertBio = teamData.find(m => m.slug === article!.author.slug)?.intro || '';

      return (
        <>
          {/* Article Hero section displaying article title, author, and image */}
          <ArticleHero article={article!} /> {/* Use non-null assertion */}

          <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Main article content area */}
                <article className="lg:col-span-2 space-y-12">
                  {/* Key Takeaways section */}
                  <KeyTakeaways takeaways={article!.takeaways} /> {/* Use non-null assertion */}
                  {/* Render article content using dangerouslySetInnerHTML, applying Tailwind Prose styles */}
                  <section 
                    className="prose prose-lg max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-ul:text-slate-600 prose-strong:text-slate-700"
                    dangerouslySetInnerHTML={{ __html: article!.content }} // Use non-null assertion
                  />
                </article>

                {/* Sidebar for Lead Expert Card */}
                <aside className="space-y-8">
                  <LeadExpertCard
                    name={article!.author.name} // Use non-null assertion
                    title={article!.author.title} // Use non-null assertion
                    imageUrl={article!.author.imageUrl} // Use non-null assertion
                  >
                    {expertBio} {/* Pass the expert's bio content */}
                  </LeadExpertCard>
                </aside>

              </div>
            </div>
          </div>

          {/* Call to Action section */}
          <CtaSection />
        </>
      );
    };

    export default InsightPage;
    