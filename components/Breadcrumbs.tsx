import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-400 mr-2" />}
              <Link
                href={item.href}
                className={`font-medium ${
                  index === items.length - 1
                    ? 'text-gray-500 pointer-events-none'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;