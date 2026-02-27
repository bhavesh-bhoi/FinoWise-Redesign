const TrustBar = () => {
  const logos = [
    { name: "SEBI", src: "https://via.placeholder.com/120x40?text=SEBI" },
    { name: "AMFI", src: "https://via.placeholder.com/120x40?text=AMFI" },
    { name: "NSE", src: "https://via.placeholder.com/120x40?text=NSE" },
    { name: "RBI", src: "https://via.placeholder.com/120x40?text=RBI" },
    { name: "IRDAI", src: "https://via.placeholder.com/120x40?text=IRDAI" },
    { name: "PFRDA", src: "https://via.placeholder.com/120x40?text=PFRDA" },
  ];

  return (
    <section className="py-12 border-y border-gray-200 bg-white/50">
      <div className="container-custom">
        <p className="text-center text-muted mb-8 text-sm uppercase tracking-wider">
          Trusted by Regulators & Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
