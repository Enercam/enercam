import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  [
    // Base styles
    "relative overflow-hidden",
    "bg-surface-primary border border-neutral-200/50",
    "text-neutral-900",
    "transition-all duration-300 ease-out",
    "focus-within:ring-2 focus-within:ring-primary-500/20 focus-within:ring-offset-2",

    // Hover effects
    "hover:shadow-lg hover:shadow-primary/5",
    "hover:border-neutral-300/50",
    "hover:-translate-y-0.5",

    // Accessibility
    "focus:outline-none",
  ],
  {
    variants: {
      variant: {
        default: [
          "shadow-sm",
        ],
        elevated: [
          "shadow-md border-neutral-300/30",
          "hover:shadow-xl hover:shadow-primary/10",
        ],
        outlined: [
          "border-2 border-neutral-300 bg-transparent",
          "hover:border-primary-300 hover:bg-primary-50/50",
          "shadow-none hover:shadow-none",
        ],
        glass: [
          "bg-white/70 backdrop-blur-xl border-white/20",
          "shadow-glass hover:shadow-glass-sm",
          "hover:bg-white/80",
        ],
        glassDark: [
          "bg-neutral-900/70 backdrop-blur-xl border-white/10",
          "text-white shadow-glass hover:shadow-glass-sm",
          "hover:bg-neutral-900/80",
        ],
        gradient: [
          "bg-gradient-to-br from-primary-50 to-secondary-50",
          "border-primary-200/50 shadow-primary/10",
          "hover:shadow-primary/20",
        ],
        minimal: [
          "bg-transparent border-transparent shadow-none",
          "hover:bg-neutral-50/50 hover:shadow-sm",
        ],
      },

      size: {
        sm: "rounded-xl",
        default: "rounded-2xl",
        lg: "rounded-3xl",
        xl: "rounded-[2rem]",
      },

      padding: {
        none: "",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10",
      },

      interactive: {
        true: [
          "cursor-pointer select-none",
          "active:scale-[0.99] active:transition-transform active:duration-75",
        ],
        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      padding: "default",
      interactive: false,
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    variant,
    size,
    padding,
    interactive,
    asChild = false,
    role,
    tabIndex,
    ...props
  }, ref) => {
    const Component = asChild ? "div" : "div"

    return (
      <Component
        ref={ref}
        className={cn(cardVariants({ variant, size, padding, interactive }), className)}
        role={interactive ? "button" : role}
        tabIndex={interactive ? 0 : tabIndex}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-2 pb-4",
      "border-b border-neutral-100",
      className
    )}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-display font-bold text-neutral-900",
      "leading-tight tracking-tight",
      "group-hover:text-primary-600 transition-colors duration-200",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-base text-neutral-600 leading-relaxed",
      "group-hover:text-neutral-700 transition-colors duration-200",
      className
    )}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex-1",
      className
    )}
    {...props}
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between pt-6",
      "border-t border-neutral-100",
      className
    )}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const CardBadge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
      "bg-primary-100 text-primary-800",
      className
    )}
    {...props}
  />
))
CardBadge.displayName = "CardBadge"

const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    src?: string
    alt?: string
    aspectRatio?: 'square' | 'video' | 'wide'
  }
>(({ className, src, alt, aspectRatio = 'video', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-t-[inherit]",
      {
        'aspect-square': aspectRatio === 'square',
        'aspect-video': aspectRatio === 'video',
        'aspect-[16/9]': aspectRatio === 'wide',
      },
      className
    )}
    {...props}
  >
    {src && (
      <img
        src={src}
        alt={alt || ''}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
))
CardImage.displayName = "CardImage"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardBadge,
  CardImage,
  cardVariants
}
