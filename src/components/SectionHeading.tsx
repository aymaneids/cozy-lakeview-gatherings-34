
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
  alignment?: "left" | "center" | "right";
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  className,
  alignment = "center",
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-2xl", alignmentClasses[alignment], className)}>
      {subtitle && (
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-tavern-primary bg-tavern-primary/10 rounded-full mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-tavern-dark/70 dark:text-tavern-light/70 max-w-xl">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
