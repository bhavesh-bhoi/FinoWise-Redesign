import { ArrowRight, Calendar, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const registrationData = [
    { label: "ARN", value: "263895", icon: Shield },
    { label: "Registered", value: "11/07/2022", icon: Calendar },
    { label: "Valid Till", value: "08/02/2026", icon: TrendingUp },
  ];

  return (
    <>
      <section className="relative min-h-fit flex items-center pt-32 sm:pt-28 md:pt-38 pb-6 sm:pb-8 overflow-hidden bg-background-alt">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/5 rounded-full mb-3 sm:mb-4 animate-fade-in">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-medium text-accent">
                AMFI Registered Mutual Fund Distributor
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display mb-6 sm:mb-3 md:mb-6 leading-tight">
              Journey <span className="gradient-text-accent">From Savings</span>
              <br />
              <span className="relative inline-block mt-1">
                To Investments
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-50 sm:w-20 md:w-100 h-1 bg-gradient-to-r from-accent to-secondary rounded-full"></span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto mb-4 sm:mb-5 px-4">
              <span className="bg-accent/5 px-2 py-1 rounded-md font-medium text-accent">
                We ensure
              </span>{" "}
              that our clients get the right amount of money available at the
              right time
            </p>

            {/* CTA Button */}
            <div className="mb-5 sm:mb-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-accent-light transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 group cursor-pointer"
              >
                <span>Schedule a Free Consultation</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            {/* Registration Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto px-4">
              {registrationData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl sm:rounded-2xl p-3 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={14} sm:size={16} className="text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-muted">{item.label}</div>
                        <div className="text-sm font-bold text-primary">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center mt-8">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  SEBI Registered
                </span>
                <span className="w-px h-3 bg-gray-200"></span>
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  15+ Years Experience
                </span>
                <span className="w-px h-3 bg-gray-200 hidden sm:block"></span>
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  10K+ Clients
                </span>
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

export default Hero;
