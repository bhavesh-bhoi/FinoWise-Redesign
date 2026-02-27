import { Sparkles, Target, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "FIN - Financial Intelligence",
      description:
        "Cutting-edge analytics and market insights to make informed decisions.",
      color: "primary",
    },
    {
      icon: Target,
      title: "O - Optimized Strategy",
      description:
        "Tailored investment approaches that align with your unique goals.",
      color: "accent",
    },
    {
      icon: Users,
      title: "WISE - Wealth Intelligence & Strategic Excellence",
      description:
        "Comprehensive wealth management with a focus on long-term growth.",
      color: "primary",
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
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Why Choose Us"
          title="FIN O WISE Philosophy"
          description="We combine financial intelligence with optimized strategies to deliver wealth intelligence and strategic excellence."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color];
            return (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 card-hover group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={colors.text} size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated underline */}
                <div className="mt-6 w-12 h-1 bg-accent/20 rounded-full group-hover:w-20 transition-all"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
