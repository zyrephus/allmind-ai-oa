import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TYPING_SPEED = 50;  // Typing speed (ms per character)
const DELETING_SPEED = 20; // Deleting speed (ms per character)
const PAUSE_DURATION = 1000; // Pause before deleting or moving to next string (ms)

const stringsToType = [
  "Will I have enough stock options for my hiring plan?",
  "How much would I get if I sold for $10 billion?",
  "What will my ownership be after my SAFEs convert?",
];

const Copilot = () => {
  const [text, setText] = useState(""); // Current text being typed
  const [isDeleting, setIsDeleting] = useState(false); // Track if we are deleting
  const [loopIndex, setLoopIndex] = useState(0); // Index of current string
  const [cursorVisible, setCursorVisible] = useState(true); // Control cursor blink
  const [hasStarted, setHasStarted] = useState(false); // Control when animation starts

  const copilotRef = useRef<HTMLDivElement>(null); // Ref for the container

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true); // Start the animation when the component is in view
            observer.disconnect(); // Stop observing once the animation starts
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the component is visible
      }
    );

    if (copilotRef.current) {
      observer.observe(copilotRef.current);
    }

    return () => {
      if (copilotRef.current) observer.unobserve(copilotRef.current);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return; // Only start typing if the component is in view

    const handleTyping = () => {
      const currentString = stringsToType[loopIndex % stringsToType.length]; // Loop through strings
      if (isDeleting) {
        // Delete text
        if (text.length > 0) {
          setText((prev) => prev.substring(0, prev.length - 1));
        } else {
          setIsDeleting(false); // Finished deleting, start typing next string
          setLoopIndex((prev) => prev + 1);
        }
      } else {
        // Type text
        if (text.length < currentString.length) {
          setText((prev) => currentString.substring(0, prev.length + 1));
        } else {
          // Pause once the string is fully typed
          setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopIndex, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const cursorBlinkTimeout = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Cursor blink interval

    return () => clearInterval(cursorBlinkTimeout);
  }, [hasStarted]);

  return (
    <>
      {/* Co-Pilot */}
      <div ref={copilotRef} className="container centered card-sand flex flex-col items-center">
        <div className="co-pilot-animation-wrap w-container flex flex-col items-center">
          <Image
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e05_temp_AI.png"
            alt="Co-Pilot"
            width={120}
            height={120}
          />

          {/* Typing animation on top of form.png */}
          <div className="relative">
            <Image src="/assets/form.png" alt="Form" width={1120} height={186} />
            {/* Animated typing text */}
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
              <motion.div className="text-lg font-sans font-medium">
                {text}
                <span
                  className={`inline-block w-[0.5ch] ${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  |
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="margin-bottom-small">
          <h5>Get it done with your AI Co-pilot</h5>
        </div>

        <p className="centered-subheading">
          Breeze through essential tasks, pull critical information, and <br />
          visualize your ownership data instantly.
        </p>
      </div>
    </>
  );
};

export default Copilot;
