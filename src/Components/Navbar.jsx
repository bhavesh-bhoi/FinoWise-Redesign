import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";
import Logo from "../assets/images/Logo.png";
import ConsultationModal from "./ConsultationModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [logoError, setLogoError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when drawer or modal open
  useEffect(() => {
    if (isMobileMenuOpen || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, isModalOpen]);

  const navItems = [
    { name: "HOME", href: "#" },
    {
      name: "ABOUT US",
      href: "#about",
      hasDropdown: true,
      dropdown: [
        { name: "Our Story", href: "#story" },
        { name: "Our Team", href: "#team" },
        { name: "Philosophy", href: "#philosophy" },
      ],
    },
    {
      name: "OUR USP",
      href: "#usp",
      hasDropdown: true,
      dropdown: [
        { name: "Basic Freedom Blueprint", href: "#bfb" },
        { name: "Comprehensive Freedom Blueprint", href: "#cfb" },
        { name: "Golden Age Blueprint", href: "#gafb" },
        { name: "FIRE Blueprint", href: "#fire" },
        { name: "NRI Blueprint", href: "#nri" },
        { name: "NextGen Blueprint", href: "#nextgen" },
        { name: "Financial Wellness", href: "#wellness" },
      ],
    },
    {
      name: "OUR PRODUCTS",
      href: "#products",
      hasDropdown: true,
      dropdown: [
        { name: "Mutual Funds", href: "#mutual-funds" },
        { name: "Insurance", href: "#insurance" },
        { name: "Fixed Deposits", href: "#fd" },
        { name: "Bonds", href: "#bonds" },
      ],
    },
    {
      name: "RESOURCES",
      href: "#resources",
      hasDropdown: true,
      dropdown: [
        { name: "Blog", href: "#blog" },
        { name: "Calculators", href: "#calculators" },
        { name: "E-books", href: "#ebooks" },
        { name: "Webinars", href: "#webinars" },
      ],
    },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-white py-3"
        }`}
        style={{ top: "40px" }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              {!logoError ? (
                <img
                  src={Logo}
                  alt="Finowise"
                  className="h-10 lg:h-12 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex flex-col">
                  <span className="text-xl lg:text-2xl font-bold font-display text-primary">
                    Finowise
                  </span>
                  <span className="text-[8px] lg:text-[10px] text-accent -mt-1 tracking-wider">
                    BE WISE &gt; BE WEALTHY &gt; BE HAPPY
                  </span>
                </div>
              )}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-accent/5 hover:text-accent transition-colors rounded-lg"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className="group-hover:rotate-180 transition-transform duration-300"
                      />
                    )}
                  </a>

                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                      <div className="bg-white rounded-xl shadow-xl py-2 border border-gray-100">
                        {item.dropdown.map((dropItem) => (
                          <a
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/5 hover:text-accent transition-colors"
                          >
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#login"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                <LogIn size={16} />
                <span>LOGIN</span>
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-accent text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
              >
                Free Consultation
              </button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-primary" />
              ) : (
                <Menu size={20} className="text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed right-0 bg-white z-50 shadow-2xl transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          top: "40px",
          height: "calc(100vh - 40px)",
          width: "280px",
        }}
      >
        <div className="p-5 pt-3 overflow-y-auto h-full">
          <div className="space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name,
                    )
                  }
                  className="w-full flex items-center justify-between py-2.5 px-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span className="font-medium text-sm">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {item.hasDropdown && openDropdown === item.name && (
                  <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100 ml-3">
                    {item.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block py-2 px-3 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
            <a
              href="#login"
              className="flex items-center justify-center gap-2 w-full py-2.5 border border-primary/20 rounded-full text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
            >
              <LogIn size={16} />
              <span>LOGIN</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="block w-full bg-accent text-white py-2.5 rounded-full text-sm font-medium text-center hover:bg-accent-light transition-colors cursor-pointer"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
