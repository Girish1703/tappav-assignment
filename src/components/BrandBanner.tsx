const brands = ["EPSON", "SONY", "SAMSUNG", "BOSE", "JBL", "SONOS", "DENON", "MARANTZ"];

const BrandBanner = () => (
  <section className="border-y border-border py-10">
    <div className="container mx-auto px-4">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Trusted Brands We Carry
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {brands.map((brand) => (
          <span
            key={brand}
            className="font-display text-lg font-bold tracking-wider text-muted-foreground/50 transition-colors hover:text-foreground"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default BrandBanner;
