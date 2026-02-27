import {
  ArrowRight,
  Compass,
  Zap,
  Heart,
  Shield,
  Globe,
  Users,
  Activity,
  Sparkles,
} from "lucide-react";

const USP = () => {
  const uspItems = [
    {
      icon: Compass,
      title: "Basic Freedom Blueprint",
      description:
        "Well begun is half done. To achieve anything you need to first start. BFB provides you the required thrust to shape your financial future.",
      highlight: "required thrust",
      color: "primary",
    },
    {
      icon: Zap,
      title: "Comprehensive Freedom Blueprint",
      description:
        "Our unique 7 events process helps you in your entire financial journey. CFB is designed to provide you a complete roadmap to live financially stress free life.",
      highlight: "complete roadmap",
      color: "accent",
    },
    {
      icon: Heart,
      title: "Golden Age Freedom Blueprint",
      description:
        "Two key elements are at the core while we design golden age financial blueprint: 1. Regular cash flow and 2. Your retirement corpus should not exhaust in your lifetime.",
      highlight: "Regular cash flow",
      color: "secondary",
    },
    {
      icon: Shield,
      title: "FIRE Blueprint",
      description:
        "Transferring risk and getting protected is the foundation for achieving financial freedom. SSP is designed to provide 360 degree protection.",
      highlight: "360 degree protection",
      color: "primary",
    },
    {
      icon: Globe,
      title: "Freedom Wealth Blueprint for NRIs",
      description:
        "This program teaches you two major things that will help you live a financially stress free life 1. What you should do and 2. What you should not do",
      highlight: "What you should do",
      color: "accent",
    },
    {
      icon: Users,
      title: "NextGen Freedom Wealth Blueprint",
      description:
        "Do whatever you want is possible only if you are free and to be free you need to get rid of two risks 1. Dying early or 2. Living longer WTF uses a unique strategy to achieve financial freedom",
      highlight: "unique strategy",
      color: "secondary",
    },
    {
      icon: Activity,
      title: "Financial Wellness Program",
      description:
        "This program teaches you two major things that will help you live a financially stress-free life 1. What you should do and 2. What you should not do",
      highlight: "financially stress-free",
      color: "primary",
    },
  ];

  const colorClasses = {
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
      light: "bg-primary/5",
    },
    accent: {
      bg: "bg-accent/10",
      text: "text-accent",
      light: "bg-accent/5",
    },
    secondary: {
      bg: "bg-secondary/10",
      text: "text-secondary",
      light: "bg-secondary/5",
    },
  };

  return (
    <section
      id="usp"
      className="section-padding bg-background-alt relative overflow-hidden"
    >
      {/* Decorative Header */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 rounded-full mb-4">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              What Makes Us Different
            </span>
          </div>
          <h2 className="section-title gradient-text-primary">OUR USP</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Comprehensive,{" "}
            <span className="highlight-peach font-medium">
              personalized financial solutions
            </span>{" "}
            for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uspItems.map((item, index) => {
            const Icon = item.icon;
            const colors = colorClasses[item.color];
            const descriptionParts = item.description.split(item.highlight);

            return (
              <div
                key={index}
                className="card-modern p-6 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 ${colors.light} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative">
                  <div
                    className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={colors.text} size={24} />
                  </div>

                  <h3
                    className={`text-lg font-bold mb-3 group-hover:${colors.text} transition-colors`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted mb-4 leading-relaxed">
                    {descriptionParts[0]}
                    <span
                      className={`font-bold ${colors.text} bg-${item.color}/5 px-1`}
                    >
                      {item.highlight}
                    </span>
                    {descriptionParts[1]}
                  </p>

                  <a
                    href="#"
                    className={`inline-flex items-center gap-1 ${colors.text} font-medium text-sm hover:gap-2 transition-all group/link`}
                  >
                    Know More
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default USP;
