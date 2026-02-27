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
        "Comprehensive insurance coverage to safeguard your assets and future.",
      color: "accent",
    },
    {
      icon: PiggyBank,
      title: "Retirement Planning",
      description:
        "Build a corpus that ensures a comfortable and dignified retirement.",
      color: "secondary",
    },
    {
      icon: Briefcase,
      title: "Tax Optimization",
      description:
        "Smart tax strategies to maximize your savings and investments.",
      color: "primary",
    },
    {
      icon: GraduationCap,
      title: "Education Funding",
      description:
        "Secure your children's future with dedicated education savings plans.",
      color: "accent",
    },
    {
      icon: HeartHandshake,
      title: "Estate Planning",
      description:
        "Preserve and transfer your wealth according to your wishes.",
      color: "secondary",
    },
  ];

  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    secondary: "bg-secondary/10 text-secondary",
  };

  return (
    <section id="services" className="section-padding bg-background-alt">
      <div className="container-custom">
        <SectionTitle
          subtitle="What We Offer"
          title="Our Financial Services"
          description="Comprehensive solutions designed to address your unique financial needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 ${colorClasses[service.color]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted mb-3">{service.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
