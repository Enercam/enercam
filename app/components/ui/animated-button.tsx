'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

const animatedButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:from-brand-700 hover:to-brand-800 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
        secondary:
          'bg-white text-brand-700 border-2 border-brand-200 shadow-lg hover:bg-brand-50 hover:border-brand-300 hover:shadow-xl active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-brand-50/0 before:via-brand-50/50 before:to-brand-50/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
        ghost:
          'text-brand-700 hover:bg-brand-50 hover:text-brand-800 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-brand-50/0 before:via-brand-50/30 before:to-brand-50/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
        outline:
          'border-2 border-brand-200 bg-transparent text-brand-700 shadow-lg hover:bg-brand-50 hover:border-brand-300 hover:shadow-xl active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-brand-50/0 before:via-brand-50/50 before:to-brand-50/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
        destructive:
          'bg-gradient-to-r from-error-600 to-error-700 text-white shadow-lg shadow-error-500/25 hover:shadow-xl hover:shadow-error-500/30 hover:from-error-700 hover:to-error-800 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
        success:
          'bg-gradient-to-r from-success-600 to-success-700 text-white shadow-lg shadow-success-500/25 hover:shadow-xl hover:shadow-success-500/30 hover:from-success-700 hover:to-success-800 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
      },
      size: {
        sm: 'h-9 px-4 py-2 text-xs',
        md: 'h-11 px-6 py-3 text-sm',
        lg: 'h-13 px-8 py-4 text-base',
        xl: 'h-15 px-10 py-5 text-lg',
        icon: 'h-11 w-11 p-2',
      },
      glow: {
        true: 'hover:shadow-2xl hover:shadow-brand-500/20',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      glow: false,
    },
  }
)

export interface AnimatedButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'color'>,
    VariantProps<typeof animatedButtonVariants> {
  asChild?: boolean
  loading?: boolean
  loadingText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({
    className,
    variant,
    size,
    glow,
    loading = false,
    loadingText,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading

    return (
      <motion.button
        ref={ref}
        className={cn(
          animatedButtonVariants({ variant, size, glow }),
          className
        )}
        disabled={isDisabled}
        whileHover={{
          scale: isDisabled ? 1 : 1.02,
          transition: { duration: 0.2, ease: 'easeOut' }
        }}
        whileTap={{
          scale: isDisabled ? 1 : 0.98,
          transition: { duration: 0.1, ease: 'easeOut' }
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        {...props}
      >
        {loading && (
          <motion.div
            className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          />
        )}

        {leftIcon && !loading && (
          <motion.span
            className="mr-2"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {leftIcon}
          </motion.span>
        )}

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {loading ? loadingText || 'Loading...' : children}
        </motion.span>

        {rightIcon && !loading && (
          <motion.span
            className="ml-2"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {rightIcon}
          </motion.span>
        )}
      </motion.button>
    )
  }
)

AnimatedButton.displayName = 'AnimatedButton'

export { AnimatedButton, animatedButtonVariants }
