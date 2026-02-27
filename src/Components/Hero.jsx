import Button from "./Button";
import { TrendingUp, Award, Users, ChevronDown } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: TrendingUp, value: "₹500Cr+", label: "Achieve Financial Freedom" },
    { icon: Award, value: "15+ Years", label: "Experience" },
    { icon: Users, value: "10K+", label: "Happy Clients" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Floating Blob */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-blob w-96 h-96 bg-primary/20 left-1/4 top-1/4 animate-float" />
        <div className="floating-blob w-80 h-80 bg-accent/20 right-1/4 bottom-1/4 animate-float animation-delay-200" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Welcome to Financial Freedom
              </span>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your Future,
                <br />
                <span className="gradient-text">Our Expertise</span>
              </h1>

              <p className="text-xl text-muted leading-relaxed max-w-lg">
                Empowering your financial journey with personalized strategies,
                expert guidance, and a commitment to your success.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Start Your Journey
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="font-bold text-2xl text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Financial Planning"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-accent" size={20} />
                </div>
                <div>
                  <div className="font-semibold">Market Growth</div>
                  <div className="text-accent font-bold">+23.5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted">
          <span className="text-sm">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
