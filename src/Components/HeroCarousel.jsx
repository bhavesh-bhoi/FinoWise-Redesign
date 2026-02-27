import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW52ZXN0bWVudHN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1670249419932-a7027d9003f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW52ZXN0bWVudHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW52ZXN0bWVudHN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1670249419932-a7027d9003f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW52ZXN0bWVudHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1642052502780-8ee67e3bf930?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGludmVzdG1lbnRzfGVufDB8fDB8fHww",
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000); // slow, premium feel

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-border shadow-sm h-[260px] sm:h-[340px] lg:h-[520px]">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Financial Planning"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-accent" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
