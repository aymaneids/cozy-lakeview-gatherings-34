
import { cn } from "@/lib/utils";

interface SpecialCardProps {
  day: string;
  title: string;
  description: string;
  price?: string;
  className?: string;
  isHighlighted?: boolean;
}

const SpecialCard = ({
  day,
  title,
  description,
  price,
  className,
  isHighlighted = false,
}: SpecialCardProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-lg transition-all duration-300 hover:shadow-xl bg-white/50 backdrop-blur-sm hover:bg-white/70",
        isHighlighted && "border-2 border-tavern-primary relative",
        className
      )}
    >
      {isHighlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-tavern-primary text-tavern-light text-xs font-medium rounded-full">
          Featured Special
        </div>
      )}
      <div className="text-tavern-secondary font-serif font-semibold mb-1">{day}</div>
      <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
      <p className="text-tavern-dark/70 mb-3">{description}</p>
      {price && (
        <div className="text-tavern-primary font-medium">{price}</div>
      )}
    </div>
  );
};

export default SpecialCard;
