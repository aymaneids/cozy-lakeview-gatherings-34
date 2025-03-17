
import { Link } from "react-router-dom";
import { Target, PawPrint, Users, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import ImageWithOverlay from "@/components/ImageWithOverlay";

const Home = () => {
  const petImages = [
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    "https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
  ];
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url(${petImages[0]})`
          }}
        ></div>
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-tavern-light z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider bg-tavern-primary/20 backdrop-blur-sm border border-tavern-primary/30 rounded-full animate-fade-in">
            Serving Pets and Their Families for 15 Years
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 max-w-4xl animate-fade-in" style={{
          animationDelay: "200ms"
        }}>
            The Amazing Paw
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-tavern-light/90 animate-fade-in" style={{
          animationDelay: "400ms"
        }}>
            Your Certified Dog Training and Complete Pet Care Service
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{
          animationDelay: "600ms"
        }}>
            <Link to="/schedule-party">
              <Button size="lg" className="bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300">
                Book a Training
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
            <Link to="/specials">
              <Button variant="outline" size="lg" className="border-tavern-light/30 hover:border-tavern-light/50 button-tavern transition-all duration-300 text-gray-950 bg-slate-50">
                View Services
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
              <SectionHeading subtitle="About Us" title="Professional Pet Care Since 2009" alignment="left" />
              <p className="mb-6 text-tavern-dark/80">
                The Amazing Paw has been a trusted name in pet care for over 15 years. Our certified trainers and pet care specialists combine passion with expertise to provide the highest quality service for your beloved pets.
              </p>
              <p className="mb-8 text-tavern-dark/80">
                We take pride in our personalized approach, where each pet receives individual attention tailored to their unique personality and needs. Whether you're looking for obedience training, behavior modification, or regular pet care services, The Amazing Paw is where happy, well-behaved pets are made.
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
                <img src={petImages[1]} alt="Happy dog with trainer" className="w-full h-full object-cover rounded-lg shadow-xl" style={{
                maxHeight: "500px"
              }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 bg-tavern-light/50">
        <div className="container mx-auto">
          <SectionHeading subtitle="Our Services" title="What Makes The Amazing Paw Special" description="From basic obedience to advanced training programs, The Amazing Paw offers a variety of services to meet all your pet care needs." className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={PawPrint} title="Obedience Training" description="Professional training for dogs of all ages, focusing on essential commands and good manners." className="animate-fade-in" />
            <FeatureCard icon={Target} title="Behavior Modification" description="Specialized programs to address challenging behaviors like aggression, anxiety, and excessive barking." className="animate-fade-in" />
            <FeatureCard icon={Users} title="Group Classes" description="Socialization opportunities and training in a group setting for both pets and their owners." className="animate-fade-in" />
            <FeatureCard icon={MapPin} title="In-Home Services" description="Personalized pet care and training in the comfort of your own home, tailored to your schedule." className="animate-fade-in" />
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading subtitle="Gallery" title="See Our Happy Clients" description="Get a glimpse of what The Amazing Paw has to offer. From successful training sessions to joyful pets in our care, these images showcase our dedicated service." className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ImageWithOverlay src={petImages[0]} alt="Dog training session" className="md:col-span-2 aspect-[16/9] animate-fade-in">
              <Link to="/gallery" className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Button className="bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300">
                  View Gallery
                </Button>
              </Link>
            </ImageWithOverlay>
            <div className="space-y-6">
              <ImageWithOverlay src={petImages[1]} alt="Puppy learning basic commands" className="aspect-[4/3] animate-fade-in">
                <Link to="/gallery" className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300">
                    View Gallery
                  </Button>
                </Link>
              </ImageWithOverlay>
              <ImageWithOverlay src={petImages[2]} alt="Happy dog after training" className="aspect-[4/3] animate-fade-in">
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
            <SectionHeading subtitle="Contact Us" title="Book Your Pet's Training Today" className="text-tavern-light" />
            <p className="mb-8 text-tavern-light/80 max-w-2xl mx-auto">
              Give your pet the gift of proper training and care. Located in the heart of the city, The Amazing Paw is your destination for professional pet services and lasting results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
              <a href="https://maps.google.com/?q=123+Main+St,+Chicago,+Illinois+60613" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-tavern-light/30 text-tavern-light hover:border-tavern-light/50 button-tavern transition-all duration-300 bg-zinc-900 hover:bg-zinc-800">
                  Get Directions
                </Button>
              </a>
            </div>
            <div className="mt-12 p-4 bg-tavern-dark/60 backdrop-blur-sm rounded-lg inline-block">
              <p className="text-tavern-light/80 mb-2">123 Main St, Chicago, Illinois 60613</p>
              <p className="text-tavern-light/80">
                <span className="font-medium">Hours:</span> Mon-Fri 9am-7pm | Sat 10am-5pm | Sun 12pm-4pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
