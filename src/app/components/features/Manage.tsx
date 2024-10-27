"use client"; // Marking this component as a client component

import React, { useEffect, useState, useRef } from "react"; // Added useRef

export default function Manage() {
  const [isVisible, setIsVisible] = useState(false); // State for visibility
  const [isSlideVisible, setIsSlideVisible] = useState(false); // State for slide visibility
  const ref = useRef<HTMLDivElement | null>(null); // Ref for the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Wait for a specified delay before triggering animations
          const delay = 300; // Delay in milliseconds
          setTimeout(() => {
            setIsVisible(true);
            setIsSlideVisible(true); // Trigger slide animation
          }, delay);
          observer.disconnect(); // Stop observing after the component is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current); // Start observing the component
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Clean up the observer
      }
    };
  }, []);

  return (
    <>
      <div
        ref={ref} // Attach the ref to the component
        className={`container centered transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} // Added transition for fade-in
      >
        {/* Manage like a pro */}
        <div className={`mb-6 transition-transform duration-500 ${isSlideVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> {/* Added transition for slide */}
          <h2 className="text-5xl font-medium leading-tight">
            Manage like a pro
          </h2>
        </div>
        {/* Description */}
        <p className={`text-base centered-subheading transition-transform duration-500 ${isSlideVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> {/* Added transition for slide */}
          Take control of your ownership with a next-generation platform <br />
          that lets you track, issue, and manage ownership. Be your own <br />
          expert and scale back on your professional fees.
        </p>
      </div>
    </>
  );
}