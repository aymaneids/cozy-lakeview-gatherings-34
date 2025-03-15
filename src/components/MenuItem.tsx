
import { cn } from "@/lib/utils";

interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
  category?: string;
  isPopular?: boolean;
  className?: string;
}

const MenuItem = ({
  name,
  description,
  price,
  category,
  isPopular = false,
  className,
}: MenuItemProps) => {
  return (
    <div 
      className={cn(
        "p-4 rounded-lg transition-all duration-300 group hover:bg-white/50 hover:shadow-md",
        className
      )}
    >
      <div className="flex justify-between items-start gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-serif font-medium group-hover:text-tavern-primary transition-colors">
              {name}
            </h3>
            {isPopular && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-tavern-primary/10 text-tavern-primary">
                Popular
              </span>
            )}
            {category && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-tavern-secondary/10 text-tavern-secondary">
                {category}
              </span>
            )}
          </div>
          {description && (
            <p className="mt-1 text-tavern-dark/70 text-sm">{description}</p>
          )}
        </div>
        <span className="font-medium text-tavern-primary whitespace-nowrap">
          {price}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
