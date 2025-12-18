import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Zap, TrendingDown, CheckCircle, Quote } from 'lucide-react'
import { projects } from '@/data/projects'
import Container from '@/components/common/container'
import Breadcrumbs from '@/components/layout/breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/common/animated-section'

interface ProjectPageProps {
  params: {
    locale: string
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Enercam Solar Project`,
    description: project.challenge,
    openGraph: {
      images: [project.heroImage],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = projects
    .filter(p => p.id !== project.id)
    .slice(0, 3)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: project.title, href: `/projects/${project.slug}` },
  ]

  return (
    <>
      <Container className="py-8">
        <Breadcrumbs items={breadcrumbs} />
      </Container>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary-50 to-primary-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge className="bg-primary-600 text-white">
                    {project.systemSize}
                  </Badge>
                  <Badge variant="secondary">
                    {project.savingsPercent}% Energy Savings
                  </Badge>
                  <Badge variant="outline">
                    {new Date(project.date).getFullYear()}
                  </Badge>
                </div>

                <h1 className="text-h1 font-display mb-6">{project.title}</h1>

                <div className="flex items-center gap-6 text-neutral-600 mb-8">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{new Date(project.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <p className="text-xl text-neutral-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Details */}
      <section className="py-24">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <AnimatedSection>
                <Card className="p-8 h-full">
                  <CardContent className="p-0">
                    <h2 className="text-h3 font-display mb-6 text-red-600">The Challenge</h2>
                    <p className="text-neutral-600 leading-relaxed">
                      {project.challenge}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection>
                <Card className="p-8 h-full">
                  <CardContent className="p-0">
                    <h2 className="text-h3 font-display mb-6 text-green-600">Our Solution</h2>
                    <p className="text-neutral-600 leading-relaxed">
                      {project.solution}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Results */}
            <AnimatedSection className="mb-16">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-h3 font-display mb-8 text-center">Measurable Results</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Photo Gallery */}
            <AnimatedSection className="mb-16">
              <h2 className="text-h3 font-display mb-8 text-center">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="aspect-[4/3] relative rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Customer Testimonial */}
            <AnimatedSection className="mb-16">
              <Card className="p-8 bg-neutral-50">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <Quote className="w-12 h-12 text-primary-600 flex-shrink-0" />
                    <div>
                      <blockquote className="text-xl text-neutral-700 leading-relaxed mb-6 italic">
                        "{project.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-4">
                        {project.testimonial.photo && (
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                            <Image
                              src={project.testimonial.photo}
                              alt={project.testimonial.author}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <div className="font-semibold">{project.testimonial.author}</div>
                          <div className="text-sm text-neutral-600">
                            {project.testimonial.role}
                            {project.testimonial.company && `, ${project.testimonial.company}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Project Stats */}
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-6 text-center">
                  <Zap className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600 mb-1">{project.systemSize}</div>
                  <div className="text-sm text-neutral-600">System Size</div>
                </Card>

                <Card className="p-6 text-center">
                  <TrendingDown className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-green-600 mb-1">{project.savingsPercent}%</div>
                  <div className="text-sm text-neutral-600">Energy Savings</div>
                </Card>

                <Card className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-lg font-semibold text-blue-600 mb-1">{project.location}</div>
                  <div className="text-sm text-neutral-600">Location</div>
                </Card>

                <Card className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-lg font-semibold text-purple-600 mb-1">{new Date(project.date).getFullYear()}</div>
                  <div className="text-sm text-neutral-600">Completion Year</div>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-h2 font-display mb-4">More Success Stories</h2>
                <p className="text-neutral-600">Explore other solar projects across Central Africa</p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Link key={relatedProject.id} href={`/projects/${relatedProject.slug}`}>
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={relatedProject.heroImage}
                          alt={relatedProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary-600 text-white">
                            {relatedProject.systemSize}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 text-neutral-900">
                            {relatedProject.savingsPercent}% Savings
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                          {relatedProject.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {relatedProject.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(relatedProject.date).getFullYear()}
                          </div>
                        </div>
                        <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                          View Project
                          <ArrowLeft className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform rotate-180" />
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
              Ready for Your Solar Transformation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See how Enercam can deliver similar results for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?interest=quote"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-primary-600 shadow hover:bg-neutral-50 transition-colors"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-white px-8 py-3 text-sm font-medium text-white hover:bg-white hover:text-primary-600 transition-colors"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
