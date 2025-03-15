
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TestimonialProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  location?: string;
  className?: string;
}

const Testimonial = ({
  quote,
  author,
  location,
  className,
  ...props
}: TestimonialProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-lg bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="mb-4 text-4xl text-tavern-primary opacity-20">"</div>
      <p className="mb-6 italic text-tavern-dark/80">{quote}</p>
      <div className="flex items-end justify-between">
        <div>
          <div className="font-serif font-medium">{author}</div>
          {location && (
            <div className="text-tavern-dark/60 text-sm">{location}</div>
          )}
        </div>
        <div className="text-4xl text-tavern-primary opacity-20">"</div>
      </div>
    </div>
  );
};

export default Testimonial;
