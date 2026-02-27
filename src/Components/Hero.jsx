import Button from "./Button";
import HeroCarousel from "./HeroCarousel";
import { TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="mb-6">
              <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                Trusted Financial Advisory
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-primary">
              Strategic Wealth Planning
              <span className="block text-muted-dark mt-2">
                Built for Long-Term Confidence
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted leading-relaxed">
              We design disciplined, goal-oriented financial strategies that
              help individuals and families build, preserve, and grow wealth
              with clarity and confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Schedule Consultation
              </Button>

              <Button variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>

            {/* Subtle credibility line */}
            <div className="mt-12 flex items-center gap-3 text-sm text-muted">
              <TrendingUp size={16} className="text-accent" />
              <span>Serving clients across India for 15+ years</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
