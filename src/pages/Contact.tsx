
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1544568100-847510b37020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)` 
          }}
        ></div>
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-tavern-light z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold animate-fade-in">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <SectionHeading
                subtitle="Get In Touch"
                title="We'd Love to Hear From You"
                description="Have questions about our training programs? Interested in scheduling a consultation? We're here to help."
                alignment="left"
                className="mb-8"
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-tavern-primary/10 text-tavern-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-tavern-dark/70">
                      <a href="tel:5551234567" className="hover:text-tavern-primary transition-colors">
                        (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-tavern-primary/10 text-tavern-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-tavern-dark/70">
                      <a href="mailto:info@theamazingpaw.com" className="hover:text-tavern-primary transition-colors">
                        info@theamazingpaw.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-tavern-primary/10 text-tavern-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Address</h3>
                    <p className="text-tavern-dark/70">
                      123 Main St<br />
                      Chicago, Illinois 60613
                    </p>
                    <a 
                      href="https://maps.google.com/?q=123+Main+St,+Chicago,+Illinois+60613" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-tavern-primary hover:underline mt-2 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-tavern-primary/10 text-tavern-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Hours</h3>
                    <p className="text-tavern-dark/70">
                      Monday - Friday: 9am - 7pm<br />
                      Saturday: 10am - 5pm<br />
                      Sunday: 12pm - 4pm
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-tavern-primary/10 rounded-lg">
                <h3 className="text-lg font-medium mb-3">For Training Inquiries</h3>
                <p className="text-tavern-dark/70 mb-3">
                  Interested in our professional dog training programs? We offer personalized consultations to discuss your pet's specific needs.
                </p>
                <a 
                  href="/schedule-party" 
                  className="text-tavern-primary hover:underline"
                >
                  Learn more about our training programs
                </a>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <SectionHeading
                  title="Send Us a Message"
                  description="Fill out the form below and we'll get back to you as soon as possible."
                  alignment="left"
                  className="mb-6"
                />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-tavern-light/50">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Location"
            title="Find Us in Chicago"
            description="We're conveniently located in the heart of the city, easily accessible by public transportation."
            className="mb-12"
          />
          <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33858251818!2d-87.84192066899418!3d41.83339151654435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1690228743255!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Amazing Paw Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
