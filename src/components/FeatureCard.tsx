
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "group p-6 rounded-lg transition-all duration-300 hover:shadow-xl bg-white/50 backdrop-blur-sm hover:bg-white/70",
      className
    )}>
      <div className="flex flex-col gap-4">
        <div className="inline-flex p-3 rounded-md bg-tavern-primary/10 text-tavern-primary">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-serif font-semibold group-hover:text-tavern-primary transition-colors">
          {title}
        </h3>
        <p className="text-tavern-dark/70 dark:text-tavern-light/70">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
