import { ArrowRight, Sparkles } from "lucide-react";
import Button from "./Button";

const CTABanner = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-primary">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Sparkle Icon */}
          <div className="flex justify-center mb-6">
            <Sparkles size={40} className="text-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take Control of Your Financial Future?
          </h2>

          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Join hundreds of satisfied clients who have achieved their financial
            goals with our expert guidance.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="accent" size="lg" className="group">
              Schedule Free Consultation
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              View Pricing
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              <span>30-minute strategy session</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              <span>100% confidential</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
