
import { Link } from "react-router-dom";
import { Instagram, Map, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-[hsla(0,0%,100%,.1)] bg-tavern-dark text-tavern-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-tavern-secondary">
                <div className="absolute inset-0 bg-tavern-dark flex items-center justify-center">
                  <span className="text-tavern-secondary font-serif font-bold text-xl">TC</span>
                </div>
              </div>
              <span className="font-serif text-xl font-semibold">
                Ten Cat Tavern
              </span>
            </div>
            <p className="text-tavern-light/80 text-sm max-w-xs">
              Your neighborhood bar in Lakeview serving Chicago for over 33 years with pool tables, dart leagues, and a friendly atmosphere.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/tencattavern/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tavern-light hover:text-tavern-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-tavern-light/80 hover:text-tavern-secondary transition-colors">Home</Link>
              <Link to="/about" className="text-tavern-light/80 hover:text-tavern-secondary transition-colors">About</Link>
              <Link to="/schedule-party" className="text-tavern-light/80 hover:text-tavern-secondary transition-colors">Schedule a Party</Link>
              <Link to="/leagues" className="text-tavern-light/80 hover:text-tavern-secondary transition-colors">Pool & Dart Leagues</Link>
              <Link to="/menu" className="text-tavern-light/80 hover:text-tavern-secondary transition-colors">Menu</Link>
              <Link to="/gallery" className="text-tavern-light/80 hover:text-tavern-secondary transition-colors">Gallery</Link>
              <Link to="/specials" className="text-tavern-light/80 hover:text-tavern-secondary transition-colors">Specials</Link>
              <Link to="/contact" className="text-tavern-light/80 hover:text-tavern-secondary transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium">Contact & Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Map size={18} className="text-tavern-secondary mt-1 flex-shrink-0" />
                <span className="text-tavern-light/80">3931 N Ashland Ave, Chicago, Illinois 60613</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-tavern-secondary flex-shrink-0" />
                <span className="text-tavern-light/80">(773) 935-5377</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-tavern-secondary flex-shrink-0" />
                <span className="text-tavern-light/80">info@tencattavern.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-tavern-secondary mt-1 flex-shrink-0" />
                <div className="text-tavern-light/80">
                  <p>Monday-Friday: 4pm-2am</p>
                  <p>Saturday: 12pm-3am</p>
                  <p>Sunday: 12pm-2am</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-tavern-light/10 text-center text-tavern-light/60 text-sm">
          <p>&copy; {currentYear} Ten Cat Tavern. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
