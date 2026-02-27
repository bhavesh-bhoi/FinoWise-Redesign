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
    <section className="section-padding bg-background-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <Quote size={60} className="text-accent/30 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real stories from real people who trusted us with their financial
            future
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < testimonials[currentIndex].rating
                        ? "text-accent fill-accent"
                        : "text-gray-600"
                    }
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                />
                <div className="text-left">
                  <h4 className="font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors group"
              aria-label="Next testimonial"
            >
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
