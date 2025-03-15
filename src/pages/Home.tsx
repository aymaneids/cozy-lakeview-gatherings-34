import { Link } from "react-router-dom";
import { Target, Glasses, Users, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import ImageWithOverlay from "@/components/ImageWithOverlay";
const Home = () => {
  const barImages = ["https://images.unsplash.com/photo-1577372970039-2ac351969c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80", "https://images.unsplash.com/photo-1605030753481-32656e414f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80", "https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"];
  return <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${barImages[0]})`
      }}></div>
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-tavern-light z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider bg-tavern-primary/20 backdrop-blur-sm border border-tavern-primary/30 rounded-full animate-fade-in">
            Serving Chicago for 33 Years
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 max-w-4xl animate-fade-in" style={{
          animationDelay: "200ms"
        }}>
            Ten Cat Tavern
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-tavern-light/90 animate-fade-in" style={{
          animationDelay: "400ms"
        }}>
            Your Lakeview Neighborhood Bar - Pool, Parties, and Good Times
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{
          animationDelay: "600ms"
        }}>
            <Link to="/schedule-party">
              <Button size="lg" className="bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300">
                Book a Party
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
            <Link to="/specials">
              <Button variant="outline" size="lg" className="border-tavern-light/30 hover:border-tavern-light/50 button-tavern transition-all duration-300 text-gray-950 bg-slate-50">
                View Specials
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-left">
              <SectionHeading subtitle="About Us" title="A Neighborhood Tradition Since 1989" alignment="left" />
              <p className="mb-6 text-tavern-dark/80">
                Ten Cat Tavern has been a beloved fixture in Chicago's Lakeview neighborhood for over three decades. Our classic tavern combines the warmth of a neighborhood bar with the fun of quality entertainment, making us a second home to locals and a welcoming destination for visitors.
              </p>
              <p className="mb-8 text-tavern-dark/80">
                We take pride in our friendly atmosphere, where conversations flow as easily as our drinks. Whether you're shooting pool with friends, joining our dart leagues, or celebrating a special occasion in our party space, Ten Cat Tavern is where memories are made.
              </p>
              <Link to="/about">
                <Button className="bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300">
                  Learn More About Us
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-right">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-tavern-secondary rounded-lg"></div>
                <img src={barImages[1]} alt="Ten Cat Tavern Interior" className="w-full h-full object-cover rounded-lg shadow-xl" style={{
                maxHeight: "500px"
              }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenities */}
      <section className="py-20 px-4 bg-tavern-light/50">
        <div className="container mx-auto">
          <SectionHeading subtitle="Our Amenities" title="What Makes Ten Cat Special" description="From pool tables to private events, Ten Cat Tavern offers a variety of amenities to make your visit memorable." className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={Glasses} title="Full Bar" description="Enjoy a wide selection of beers, spirits, and cocktails crafted by our experienced bartenders." className="animate-fade-in" />
            <FeatureCard icon={Target} title="Pool Tables & Darts" description="Challenge your friends to a game of pool or join our popular dart leagues." className="animate-fade-in" />
            <FeatureCard icon={Users} title="Private Parties" description="Host your next celebration with us! Our space is perfect for birthdays, meet-ups, and special events." className="animate-fade-in" />
            <FeatureCard icon={MapPin} title="Prime Location" description="Conveniently located in the heart of Lakeview, just steps away from public transportation." className="animate-fade-in" />
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading subtitle="Gallery" title="Experience the Atmosphere" description="Get a glimpse of what Ten Cat Tavern has to offer. From our cozy interior to lively events, these images showcase our unique tavern atmosphere." className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ImageWithOverlay src={barImages[0]} alt="Ten Cat Tavern Bar Area" className="md:col-span-2 aspect-[16/9] animate-fade-in">
              <Link to="/gallery" className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Button className="bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300">
                  View Gallery
                </Button>
              </Link>
            </ImageWithOverlay>
            <div className="space-y-6">
              <ImageWithOverlay src={barImages[1]} alt="Pool Table at Ten Cat Tavern" className="aspect-[4/3] animate-fade-in">
                <Link to="/gallery" className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300">
                    View Gallery
                  </Button>
                </Link>
              </ImageWithOverlay>
              <ImageWithOverlay src={barImages[2]} alt="Ten Cat Tavern Event" className="aspect-[4/3] animate-fade-in">
                <Link to="/gallery" className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300">
                    View Gallery
                  </Button>
                </Link>
              </ImageWithOverlay>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-tavern-dark text-tavern-light tavern-pattern">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading subtitle="Visit Us" title="Come Experience Ten Cat Tavern" className="text-tavern-light" />
            <p className="mb-8 text-tavern-light/80 max-w-2xl mx-auto">
              Join us for drinks, pool, and good company. Located in the heart of Lakeview, Ten Cat Tavern is your neighborhood destination for great times and lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
              <a href="https://maps.google.com/?q=3931+N+Ashland+Ave,+Chicago,+Illinois+60613" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-tavern-light/30 text-tavern-light hover:border-tavern-light/50 button-tavern transition-all duration-300 bg-zinc-900 hover:bg-zinc-800">
                  Get Directions
                </Button>
              </a>
            </div>
            <div className="mt-12 p-4 bg-tavern-dark/60 backdrop-blur-sm rounded-lg inline-block">
              <p className="text-tavern-light/80 mb-2">3931 N Ashland Ave, Chicago, Illinois 60613</p>
              <p className="text-tavern-light/80">
                <span className="font-medium">Hours:</span> Mon-Fri 4pm-2am | Sat 12pm-3am | Sun 12pm-2am
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;