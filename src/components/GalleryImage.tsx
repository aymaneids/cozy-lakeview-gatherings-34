
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GalleryImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  category?: string;
  className?: string;
}

const GalleryImage = ({ src, alt, category, className, ...props }: GalleryImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={cn(
          "rounded-lg overflow-hidden cursor-pointer image-hover transition-all duration-300 hover:shadow-lg",
          className
        )}
        onClick={() => setIsOpen(true)}
        {...props}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover aspect-[3/2]"
          loading="lazy"
        />
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-contain max-h-[80vh]"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryImage;
