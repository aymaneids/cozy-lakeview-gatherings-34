
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ImageWithOverlayProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

const ImageWithOverlay = ({
  src,
  alt,
  className,
  imageClassName,
  overlayClassName,
  children,
  ...props
}: ImageWithOverlayProps) => {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)} {...props}>
      <div className="image-hover">
        <img
          src={src}
          alt={alt}
          className={cn("w-full h-full object-cover", imageClassName)}
          loading="lazy"
        />
      </div>
      {children && (
        <div className={cn(
          "absolute inset-0 flex flex-col items-center justify-center bg-tavern-dark/30 backdrop-blur-[2px]",
          overlayClassName
        )}>
          {children}
        </div>
      )}
    </div>
  );
};

export default ImageWithOverlay;
