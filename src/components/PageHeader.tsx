'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSlideshow } from '@/contexts/SlideshowContext';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImages?: string[];
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImages = [
    "/images/MetaLeadershipMakingfitBags-scaled.jpg",
    "/images/bankofamerica-scaled.jpeg",
    "/images/AlfacGiftMakingEvent-scaled.jpeg",
    "/images/ElanaOliviaGiftBags-scaled.jpg",
    "/images/MetaCSGiftBagEvent-scaled.jpg",
    "/images/giftbagevent2-scaled.jpeg",
    "/images/IMG_6861-scaled.jpeg",
    "/images/IMG_6703-scaled.jpeg",
    "/images/IMG_5046-scaled.jpg",
    "/images/IMG_2841-scaled.jpg",
    "/images/IMG_1850-scaled.jpg",
    "/images/IMG_0875-scaled.jpeg"
  ]
}: PageHeaderProps) {
  // Use a deterministic order to avoid hydration mismatches
  const [shuffledImages] = useState(() => {
    // Use a simple rotation instead of random shuffling to avoid hydration issues
    const rotated = [...backgroundImages];
    // Rotate the array by 3 positions to create some variety without randomness
    for (let i = 0; i < 3; i++) {
      const last = rotated.pop();
      if (last) rotated.unshift(last);
    }
    return rotated;
  });

  const { currentIndex: sharedIndex, setCurrentIndex: setSharedIndex } = useSlideshow();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(sharedIndex % backgroundImages.length);

  const pathname = usePathname();

  // Keep local and shared indexes in sync
  useEffect(() => {
    setCurrentImageIndex(sharedIndex % shuffledImages.length);
  }, [sharedIndex, shuffledImages.length]);

  // One-time randomize starting slide on client after mount (no SSR mismatch)
  useEffect(() => {
    // Only randomize if the shared index is still at its initial value
    if (sharedIndex === 0 && shuffledImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * shuffledImages.length);
      setCurrentImageIndex(randomIndex);
      // Defer provider update to the next tick to avoid cross-render update warning
      setTimeout(() => setSharedIndex(randomIndex), 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // On client-side navigation, transition once from the last page's image to the next image
  const hasMountedRef = useRef(false);
  useEffect(() => {
    if (hasMountedRef.current) {
      setCurrentImageIndex((prevIndex) => {
        const next = prevIndex === shuffledImages.length - 1 ? 0 : prevIndex + 1;
        // Defer provider update to avoid "update while rendering another component" warning during route change
        setTimeout(() => setSharedIndex(next), 0);
        return next;
      });
    } else {
      hasMountedRef.current = true;
    }
  }, [pathname, shuffledImages.length, setSharedIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const next = prevIndex === shuffledImages.length - 1 ? 0 : prevIndex + 1;
        // Defer provider update to avoid cross-render update warning under concurrent rendering
        setTimeout(() => setSharedIndex(next), 0);
        return next;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [shuffledImages.length, pathname, setSharedIndex]);

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background Images Slideshow */}
      <div className="absolute inset-0">
        {shuffledImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentImageIndex ? 'opacity-70' : 'opacity-0'
              }`}
          >
            <Image
              src={image}
              alt={`Crazy Socks Event ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority={index === 0}
            />
            {/* Gradient overlay for each image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Additional Background Pattern */}
      <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/70"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-violet-600 dark:text-saffron-400 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-black dark:text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {subtitle}
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 dark:from-gray-500 dark:via-gray-400 dark:to-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>


    </section>
  );
}
