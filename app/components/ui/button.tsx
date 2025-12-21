import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    // Base styles
    "relative inline-flex items-center justify-center",
    "font-semibold tracking-wide",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
    "active:scale-[0.98]",
    "group",

    // Before pseudo-element for shine effect
    "before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-r",
    "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
    "before:translate-x-[-100%] before:transition-transform before:duration-700",
    "hover:before:translate-x-[100%]",

    // Accessibility
    "aria-disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        // Primary variants
        primary: [
          "bg-gradient-to-r from-primary-600 to-primary-700",
          "text-white shadow-primary hover:shadow-primary-lg",
          "hover:from-primary-500 hover:to-primary-600",
          "before:from-transparent before:via-white/25 before:to-transparent",
        ],
        secondary: [
          "bg-gradient-to-r from-secondary-500 to-secondary-600",
          "text-white shadow-secondary hover:shadow-secondary-lg",
          "hover:from-secondary-400 hover:to-secondary-500",
          "before:from-transparent before:via-white/25 before:to-transparent",
        ],

        // Surface variants
        outline: [
          "border-2 border-primary-300 bg-surface-primary",
          "text-primary-700 hover:bg-primary-50 hover:border-primary-400",
          "shadow-sm hover:shadow-md",
          "before:from-transparent before:via-primary-100/50 before:to-transparent",
        ],
        ghost: [
          "text-neutral-700 hover:text-primary-600 hover:bg-primary-50",
          "shadow-none hover:shadow-sm",
          "before:from-transparent before:via-primary-50/50 before:to-transparent",
        ],

        // Special effects
        glass: [
          "bg-white/10 backdrop-blur-xl border border-white/20",
          "text-white hover:bg-white/20",
          "shadow-glass hover:shadow-glass-sm",
          "before:from-transparent before:via-white/30 before:to-transparent",
        ],
        glassDark: [
          "bg-neutral-900/10 backdrop-blur-xl border border-white/10",
          "text-neutral-100 hover:bg-white/10",
          "shadow-glass hover:shadow-glass-sm",
          "before:from-transparent before:via-white/20 before:to-transparent",
        ],

        // Status variants
        success: [
          "bg-gradient-to-r from-success-500 to-success-600",
          "text-white shadow-success hover:shadow-success-lg",
          "hover:from-success-400 hover:to-success-500",
          "before:from-transparent before:via-white/25 before:to-transparent",
        ],
        warning: [
          "bg-gradient-to-r from-warning-500 to-warning-600",
          "text-white shadow-warning hover:shadow-warning-lg",
          "hover:from-warning-400 hover:to-warning-500",
          "before:from-transparent before:via-white/25 before:to-transparent",
        ],
        error: [
          "bg-gradient-to-r from-error-500 to-error-600",
          "text-white shadow-error hover:shadow-error-lg",
          "hover:from-error-400 hover:to-error-500",
          "before:from-transparent before:via-white/25 before:to-transparent",
        ],

        // Minimal variants
        link: [
          "text-primary-600 hover:text-primary-700 underline-offset-4",
          "hover:underline shadow-none",
          "before:bg-none",
        ],
        minimal: [
          "text-neutral-600 hover:text-neutral-900",
          "bg-transparent hover:bg-neutral-100",
          "shadow-none border-none",
          "before:bg-none",
        ],
      },

      size: {
        xs: [
          "h-8 px-3 text-xs font-medium rounded-lg gap-1.5",
          "min-w-[2rem]",
        ],
        sm: [
          "h-9 px-4 text-sm font-medium rounded-lg gap-2",
          "min-w-[2.5rem]",
        ],
        default: [
          "h-11 px-6 text-base font-medium rounded-xl gap-2.5",
          "min-w-[3rem]",
        ],
        lg: [
          "h-12 px-8 text-lg font-semibold rounded-2xl gap-3",
          "min-w-[3.5rem]",
        ],
        xl: [
          "h-14 px-10 text-xl font-semibold rounded-3xl gap-4",
          "min-w-[4rem]",
        ],
        icon: [
          "h-11 w-11 p-0 rounded-xl",
          "min-w-[2.75rem] min-h-[2.75rem]",
        ],
        "icon-sm": [
          "h-8 w-8 p-0 rounded-lg",
          "min-w-[2rem] min-h-[2rem]",
        ],
        "icon-lg": [
          "h-14 w-14 p-0 rounded-2xl",
          "min-w-[3.5rem] min-h-[3.5rem]",
        ],
      },

      shape: {
        default: "rounded-xl",
        square: "rounded-none",
        pill: "rounded-full",
        blob: "rounded-blob",
        morph: "rounded-morph",
      },

      loading: {
        true: "cursor-wait",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
      shape: "default",
      loading: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    shape,
    loading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    disabled,
    children,
    asChild = false,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, shape, loading }),
          fullWidth && "w-full",
          className
        )}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...props}
      >
        {/* Loading Spinner */}
        {loading && (
          <Loader2
            className="w-4 h-4 animate-spin shrink-0"
            aria-hidden="true"
          />
        )}

        {/* Left Icon */}
        {leftIcon && !loading && (
          <span className="shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}

        {/* Content */}
        <span className={cn(
          "relative z-10 truncate",
          loading && "ml-2",
          leftIcon && !loading && "ml-2",
          rightIcon && "mr-2"
        )}>
          {children}
        </span>

        {/* Right Icon */}
        {rightIcon && !loading && (
          <span className="shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}

        {/* Screen Reader Loading Text */}
        {loading && (
          <span className="sr-only">Loading...</span>
        )}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
