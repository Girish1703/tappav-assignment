import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home-theater.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Premium home theater setup" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
    </div>
    <div className="container relative mx-auto px-4 py-24 md:py-36">
      <div className="max-w-xl animate-fade-in-up">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Premium Audio & Visual
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          Elevate Your
          <br />
          <span className="text-gradient-gold">Home Experience</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Discover projectors, speakers, and audio gear from the world's finest brands. Designed for those who demand the best.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/product/epson-epiqvision"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Shop Projectors
          </Link>
          <Link
            to="/"
            className="inline-flex items-center rounded-md border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-muted"
          >
            Browse All
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
