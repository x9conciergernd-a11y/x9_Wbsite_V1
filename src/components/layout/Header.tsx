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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#270e29] border-b border-[#efdfbb]/20">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-[#efdfbb] hover:text-[#efdfbb]/90 transition-colors"
          >
            <img
              src="/header_logo.png"
              alt="Logo"
              className="h-28  object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-[#efdfbb]"
                    : "text-[#efdfbb]/80 hover:text-[#efdfbb]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/919633540152?text=Hi%2C%20I%20want%20to%20request%20access"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#efdfbb] text-[#270e29] hover:bg-[#efdfbb]/90">
                Become a Member
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#efdfbb]"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#270e29] border-t border-[#efdfbb]/20 py-6 animate-fade-down">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-base font-medium py-2 transition-colors",
                    location.pathname === link.href
                      ? "text-[#efdfbb]"
                      : "text-[#efdfbb]/80 hover:text-[#efdfbb]"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <a
                href="https://wa.me/919633540152?text=Hi%2C%20I%20want%20to%20request%20access"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-[#efdfbb] text-[#270e29] hover:bg-[#efdfbb]/90">
                  Become a Member
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
