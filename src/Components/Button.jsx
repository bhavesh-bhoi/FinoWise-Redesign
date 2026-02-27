import { clsx } from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 overflow-hidden group";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 active:scale-95",
    secondary:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 active:scale-95",
    accent:
      "bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 active:scale-95",
    outline:
      "border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary hover:shadow-lg active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      {...props}
    >
      {children}
      <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </button>
  );
};

export default Button;
