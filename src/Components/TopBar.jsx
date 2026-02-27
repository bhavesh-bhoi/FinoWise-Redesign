import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary-dark text-white/90 text-sm py-3 fixed top-0 left-0 right-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-accent" />
              <span className="hidden sm:inline">
                AMFI Registered Mutual Fund Distributor
              </span>
              <span className="sm:hidden">AMFI Regd.</span>
            </span>
            <span className="text-white/30">|</span>
            <span className="text-xs">ARN: 263895</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919137654191"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">+91 91376 54191</span>
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a
              href="mailto:connect@finowise.in"
              className="items-center gap-1 hover:text-accent transition-colors hidden sm:flex"
            >
              <Mail size={14} />
              <span>connect@finowise.in</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
