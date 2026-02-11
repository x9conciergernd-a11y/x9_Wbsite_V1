import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-white/15 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-xl">
          <div className="px-6">
            <div className="flex h-20 items-center justify-between">

              {/* Logo */}
              <Link
                to="/"
                className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-white hover:text-white/90 transition-colors"
              >
                <img
                  src="/header_logo.png"
                  alt="Logo"
                  className="h-28 object-contain"
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
                        ? "text-white"
                        : "text-white/80 hover:text-white"
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
                  <Button className="bg-white text-black hover:bg-white/90">
                    Become a Member
                  </Button>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-white"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/20 px-6 py-6"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "text-base font-medium py-2 transition-colors",
                      location.pathname === link.href
                        ? "text-white"
                        : "text-white/80 hover:text-white"
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
                  <Button className="w-full bg-white text-black hover:bg-white/90">
                    Become a Member
                  </Button>
                </a>
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
