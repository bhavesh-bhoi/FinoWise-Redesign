import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Workshops", href: "#workshops" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        } ${isScrolled ? "py-4" : "py-6"}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold">
              <span className="text-primary">FIN</span>
              <span className="text-accent">OWISE</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button variant="primary" size="md">
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="text-2xl font-bold mb-8">
              <span className="text-primary">FIN</span>
              <span className="text-accent">OWISE</span>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between py-2 text-gray-700 hover:text-primary transition-colors group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight
                    size={20}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </a>
              ))}
              <div className="mt-4">
                <Button variant="primary" size="lg" className="w-full">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
