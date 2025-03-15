
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SpecialCardProps extends HTMLAttributes<HTMLDivElement> {
  day: string;
  title: string;
  description: string;
  price?: string;
  highlight?: string;
  className?: string;
  isHighlighted?: boolean;
}

const SpecialCard = ({
  day,
  title,
  description,
  price,
  highlight,
  className,
  isHighlighted = false,
  ...props
}: SpecialCardProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-lg transition-all duration-300 hover:shadow-xl bg-white/50 backdrop-blur-sm hover:bg-white/70",
        isHighlighted && "border-2 border-tavern-primary relative",
        className
      )}
      {...props}
    >
      {isHighlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-tavern-primary text-tavern-light text-xs font-medium rounded-full">
          Featured Special
        </div>
      )}
      <div className="text-tavern-secondary font-serif font-semibold mb-1">{day}</div>
      <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
      <p className="text-tavern-dark/70 mb-3">{description}</p>
      {(price || highlight) && (
        <div className="text-tavern-primary font-medium">{price || highlight}</div>
      )}
    </div>
  );
};

export default SpecialCard;
