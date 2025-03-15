
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import MenuItem from "@/components/MenuItem";
import { Beer, Wine, Cocktail, Coffee } from "lucide-react";

const Menu = () => {
  const beers = [
    { name: "Half Acre Daisy Cutter", description: "Pale Ale, Chicago, IL (5.2% ABV)", price: "$7" },
    { name: "Revolution Anti-Hero", description: "IPA, Chicago, IL (6.7% ABV)", price: "$7" },
    { name: "Guinness", description: "Irish Dry Stout, Ireland (4.2% ABV)", price: "$6" },
    { name: "Stella Artois", description: "Belgian Pilsner (5.0% ABV)", price: "$6" },
    { name: "Blue Moon", description: "Belgian-Style Wheat Ale (5.4% ABV)", price: "$6" },
    { name: "Miller Lite", description: "American Light Lager (4.2% ABV)", price: "$5" },
    { name: "Bud Light", description: "American Light Lager (4.2% ABV)", price: "$5" },
    { name: "PBR", description: "American Lager (4.8% ABV)", price: "$4" }
  ];

  const wines = [
    { name: "House Red", description: "Cabernet Sauvignon", price: "$8" },
    { name: "House White", description: "Chardonnay", price: "$8" },
    { name: "House Rosé", description: "Dry Rosé", price: "$8" }
  ];

  const cocktails = [
    { name: "Classic Old Fashioned", description: "Bourbon, sugar, bitters, orange twist", price: "$10" },
    { name: "Moscow Mule", description: "Vodka, ginger beer, lime juice", price: "$9" },
    { name: "Whiskey Sour", description: "Bourbon, lemon juice, simple syrup", price: "$9" },
    { name: "Ten Cat Manhattan", description: "Rye whiskey, sweet vermouth, bitters", price: "$11" },
    { name: "Gin & Tonic", description: "Gin, tonic water, lime", price: "$8" },
    { name: "Margarita", description: "Tequila, triple sec, lime juice", price: "$9" }
  ];

  const nonAlcoholic = [
    { name: "Soft Drinks", description: "Coke, Diet Coke, Sprite, Ginger Ale", price: "$3" },
    { name: "Club Soda", description: "With lime on request", price: "$2" },
    { name: "Red Bull", description: "Energy Drink", price: "$5" },
    { name: "Coffee", description: "Regular or Decaf", price: "$3" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80)` 
          }}
        ></div>
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-tavern-light z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold animate-fade-in">Drinks Menu</h1>
        </div>
      </section>

      {/* Beer Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Beer size={32} className="text-tavern-primary mr-4" />
            <SectionHeading
              title="Beer Selection"
              description="Enjoy our selection of local Chicago brews and classic favorites."
              alignment="left"
              className="mb-0"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beers.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          <p className="mt-6 text-tavern-dark/70 italic">
            *Ask your bartender about our rotating seasonal and local draft options.
          </p>
        </div>
      </section>

      {/* Wine Section */}
      <section className="py-16 px-4 bg-tavern-light/50">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Wine size={32} className="text-tavern-primary mr-4" />
            <SectionHeading
              title="Wine List"
              description="A small but carefully selected wine list to complement your evening."
              alignment="left"
              className="mb-0"
            />
          </div>
          <div className="max-w-2xl">
            {wines.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          <p className="mt-6 text-tavern-dark/70 italic">
            *Wines available by the glass or bottle. Bottle service available for $30.
          </p>
        </div>
      </section>

      {/* Cocktails Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Cocktail size={32} className="text-tavern-primary mr-4" />
            <SectionHeading
              title="Signature Cocktails"
              description="Classic and signature cocktails crafted by our experienced bartenders."
              alignment="left"
              className="mb-0"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cocktails.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Non-Alcoholic Section */}
      <section className="py-16 px-4 bg-tavern-light/50">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Coffee size={32} className="text-tavern-primary mr-4" />
            <SectionHeading
              title="Non-Alcoholic Options"
              description="Refreshing non-alcoholic beverages for all to enjoy."
              alignment="left"
              className="mb-0"
            />
          </div>
          <div className="max-w-2xl">
            {nonAlcoholic.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Special Note */}
      <section className="py-16 px-4 bg-tavern-dark text-tavern-light tavern-pattern">
        <div className="container mx-auto text-center">
          <SectionHeading
            title="Happy Hour Specials"
            description="Visit our Specials page for our current happy hour deals and daily specials."
            className="text-tavern-light mx-auto"
          />
          <Button
            className="mt-8 bg-tavern-primary hover:bg-tavern-primary/90 text-tavern-light button-tavern transition-all duration-300"
            onClick={() => window.location.href = "/specials"}
          >
            View Current Specials
          </Button>
          <p className="mt-8 text-tavern-light/80 max-w-2xl mx-auto">
            *Menu items and prices subject to change. Please ask your bartender for the most current offerings.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Menu;
