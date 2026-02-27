const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  fullWidth = false,
  ...props
}) => {
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20",
    secondary:
      "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
    accent:
      "bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20",
    outline:
      "bg-transparent text-gray-700 border border-gray-300 hover:border-primary hover:text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      className={`relative overflow-hidden rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
        variants[variant]
      } ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-0 transition-transform duration-500"></span>
    </button>
  );
};

export default Button;
