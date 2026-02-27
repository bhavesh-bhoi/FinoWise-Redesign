import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

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
      address: "Bandra Kurla Complex, Mumbai - 400051",
      phone: "+91 22 1234 5678",
    },
    {
      city: "Delhi",
      address: "Connaught Place, New Delhi - 110001",
      phone: "+91 11 2345 6789",
    },
    {
      city: "Bangalore",
      address: "Indiranagar, Bangalore - 560038",
      phone: "+91 80 3456 7890",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Workshops", href: "#workshops" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Disclaimer", href: "#" },
    { name: "Compliance", href: "#" },
    { name: "Grievance Redressal", href: "#" },
  ];

  const socialIcons = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Youtube, name: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-background-dark text-gray-300 relative">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Offices */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Offices</h3>
            <div className="space-y-6">
              {offices.map((office) => (
                <div key={office.city} className="space-y-2">
                  <h4 className="text-accent font-semibold">{office.city}</h4>
                  <div className="flex items-start gap-3 group">
                    <MapPin
                      size={18}
                      className="text-gray-500 mt-1 group-hover:text-accent transition-colors"
                    />
                    <p className="text-sm leading-relaxed">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <Phone
                      size={14}
                      className="text-gray-500 group-hover:text-accent transition-colors"
                    />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-sm hover:text-accent transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block hover:text-accent transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="inline-block hover:text-accent transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Stay Connected
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for financial insights and updates.
            </p>

            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl focus:outline-none focus:border-accent text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-accent text-white rounded-r-xl hover:bg-accent-light transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-accent transition-colors group"
                    aria-label={social.name}
                  >
                    <Icon
                      size={18}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 Finowise Freedom Group. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            AMFI Registered: ARN-123456 | SEBI Registration: INZ000123456
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-accent-light hover:scale-110 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
