import { Link } from "react-router-dom";
import categorySpeakers from "@/assets/category-speakers.jpg";
import categorySoundbars from "@/assets/category-soundbars.jpg";
import categoryProjectors from "@/assets/category-projectors.jpg";
import categoryHeadphones from "@/assets/category-headphones.jpg";

const categories = [
  { name: "Projectors", image: categoryProjectors, link: "/" },
  { name: "Speakers", image: categorySpeakers, link: "/" },
  { name: "Soundbars", image: categorySoundbars, link: "/" },
  { name: "Headphones", image: categoryHeadphones, link: "/" },
];

const CategoryGrid = () => (
  <section className="container mx-auto px-4 py-16">
    <h2 className="mb-2 font-display text-3xl font-bold">Shop by Category</h2>
    <p className="mb-10 text-muted-foreground">Find the perfect gear for your setup</p>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to={cat.link}
          className="group relative overflow-hidden rounded-lg hover-lift"
        >
          <div className="aspect-square">
            <img
              src={cat.image}
              alt={cat.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-5">
            <h3 className="font-display text-lg font-semibold text-foreground">{cat.name}</h3>
            <span className="text-sm text-primary">Shop now →</span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default CategoryGrid;
