import Link from 'next/link';
import Image from 'next/image';
import { insightsData } from '../data/insights-data'; // Using a relative path

const InsightsSection = () => {
  // Find the first featured article
  const featuredArticle = insightsData.find(insight => insight.featured);

  // Get the next 4 non-featured articles, ensuring the featured one is not duplicated
  const otherArticles = insightsData
    .filter(insight => !insight.featured || (featuredArticle && insight.slug !== featuredArticle.slug))
    .slice(0, 4); // Changed to take only the first 4 other articles

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wider uppercase">Latest Insights</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Navigating the Financial Landscape
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Stay ahead with our latest analysis, expert perspectives, and strategic guidance on the financial matters that impact you most.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"> {/* Added items-stretch to make columns equal height */}
          {/* Featured Article (Left Column on large screens) */}
          {featuredArticle && (
            <Link 
              key={featuredArticle.slug} 
              href={`/insights/${featuredArticle.slug}`} 
              className="group block lg:col-span-2"
            >
              <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-blue-50 h-full"> {/* Added h-full */}
                <div className="relative w-full h-72 md:h-96"> {/* Fixed height for the image container */}
                  <Image
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 66vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-sm font-medium text-blue-700">{featuredArticle.category}</p>
                    <p className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-700">
                      {featuredArticle.title}
                    </p>
                    <p className="mt-3 text-base text-gray-600 line-clamp-3">{featuredArticle.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-10 w-10 rounded-full object-cover"
                        src={featuredArticle.author.imageUrl}
                        alt={featuredArticle.author.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{featuredArticle.author.name}</p>
                      <p className="text-sm text-gray-500">{featuredArticle.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Other Articles (Right Column on large screens) */}
          <div className="lg:col-span-1 flex flex-col justify-between h-full"> {/* Added justify-between and h-full */}
            {otherArticles.map((insight) => (
              <Link 
                key={insight.slug} 
                href={`/insights/${insight.slug}`} 
                className="group block flex-grow" 
              > {/* Removed extra '{' here */}
                <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 bg-white h-full"> {/* Added h-full */}
                  <div className="relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                    <Image
                      src={insight.imageUrl}
                      alt={insight.title}
                      fill
                      className="object-cover"
                      sizes="96px" // Fixed size for smaller images
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-blue-600">{insight.category}</p>
                    <p className="mt-1 text-base font-semibold text-gray-900 group-hover:text-blue-700 line-clamp-2">
                      {insight.title}
                    </p>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <Image
                        className="h-6 w-6 rounded-full object-cover mr-2"
                        src={insight.author.imageUrl}
                        alt={insight.author.name}
                        width={24}
                        height={24}
                      />
                      <span>{insight.author.name}</span>
                      <span className="ml-2">| {insight.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/insights" className="text-base font-semibold text-blue-600 hover:text-blue-800">
            View all insights <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
