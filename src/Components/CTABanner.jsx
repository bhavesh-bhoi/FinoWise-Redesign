import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

const CTABanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-primary via-primary-dark to-secondary">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow animation-delay-200"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            {/* Sparkle Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
                <Sparkles
                  size={48}
                  className="relative text-accent animate-pulse"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
              Do you want to get your{" "}
              <span className="text-accent">
                Personal Freedom Free WHealth Check Report?
              </span>
            </h2>

            <p className="text-xl text-white/80 mb-8">
              Kickstart your financial success with our{" "}
              <span className="font-bold text-accent-light">
                expert consultation.
              </span>
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent-light transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 group cursor-pointer"
            >
              <span>Schedule a free consultation</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CTABanner;
