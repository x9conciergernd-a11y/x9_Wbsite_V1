import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
       <Link 
  to="/" 
  className="text-2xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-base"
>
  <img
    src="/favicon.ico"
    alt="Logo"
    style={{
      width: "32px",
      height: "auto",
      objectFit: "contain",
    }}
  />
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-base",
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA - WhatsApp Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/919633540152?text=Hi%2C%20I%20want%20to%20request%20access" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="premium" size="default">
                Request Access
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-down">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-base font-medium py-2 transition-colors duration-base",
                    location.pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile WhatsApp Button */}
              <a 
                href="https://wa.me/919633540152?text=Hi%2C%20I%20want%20to%20request%20access" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="premium" size="lg" className="w-full">
                  Request Access
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
