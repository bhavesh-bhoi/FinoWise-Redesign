import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  const socialIcons = [
    { name: "Facebook", icon: "fab fa-facebook-f" },
    { name: "Twitter", icon: "fab fa-twitter" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in" },
    { name: "Instagram", icon: "fab fa-instagram" },
  ];

  return (
    <div className="hidden lg:block bg-primary text-white/90 text-sm py-3 fixed top-0 left-0 right-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Phone size={16} />
              <span>+91 22 2345 5678</span>
            </a>
            <a
              href="mailto:info@finowise.com"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Mail size={16} />
              <span>info@finowise.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>AMFI Reg: ARN-123456</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href="#"
                className="hover:text-accent transition-colors"
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
