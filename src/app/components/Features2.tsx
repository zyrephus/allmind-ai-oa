"use client"; // Marking this component as a client component

import React, { useEffect, useRef, useState } from 'react'; // Import useEffect, useRef, and useState
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Features2 = () => {
  const features = {
    "Fundraising": "Model rounds, issue SAFEs, and track the whole process all in one place.",
    "Cap Tables": "Effortlessly track and organize your cap table, providing a transparent view of your company's ownership.",
    "Planning and Forecasting": "Powerful tools to model your hiring needs with visualizations that streamline your decision making.",
    "Issue Equity": "Create and manage multiple option plans and issue option grants with predictive workflows.",
    "Automated Signing": "Setup approvals and templates in a single click. Automatic reminders for outstanding actions to keep everything moving.",
    "Data Rooms": "No more scattered documents in inboxes and siloed information systems. All your documents in one place, found instantly when you need them."
  };

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
    <section className="section-wrapper" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 100 }} // Start with opacity 0 and translate down
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and translate to original position if visible
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          Manage everything in one place with simple, straightforward tools augmented with AI
        </motion.h2>

        <div className="h-px my-16" style={{ backgroundColor: 'var(--color--fills--divider-light)' }}></div>

        <div className="grid grid-cols-3 gap-10 auto-rows-fr">
          {Object.entries(features).map(([featureName, featureDescription], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate down
              animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and translate to original position if visible
              transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }} // Duration of the animation with a delay based on index
            >
              <h6 className="mb-3">{featureName}</h6>
              <p style={{ fontSize: "var(--font-size-desktop--small)" }}>{featureDescription}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features2;