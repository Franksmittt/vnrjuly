// components/Hero.tsx
'use client'; // This directive is necessary as the component uses client-side React hooks (useState, useEffect)

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Use Next.js Image component for optimized images
import Link from 'next/link';   // Use Next.js Link component for optimized client-side navigation
import { ShieldCheck } from 'lucide-react'; // Use lucide-react for the icon

// Import the slides data from the newly created data file
import { slidesData } from '@/data/hero-slides'; // Assuming '@/data' alias is configured in your Next.js project

const Hero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // useEffect hook to manage the autoplay functionality of the slider.
  // It sets up an interval to change slides automatically unless the user is hovering over the slider.
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined; // Explicitly type 'interval' to fix TypeScript warning
    if (!isHovered) {
      // Set an interval to advance to the next slide every 5 seconds (5000 milliseconds).
      interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) =>
          // If it's the last slide, go back to the first slide (0), otherwise go to the next slide.
          prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    // Cleanup function: Clear the interval when the component unmounts or when isHovered changes.
    return () => {
      if (interval) { // Ensure interval exists before clearing
        clearInterval(interval);
      }
    };
  }, [isHovered]); // Re-run effect only when isHovered state changes

  // Function to navigate to the next slide.
  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      // If it's the last slide, loop back to the first, otherwise increment.
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to navigate to the previous slide.
  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      // If it's the first slide, loop to the last, otherwise decrement.
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  // Get the data for the currently active slide.
  const currentSlide = slidesData[currentSlideIndex];

  return (
    <section 
      // Main container for the hero section.
      // Adjusted height to fill the remaining viewport space below the header (assuming header is h-20).
      // Uses Tailwind CSS for responsive height, text color, flex properties, and overflow hiding.
      className="relative text-white min-h-[calc(100vh-theme(spacing.20))] flex items-center overflow-hidden"
      // Event handlers to pause/resume autoplay on mouse hover.
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      {/* Next.js Image component is used for automatic image optimization (resizing, formats, lazy loading). */}
      <Image
        src={currentSlide.imageUrl} // Dynamic image source from current slide data
        alt={currentSlide.altText} // Dynamic alt text for accessibility and SEO
        fill // 'fill' prop makes the image cover the entire parent element
        priority={currentSlideIndex === 0} // Prioritize loading only the first slide's image for LCP optimization
        sizes="100vw" // Defines image sizes for responsive loading across different viewports
        // Transition for smooth image changes between slides.
        className="object-cover opacity-30 transition-opacity duration-1000 ease-in-out" 
      />
      
      {/* Dark Overlay for Text Readability */}
      {/* Creates a semi-transparent dark gradient overlay for better text contrast over the background image. */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60"></div>

      {/* Content Container */}
      {/* Holds all the text, CTA button, and accreditation badge. */}
      <div className="relative container mx-auto px-6 z-10">
        {/* Max width for content, and transitions for smooth slide content changes. */}
        <div className="max-w-3xl transition-all duration-1000 ease-in-out transform opacity-100 translate-y-0">
          {/* Main Headline */}
          {/* Dynamically splits the headline by '. ' to allow for line breaks, improving readability. */}
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            {currentSlide.headline.split('. ').map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < currentSlide.headline.split('. ').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          {/* Subheading/Description */}
          <p className="mt-6 max-w-xl text-lg text-gray-200">
            {currentSlide.description}
          </p>

          {/* Call to Action Button */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Next.js Link component for client-side navigation, enhancing performance. */}
            <Link
              href={currentSlide.ctaHref} // Dynamic CTA link
              className="inline-block rounded-md bg-blue-600 px-8 py-3 text-center font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {currentSlide.ctaText} {/* Dynamic CTA text */}
            </Link>
          </div>
          
          {/* Accreditation/Trust Badge */}
          <div className="mt-8 flex items-center gap-2 text-sm text-gray-300">
            {/* Lucide React ShieldCheck icon for visual accreditation. */}
            <ShieldCheck size={16} /> 
            <span>{currentSlide.accreditation}</span> {/* Dynamic accreditation text */}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* Button for navigating to the previous slide. */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white z-20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide" // Accessible label for screen readers
      >
        {/* SVG icon for left arrow. */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      {/* Button for navigating to the next slide. */}
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white z-20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide" // Accessible label for screen readers
      >
        {/* SVG icon for right arrow. */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>

      {/* Slide Indicators (Dots) */}
      {/* Displays a row of dots at the bottom, indicating the current slide and allowing direct navigation. */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index)} // Sets the current slide to the clicked dot's index
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlideIndex === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70' // Active dot is wider and solid white
            }`}
            aria-label={`Go to slide ${index + 1}`} // Accessible label for screen readers
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
