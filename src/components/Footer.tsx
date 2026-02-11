import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-display text-xl font-bold">
            <span className="text-gradient-gold">Tapp</span>AV
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Your destination for premium audio-visual equipment. Experience sound and vision like never before.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold text-foreground">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Projectors</Link></li>
            <li><Link to="/" className="hover:text-primary">Speakers</Link></li>
            <li><Link to="/" className="hover:text-primary">Soundbars</Link></li>
            <li><Link to="/" className="hover:text-primary">Headphones</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold text-foreground">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Contact Us</Link></li>
            <li><Link to="/" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/" className="hover:text-primary">Shipping & Returns</Link></li>
            <li><Link to="/" className="hover:text-primary">Warranty</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold text-foreground">Stay Connected</h4>
          <p className="text-sm text-muted-foreground">Subscribe for deals and new arrivals.</p>
          <div className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2025 TappAV. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
