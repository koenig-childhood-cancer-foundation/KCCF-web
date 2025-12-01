'use client'

import Image from 'next/image';

const partners = [
  { name: "Madison Square Garden", logo: "/images/madison-square-garden-logo-png-transparent-300x300.png" },
  { name: "Meta", logo: "/images/Meta-300x162.png" },
  { name: "Bailyn", logo: "/images/logo-bailyn-r2bmd6rq0m33cbpwuamknr8s4mzc6ojg5d9pvr59wg-300x44.png" },
  { name: "UBS", logo: "/images/UBS_Logo-300x110.png" },
  { name: "Bank of America", logo: "/images/Bank_of_America_logo.svg_-300x30.png" },
  { name: "Polo Reef", logo: "/images/Polo-Reef1-300x162.png" }
];

export default function PartnersCarousel() {
  return (
    <div className="pb-4">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-center h-16 mb-2">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain filter grayscale"
                loading="lazy"
              />
            </div>
            <p className="text-center text-xs text-gray-600 dark:text-gray-300 font-medium">
              {partner.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
