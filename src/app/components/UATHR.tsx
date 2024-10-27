"use client"; // Marking this component as a client component

import React, { useEffect, useRef, useState } from 'react'; // Import useEffect, useRef, and useState
import { motion } from 'framer-motion'; // Import motion from framer-motion

const UATHR = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const ref = useRef<HTMLDivElement | null>(null); // Ref for the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when the component is in view
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
    <section className="section-wrapper">
      <motion.div
        ref={ref} // Attach the ref to the motion div
        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate down
        animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and translate to original position if visible
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <div className="container">
          <h2 className="mb-3">Up and to the right</h2>
          <p className="w-2/5">
            Support at every stage, from your garage to a 
            thriving public company. Seamless assistance
            throughout your journey.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default UATHR;