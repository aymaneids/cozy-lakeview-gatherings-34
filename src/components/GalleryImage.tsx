
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GalleryImage = ({ src, alt, className }: GalleryImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={cn(
          "rounded-lg overflow-hidden cursor-pointer image-hover transition-all duration-300 hover:shadow-lg",
          className
        )}
        onClick={() => setIsOpen(true)}
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
