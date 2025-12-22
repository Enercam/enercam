import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Shield, Zap, CheckCircle, Download } from 'lucide-react'
import { products } from '@/data/products'
import { PRODUCT_CATEGORIES } from '@/lib/constants'
import Container from '@/components/common/container'
import Breadcrumbs from '@/components/layout/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/common/animated-section'

interface ProductPageProps {
  params: {
    locale: string
    slug: string
  }
}

export async function generateStaticParams() {
  const solarRoofProducts = products.filter(product => product.category === 'solar-roof')

  return solarRoofProducts.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find(p => p.slug === params.slug)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - Enercam Solar Roofs`,
    description: product.shortDescription,
    openGraph: {
      images: [product.heroImage],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const category = PRODUCT_CATEGORIES.find(cat => cat.id === product.category)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: category?.name || 'Products', href: `/products/${category?.slug || 'products'}` },
    { label: product.name, href: `/products/${category?.slug}/${product.slug}` },
  ]

  return (
    <>
      <Container className="py-8">
        <Breadcrumbs items={breadcrumbs} />
      </Container>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary-50 to-primary-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge variant="secondary" className="text-sm">
                {category?.name}
              </Badge>
              <Badge className="bg-primary-600">
                {product.specifications.powerOutput}
              </Badge>
            </div>

            <h1 className="text-h1 font-display mb-6">{product.name}</h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              {product.shortDescription}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" asChild>
                <Link href="/contact?interest=quote">Get Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-primary-600" />
                <span>{product.warranty} Warranty</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Zap className="w-5 h-5 text-primary-600" />
                <span>High Efficiency</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span>Expert Installation</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Product Gallery */}
      <section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Hero Image */}
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-2 gap-4">
                {product.gallery.slice(0, 4).map((image, index) => (
                  <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <h2 className="text-h2 font-display mb-6">Overview</h2>
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-neutral-600 leading-relaxed">
                      {product.fullDescription}
                    </p>
                  </div>
                </AnimatedSection>

                {/* Key Features */}
                <AnimatedSection>
                  <h3 className="text-h3 font-display mb-6">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Applications */}
                <AnimatedSection>
                  <h3 className="text-h3 font-display mb-6">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((application, index) => (
                      <Badge key={index} variant="secondary-outline">
                        {application}
                      </Badge>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {/* Specifications Sidebar */}
              <div>
                <AnimatedSection>
                  <Card className="sticky top-8">
                    <CardContent className="p-6">
                      <h3 className="text-h4 font-display mb-6">Specifications</h3>

                      <div className="space-y-4">
                        {product.brand && (
                          <div>
                            <span className="text-sm font-medium text-neutral-500">Brand</span>
                            <p className="font-semibold">{product.brand}</p>
                          </div>
                        )}

                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key}>
                            <span className="text-sm font-medium text-neutral-500 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <p className="font-semibold">{value}</p>
                          </div>
                        ))}

                        {product.warranty && (
                          <div className="pt-4 border-t">
                            <span className="text-sm font-medium text-neutral-500">Warranty</span>
                            <p className="font-semibold text-primary-600">{product.warranty} Years</p>
                          </div>
                        )}
                      </div>

                      {/* Download Documents */}
                      {product.documents && product.documents.length > 0 && (
                        <div className="mt-6 pt-6 border-t">
                          <h4 className="font-semibold mb-4">Documents</h4>
                          <div className="space-y-2">
                            {product.documents.map((doc, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                className="w-full justify-start"
                                asChild
                              >
                                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                                  <Download className="w-4 h-4 mr-2" />
                                  {doc.name}
                                </a>
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>

            {/* Problems Solved */}
            {product.problemsSolved && product.problemsSolved.length > 0 && (
              <AnimatedSection className="mt-16">
                <h3 className="text-h3 font-display mb-6">Problems Solved</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.problemsSolved.map((problem, index) => (
                    <Card key={index} className="p-6">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-neutral-600">{problem}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Safety Features */}
            {product.safetyFeatures && product.safetyFeatures.length > 0 && (
              <AnimatedSection className="mt-16">
                <h3 className="text-h3 font-display mb-6">Safety Features</h3>
                <div className="bg-neutral-50 rounded-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.safetyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-primary-600 flex-shrink-0" />
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </Container>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-h2 font-display mb-4">Related Products</h2>
                <p className="text-neutral-600">Explore other products in this category</p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/products/${category?.slug}/${relatedProduct.slug}`}>
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={relatedProduct.heroImage}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary-600">
                            {relatedProduct.specifications.powerOutput}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-neutral-600 mb-4 leading-relaxed">
                          {relatedProduct.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-neutral-500">
                            {relatedProduct.warranty} warranty
                          </div>
                          <ArrowLeft className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform rotate-180" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-h2 font-display mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our experts to discuss your {product.name} installation and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact?interest=quote">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
