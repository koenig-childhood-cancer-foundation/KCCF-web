'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

const partners = [
  { name: "Madison Square Garden", logo: "https://thekccf.org/wp-content/uploads/2024/05/madison-square-garden-logo-png-transparent-300x300.png" },
  { name: "Meta", logo: "https://thekccf.org/wp-content/uploads/2024/05/Meta-300x162.png" },
  { name: "Bailyn", logo: "https://thekccf.org/wp-content/uploads/2025/05/logo-bailyn-r2bmd6rq0m33cbpwuamknr8s4mzc6ojg5d9pvr59wg-300x44.png" },
  { name: "UBS", logo: "https://thekccf.org/wp-content/uploads/2025/05/UBS_Logo-300x110.png" },
  { name: "Bank of America", logo: "https://thekccf.org/wp-content/uploads/2025/05/Bank_of_America_logo.svg_-300x30.png" },
  { name: "Polo Reef", logo: "https://thekccf.org/wp-content/uploads/2025/01/Polo-Reef1-300x162.png" }
];

export default function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Desktop Carousel - Single Line */}
      <div className="hidden md:block">
        <div className="flex justify-center items-center space-x-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex-shrink-0 transition-all duration-1000 ease-in-out ${
                index === currentIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-40 scale-90'
              }`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 min-w-[200px]">
                <div className="flex items-center justify-center h-20 mb-3">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={80}
                    className="max-h-14 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-violet-600 dark:bg-saffron-400'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Grid Layout */}
      <div className="md:hidden pb-4">
        <div className="grid grid-cols-2 gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-center h-16 mb-2">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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
    </div>
  );
}
