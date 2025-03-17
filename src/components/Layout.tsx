
import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Instagram } from "lucide-react";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Define navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-tavern-light">
      <header className="sticky top-0 z-50 w-full border-b border-[hsla(0,0%,100%,.1)] bg-tavern-dark/90 backdrop-blur supports-[backdrop-filter]:bg-tavern-dark/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link 
                to="/" 
                className="flex items-center gap-2"
                aria-label="The Amazing Paw"
              >
                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-tavern-secondary">
                  <div className="absolute inset-0 bg-tavern-dark flex items-center justify-center">
                    <span className="text-tavern-secondary font-serif font-bold text-xl">AP</span>
                  </div>
                </div>
                <span className="font-serif text-xl font-semibold text-tavern-light">
                  The Amazing Paw
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 text-tavern-light">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-all duration-200 relative hover:text-tavern-secondary",
                    location.pathname === link.path
                      ? "text-tavern-secondary"
                      : "text-tavern-light/80"
                  )}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tavern-secondary"></span>
                  )}
                </Link>
              ))}
              <a 
                href="https://www.instagram.com/theamazingpaw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4 p-1 text-tavern-light opacity-80 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-tavern-light p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && isMobile && (
          <div className="md:hidden fixed inset-0 top-16 bg-tavern-dark/95 backdrop-blur-md z-40 animate-fade-in">
            <nav className="flex flex-col items-center justify-center h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "w-full text-center px-3 py-4 text-base font-medium transition-all",
                    location.pathname === link.path
                      ? "text-tavern-secondary"
                      : "text-tavern-light/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="https://www.instagram.com/theamazingpaw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 p-3 text-tavern-light flex items-center gap-2"
                aria-label="Instagram"
              >
                <Instagram size={20} />
                <span>Follow us on Instagram</span>
              </a>
            </nav>
          </div>
        )}
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
