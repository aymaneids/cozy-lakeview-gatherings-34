
import { Link } from "react-router-dom";
import { Calendar, Users, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PartyRequestForm from "@/components/PartyRequestForm";
import Testimonial from "@/components/Testimonial";

const ScheduleParty = () => {
  const testimonials = [
    {
      quote: "Ten Cat was the perfect venue for our team's holiday party. The staff was incredibly accommodating, and everyone had a blast playing pool and enjoying the atmosphere.",
      author: "Sarah Johnson",
      location: "Office Manager, Chicago Tech"
    },
    {
      quote: "We've hosted our birthday celebrations at Ten Cat for years. It's always a hit with our friends, and the space is perfect for groups. Highly recommend!",
      author: "Michael Rodriguez",
      location: "Lakeview Resident"
    },
    {
      quote: "When I was planning my goodbye party before moving, Ten Cat was my first choice. The casual vibe and great service made for an unforgettable night.",
      author: "Emma Chen",
      location: "Former Chicago Resident"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)` 
          }}
        ></div>
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-tavern-light z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold animate-fade-in">Host Your Perfect Party</h1>
        </div>
      </section>

      {/* Party Info Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <SectionHeading
                subtitle="Event Hosting"
                title="Host Your Perfect Party at Ten Cat Tavern!"
                alignment="left"
              />
              <p className="mb-6 text-tavern-dark/80">
                Looking for a unique venue for your next celebration? Ten Cat Tavern offers the perfect combination of casual atmosphere and private space for memorable events.
              </p>
              <p className="mb-6 text-tavern-dark/80">
                Whether you're planning a birthday party, company gathering, farewell celebration, or just a night out with friends, our venue can accommodate your needs. With pool tables, a full bar, and our friendly staff, your guests will enjoy an authentic Chicago tavern experience.
              </p>
              <p className="mb-6 text-tavern-dark/80">
                We specialize in groups of 15-50 people and can work with you to customize your event. Reserve your spot today by filling out our request form or contacting us directly!
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar size={24} className="text-tavern-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Flexible Scheduling</h3>
                    <p className="text-tavern-dark/70">Available for bookings most days – contact us for specific date availability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users size={24} className="text-tavern-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Group Size</h3>
                    <p className="text-tavern-dark/70">Ideal for groups of 15-50 people</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-tavern-secondary rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Party at Ten Cat Tavern" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-16 px-4 bg-tavern-light/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <SectionHeading
                subtitle="Book Your Event"
                title="Party Request Form"
                description="Complete the form below to request a party reservation. Our team will contact you to confirm details and answer any questions."
                alignment="left"
                className="mb-8"
              />
              <PartyRequestForm />
            </div>
            <div className="lg:pl-8 animate-fade-in-right">
              <SectionHeading
                subtitle="Customer Experiences"
                title="What Our Party Hosts Say"
                alignment="left"
                className="mb-8"
              />
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Testimonial
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    location={testimonial.location}
                    className="animate-fade-in"
                    style={{ animationDelay: `${200 * (index + 1)}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Planning Details"
            title="What to Know When Planning Your Party"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-serif font-semibold mb-4">Food Options</h3>
              <p className="text-tavern-dark/80 mb-4">
                While we focus on providing excellent drinks and atmosphere, we're happy to discuss outside food options for your party. Many groups arrange catering or food delivery for their events.
              </p>
              <p className="text-tavern-dark/80">
                Our staff can help coordinate timing and setup for any food arrangements you make.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <h3 className="text-xl font-serif font-semibold mb-4">Drink Packages</h3>
              <p className="text-tavern-dark/80 mb-4">
                We offer flexible drink arrangements for parties, from open bar to drink tickets to cash bar options. Our team can work with you to find the right fit for your budget and preferences.
              </p>
              <p className="text-tavern-dark/80">
                Custom drink menus or featured cocktails can be arranged for special events.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <h3 className="text-xl font-serif font-semibold mb-4">Reservations & Deposits</h3>
              <p className="text-tavern-dark/80 mb-4">
                To secure your party date, we typically require a deposit which will be applied to your final bill. The amount depends on group size and specific arrangements.
              </p>
              <p className="text-tavern-dark/80">
                We recommend booking at least 2-3 weeks in advance, especially for weekend events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-tavern-dark text-tavern-light tavern-pattern">
        <div className="container mx-auto text-center">
          <SectionHeading
            title="Ready to Plan Your Party?"
            description="Have questions or want to discuss your event in detail? Our team is here to help make your celebration perfect."
            className="text-tavern-light mx-auto"
          />
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/contact">
              <button className="px-6 py-3 bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light rounded-lg font-medium transition-all duration-300 flex items-center gap-2 button-tavern">
                Contact Us Directly
                <ChevronRight size={16} />
              </button>
            </Link>
            <a href="tel:7739355377">
              <button className="px-6 py-3 border border-tavern-light/30 text-tavern-light hover:bg-tavern-light/10 hover:border-tavern-light/50 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 button-tavern">
                Call (773) 935-5377
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleParty;
