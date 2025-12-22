import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Zap,
  TrendingUp,
  CheckCircle,
  Quote,
  Award,
  Users,
  Star,
  Phone,
  Mail
} from 'lucide-react'
import { projects } from '@/data/projects'

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
      title: 'Project Not Found - Enercam Solar',
      description: 'The requested project could not be found.',
    }
  }

  return {
    title: `${project.title} - Enercam Solar Case Study`,
    description: `${project.title} in ${project.location}. ${project.savingsPercent}% energy savings with ${project.systemSize} solar system. Real results from Enercam's solar installations.`,
    keywords: [
      'solar case study',
      project.location.split(',')[0],
      `${project.systemSize} solar system`,
      'energy savings',
      'solar installation Central Africa'
    ],
    openGraph: {
      title: `${project.title} - Enercam Solar Success Story`,
      description: `${project.savingsPercent}% energy savings achieved with ${project.systemSize} solar system in ${project.location}`,
      images: [project.heroImage],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Enercam Solar Case Study`,
      description: `${project.savingsPercent}% energy savings with ${project.systemSize} solar system`,
      images: [project.heroImage],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Inquiry: ${project.title}`)
    const body = encodeURIComponent(`Hi, I'm interested in learning more about the ${project.title} project and how it might apply to my situation.`)
    window.location.href = `mailto:info@enercam.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            {/* Back Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Link href="/projects" className="inline-flex items-center text-neutral-300 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </motion.div>

            {/* Project Title & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">{project.location}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{project.systemSize}</div>
                <div className="text-sm text-neutral-300">Solar System</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{project.savingsPercent}%</div>
                <div className="text-sm text-neutral-300">Energy Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{new Date(project.date).getFullYear()}</div>
                <div className="text-sm text-neutral-300">Completed</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <AnimatedButton
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
                onClick={handleContactClick}
              >
                <Mail className="w-5 h-5 mr-2" />
                Discuss Similar Project
              </AnimatedButton>

              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </AnimatedButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-red-100 text-red-700">The Challenge</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                The Problem We Solved
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                {project.challenge}
              </p>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Before Enercam</h3>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    High electricity bills and unpredictable costs
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Frequent power outages affecting daily life
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Reliance on expensive diesel generators
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Environmental concerns with traditional energy sources
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-red-700 font-medium">Challenge Visualization</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-blue-700 font-medium">Solar Solution</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <Badge className="mb-4 bg-blue-100 text-blue-700">The Solution</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Our Comprehensive Approach
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                {project.solution}
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Enercam Solution Included</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    Custom solar system design for optimal performance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    Professional installation with certified technicians
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    Battery storage for energy independence
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    Smart monitoring and maintenance program
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    35-year warranty and ongoing support
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-700">Measurable Results</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              The Impact of Going Solar
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Real, quantifiable results that demonstrate the transformative power of solar energy.
            </p>
          </motion.div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="text-neutral-900 font-medium leading-relaxed">
                      {result}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Key Metrics Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{project.savingsPercent}%</div>
                <div className="text-green-100">Energy Cost Savings</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{project.systemSize}</div>
                <div className="text-green-100">Solar System Size</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">35</div>
                <div className="text-green-100">Year Warranty</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-700">Client Testimonial</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                What Our Client Says
              </h2>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <Quote className="w-12 h-12 text-blue-400 mb-6" />
                <blockquote className="text-2xl md:text-3xl text-neutral-900 font-medium leading-relaxed mb-8">
                  "{project.testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">{project.testimonial.author}</div>
                      <div className="text-neutral-600">{project.testimonial.role}</div>
                    </div>
                  </div>

                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Project Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              See the Transformation
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Before and after photos showcasing the complete solar installation process and final results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center"
              >
                <div className="text-center">
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-700 font-medium">Project Photo {index + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:40px_40px]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Inspired by This Success?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Every project is unique, but the results are consistently transformative.
              Let's discuss how solar energy can work for your specific situation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/projects">
                <AnimatedButton
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 font-semibold"
                >
                  <Award className="w-5 h-5 mr-2" />
                  View More Projects
                </AnimatedButton>
              </Link>

              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={handleContactClick}
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Your Project
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}