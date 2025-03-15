
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1577372970039-2ac351969c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80)` 
          }}
        ></div>
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-tavern-light z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold animate-fade-in">About Ten Cat Tavern</h1>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <SectionHeading
                subtitle="Our History"
                title="33 Years of Neighborhood Tradition"
                alignment="left"
              />
              <p className="mb-6 text-tavern-dark/80">
                Founded in 1989, Ten Cat Tavern quickly established itself as a cornerstone of Chicago's Lakeview community. Named after the owner's love for felines (though you won't find any cats roaming the premises today), our tavern has maintained its authentic character throughout changing times.
              </p>
              <p className="mb-6 text-tavern-dark/80">
                For over three decades, we've been a gathering place for neighbors, friends, and visitors seeking genuine Chicago hospitality. Our walls could tell countless stories of friendships formed, celebrations shared, and community bonds strengthened.
              </p>
              <p className="mb-6 text-tavern-dark/80">
                Through the years, we've preserved our commitment to being a true neighborhood establishment – a place where everyone feels welcome and the spirit of old Chicago lives on.
              </p>
            </div>
            <div className="order-first lg:order-last animate-fade-in-right">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-tavern-secondary rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1590437733131-dfad5b863b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Ten Cat Tavern Exterior" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-16 px-4 bg-tavern-light/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-tavern-secondary rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Ten Cat Tavern Interior" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="animate-fade-in-right">
              <SectionHeading
                subtitle="Our Atmosphere"
                title="A Place Where Everyone Belongs"
                alignment="left"
              />
              <p className="mb-6 text-tavern-dark/80">
                Step into Ten Cat Tavern and you'll immediately sense what makes us special. The warm glow of our lighting, the sound of conversations and laughter, the click of pool balls, and the friendly greetings from our staff all contribute to our distinctive atmosphere.
              </p>
              <p className="mb-6 text-tavern-dark/80">
                We've cultivated a space that feels both timeless and comfortable – where first-time visitors quickly become regulars, and regulars become part of our extended family. Our diverse clientele includes longtime Lakeview residents, Chicago newcomers, and visitors from around the world, all finding common ground in our welcoming environment.
              </p>
              <p className="mb-6 text-tavern-dark/80">
                Whether you're seeking lively conversation, friendly competition at the pool tables, or simply a comfortable place to unwind, Ten Cat Tavern offers the authentic Chicago tavern experience you're looking for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Community Spirit"
            title="More Than Just a Bar"
            description="Ten Cat Tavern is proud to be an active part of the Lakeview community, hosting events and fostering connections that strengthen our neighborhood bonds."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-serif font-semibold mb-4">Local Partnerships</h3>
              <p className="text-tavern-dark/80">
                We collaborate with local businesses and organizations to support our community. From fundraisers to neighborhood celebrations, we're committed to Lakeview's vitality.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <h3 className="text-xl font-serif font-semibold mb-4">Regular Events</h3>
              <p className="text-tavern-dark/80">
                Our pool and dart leagues bring people together for friendly competition. These regular events have created lasting friendships and memorable moments over the years.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <h3 className="text-xl font-serif font-semibold mb-4">Neighborhood Legacy</h3>
              <p className="text-tavern-dark/80">
                As Lakeview has evolved over three decades, we've remained a constant – preserving the neighborhood's character while embracing positive changes in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-tavern-dark text-tavern-light tavern-pattern">
        <div className="container mx-auto text-center">
          <SectionHeading
            title="Come Experience Ten Cat Tavern"
            description="We'd love to welcome you to our neighborhood establishment. Stop by for a drink, a game of pool, or to enjoy our friendly atmosphere."
            className="text-tavern-light mx-auto"
          />
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/contact">
              <Button 
                className="bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300"
              >
                Contact Us
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
            <Link to="/schedule-party">
              <Button 
                variant="outline" 
                className="border-tavern-light/30 text-tavern-light hover:bg-tavern-light/10 hover:border-tavern-light/50 button-tavern transition-all duration-300"
              >
                Book a Party
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
