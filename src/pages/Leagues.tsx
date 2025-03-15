
import { Link } from "react-router-dom";
import { Target, Calendar, Trophy, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";

const Leagues = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1588180453832-4d68df97d196?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)` 
          }}
        ></div>
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-tavern-light z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold animate-fade-in">Pool & Dart Leagues</h1>
        </div>
      </section>

      {/* Pool Leagues Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-left">
              <SectionHeading
                subtitle="Pool Leagues"
                title="Join Our Competitive Pool Leagues"
                alignment="left"
              />
              <p className="mb-6 text-tavern-dark/80">
                Ten Cat Tavern hosts regular pool leagues for players of all skill levels. Our leagues are a great way to meet fellow pool enthusiasts, improve your game, and enjoy some friendly competition.
              </p>
              <p className="mb-6 text-tavern-dark/80">
                Whether you're a seasoned player or just starting out, our leagues offer a welcoming environment to develop your skills and forge new friendships.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar size={24} className="text-tavern-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">League Schedule</h3>
                    <p className="text-tavern-dark/70">Tuesdays and Thursdays, 7 PM - 10 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users size={24} className="text-tavern-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Team Size</h3>
                    <p className="text-tavern-dark/70">4-6 players per team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-right">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-tavern-secondary rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                  alt="Pool players at Ten Cat Tavern" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dart Leagues Section */}
      <section className="py-16 px-4 bg-tavern-light/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-tavern-secondary rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1545158535-c3f7168c28b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Dart players at Ten Cat Tavern" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="animate-fade-in-right">
              <SectionHeading
                subtitle="Dart Leagues"
                title="Take Aim in Our Dart Leagues"
                alignment="left"
              />
              <p className="mb-6 text-tavern-dark/80">
                Sharpen your aim and join our dart leagues at Ten Cat Tavern. We offer a variety of dart league options, from casual to competitive, ensuring there's something for everyone.
              </p>
              <p className="mb-6 text-tavern-dark/80">
                Our dart leagues are affiliated with the Chicago Dart League, providing structured tournaments and opportunities to compete at higher levels for those interested.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar size={24} className="text-tavern-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">League Schedule</h3>
                    <p className="text-tavern-dark/70">Mondays and Wednesdays, 7 PM - 10 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target size={24} className="text-tavern-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Game Types</h3>
                    <p className="text-tavern-dark/70">Cricket, 301, 501, and more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* League Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Benefits"
            title="Why Join Our Leagues?"
            description="Discover the advantages of participating in our pool and dart leagues at Ten Cat Tavern."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Trophy}
              title="Competitive Fun"
              description="Enjoy friendly competition and the chance to win prizes in our seasonal tournaments."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={Users}
              title="Social Connection"
              description="Meet new people and forge friendships with fellow pool and dart enthusiasts."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={Target}
              title="Skill Development"
              description="Improve your game through regular practice and competition with players of varying skill levels."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={Calendar}
              title="Consistent Schedule"
              description="Enjoy a regular night out with structured gameplay and organized competitions."
              className="animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 px-4 bg-tavern-dark text-tavern-light tavern-pattern">
        <div className="container mx-auto text-center">
          <SectionHeading
            title="Ready to Join a League?"
            description="Contact us to register for our upcoming league seasons or to learn more about our league options."
            className="text-tavern-light mx-auto"
          />
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/contact">
              <Button
                className="bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300"
              >
                Contact Us to Register
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-tavern-light/30 text-tavern-light hover:bg-tavern-light/10 hover:border-tavern-light/50 button-tavern transition-all duration-300"
              onClick={() => window.location.href = 'mailto:tencattavern@gmail.com?subject=League Registration'}
            >
              Email for Information
            </Button>
          </div>
          <p className="mt-8 text-tavern-light/80">
            Current league members: Check with your league coordinator for schedules and standings.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Leagues;
