import {
  TrendingUp,
  Shield,
  PiggyBank,
  Briefcase,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Investment Planning",
      description:
        "Strategic portfolio management tailored to your risk appetite and financial goals.",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Wealth Protection",
      description:
        "Comprehensive insurance and risk management solutions for peace of mind.",
      color: "accent",
    },
    {
      icon: PiggyBank,
      title: "Retirement Planning",
      description:
        "Build a corpus that ensures a comfortable and dignified retirement.",
      color: "primary",
    },
    {
      icon: Briefcase,
      title: "Tax Optimization",
      description:
        "Smart tax planning strategies to maximize your savings and investments.",
      color: "accent",
    },
    {
      icon: GraduationCap,
      title: "Education Funding",
      description:
        "Secure your children's future with dedicated education savings plans.",
      color: "primary",
    },
    {
      icon: HeartHandshake,
      title: "Estate Planning",
      description:
        "Ensure your wealth is preserved and transferred according to your wishes.",
      color: "accent",
    },
  ];

  const colorClasses = {
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
    },
    accent: {
      bg: "bg-accent/10",
      text: "text-accent",
    },
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Expertise"
          title="Financial Blueprints for Every Stage"
          description="Comprehensive solutions designed to address your unique financial needs and aspirations."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Border Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
                </div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={colors.text} size={32} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
