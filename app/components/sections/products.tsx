"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Container from "@/components/common/container"
import AnimatedSection from "@/components/common/animated-section"

interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
  href: string
}

interface ProductsProps {
  title?: string
  subtitle?: string
  products?: Product[]
  showCTA?: boolean
}

const defaultProducts: Product[] = [
  {
    id: 'heliu',
    name: 'Heliu Solar Roof Tiles',
    category: 'Solar Roofs',
    image: '/images/products/heliu-hero.jpg',
    description: 'Integrated solar tiles that replace conventional roofing while generating clean energy.',
    href: '/products/solar-roofs/heliu',
  },
  {
    id: 'roofit',
    name: 'Roofit Steel Sheets',
    category: 'Solar Roofs',
    image: '/images/products/roofit-hero.jpg',
    description: 'Durable steel roofing with integrated solar capabilities for commercial applications.',
    href: '/products/solar-roofs/roofit',
  },
  {
    id: 'battery',
    name: 'Battery Storage Systems',
    category: 'Energy Storage',
    image: '/images/products/battery-hero.jpg',
    description: 'Reliable energy storage solutions to maximize your solar investment and ensure power availability.',
    href: '/products/battery-storage',
  },
]

export default function Products({
  title = "Our Solar Solutions",
  subtitle = "Comprehensive solar roofing and energy storage systems designed for African climates",
  products = defaultProducts,
  showCTA = true,
}: ProductsProps) {
  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-h1 font-display mb-4">{title}</h2>
          {subtitle && <p className="text-body-lg text-neutral-600">{subtitle}</p>}
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 0.1}>
              <Link href={product.href}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-neutral-900">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {showCTA && (
          <AnimatedSection className="text-center">
            <Button size="lg" asChild>
              <Link href="/products">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        )}
      </Container>
    </section>
  )
}
