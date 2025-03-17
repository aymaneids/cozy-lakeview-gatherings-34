
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
            backgroundImage: `url(https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80)` 
          }}
        ></div>
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-tavern-light z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold animate-fade-in">About The Amazing Paw</h1>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <SectionHeading
                subtitle="Our History"
                title="15 Years of Professional Pet Training"
                alignment="left"
              />
              <p className="mb-6 text-tavern-dark/80">
                Founded in 2009, The Amazing Paw quickly established itself as a leading provider of dog training and pet care services. Started by our head trainer with a passion for animal behavior and psychology, our company has grown from a small home-based business to a full-service pet care facility.
              </p>
              <p className="mb-6 text-tavern-dark/80">
                For over a decade, we've been helping pet owners build stronger relationships with their furry companions through education, training, and personalized care. Our team of certified trainers has worked with thousands of pets, turning challenging behaviors into positive experiences.
              </p>
              <p className="mb-6 text-tavern-dark/80">
                Through the years, we've maintained our commitment to using positive reinforcement techniques and the most up-to-date, science-based training methods that prioritize your pet's well-being and happiness.
              </p>
            </div>
            <div className="order-first lg:order-last animate-fade-in-right">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-tavern-secondary rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Pet trainer with dog" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 bg-tavern-light/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-tavern-secondary rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Dog learning commands" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="animate-fade-in-right">
              <SectionHeading
                subtitle="Our Philosophy"
                title="Positive Training for Happy Pets"
                alignment="left"
              />
              <p className="mb-6 text-tavern-dark/80">
                At The Amazing Paw, we believe that effective training is built on a foundation of trust, consistency, and positive reinforcement. Our approach focuses on rewarding good behavior rather than punishing unwanted actions, creating a learning environment where your pet can thrive.
              </p>
              <p className="mb-6 text-tavern-dark/80">
                We understand that each pet has a unique personality, learning style, and set of needs. That's why we customize our training programs to suit individual pets and their families, ensuring the best possible outcomes and a stronger human-animal bond.
              </p>
              <p className="mb-6 text-tavern-dark/80">
                Our certified trainers stay current with the latest research and techniques in animal behavior, allowing us to offer the most effective, humane, and scientifically-sound training methods available today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Team"
            title="Meet Our Certified Trainers"
            description="The Amazing Paw is proud to have a team of experienced, certified professionals who are passionate about helping pets and their owners live better lives together."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-serif font-semibold mb-4">Continuous Education</h3>
              <p className="text-tavern-dark/80">
                Our trainers regularly attend workshops, seminars, and certification programs to stay at the forefront of pet training and behavior modification techniques.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <h3 className="text-xl font-serif font-semibold mb-4">Certified Experts</h3>
              <p className="text-tavern-dark/80">
                Every member of our training team holds multiple certifications from recognized organizations in the pet training industry, ensuring the highest standard of care.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <h3 className="text-xl font-serif font-semibold mb-4">Passionate About Pets</h3>
              <p className="text-tavern-dark/80">
                Beyond their professional qualifications, our team members are dedicated animal lovers who bring genuine care and enthusiasm to every training session and pet interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-tavern-dark text-tavern-light tavern-pattern">
        <div className="container mx-auto text-center">
          <SectionHeading
            title="Experience The Amazing Paw Difference"
            description="We'd love to welcome you and your pet to our training family. Contact us today to schedule a consultation or book a training session."
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
                Book a Training
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
