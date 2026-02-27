import { Eye, Target, ArrowRight } from "lucide-react";
import Button from "./Button";

const VisionMission = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative group">
            <div className="relative rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Vision & Mission"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>

            {/* Circular Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4 animate-slide-in">
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Our Purpose
              </span>

              <h2 className="text-4xl md:text-5xl font-bold">
                Shaping Financial
                <span className="gradient-text block">Futures Together</span>
              </h2>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                  <p className="text-muted leading-relaxed">
                    To be the most trusted partner in financial wellness,
                    empowering individuals and families to achieve lasting
                    prosperity through innovative solutions and unwavering
                    integrity.
                  </p>
                </div>
              </div>

              {/* Gradient underline */}
              <div className="mt-4 ml-16 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-muted leading-relaxed">
                    Deliver personalized financial strategies that simplify
                    complexity, maximize growth potential, and provide peace of
                    mind through every stage of life's journey.
                  </p>
                </div>
              </div>

              {/* Gradient underline */}
              <div className="mt-4 ml-16 w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button variant="primary" size="lg">
                Discover Our Story
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
