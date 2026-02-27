import { useEffect, useRef, useState } from "react";
import sebiLogo from "../assets/images/SEBI.png";
import amfiLogo from "../assets/images/AMFI.svg";
import nseLogo from "../assets/images/NSE.svg";
import rbiLogo from "../assets/images/RBI.png";
import irdaiLogo from "../assets/images/IRDAI.svg";
import pfrdaLogo from "../assets/images/PFRDA.png";

const TrustBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  // Real company logo images
  const logos = [
    { name: "SEBI", imageUrl: sebiLogo, width: 250 },
    { name: "AMFI", imageUrl: amfiLogo, width: 250 },
    { name: "NSE", imageUrl: nseLogo, width: 250 },
    { name: "RBI", imageUrl: rbiLogo, width: 250 },
    { name: "IRDAI", imageUrl: irdaiLogo, width: 250 },
    { name: "PFRDA", imageUrl: pfrdaLogo, width: 250 },
  ];

  // Triple the logos for seamless infinite scroll
  const extendedLogos = [...logos, ...logos, ...logos];

  // Handle image errors with fallback
  const handleImageError = (e, logoName) => {
    console.log(`Failed to load image for ${logoName}`);
    e.target.style.display = "none";
    const parent = e.target.parentElement;
    const fallback = document.createElement("div");
    fallback.className =
      "flex items-center justify-center h-12 px-6 bg-gray-100 rounded-lg";
    fallback.innerHTML = `<span class="text-lg font-semibold text-gray-700">${logoName}</span>`;
    parent.appendChild(fallback);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-custom mb-8">
        <p className="text-center text-muted text-sm uppercase tracking-wider font-medium">
          Trusted by Regulators & Partners
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Masks - for smooth fade in/out */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        {/* Scrolling Content */}
        <div
          ref={scrollRef}
          className="flex gap-24 md:gap-32 items-center animate-infinite-scroll"
          style={{
            animationPlayState: isHovered ? "paused" : "running",
            width: "fit-content",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {extendedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-500 cursor-pointer group"
            >
              <img
                src={logo.imageUrl}
                alt={`${logo.name} logo`}
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                style={{ maxWidth: `${logo.width}px` }}
                onError={(e) => handleImageError(e, logo.name)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS animation */}
      <style>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-infinite-scroll {
          animation: infiniteScroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default TrustBar;
