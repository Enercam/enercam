'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  MapPin,
  Calendar,
  TrendingUp,
  Zap,
  Users,
  Star,
  Search,
  CheckCircle,
  Award,
  ArrowRight
} from 'lucide-react'

// Note: SEO metadata is handled in the page layout

const PROJECTS = [
  {
    id: 'douala-residential-2kw-installation',
    title: '2 kW Residential Solar System',
    location: 'Douala, Cameroon',
    systemSize: '2 kW',
    savingsPercent: 54,
    date: '2024',
    heroImage: '/images/projects/douala-hero.jpg',
    category: 'residential',
    featured: true,
    description: 'Complete residential solar installation with battery backup, providing reliable clean energy for a growing family.',
    results: [
      '54% reduction in monthly electricity costs',
      'Zero power outages during load shedding',
      'Payback period of 6.5 years',
      'Carbon emissions reduced by 2.1 tons annually'
    ],
    testimonial: {
      quote: 'The solar system has completely changed our lifestyle. No more worrying about power cuts, and our bills are half of what they used to be.',
      author: 'Marie-Claire N.',
      role: 'Homeowner',
      photo: '/images/testimonials/marie-claire.jpg'
    }
  },
  {
    id: 'yaounde-commercial-10kw-upgrade',
    title: '10 kW Commercial Office Upgrade',
    location: 'Yaoundé, Cameroon',
    systemSize: '10 kW',
    savingsPercent: 67,
    date: '2024',
    heroImage: '/images/projects/yaounde-office.jpg',
    category: 'commercial',
    featured: true,
    description: 'Large-scale commercial installation for a modern office building, combining solar panels with advanced energy management.',
    results: [
      '67% reduction in energy costs',
      'Complete energy independence during business hours',
      'Enhanced building value and appeal',
      'Reduced carbon footprint by 15 tons annually'
    ],
    testimonial: {
      quote: 'Our solar investment paid for itself in just 4 years. The system is incredibly reliable and our employees love working in a sustainable environment.',
      author: 'Jean-Pierre M.',
      role: 'Operations Manager',
      photo: '/images/testimonials/jean-pierre.jpg'
    }
  },
  {
    id: 'ndjamena-school-offgrid',
    title: 'Off-Grid School Solar Solution',
    location: 'N\'Djamena, Chad',
    systemSize: '15 kW',
    savingsPercent: 100,
    date: '2023',
    heroImage: '/images/projects/chad-school.jpg',
    category: 'educational',
    featured: true,
    description: 'Complete off-grid solar solution for a rural school, providing reliable power for lighting, computers, and educational equipment.',
    results: [
      '100% energy independence from unreliable grid',
      'Power for 200+ students and teachers',
      'Extended study hours with reliable lighting',
      'Reduced operational costs by $3,000 annually'
    ],
    testimonial: {
      quote: 'Solar power has transformed education at our school. Students can now study in the evenings, and we have reliable power for all our computers and equipment.',
      author: 'Sister Marie T.',
      role: 'School Principal',
      photo: '/images/testimonials/sister-marie.jpg'
    }
  },
  {
    id: 'libreville-industrial-20kw',
    title: '20 kW Industrial Warehouse',
    location: 'Libreville, Gabon',
    systemSize: '20 kW',
    savingsPercent: 58,
    date: '2024',
    heroImage: '/images/projects/gabon-warehouse.jpg',
    category: 'industrial',
    description: 'Large-scale industrial installation for manufacturing warehouse, optimizing energy usage for heavy machinery and operations.',
    results: [
      '58% reduction in electricity costs',
      'Stable power supply for manufacturing equipment',
      'ROI achieved in 5.2 years',
      'Reduced dependency on diesel generators'
    ],
    testimonial: {
      quote: 'The solar system has been a game-changer for our operations. We now have stable, clean power that doesn\'t fluctuate like the grid used to.',
      author: 'Alain B.',
      role: 'Plant Manager',
      photo: '/images/testimonials/alain.jpg'
    }
  },
  {
    id: 'brazzaville-community-project',
    title: 'Community Center Solar Grid',
    location: 'Brazzaville, Congo',
    systemSize: '25 kW',
    savingsPercent: 72,
    date: '2023',
    heroImage: '/images/projects/congo-community.jpg',
    category: 'community',
    description: 'Community-scale solar installation serving multiple buildings including a health clinic, school, and community center.',
    results: [
      '72% reduction in community energy costs',
      'Reliable power for 500+ community members',
      'Healthcare services operating 24/7',
      'Economic development through sustainable energy'
    ],
    testimonial: {
      quote: 'This solar project has brought reliable electricity to our entire community. Our clinic can now operate at night, and businesses are thriving.',
      author: 'Pierre L.',
      role: 'Community Leader',
      photo: '/images/testimonials/pierre.jpg'
    }
  },
  {
    id: 'malabo-hotel-green-initiative',
    title: 'Eco-Friendly Hotel Renovation',
    location: 'Malabo, Equatorial Guinea',
    systemSize: '30 kW',
    savingsPercent: 65,
    date: '2024',
    heroImage: '/images/projects/equatorial-hotel.jpg',
    category: 'hospitality',
    description: 'Comprehensive solar renovation for boutique hotel, combining aesthetic appeal with significant energy and cost savings.',
    results: [
      '65% reduction in energy costs',
      'Enhanced guest experience with sustainable features',
      'Marketing advantage as eco-friendly destination',
      'Carbon-neutral operations achieved'
    ],
    testimonial: {
      quote: 'Our guests love that we\'re environmentally responsible, and the solar system has significantly reduced our operating costs. It\'s a win-win situation.',
      author: 'Isabella R.',
      role: 'Hotel Manager',
      photo: '/images/testimonials/isabella.jpg'
    }
  }
]

const CATEGORIES = [
  { id: 'all', name: 'All Projects', count: PROJECTS.length },
  { id: 'residential', name: 'Residential', count: PROJECTS.filter(p => p.category === 'residential').length },
  { id: 'commercial', name: 'Commercial', count: PROJECTS.filter(p => p.category === 'commercial').length },
  { id: 'educational', name: 'Educational', count: PROJECTS.filter(p => p.category === 'educational').length },
  { id: 'industrial', name: 'Industrial', count: PROJECTS.filter(p => p.category === 'industrial').length },
  { id: 'community', name: 'Community', count: PROJECTS.filter(p => p.category === 'community').length },
  { id: 'hospitality', name: 'Hospitality', count: PROJECTS.filter(p => p.category === 'hospitality').length }
]

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'savings-high', label: 'Highest Savings' },
  { value: 'savings-low', label: 'Lowest Savings' },
  { value: 'size-large', label: 'Largest Systems' },
  { value: 'size-small', label: 'Smallest Systems' }
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = PROJECTS

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
      )
    }

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case 'savings-high':
          return b.savingsPercent - a.savingsPercent
        case 'savings-low':
          return a.savingsPercent - b.savingsPercent
        case 'size-large':
          return parseFloat(b.systemSize) - parseFloat(a.systemSize)
        case 'size-small':
          return parseFloat(a.systemSize) - parseFloat(b.systemSize)
        default:
          return 0
      }
    })

    return filtered
  }, [selectedCategory, sortBy, searchQuery])

  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 3)
  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6" /> },
    { value: '62%', label: 'Average Savings', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '6', label: 'Countries Served', icon: <MapPin className="w-6 h-6" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              <Award className="w-4 h-4" />
              Real Results, Real Impact
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 mb-6"
            >
              Success Stories That
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent">
                Inspire Change
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Discover how we've transformed homes and businesses across Central Africa with
              reliable solar solutions. Each project represents real energy savings, environmental impact,
              and a step toward sustainable development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <AnimatedButton
                size="lg"
                glow={true}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Users className="w-5 h-5 mr-2" />
                Explore Projects
              </AnimatedButton>

              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your Project
                </AnimatedButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-700">Featured Projects</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Showcase of Excellence
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our most impactful installations demonstrate the transformative power of solar energy
              across different sectors and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden group">
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-green-100 overflow-hidden">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <Zap className="w-8 h-8 text-white/60" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">
                        {project.savingsPercent}% Savings
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-neutral-500" />
                      <span className="text-sm text-neutral-600">{project.location}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-700">{project.systemSize}</div>
                        <div className="text-xs text-blue-600">System Size</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-700">{project.date}</div>
                        <div className="text-xs text-green-600">Completed</div>
                      </div>
                    </div>

                    <Link href={`/projects/${project.id}`}>
                      <AnimatedButton
                        size="sm"
                        variant="outline"
                        className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </AnimatedButton>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">All Projects</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Complete Project Portfolio
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Browse through our complete collection of successful solar installations.
              Filter by category, location, or sort by different criteria to find projects similar to yours.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="bg-neutral-50 rounded-2xl p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search projects by location or title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-shrink-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden group">
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-green-100 overflow-hidden">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <Zap className="w-8 h-8 text-white/60" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className={project.featured ? "bg-green-500 text-white" : "bg-blue-100 text-blue-700"}>
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">
                        {project.savingsPercent}% Savings
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-neutral-500" />
                      <span className="text-sm text-neutral-600">{project.location}</span>
                      <span className="text-neutral-400">•</span>
                      <Calendar className="w-4 h-4 text-neutral-500" />
                      <span className="text-sm text-neutral-600">{project.date}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-700">{project.systemSize}</div>
                        <div className="text-xs text-blue-600">System Size</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-700">{project.savingsPercent}%</div>
                        <div className="text-xs text-green-600">Energy Savings</div>
                      </div>
                    </div>

                    <Link href={`/projects/${project.id}`}>
                      <AnimatedButton
                        size="sm"
                        variant="outline"
                        className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </AnimatedButton>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredAndSortedProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">No projects found</h3>
              <p className="text-neutral-600">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Every project starts with a conversation. Let's discuss how solar energy
              can transform your home or business with real, measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 font-semibold"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
              </Link>

              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse More Projects
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}