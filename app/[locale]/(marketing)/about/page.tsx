import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Award,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Heart,
  Lightbulb,
  Target,
  Calendar,
  MapPin,
  ChevronRight,
  Star,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Enercam Solar Roofs - Our Story & Mission',
  description: 'Learn about Enercam Solar Roofs, our mission to bring clean energy to Central Africa, and our journey since 2015 in revolutionizing solar roofing technology.',
  keywords: ['about Enercam', 'solar company Cameroon', 'clean energy mission', 'solar roofing Central Africa'],
}

const TIMELINE_EVENTS = [
  {
    year: '2015',
    title: 'Foundation',
    description: 'Enercam Solar Roofs founded with a vision to bring integrated solar solutions to Central Africa.',
    icon: <Star className="w-5 h-5" />,
  },
  {
    year: '2017',
    title: 'First Installation',
    description: 'Completed our first commercial solar roof installation in Douala, Cameroon.',
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    year: '2019',
    title: 'Regional Expansion',
    description: 'Expanded operations to Chad, Gabon, Congo, and Equatorial Guinea.',
    icon: <Globe className="w-5 h-5" />,
  },
  {
    year: '2021',
    title: 'Technology Innovation',
    description: 'Launched proprietary solar tile technology with enhanced durability and efficiency.',
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    year: '2023',
    title: '500+ Installations',
    description: 'Reached milestone of 500+ successful solar roof installations across Central Africa.',
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    year: '2025',
    title: 'Industry Leadership',
    description: 'Established as the leading solar roofing provider in Central Africa with 10+ years of experience.',
    icon: <Award className="w-5 h-5" />,
  },
]

const VALUES = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Quality & Reliability',
    description: 'We deliver solar solutions that last. Every product carries our 35-year warranty commitment.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Customer First',
    description: 'Your energy independence is our mission. We prioritize your needs in every decision we make.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We continuously invest in research and development to bring you the latest solar technology.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Sustainability',
    description: 'Clean energy for a sustainable future. We reduce carbon emissions across Central Africa.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community Impact',
    description: 'Creating jobs and economic opportunities while providing affordable clean energy solutions.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Excellence',
    description: 'Setting the standard for solar roofing excellence in Central Africa and beyond.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
]

const STATS = [
  { value: '10+', label: 'Years of Experience', icon: <Calendar className="w-6 h-6" /> },
  { value: '500+', label: 'Successful Installations', icon: <CheckCircle className="w-6 h-6" /> },
  { value: '30+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
  { value: '6', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:40px_40px]" />
        </div>

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
              Leading Solar Innovation Since 2015
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 mb-6"
            >
              Powering Africa's
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent">
                Clean Energy Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Enercam Solar Roofs has been at the forefront of solar innovation in Central Africa for a decade,
              combining world-class technology with deep local expertise to deliver reliable, beautiful solar solutions.
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
              >
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </AnimatedButton>

              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <Target className="w-5 h-5 mr-2" />
                Our Mission
              </AnimatedButton>
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
          <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
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

      {/* Our Story Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Our Story</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              A Decade of Solar Innovation
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Founded in 2015, Enercam Solar Roofs emerged from a simple but powerful vision:
              to make clean, affordable energy accessible to every home and business in Central Africa.
              What started as a small team with big dreams has grown into the region's most trusted
              solar roofing provider.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-green-200" />

              {TIMELINE_EVENTS.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <div className="text-blue-600">{event.icon}</div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                    <Card className="shadow-lg border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-blue-100 text-blue-700">{event.year}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-neutral-600">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-700">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-neutral-600">
              Our core values guide every decision we make and every solution we deliver.
              They're not just words on a page—they're the foundation of our commitment
              to excellence and sustainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${value.bgColor} rounded-2xl mb-6 ${value.color}`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
        {/* Background Pattern */}
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
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the difference that quality, innovation, and genuine care can make
              in your journey toward clean energy independence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <AnimatedButton
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Find Us in Your Area
              </AnimatedButton>

              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Get In Touch
                  <ChevronRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
