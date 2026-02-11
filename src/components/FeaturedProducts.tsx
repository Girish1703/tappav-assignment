import { Link } from "react-router-dom";
import epsonProjector from "@/assets/epson-projector.jpg";
import categorySpeakers from "@/assets/category-speakers.jpg";
import categorySoundbars from "@/assets/category-soundbars.jpg";
import categoryHeadphones from "@/assets/category-headphones.jpg";

const products = [
  { name: "Epson EpiqVision Ultra LS800", price: "₹2,99,990", image: epsonProjector, link: "/product/epson-epiqvision", badge: "Best Seller" },
  { name: "Sonos Era 300", price: "₹44,999", image: categorySpeakers, link: "/" },
  { name: "Samsung HW-Q990D Soundbar", price: "₹1,19,990", image: categorySoundbars, link: "/" },
  { name: "Sony WH-1000XM5", price: "₹29,990", image: categoryHeadphones, link: "/" },
];

const FeaturedProducts = () => (
  <section className="bg-card py-16">
    <div className="container mx-auto px-4">
      <h2 className="mb-2 font-display text-3xl font-bold">Featured Products</h2>
      <p className="mb-10 text-muted-foreground">Handpicked for audiophiles and cinephiles</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <Link
            key={p.name}
            to={p.link}
            className="group overflow-hidden rounded-lg border border-border bg-background transition-all hover-lift"
          >
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {p.badge && (
                <span className="absolute left-3 top-3 rounded-sm bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                  {p.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-foreground">{p.name}</h3>
              <p className="mt-1 text-lg font-bold text-primary">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
