import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  [
    // Base styles
    "inline-flex items-center font-semibold transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:ring-offset-2",

    // Spacing and sizing
    "px-3 py-1 text-xs leading-none",

    // Interactive states
    "hover:scale-105 active:scale-95",
  ],
  {
    variants: {
      variant: {
        // Solid variants
        primary: [
          "bg-primary-500 text-white border border-primary-600",
          "hover:bg-primary-600 hover:border-primary-700",
          "shadow-sm hover:shadow-primary/20",
        ],
        secondary: [
          "bg-secondary-500 text-white border border-secondary-600",
          "hover:bg-secondary-600 hover:border-secondary-700",
          "shadow-sm hover:shadow-secondary/20",
        ],
        success: [
          "bg-success-500 text-white border border-success-600",
          "hover:bg-success-600 hover:border-success-700",
          "shadow-sm hover:shadow-success/20",
        ],
        warning: [
          "bg-warning-500 text-white border border-warning-600",
          "hover:bg-warning-600 hover:border-warning-700",
          "shadow-sm hover:shadow-warning/20",
        ],
        error: [
          "bg-error-500 text-white border border-error-600",
          "hover:bg-error-600 hover:border-error-700",
          "shadow-sm hover:shadow-error/20",
        ],

        // Outlined variants
        "primary-outline": [
          "bg-transparent text-primary-600 border border-primary-300",
          "hover:bg-primary-50 hover:border-primary-400",
        ],
        "secondary-outline": [
          "bg-transparent text-secondary-600 border border-secondary-300",
          "hover:bg-secondary-50 hover:border-secondary-400",
        ],
        "success-outline": [
          "bg-transparent text-success-600 border border-success-300",
          "hover:bg-success-50 hover:border-success-400",
        ],
        "warning-outline": [
          "bg-transparent text-warning-600 border border-warning-300",
          "hover:bg-warning-50 hover:border-warning-400",
        ],
        "error-outline": [
          "bg-transparent text-error-600 border border-error-300",
          "hover:bg-error-50 hover:border-error-400",
        ],

        // Subtle variants
        "primary-subtle": [
          "bg-primary-100 text-primary-800 border border-primary-200",
          "hover:bg-primary-200 hover:border-primary-300",
        ],
        "secondary-subtle": [
          "bg-secondary-100 text-secondary-800 border border-secondary-200",
          "hover:bg-secondary-200 hover:border-secondary-300",
        ],
        "neutral-subtle": [
          "bg-neutral-100 text-neutral-800 border border-neutral-200",
          "hover:bg-neutral-200 hover:border-neutral-300",
        ],

        // Special effects
        glass: [
          "bg-white/20 backdrop-blur-xl text-white border border-white/30",
          "hover:bg-white/30 hover:border-white/40",
          "shadow-glass-sm",
        ],
        gradient: [
          "bg-gradient-to-r from-primary-500 to-secondary-500 text-white",
          "border border-primary-600 hover:border-primary-700",
          "shadow-sm hover:shadow-primary/20",
        ],
      },

      size: {
        xs: "px-2 py-0.5 text-xs",
        sm: "px-2.5 py-1 text-xs",
        default: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },

      shape: {
        default: "rounded-full",
        square: "rounded-lg",
        pill: "rounded-full",
      },

      removable: {
        true: "pr-2",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
      shape: "default",
      removable: false,
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onRemove?: () => void
  removable?: boolean
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({
    className,
    variant,
    size,
    shape,
    removable = false,
    leftIcon,
    rightIcon,
    onRemove,
    children,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, shape, removable }), className)}
        role="status"
        aria-label={typeof children === 'string' ? children : undefined}
        {...props}
      >
        {/* Left Icon */}
        {leftIcon && (
          <span className="mr-1.5 flex-shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}

        {/* Content */}
        <span className="truncate">{children}</span>

        {/* Right Icon or Remove Button */}
        {removable && onRemove ? (
          <button
            type="button"
            onClick={onRemove}
            className="ml-1.5 p-0.5 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Remove"
          >
            <X className="w-3 h-3" />
          </button>
        ) : rightIcon ? (
          <span className="ml-1.5 flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        ) : null}
      </div>
    )
  }
)

Badge.displayName = "Badge"

// Specialized badge components
const StatusBadge = React.forwardRef<
  HTMLDivElement,
  Omit<BadgeProps, 'variant'> & {
    status: 'online' | 'offline' | 'away' | 'busy'
  }
>(({ status, children, ...props }, ref) => {
  const statusConfig = {
    online: { variant: "success" as const, icon: "🟢" },
    offline: { variant: "neutral-subtle" as const, icon: "⚫" },
    away: { variant: "warning" as const, icon: "🟡" },
    busy: { variant: "error" as const, icon: "🔴" },
  }

  const config = statusConfig[status]

  return (
    <Badge
      ref={ref}
      variant={config.variant}
      leftIcon={<span className="text-xs">{config.icon}</span>}
      {...props}
    >
      {children || status}
    </Badge>
  )
})
StatusBadge.displayName = "StatusBadge"

const NotificationBadge = React.forwardRef<
  HTMLDivElement,
  Omit<BadgeProps, 'variant'> & {
    count?: number
    maxCount?: number
  }
>(({ count = 0, maxCount = 99, ...props }, ref) => {
  const displayCount = count > maxCount ? `${maxCount}+` : count.toString()

  if (count === 0) return null

  return (
    <Badge
      ref={ref}
      variant="error"
      size="xs"
      className="min-w-[1.25rem] h-5 px-1.5 text-xs font-bold"
      {...props}
    >
      {displayCount}
    </Badge>
  )
})
NotificationBadge.displayName = "NotificationBadge"

export { Badge, StatusBadge, NotificationBadge, badgeVariants }
