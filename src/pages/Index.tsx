import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandBanner from "@/components/BrandBanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <BrandBanner />
    </main>
    <Footer />
  </div>
);

export default Index;
