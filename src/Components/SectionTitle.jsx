const SectionTitle = ({
  subtitle,
  title,
  description,
  alignment = "center",
  className = "",
}) => {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      className={`max-w-3xl mx-auto mb-8 sm:mb-12 ${alignments[alignment]} ${className}`}
    >
      {subtitle && (
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 rounded-full mb-3">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
          <span className="text-xs sm:text-sm font-medium text-accent tracking-wider uppercase">
            {subtitle}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-3 sm:mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
