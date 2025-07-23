    import { servicesData } from '@/data/services-data';
    import { notFound } from 'next/navigation'; // This import should now resolve
    import ServiceHero from '@/components/ServiceHero';
    import LeadExpertCard from '@/components/LeadExpertCard';
    import FaqItem from '@/components/FaqItem';
    import RelatedServices from '@/components/RelatedServices';
    import CtaSection from '@/components/CtaSection';
    import { teamData } from '@/data/team-data';
    import type { Metadata } from 'next'; // This import should now resolve

    // Define a type for the params object for clarity and type safety
    interface ServicePageParams {
      slug: string;
    }

    export async function generateStaticParams() {
      return servicesData.map((service) => ({ slug: service.slug }));
    }

    export async function generateMetadata({ params }: { params: ServicePageParams }): Promise<Metadata> {
      const service = servicesData.find((s) => s.slug === params.slug);
      // Handle case where service might not be found for metadata
      if (!service) {
        return { title: 'Service Not Found | VNR Services', description: 'The requested service could not be found.' };
      }
      return {
        title: `${service.title} | VNR Services`,
        description: service.subtitle,
      };
    }

    // The main page component for a single service
    const ServicePage = async ({ params }: { params: ServicePageParams }) => { 
      const service = servicesData.find((s) => s.slug === params.slug);
      if (!service) notFound(); // notFound() will stop execution here if service is undefined

      // After notFound(), 'service' is guaranteed to be defined.
      // Use non-null assertion (!) or rely on TypeScript's control flow analysis.
      const expertBio = teamData.find(m => m.slug === service!.leadExpert.slug)?.intro || '';

      return (
        <>
          <ServiceHero 
            title={service!.title} // Use non-null assertion
            subtitle={service!.subtitle} // Use non-null assertion
            imageUrl={service!.imageUrl} // Use non-null assertion
          />

          <div className="bg-slate-50 py-16 sm:py-24">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                <article className="lg:col-span-2 space-y-12">
                  <section 
                    className="prose prose-lg max-w-none prose-h2:text-3xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:tracking-tight"
                    dangerouslySetInnerHTML={{ __html: service!.content }} // Use non-null assertion
                  />
                  {service!.faqs && service!.faqs.length > 0 && ( // Use non-null assertion
                    <section>
                      <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
                      <div className="mt-6">
                        {service!.faqs.map((faq, index) => ( // Use non-null assertion
                          <FaqItem key={index} question={faq.q}>
                            {faq.a}
                          </FaqItem>
                        ))}
                      </div>
                    </section>
                  )}
                </article>

                <aside className="space-y-8">
                  <LeadExpertCard
                    name={service!.leadExpert.name} // Use non-null assertion
                    title={service!.leadExpert.title} // Use non-null assertion
                    imageUrl={service!.leadExpert.imageUrl} // Use non-null assertion
                  >
                    {expertBio}
                  </LeadExpertCard>
                </aside>

              </div>
            </div>
          </div>

          <RelatedServices />
          <CtaSection />
        </>
      );
    };

    export default ServicePage;
    