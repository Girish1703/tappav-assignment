import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Truck, Shield, RotateCcw, ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import epsonProjector from "@/assets/epson-projector.jpg";
import heroImage from "@/assets/hero-home-theater.jpg";

const images = [epsonProjector, heroImage];

const specs = [
  { label: "Display Technology", value: "3LCD" },
  { label: "Resolution", value: "4K PRO-UHD (3840 x 2160)" },
  { label: "Brightness", value: "4,000 Lumens (White & Color)" },
  { label: "Contrast Ratio", value: "2,500,000:1" },
  { label: "Throw Distance", value: "Ultra Short Throw" },
  { label: "Screen Size", value: '80" – 150"' },
  { label: "Lamp Life", value: "20,000 Hours (Laser)" },
  { label: "Built-in Audio", value: "Yamaha 2.1 Channel (40W)" },
  { label: "Connectivity", value: "HDMI 2.1, USB, Wi-Fi, Bluetooth" },
  { label: "Smart TV", value: "Android TV Built-in" },
];

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="flex items-center gap-1 transition-colors hover:text-primary">
            <ChevronLeft className="h-4 w-4" /> Home
          </Link>
          <span>/</span>
          <span>Projectors</span>
          <span>/</span>
          <span className="text-foreground">Epson EpiqVision Ultra LS800</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden rounded-lg border border-border bg-secondary">
              <img
                src={images[selectedImage]}
                alt="Epson EpiqVision Ultra LS800"
                className="aspect-square w-full object-contain"
              />
            </div>
            <div className="mt-3 flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`overflow-hidden rounded-md border-2 transition-colors ${
                    selectedImage === i ? "border-primary" : "border-border"
                  }`}
                >
                  <img src={img} alt="" className="h-20 w-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="inline-block rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
              Best Seller
            </span>
            <h1 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              Epson EpiqVision Ultra LS800
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">4K PRO-UHD Ultra Short Throw Laser Projector</p>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`h-4 w-4 ${s <= 4 ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(4.0) · 128 Reviews</span>
            </div>

            {/* Price */}
            <div className="mt-6">
              <span className="font-display text-3xl font-bold text-primary">₹2,99,990</span>
              <span className="ml-3 text-sm text-muted-foreground line-through">₹3,49,990</span>
              <span className="ml-2 text-sm font-semibold text-emerald-400">14% off</span>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Inclusive of all taxes. Free shipping on orders above ₹5,000.
            </p>

            {/* Qty + Add to cart */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-md border border-border">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2 text-foreground transition-colors hover:bg-secondary"
                >
                  −
                </button>
                <span className="min-w-[2.5rem] text-center text-sm font-medium text-foreground">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-2 text-foreground transition-colors hover:bg-secondary"
                >
                  +
                </button>
              </div>
              <button className="flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </button>
            </div>

            {/* Perks */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Truck, text: "Free Delivery" },
                { icon: Shield, text: "2-Year Warranty" },
                { icon: RotateCcw, text: "Easy Returns" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-1 rounded-md border border-border bg-card p-3 text-center">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-xs text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="font-display text-lg font-semibold">About this Product</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The Epson EpiqVision Ultra LS800 delivers an immersive cinematic experience right in your living room. 
                With ultra-short-throw laser technology, project up to a 150-inch image from just inches away from the wall. 
                Featuring 4K PRO-UHD resolution, 4,000 lumens of brightness, and a built-in Yamaha 2.1 channel sound system, 
                this all-in-one projector is the ultimate home entertainment solution. Android TV built-in gives you access 
                to thousands of apps and streaming services.
              </p>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <section className="mt-16">
          <h2 className="mb-6 font-display text-2xl font-bold">Technical Specifications</h2>
          <div className="overflow-hidden rounded-lg border border-border">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
              >
                <span className="w-1/3 border-r border-border px-4 py-3 text-sm font-medium text-muted-foreground md:w-1/4">
                  {spec.label}
                </span>
                <span className="flex-1 px-4 py-3 text-sm text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
