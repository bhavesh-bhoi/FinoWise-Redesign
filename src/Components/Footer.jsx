import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const offices = [
    {
      city: "Mumbai",
      address:
        "2nd Floor, Tharani Business Center, Andheri East, Mumbai - 400059",
      phone: "+91 91376 54191",
    },
    {
      city: "Pune",
      address: "F6, East Court Phoenix Market City, Viman Nagar, Pune - 411014",
      phone: "+91 93253 68349",
    },
    {
      city: "Bengaluru",
      address: "Office No.1, Datha Square, Nayandahalli, Bengaluru - 560039",
      phone: "+91 99874 45658",
    },
    {
      city: "New Delhi",
      address: "505, Mansarovar Building, Nehru Place, New Delhi - 110019",
      phone: "+91 98100 31651",
    },
    {
      city: "Varanasi",
      address: "69 & 75, Kuber Complex, Rathyatra, Varanasi - 221010",
      phone: "+91 99365 00610",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our USP", href: "#usp" },
    { name: "Services", href: "#services" },
    { name: "Workshops", href: "#workshops" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    { name: "Blog", href: "#" },
    { name: "Calculators", href: "#" },
    { name: "E-books", href: "#" },
    { name: "Webinars", href: "#" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Disclosure", href: "#" },
    { name: "Code of Conduct", href: "#" },
  ];

  const regulators = ["NSE", "BSE", "SEBI", "RBI", "CDSL", "NCDEX", "MCX"];

  return (
    <footer className="bg-primary-dark text-gray-300 relative">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent"></div>

      <div className="container-custom pt-12 pb-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg font-display mb-4">
              Finowise
            </h3>
            <p className="text-xs text-accent mb-4 tracking-wider">
              BE WISE &gt; BE WEALTHY &gt; BE HAPPY
            </p>
            <p className="text-sm text-gray-400 mb-4">
              AMFI Registered Mutual Fund Distributor with a mission to educate,
              inspire and empower.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook
                  size={14}
                  className="text-gray-400 hover:text-white"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter size={14} className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin
                  size={14}
                  className="text-gray-400 hover:text-white"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram
                  size={14}
                  className="text-gray-400 hover:text-white"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 -ml-2 group-hover:opacity-100 transition-all"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mt-6 mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 mb-4">
              <a
                href="tel:+919137654191"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
              >
                <Phone size={14} />
                +91 91376 54191
              </a>
              <a
                href="mailto:connect@finowise.in"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
              >
                <Mail size={14} />
                connect@finowise.in
              </a>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-2">Grievance Contact</p>
              <a href="tel:+919137654191" className="text-sm text-accent block">
                91376 54191
              </a>
              <a
                href="mailto:info@finwise.in"
                className="text-sm text-accent block"
              >
                info@finwise.in
              </a>
            </div>
          </div>
        </div>

        {/* Offices Grid */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-white font-semibold mb-4">Our Offices</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {offices.map((office) => (
              <div key={office.city} className="bg-white/5 rounded-lg p-3">
                <h5 className="text-white font-medium text-sm mb-1">
                  {office.city}
                </h5>
                <p className="text-xs text-gray-400 mb-1 line-clamp-2">
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone}`}
                  className="text-xs text-accent hover:underline"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Regulators */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {regulators.map((reg) => (
              <span
                key={reg}
                className="text-xs sm:text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full"
              >
                {reg}
              </span>
            ))}
          </div>
        </div>

        {/* Risk Disclosure */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="bg-white/5 rounded-xl p-4 sm:p-6">
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="font-bold text-accent">Risk Factors –</span>{" "}
              Investments in Mutual Funds are subject to Market Risks. Read all
              scheme related documents carefully before investing. Mutual Fund
              Schemes do not assure or guarantee any returns. Past performances
              may or may not be sustained in future. We deal in Regular Plans
              only and earn Trailing Commission. Option of Direct Plan is
              available with lower expense ratio.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-600 text-center sm:text-left">
              <p>AMFI Registered: ARN-263895 | Valid till: 08/02/2026</p>
              <p className="mt-1">
                © Copyright Finowise Freedom LLP. All Rights Reserved.
              </p>
            </div>
            <p className="text-xs text-gray-600">
              Developed by:{" "}
              <span className="text-accent">Svojlas Technologies</span>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 bg-accent text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-accent-light hover:scale-110 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
