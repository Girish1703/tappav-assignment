import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Projectors", to: "/" },
    { label: "Speakers", to: "/" },
    { label: "Soundbars", to: "/" },
    { label: "Headphones", to: "/" },
    { label: "Contact", to: "/" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight">
          <span className="text-gradient-gold">Tapp</span>
          <span className="text-foreground">AV</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-muted-foreground transition-colors hover:text-foreground">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-muted-foreground transition-colors hover:text-foreground">
            <User className="h-5 w-5" />
          </button>
          <button className="relative text-muted-foreground transition-colors hover:text-foreground">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </button>
          <button
            className="text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 pb-6 pt-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
