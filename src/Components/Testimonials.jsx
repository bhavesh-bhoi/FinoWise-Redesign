import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Business Owner",
      content:
        "Finowise transformed my financial perspective. Their strategic approach to wealth management helped me grow my portfolio by 40% in just two years.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Tech Professional",
      content:
        "The team at Finowise made retirement planning so simple and effective. I now have a clear roadmap to achieve my financial goals.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108777-8efde4d1198c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Doctor",
      content:
        "Exceptional service and expert advice. They helped me navigate complex investment options and build a diversified portfolio.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="section-padding bg-[#0A1922] text-white relative overflow-hidden">
      {/* Subtle textured overlay for depth - not too perfect */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 0%, white 1px, transparent 1px), 
                           radial-gradient(circle at 75% 100%, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Organic gradient blobs - intentionally imperfect positioning */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-40 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          {/* Quote icon with handcrafted feel */}
          <div className="relative inline-block">
            <Quote size={56} className="text-accent/90 mx-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-accent/5 rounded-full blur-xl"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our Clients Say
          </h2>

          {/* Hand-drawn style underline */}
          <div className="flex justify-center mt-2">
            <div className="w-200 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 font-light">
            Real stories from real people who trusted us with their financial
            future
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card*/}
          <div
            className="bg-[#0F1E2A] rounded-3xl p-8 md:p-12 min-h-[420px] flex items-center
                        shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]
                        border border-white/5 hover:border-white/10 transition-colors duration-700"
          >
            <div className="w-full">
              <div className="flex flex-col items-center text-center">
                {/* Rating with subtle glow */}
                <div className="flex gap-1.5 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < testimonials[currentIndex].rating
                          ? "text-accent fill-accent drop-shadow-glow"
                          : "text-gray-700"
                      }
                    />
                  ))}
                </div>

                {/* Content with natural spacing */}
                <div className="min-h-[140px] flex items-center justify-center px-4">
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light max-w-2xl">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>

                {/* Author section with organic spacing */}
                <div className="flex items-center gap-4 mt-10 pt-4 border-t border-white/5">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/30 ring-offset-2 ring-offset-[#0F1E2A]"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-[#0F1E2A]"></div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation with organic feel */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="group relative w-12 h-12 rounded-full bg-white/5 hover:bg-accent/20 
                       border border-white/10 hover:border-accent/30 
                       transition-all duration-500 flex items-center justify-center
                       hover:scale-110 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft
                size={20}
                className="text-gray-400 group-hover:text-accent group-hover:-translate-x-0.5 transition-all"
              />
              {/* Subtle ripple effect on hover */}
              <span className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/5 scale-0 group-hover:scale-150 transition-all duration-700"></span>
            </button>

            {/* Dots with organic spacing */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative transition-all duration-700 ease-out
                            ${
                              index === currentIndex
                                ? "w-10 h-2.5 bg-accent"
                                : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                            } rounded-full`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {/* Active indicator glow */}
                  {index === currentIndex && (
                    <span className="absolute inset-0 rounded-full bg-accent/20 blur-sm -z-10"></span>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="group relative w-12 h-12 rounded-full bg-white/5 hover:bg-accent/20 
                       border border-white/10 hover:border-accent/30 
                       transition-all duration-500 flex items-center justify-center
                       active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight
                size={20}
                className="text-gray-400 group-hover:text-accent group-hover:translate-x-0.5 transition-all"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
