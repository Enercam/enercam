import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Zap, Home } from 'lucide-react'
import { products } from '@/data/products'
import { PRODUCT_CATEGORIES } from '@/lib/constants'
import Container from '@/components/common/container'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Solar Products - Enercam Integrated Solar Roofing Solutions',
  description: 'Explore our comprehensive range of solar roofing systems, battery storage, and renewable energy solutions designed for Central African climates.',
}

export default function ProductsPage() {
  // Group products by category
  const productsByCategory = PRODUCT_CATEGORIES.map(category => ({
    ...category,
    products: products.filter(product => product.category === category.id),
  }))

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 font-display mb-6">
              Complete Solar Solutions
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              From integrated solar roofing to advanced battery storage,
              discover products designed specifically for Central African conditions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-600" />
                <span>35-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary-600" />
                <span>High Efficiency</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-primary-600" />
                <span>Integrated Design</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Products by Category */}
      <section className="py-24">
        <Container>
          {productsByCategory.map((category) => (
            <div key={category.id} className="mb-20 last:mb-0">
              <div className="text-center mb-12">
                <h2 className="text-h2 font-display mb-4">{category.name}</h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  {category.id === 'solar-roof' && 'Beautiful, durable roofing that generates clean energy'}
                  {category.id === 'battery' && 'Reliable energy storage for when you need it most'}
                  {category.id === 'module' && 'High-efficiency solar modules for any application'}
                  {category.id === 'ac' && 'Energy-efficient air conditioning powered by solar'}
                  {category.id === 'lighting' && 'Solar-powered lighting solutions'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product) => (
                  <Link key={product.id} href={`/products/${category.slug}/${product.slug}`}>
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={product.heroImage}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 text-neutral-900">
                            {product.brand}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary-600">
                            {product.specifications.powerOutput}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-neutral-600 mb-4 leading-relaxed">
                          {product.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-neutral-500">
                            {product.specifications.warranty} warranty
                          </div>
                          <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {category.products.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-neutral-600">Products coming soon...</p>
                </div>
              )}
            </div>
          ))}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-900 py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-h2 font-display mb-6">
              Not Sure Which Product is Right for You?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our solar experts will help you choose the perfect solution for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact?interest=quote">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900" asChild>
                <Link href="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
