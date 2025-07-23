import Link from 'next/link'; // Import Link for client-side navigation
import { Scale, Building2, GitBranchPlus, BarChart3, Cloud, Gavel } from 'lucide-react';
import { servicesData } from '../data/services-data'; // Import your services data

// Map icons to their Lucide React components for dynamic rendering
const iconMap: { [key: string]: React.ReactElement } = {
  Scale: <Scale size={32} className="text-blue-600 group-hover:text-white" />,
  Building2: <Building2 size={32} className="text-blue-600 group-hover:text-white" />,
  GitBranchPlus: <GitBranchPlus size={32} className="text-blue-600 group-hover:text-white" />,
  BarChart3: <BarChart3 size={32} className="text-blue-600 group-hover:text-white" />,
  Cloud: <Cloud size={32} className="text-blue-600 group-hover:text-white" />,
  Gavel: <Gavel size={32} className="text-blue-600 group-hover:text-white" />,
};

const ServicesSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wider uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A Holistic Approach to Your Financial Legacy
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            From foundational compliance to strategic growth and succession planning, we provide an integrated suite of services to protect and enhance your wealth.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => ( // Use servicesData from your data file
            <Link 
              key={service.slug} // Use slug as key for uniqueness
              href={`/services/${service.slug}`} // Dynamically link to the single service page
              className="group block" // Ensure the Link itself is a block for proper styling
            >
              <div 
                className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col" // Added h-full and flex-col for consistent card height
              >
                <div className="flex-shrink-0">
                  {iconMap[service.icon]} {/* Render icon based on mapping */}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-gray-600 group-hover:text-gray-200 flex-grow"> {/* Added flex-grow */}
                  {service.subtitle} {/* Using subtitle as description for the card */}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
