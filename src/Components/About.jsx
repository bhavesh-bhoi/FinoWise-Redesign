import {
  Sparkles,
  Target,
  Heart,
  Award,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: Sparkles,
      title:
        "We ensure that our clients get the right amount of money available at the right time",
      highlight: "right amount of money",
      color: "accent",
    },
    {
      icon: Heart,
      title:
        "We consistently educate, inspire, empower and transform peoples' lives",
      highlight: "educate, inspire, empower",
      color: "secondary",
    },
    {
      icon: Award,
      title:
        "We adhere to all professional ethics with utmost integrity and dedication",
      highlight: "utmost integrity and dedication",
      color: "primary",
    },
    {
      icon: Users,
      title:
        "We are a team of dedicated professionals who are passionate about helping people achieve their financial goals",
      highlight: "dedicated professionals",
      color: "secondary",
    },
    {
      icon: Zap,
      title:
        "We are committed to providing our clients with the best possible service",
      highlight: "best possible service",
      color: "accent",
    },
    {
      icon: TrendingUp,
      title:
        "We are committed to providing our clients with the best possible service",
      highlight: "best possible service",
      color: "accent",
    },
    {
      icon: Target,
      title:
        "We are committed to providing our clients with the best possible service",
      highlight: "best possible service",
      color: "accent",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-background-alt relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Company Name with Modern Typography */}
        <div className="text-center mb-12">
          <span className="section-subtitle">WELCOME TO</span>
          <h2 className="section-title">
            <span className="gradient-text-primary">
              FINOWISE FREEDOM GROUP
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></span>
            <p className="text-xl font-medium text-secondary">
              Be Wise &gt; Be WHealthy &gt; Be Happy
            </p>
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></span>
          </div>
        </div>

        {/* Philosophy Intro */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold font-display gradient-text-primary mb-2">
                FIN
              </div>
              <p className="text-sm uppercase tracking-wider text-muted">
                Financial
              </p>
            </div>
            <div className="text-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent"></span>
              </div>
              <div className="relative bg-background-alt inline-block px-6">
                <div className="text-5xl font-bold font-display gradient-text-accent mb-2">
                  O
                </div>
                <p className="text-sm uppercase tracking-wider text-muted">
                  Ocean
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold font-display gradient-text-primary mb-2">
                WISE
              </div>
              <p className="text-sm uppercase tracking-wider text-muted">
                Wisdom
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl relative">
            <div className="absolute -top-3 left-8">
              <span className="bg-accent text-white text-xs px-4 py-1 rounded-full">
                The Meaning
              </span>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-bold text-primary">'Wise'</span> means{" "}
              <span className="highlight-peach font-medium">
                "Just not being smart, intelligent, knowledgeable but also have
                the Right Mindset, Attitude and Approach towards Money"
              </span>
            </p>
            <p className="text-lg mt-4 text-muted">
              In simple words, one should be wise enough in the financial ocean
              to achieve{" "}
              <span className="font-bold text-accent">Financial Freedom.</span>
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            const titleParts = principle.title.split(principle.highlight);
            return (
              <div
                key={index}
                className="card-modern p-8 group hover:bg-gradient-to-br hover:from-white hover:to-accent/5"
              >
                <div
                  className={`w-14 h-14 bg-${principle.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`text-${principle.color}`} size={28} />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {titleParts[0]}
                  <span
                    className={`font-bold text-${principle.color} bg-${principle.color}/5 px-1`}
                  >
                    {principle.highlight}
                  </span>
                  {titleParts[1]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tagline with Highlight */}
        <div className="text-center">
          <div className="inline-block relative">
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              <span className="gradient-text-primary">BEWISE</span> &gt;{" "}
              <span className="gradient-text-accent">BE WHEALTHY</span> &gt;{" "}
              <span className="gradient-text-primary">BE HAPPY</span>
            </h3>
            <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
