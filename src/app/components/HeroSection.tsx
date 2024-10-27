"use client"; // Marking this component as a client component

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSlideVisible, setIsSlideVisible] = useState(false);

  useEffect(() => {
    // Set scroll position to the top
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsSlideVisible(true); // Trigger slide animation
    }, 100); // Delay to allow for the fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-wrapper no-padding-bottom">
      <div className="container">
        <div
          className={`hero-wrapper flex flex-col justify-center items-center text-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Hero Title */}
          <div className={`margin-bottom-small mb-4 transition-transform duration-500 ${isSlideVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl font-medium leading-tight">
              Company ownership, <br /> from the future
            </h1>
          </div>
          {/* Hero Description */}
          <div className={`margin-bottom-medium mb-8 transition-transform duration-500 ${isSlideVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg text-gray-700">
              A next generation platform for modern founders, powered by AI.
            </p>
          </div>
          {/* REQUEST A DEMO */}
          <Link href="/login" className={`inline-block border border-black text-white bg-black px-6 py-3 rounded-full min-w-[150px] hover:bg-[#333438] transition-transform duration-500 ${isSlideVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center">
              <span className="uppercase font-medium tracking-widest text-xs leading-5">REQUEST A DEMO</span>
            </div>
          </Link>
        </div>
        
        {/* Hero Video */}
        <div className={`flex justify-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <video
            playsInline
            autoPlay
            muted
            loop
            style={{
              clipPath: 'inset(1px 1px)',
              objectFit: 'contain',
              overflow: 'clip',
              width: '70%'
            }}
          >
            <source
              src="https://storage.googleapis.com/mantle-website-assets/videos/SpinningCircles.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}