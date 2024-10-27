"use client"; // Marking this component as a client component

import { motion } from "framer-motion"; // Import motion from framer-motion
import { useEffect, useRef, useState } from "react"; // Import useEffect, useRef, and useState
import Manage from "./Manage";
import Copilot from "./Copilot";
import Supercharge from "./Supercharge";
import MakeDecisions from "./MakeDecisions";

const Features = () => {
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
      <Manage />
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate down
        animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and translate to original position if visible
        transition={{ duration: 0.5, delay: 0.1 }} // Duration of the animation with a slight delay
      >
        <Copilot />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate down
        animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and translate to original position if visible
        transition={{ duration: 0.5, delay: 0.2 }} // Duration of the animation with a slight delay
      >
        <Supercharge />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate down
        animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and translate to original position if visible
        transition={{ duration: 0.5, delay: 0.3 }} // Duration of the animation with a slight delay
      >
        <MakeDecisions />
      </motion.div>
    </section>
  );
};

export default Features;