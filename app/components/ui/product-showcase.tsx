'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedButton } from './animated-button'
import { Badge } from './badge'
import { cn } from '@/lib/utils'
import { Star, TrendingUp, Shield, Zap } from 'lucide-react'

interface Product {
  id: string
  name: string
  slug: string
  shortDescription: string
  heroImage: string
  features: string[]
  specs: {
    label: string
    value: string
  }[]
  badge?: string
  popular?: boolean
}

interface ProductShowcaseProps {
  title: string
  subtitle: string
  products: Product[]
  className?: string
}

export function ProductShowcase({
  title,
  subtitle,
  products,
  className
}: ProductShowcaseProps) {
  return (
    <section className={cn('py-24 bg-surface-secondary', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4" />
            Featured Products
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 overflow-hidden border border-neutral-200 hover:border-brand-200">
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="success" className="bg-success-500 text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Product Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="secondary" className="bg-accent-500 text-white">
                      {product.badge}
                    </Badge>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-brand-100 to-brand-200"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Zap className="w-6 h-6 text-brand-600" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-brand-700 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {product.specs.slice(0, 4).map((spec, specIndex) => (
                      <motion.div
                        key={specIndex}
                        className="text-center p-3 bg-neutral-50 rounded-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + specIndex * 0.1 }}
                      >
                        <div className="text-xs text-text-tertiary uppercase tracking-wide mb-1">
                          {spec.label}
                        </div>
                        <div className="text-sm font-semibold text-text-primary">
                          {spec.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-success-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="text-sm text-text-secondary flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <AnimatedButton
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => window.location.href = `/en/products/solar-roofs/${product.slug}`}
                  >
                    Learn More
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </AnimatedButton>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-600/20 via-accent-500/10 to-brand-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

