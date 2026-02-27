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
      className={`max-w-3xl mx-auto mb-16 ${alignments[alignment]} ${className}`}
    >
      {subtitle && (
        <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      {description && (
        <p className="text-muted text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
