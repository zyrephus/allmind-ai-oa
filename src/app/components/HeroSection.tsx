import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="section-wrapper no-padding-bottom">
      <div className="container">
        <div
          className="hero-wrapper flex flex-col justify-center items-center text-center"
        >
          {/* Hero Title */}
          <div className="margin-bottom-small mb-4">
            <h1 className="text-6xl font-medium leading-tight">
              Company ownership, <br /> from the future
            </h1>
          </div>
          {/* Hero Description */}
          <div className="margin-bottom-medium mb-8">
            <p className="text-lg text-gray-700">
              A next generation platform for modern founders, powered by AI.
            </p>
          </div>
          {/* REQUEST A DEMO */}
          <Link href="/login" className="inline-block border border-black text-white bg-black px-6 py-3 rounded-full min-w-[150px] hover:bg-[#333438]">
            <div className="flex justify-center">
              <span className="uppercase font-medium tracking-widest text-xs leading-5">REQUEST A DEMO</span>
            </div>
          </Link>
        </div>
        
        {/* Hero Video */}
        <div className="flex justify-center">
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
