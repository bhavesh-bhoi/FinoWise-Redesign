import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar, Users } from "lucide-react";
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
      attendees: 45,
    },
    {
      id: 2,
      title: "Investment Strategies Seminar",
      category: "Seminar",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 22, 2024",
      attendees: 32,
    },
    {
      id: 3,
      title: "Retirement Planning Masterclass",
      category: "Masterclass",
      image:
        "https://images.unsplash.com/photo-1434626881859-194d67c2ad86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 5, 2024",
      attendees: 28,
    },
    {
      id: 4,
      title: "Tax Optimization Workshop",
      category: "Workshop",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 12, 2024",
      attendees: 38,
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const newScrollLeft =
        scrollRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });

      // Update active index
      const newIndex = Math.floor(newScrollLeft / scrollAmount);
      setActiveIndex(Math.min(Math.max(newIndex, 0), workshops.length - 1));
    }
  };

  return (
    <section
      id="workshops"
      className="section-padding bg-white overflow-hidden"
    >
      <div className="container-custom">
        <SectionTitle
          subtitle="Join Us"
          title="Workshops & Events"
          description="Immersive learning experiences to enhance your financial knowledge."
        />

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={20} className="text-primary" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={activeIndex === workshops.length - 1}
          >
            <ChevronRight size={20} className="text-primary" />
          </button>

          {/* Scrollable Gallery */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {workshops.map((workshop, index) => (
              <div
                key={workshop.id}
                className="flex-none w-[280px] sm:w-[320px] snap-start group"
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                      <span className="text-accent text-xs sm:text-sm font-semibold">
                        {workshop.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold mt-1 mb-2">
                        {workshop.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {workshop.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={12} />
                          {workshop.attendees}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {workshops.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-accent rounded-full"
                  : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 rounded-full hover:bg-gray-400"
              }`}
              onClick={() => {
                setActiveIndex(index);
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: index * 320,
                    behavior: "smooth",
                  });
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallery;
