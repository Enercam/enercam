import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Calendar, Zap, TrendingDown, ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'
import Container from '@/components/common/container'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/common/animated-section'

export const metadata: Metadata = {
  title: 'Our Projects - Enercam Solar Installations Across Central Africa',
  description: 'Explore successful solar roof installations and case studies from Cameroon, Chad, Gabon, Congo, Equatorial Guinea, and CAR. See real results and customer testimonials.',
}

export default function ProjectsPage() {
  // Group projects by country for the map section
  const projectsByCountry = projects.reduce((acc, project) => {
    const country = project.location.split(', ')[1] || project.location
    if (!acc[country]) {
      acc[country] = []
    }
    acc[country].push(project)
    return acc
  }, {} as Record<string, typeof projects>)

  // Get stats
  const totalProjects = projects.length
  const totalCapacity = projects.reduce((sum, project) => {
    const size = parseFloat(project.systemSize.replace(' kW', ''))
    return sum + size
  }, 0)
  const averageSavings = Math.round(
    projects.reduce((sum, project) => sum + project.savingsPercent, 0) / projects.length
  )

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 font-display mb-6">
              Our Solar Success Stories
            </h1>
            <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
              Discover how we've transformed homes and businesses across Central Africa with integrated solar roofing solutions. Real results, real savings, real impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{totalProjects}+</div>
                <div className="text-neutral-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{totalCapacity}kW</div>
                <div className="text-neutral-600">Total Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{averageSavings}%</div>
                <div className="text-neutral-600">Average Savings</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <Container>
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-h2 font-display mb-4">Featured Installations</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Explore our most impactful solar projects, from residential homes to commercial buildings and educational institutions.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {projects.slice(0, 2).map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <Link href={`/projects/${project.slug}`}>
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="aspect-[16/10] relative overflow-hidden">
                        <Image
                          src={project.heroImage}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary-600 text-white">
                            {project.systemSize}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 text-neutral-900">
                            {project.savingsPercent}% Savings
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-neutral-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {project.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(project.date).getFullYear()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            {/* All Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(2).map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <Link href={`/projects/${project.slug}`}>
                    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={project.heroImage}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary-600 text-white">
                            {project.systemSize}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 text-neutral-900">
                            {project.savingsPercent}% Savings
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(project.date).getFullYear()}
                          </div>
                        </div>
                        <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                          {project.challenge.substring(0, 120)}...
                        </p>
                        <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                          Read Case Study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Service Areas Map */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-h2 font-display mb-4">Across Central Africa</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Our solar installations span six countries, bringing clean energy solutions to homes and businesses throughout the region.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(projectsByCountry).map(([country, countryProjects], index) => (
                <AnimatedSection key={country} delay={index * 0.1}>
                  <Card className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      {countryProjects.length}
                    </div>
                    <h3 className="text-lg font-semibold mb-4">{country}</h3>
                    <div className="space-y-2 text-sm text-neutral-600">
                      <div className="flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4" />
                        {countryProjects.reduce((sum, p) => sum + parseFloat(p.systemSize.replace(' kW', '')), 0)} kW Total
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <TrendingDown className="w-4 h-4" />
                        {Math.round(countryProjects.reduce((sum, p) => sum + p.savingsPercent, 0) / countryProjects.length)}% Avg Savings
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-h2 font-display mb-6">
              Ready for Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied customers who have transformed their energy future with Enercam solar solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?interest=quote"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-primary-600 shadow hover:bg-neutral-50 transition-colors"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white px-8 py-3 text-sm font-medium text-white hover:bg-white hover:text-primary-600 transition-colors"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
