
import SectionHeading from "@/components/SectionHeading";
import GalleryImage from "@/components/GalleryImage";

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1577372970039-2ac351969c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      alt: "Bar counter with stools",
      category: "interior"
    },
    {
      src: "https://images.unsplash.com/photo-1605030753481-32656e414f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      alt: "Cozy seating area",
      category: "interior"
    },
    {
      src: "https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      alt: "Bartender pouring drinks",
      category: "people"
    },
    {
      src: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Live music performance",
      category: "events"
    },
    {
      src: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Friends enjoying drinks",
      category: "people"
    },
    {
      src: "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      alt: "Pool table action",
      category: "activities"
    },
    {
      src: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Dart board close-up",
      category: "activities"
    },
    {
      src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Bar exterior at night",
      category: "exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      alt: "Craft cocktail preparation",
      category: "drinks"
    },
    {
      src: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      alt: "Beer taps lineup",
      category: "drinks"
    },
    {
      src: "https://images.unsplash.com/photo-1616279969856-759f14129486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Private party celebration",
      category: "events"
    },
    {
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Customers playing pool",
      category: "activities"
    }
  ];

  const categories = ["all", ...new Set(galleryImages.map(img => img.category))];

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
          <h1 className="text-4xl md:text-5xl font-serif font-bold animate-fade-in">Photo Gallery</h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Atmosphere"
            title="Experience Ten Cat Tavern"
            description="Browse through our gallery to get a feel for our unique tavern atmosphere, from our cozy interior to lively events."
            className="mb-12"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 hover:bg-tavern-primary hover:text-tavern-light focus:outline-none focus:ring-2 focus:ring-tavern-primary/50 bg-tavern-light/50"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <GalleryImage
                key={index}
                src={image.src}
                alt={image.alt}
                category={image.category}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 px-4 bg-tavern-light/50">
        <div className="container mx-auto text-center">
          <SectionHeading
            subtitle="Social Media"
            title="Follow Us on Instagram"
            description="Stay updated with our latest events, specials, and happenings by following us on Instagram."
            className="mb-8"
          />
          <a 
            href="https://www.instagram.com/tencattavern/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-tavern-primary text-tavern-light rounded-lg hover:bg-tavern-primary/90 transition-all duration-300"
          >
            @tencattavern
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
