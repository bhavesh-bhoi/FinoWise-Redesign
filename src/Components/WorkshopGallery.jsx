import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import SectionTitle from "./SectionTitle";

const WorkshopGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const workshops = [
    {
      id: 1,
      title: "Financial Planning Workshop",
      category: "Workshop",
      image:
        "https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2024",
    },
    {
      id: 2,
      title: "Investment Strategies Seminar",
      category: "Seminar",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 22, 2024",
    },
    {
      id: 3,
      title: "Retirement Planning Masterclass",
      category: "Masterclass",
      image:
        "https://images.unsplash.com/photo-1434626881859-194d67c2ad86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 5, 2024",
    },
    {
      id: 4,
      title: "Tax Optimization Workshop",
      category: "Workshop",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 12, 2024",
    },
    {
      id: 5,
      title: "Wealth Management Forum",
      category: "Forum",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 20, 2024",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="workshops"
      className="section-padding bg-background overflow-hidden"
    >
      <div className="container-custom">
        <SectionTitle
          subtitle="Join Our Events"
          title="Workshops & Gallery"
          description="Immersive learning experiences and glimpses from our recent events."
        />

        {/* Custom Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden lg:block">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden lg:block">
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          </div>

          {/* Scrollable Gallery */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {workshops.map((workshop, index) => (
              <div
                key={workshop.id}
                className="flex-none w-[350px] snap-start group cursor-pointer"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="text-accent font-semibold text-sm">
                        {workshop.category}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-1">
                        {workshop.title}
                      </h3>
                      <p className="text-white/80">{workshop.date}</p>

                      {/* Play Button */}
                      <div className="mt-4 flex items-center gap-2 text-white group/btn">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur group-hover/btn:bg-accent transition-colors">
                          <Play size={16} className="ml-0.5" />
                        </div>
                        <span>Watch Recording</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {workshops.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-accent"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => {
                setActiveIndex(index);
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: index * 350 + index * 24,
                    behavior: "smooth",
                  });
                }
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallery;
