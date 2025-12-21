import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Eye, EyeOff, Search, X } from "lucide-react"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  [
    // Base styles
    "flex w-full transition-all duration-200",
    "bg-surface-primary border border-neutral-300",
    "text-neutral-900 placeholder:text-neutral-500",
    "focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-50",

    // Hover states
    "hover:border-neutral-400",
    "hover:shadow-sm",

    // File input styles
    "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-700",

    // Accessibility
    "focus-visible:ring-2 focus-visible:ring-primary-500/20 focus-visible:ring-offset-0",

    // Validation states
    "aria-invalid:border-error-500 aria-invalid:focus:ring-error-500/20",
  ],
  {
    variants: {
      variant: {
        default: "",
        filled: [
          "bg-neutral-50 border-neutral-200",
          "hover:bg-white hover:border-neutral-300",
          "focus:bg-white",
        ],
        outline: [
          "bg-transparent border-2",
          "hover:border-primary-300",
          "focus:border-primary-400",
        ],
        ghost: [
          "bg-transparent border-transparent",
          "hover:bg-neutral-50 hover:border-neutral-200",
          "focus:bg-white",
        ],
        glass: [
          "bg-white/10 backdrop-blur-xl border-white/20",
          "text-white placeholder:text-neutral-300",
          "hover:bg-white/20 hover:border-white/30",
          "focus:bg-white/10 focus:border-white/40",
        ],
      },

      size: {
        sm: "h-9 px-3 text-sm rounded-lg",
        default: "h-11 px-4 text-base rounded-xl",
        lg: "h-12 px-4 text-lg rounded-2xl",
      },

      state: {
        default: "",
        error: [
          "border-error-500 focus:border-error-500 focus:ring-error-500/20",
          "hover:border-error-600",
        ],
        success: [
          "border-success-500 focus:border-success-500 focus:ring-success-500/20",
          "hover:border-success-600",
        ],
        warning: [
          "border-warning-500 focus:border-warning-500 focus:ring-warning-500/20",
          "hover:border-warning-600",
        ],
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      state: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string
  description?: string
  error?: string
  success?: string
  warning?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  clearable?: boolean
  floatingLabel?: boolean
  fullWidth?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    type = "text",
    variant,
    size,
    state: stateProp,
    label,
    description,
    error,
    success,
    warning,
    leftIcon,
    rightIcon,
    clearable = false,
    floatingLabel = false,
    fullWidth = false,
    id,
    value,
    onChange,
    disabled,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [inputValue, setInputValue] = React.useState(value || "")

    // Determine state based on props
    const state = error ? "error" : success ? "success" : warning ? "warning" : stateProp

    // Generate unique IDs
    const inputId = id || React.useId()
    const descriptionId = description ? `${inputId}-description` : undefined
    const errorId = error ? `${inputId}-error` : undefined
    const successId = success ? `${inputId}-success` : undefined
    const warningId = warning ? `${inputId}-warning` : undefined

    // Combine aria-describedby
    const ariaDescribedBy = [descriptionId, errorId, successId, warningId]
      .filter(Boolean)
      .join(" ") || undefined

    const handleClear = () => {
      setInputValue("")
      onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
      onChange?.(e)
    }

    const isPassword = type === "password"
    const inputType = isPassword && showPassword ? "text" : type

    return (
      <div className={cn("space-y-2", fullWidth && "w-full")}>
        {/* Label */}
        {label && !floatingLabel && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 z-10">
              {leftIcon}
            </div>
          )}

          {/* Floating Label */}
          {label && floatingLabel && (
            <label
              htmlFor={inputId}
              className={cn(
                "absolute left-4 transition-all duration-200 pointer-events-none z-10",
                inputValue
                  ? "top-2 text-xs text-neutral-600"
                  : "top-1/2 -translate-y-1/2 text-base text-neutral-500",
                leftIcon && "left-12",
                state === "error" && "text-error-600",
                disabled && "opacity-50"
              )}
            >
              {label}
            </label>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            value={inputValue}
            onChange={handleChange}
            disabled={disabled}
            aria-invalid={state === "error"}
            aria-describedby={ariaDescribedBy}
            className={cn(
              inputVariants({ variant, size, state }),
              leftIcon && "pl-12",
              (rightIcon || isPassword || clearable) && "pr-12",
              floatingLabel && "pt-6 pb-2",
              className
            )}
            {...props}
          />

          {/* Right Icons */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-2 z-10">
            {/* Clear Button */}
            {clearable && inputValue && !disabled && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1 text-neutral-500 hover:text-neutral-700 transition-colors"
                aria-label="Clear input"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Password Toggle */}
            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-1 text-neutral-500 hover:text-neutral-700 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
                disabled={disabled}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            )}

            {/* Custom Right Icon */}
            {rightIcon && !isPassword && !clearable && (
              <div className="text-neutral-500">
                {rightIcon}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        {description && (
          <p id={descriptionId} className="text-sm text-neutral-600">
            {description}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p id={errorId} className="text-sm text-error-600 flex items-center" role="alert">
            <span className="w-4 h-4 mr-2 flex-shrink-0">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </span>
            {error}
          </p>
        )}

        {/* Success Message */}
        {success && (
          <p id={successId} className="text-sm text-success-600 flex items-center">
            <span className="w-4 h-4 mr-2 flex-shrink-0">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
            {success}
          </p>
        )}

        {/* Warning Message */}
        {warning && (
          <p id={warningId} className="text-sm text-warning-600 flex items-center">
            <span className="w-4 h-4 mr-2 flex-shrink-0">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </span>
            {warning}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

// Specialized input components
const SearchInput = React.forwardRef<HTMLInputElement, Omit<InputProps, 'leftIcon' | 'type'>>(
  ({ placeholder = "Search...", ...props }, ref) => (
    <Input
      ref={ref}
      type="search"
      leftIcon={<Search className="w-4 h-4" />}
      placeholder={placeholder}
      {...props}
    />
  )
)
SearchInput.displayName = "SearchInput"

export { Input, SearchInput, inputVariants }
