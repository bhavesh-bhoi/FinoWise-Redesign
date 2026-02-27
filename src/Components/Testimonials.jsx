import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Bhaskar Shetty",
      role: "Global Key Account Manager, Evolink India Ltd.",
      content:
        "Great support to understand & be really financially independent in my/out life by Swamy & his team. I really thank Swamy & his Team from both, of my heart to make & plan for my family to be financially independent.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
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
      name: "Rajesh Kumar",
      role: "Business Owner",
      content:
        "Exceptional service and expert advice. They helped me navigate complex investment options and build a diversified portfolio.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="section-padding bg-background-alt relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 rounded-full mb-3">
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            <span className="text-xs sm:text-sm font-medium text-accent">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-2">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto">
            Real stories from people who trusted us with their financial future
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl relative">
            {/* Quote Icon */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <Quote className="text-white" size={16} sm:size={18} />
            </div>

            <div className="text-center">
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    sm:size={18}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-4 ring-accent/10"
                />
                <div className="text-left">
                  <h4 className="font-bold text-sm sm:text-base text-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <button
              onClick={handlePrevious}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft
                size={16}
                sm:size={18}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-accent rounded-full"
                      : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 rounded-full hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all group"
              aria-label="Next testimonial"
            >
              <ChevronRight
                size={16}
                sm:size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted hover:text-accent transition-colors"
            >
              {isAutoPlaying ? "⏸️ Pause" : "▶️ Resume"} Auto-play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
