
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SpecialCard from "@/components/SpecialCard";

const Specials = () => {
  const dailySpecials = [
    {
      day: "Monday",
      title: "Industry Night",
      description: "Service industry workers receive 20% off all drinks with valid ID.",
      highlight: "$4 Drafts"
    },
    {
      day: "Tuesday",
      title: "Pool League Night",
      description: "Join our pool league or come watch the competition!",
      highlight: "$5 Well Drinks"
    },
    {
      day: "Wednesday",
      title: "Whiskey Wednesday",
      description: "Explore our selection of premium whiskeys at special prices.",
      highlight: "$2 Off Whiskey"
    },
    {
      day: "Thursday",
      title: "Thirsty Thursday",
      description: "Get ready for the weekend with discounted drink specials all night.",
      highlight: "$5 Beer & Shot"
    },
    {
      day: "Friday",
      title: "TGIF Happy Hour",
      description: "Kick off your weekend with our extended happy hour from 4-7pm.",
      highlight: "$6 Cocktails"
    },
    {
      day: "Saturday",
      title: "Saturday Night Special",
      description: "Weekend celebration with DJ or live music on select nights.",
      highlight: "$15 Buckets"
    },
    {
      day: "Sunday",
      title: "Sunday Funday",
      description: "Relax and unwind with all-day drink specials.",
      highlight: "$5 Bloody Marys"
    }
  ];

  const happyHour = {
    days: "Monday - Friday",
    time: "4pm - 7pm",
    specials: [
      "$1 off all draft beers",
      "$5 well drinks",
      "$6 house wine",
      "$5 rail whiskey shots"
    ]
  };

  const monthlyEvents = [
    {
      date: "First Thursday",
      title: "Trivia Night",
      description: "Test your knowledge with our monthly trivia competition. Prizes for the top teams!"
    },
    {
      date: "Second Friday",
      title: "Local Band Showcase",
      description: "Featuring different local musicians each month. Check our Instagram for this month's lineup."
    },
    {
      date: "Last Saturday",
      title: "Beer Tasting",
      description: "Sample new and seasonal craft beers from local breweries."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)` 
          }}
        ></div>
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-tavern-light z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold animate-fade-in">Specials & Events</h1>
        </div>
      </section>

      {/* Happy Hour Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-tavern-primary/10 p-8 rounded-lg max-w-4xl mx-auto">
            <SectionHeading
              subtitle="Daily Deals"
              title="Happy Hour Specials"
              className="mb-6"
            />
            <div className="mb-6">
              <p className="text-xl font-serif mb-2">
                <span className="font-medium">{happyHour.days}</span> | <span className="text-tavern-primary">{happyHour.time}</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {happyHour.specials.map((special, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 bg-white/50 backdrop-blur-sm rounded-md"
                  >
                    <div className="w-2 h-2 rounded-full bg-tavern-primary mr-3"></div>
                    <p>{special}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-tavern-dark/70 text-center italic">
              *Happy Hour specials not available during private events.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Specials */}
      <section className="py-16 px-4 bg-tavern-light/50">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Weekly Offerings"
            title="Daily Drink Specials"
            description="There's something special happening every day at Ten Cat Tavern!"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dailySpecials.map((special, index) => (
              <SpecialCard
                key={index}
                day={special.day}
                title={special.title}
                description={special.description}
                highlight={special.highlight}
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Monthly Calendar"
            title="Recurring Events"
            description="Mark your calendar for these monthly happenings at Ten Cat Tavern."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monthlyEvents.map((event, index) => (
              <div 
                key={index} 
                className="p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="text-tavern-primary mr-3" size={24} />
                  <h3 className="text-xl font-serif font-medium">{event.date}</h3>
                </div>
                <h4 className="text-lg font-medium mb-2 text-tavern-primary">{event.title}</h4>
                <p className="text-tavern-dark/80">{event.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-tavern-dark/80 max-w-2xl mx-auto mb-6">
              Follow us on Instagram for the latest updates on special events, one-time happenings, and seasonal celebrations.
            </p>
            <a 
              href="https://www.instagram.com/tencattavern/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-tavern-primary text-tavern-light rounded-lg hover:bg-tavern-primary/90 transition-all duration-300"
            >
              @tencattavern
            </a>
          </div>
        </div>
      </section>

      {/* Private Events CTA */}
      <section className="py-16 px-4 bg-tavern-dark text-tavern-light tavern-pattern">
        <div className="container mx-auto text-center">
          <SectionHeading
            title="Host Your Own Event"
            description="Planning a birthday, meet-up, or special celebration? Ten Cat Tavern is the perfect venue."
            className="text-tavern-light mx-auto"
          />
          <Link 
            to="/schedule-party"
            className="inline-block mt-8 px-6 py-3 bg-tavern-primary text-tavern-light rounded-lg hover:bg-tavern-primary/90 transition-all duration-300"
          >
            Book Your Party
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Specials;
