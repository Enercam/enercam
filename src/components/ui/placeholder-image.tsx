import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export function PlaceholderImage({ className, text = "Image Placeholder", ...props }: PlaceholderImageProps) {
  return (
    <div 
      className={cn(
        "flex h-full w-full flex-col items-center justify-center bg-slate-100 text-muted-foreground animate-in fade-in zoom-in-95 duration-500", 
        className
      )} 
      {...props}
    >
      <ImageIcon className="h-10 w-10 opacity-20 mb-2" />
      <span className="text-sm font-medium opacity-40">{text}</span>
    </div>
  );
}
