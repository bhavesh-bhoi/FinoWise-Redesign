import { Eye, Target, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

const VisionMission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="vision-mission"
        className="section-padding bg-background-alt relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-2xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <span className="section-subtitle">OUR PURPOSE</span>
            <h2 className="section-title gradient-text-primary">
              Vision & Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="card-modern p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold font-display text-primary mb-4">
                  Vision
                </h3>
                <p className="text-xl text-muted leading-relaxed mb-6">
                  Empowering people to live and experience{" "}
                  <span className="highlight-peach font-bold">
                    Happy and Freedom Life
                  </span>
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Sparkles size={16} className="animate-pulse" />
                  <span className="text-sm font-medium">
                    Inspiring since 2022
                  </span>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="card-modern p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold font-display text-accent mb-4">
                  Mission
                </h3>
                <p className="text-lg text-muted leading-relaxed">
                  We are on a Mission to{" "}
                  <span className="font-bold text-accent">
                    Educate, Inspire and Empower
                  </span>{" "}
                  People to Live and Experience a Happy & Freedom Life by
                  Empowering Them to Get the{" "}
                  <span className="highlight-mint font-bold">
                    right Amount of Money at the Right Point of Time
                  </span>{" "}
                  Through Our Unique Programs, Products, Process, Strategies,
                  Services and Solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Workshop CTA */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-12 rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-20 -mb-20"></div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-4">
                  Limited Time Offer
                </span>
                <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  Financial Transformation Workshop
                </h3>
                <p className="text-xl text-white/90 mb-8">
                  Do you want to get your{" "}
                  <span className="font-bold underline decoration-2 decoration-accent-light">
                    Personal Freedom Free WHealth Check Report?
                  </span>
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent-light transition-all hover:shadow-xl hover:shadow-accent/30 group cursor-pointer"
                >
                  <span>SCHEDULE A FREE CONSULTATION</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
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

export default VisionMission;
