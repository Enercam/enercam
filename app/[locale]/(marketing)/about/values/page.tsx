import React from 'react'
import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  Shield,
  Users,
  Lightbulb,
  Globe,
  Target,
  Heart,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Values & Mission - Enercam Solar Roofs',
  description: 'Discover what drives Enercam Solar Roofs: quality, innovation, sustainability, and customer focus in our mission to bring clean energy to Central Africa.',
  keywords: ['Enercam values', 'company mission', 'sustainability', 'clean energy values', 'Central Africa solar'],
}

const CORE_VALUES = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Quality & Reliability',
    subtitle: 'Excellence in Every Solution',
    description: 'We deliver solar solutions that last. Every product carries our 35-year warranty commitment, backed by rigorous testing and quality assurance processes.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    details: [
      '35-year power output warranty',
      'Class A fire-rated materials',
      'Weather-resistant construction',
      'Rigorous quality testing',
      'Certified installation processes'
    ],
    story: 'Our commitment to quality means every Enercam system is built to perform flawlessly for decades, giving our customers peace of mind and reliable clean energy.',
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: 'Customer First',
    subtitle: 'Your Success is Our Mission',
    description: 'Your energy independence is our mission. We prioritize your needs in every decision we make, from initial consultation to long-term support.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    details: [
      '24-hour response guarantee',
      'Personalized energy assessments',
      'Ongoing technical support',
      'Transparent pricing',
      'Customer education programs'
    ],
    story: 'We don\'t just sell solar systems—we build lasting partnerships. Our customers become part of the clean energy revolution, with our full support every step of the way.',
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: 'Innovation',
    subtitle: 'Advancing Solar Technology',
    description: 'We continuously invest in research and development to bring you the latest solar technology and integrated solutions.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    details: [
      'Proprietary solar tile technology',
      'Smart energy monitoring',
      'Advanced battery storage',
      'Climate-optimized designs',
      'Continuous R&D investment'
    ],
    story: 'Innovation is in our DNA. From our unique integrated solar tiles to our smart energy management systems, we\'re constantly pushing the boundaries of what\'s possible in solar technology.',
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Sustainability',
    subtitle: 'Clean Energy for a Better Future',
    description: 'Clean energy for a sustainable future. We reduce carbon emissions across Central Africa while creating economic opportunities.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    details: [
      'Carbon emission reduction',
      'Renewable energy promotion',
      'Environmental impact assessment',
      'Sustainable manufacturing',
      'Community solar programs'
    ],
    story: 'Every Enercam installation contributes to a cleaner, more sustainable Central Africa. We\'ve helped reduce carbon emissions by over 50,000 tons while creating green jobs and economic opportunities.',
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Community Impact',
    subtitle: 'Building Stronger Communities',
    description: 'Creating jobs and economic opportunities while providing affordable clean energy solutions that strengthen communities.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    details: [
      'Local job creation',
      'Skills training programs',
      'Community solar initiatives',
      'Educational partnerships',
      'Economic development'
    ],
    story: 'Solar energy isn\'t just about clean power—it\'s about building stronger communities. Through job creation, skills training, and community programs, we\'re helping create a brighter future for all Central Africans.',
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: 'Excellence',
    subtitle: 'Setting the Standard',
    description: 'Setting the standard for solar roofing excellence in Central Africa and beyond through continuous improvement and industry leadership.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    details: [
      'Industry certifications',
      'Performance guarantees',
      'Customer satisfaction focus',
      'Continuous improvement',
      'Industry partnerships'
    ],
    story: 'Excellence isn\'t a destination—it\'s a journey. We continuously raise our standards, learn from our experiences, and set new benchmarks for quality and service in the solar industry.',
  },
]

const IMPACT_STATS = [
  {
    value: '500+',
    label: 'Solar Systems Installed',
    description: 'Homes and businesses powered by clean energy',
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    value: '50,000+',
    label: 'Tons CO₂ Reduced',
    description: 'Annual carbon emissions prevented',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    value: '98%',
    label: 'Customer Satisfaction',
    description: 'Based on post-installation surveys',
    icon: <Star className="w-6 h-6" />,
  },
  {
    value: '30+',
    label: 'Green Jobs Created',
    description: 'Local employment opportunities',
    icon: <Users className="w-6 h-6" />,
  },
]

export default function ValuesPage() {
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
              <Heart className="w-4 h-4" />
              What Drives Us
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 mb-6"
            >
              Our Values Define
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent">
                Who We Are
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              At Enercam, our values aren't just words on a page—they're the foundation of everything we do.
              They guide our decisions, shape our culture, and drive our commitment to bringing clean,
              reliable energy to Central Africa.
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
                <Award className="w-5 h-5 mr-2" />
                See Our Impact
              </AnimatedButton>

              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-700">Our Impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Values in Action
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our values translate into real results that make a difference in communities across Central Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-neutral-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-neutral-900 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {stat.description}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Core Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These six core values guide every decision we make and every interaction we have.
              They're not just principles—they're promises we keep to our customers, partners, and communities.
            </p>
          </motion.div>

          <div className="space-y-20">
            {CORE_VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row items-center gap-12`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${value.bgColor} rounded-3xl mb-6 ${value.color}`}>
                    {value.icon}
                  </div>

                  <h3 className="text-3xl font-bold text-neutral-900 mb-3">
                    {value.title}
                  </h3>

                  <p className="text-lg font-medium text-neutral-700 mb-4">
                    {value.subtitle}
                  </p>

                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {value.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-900 mb-3">How We Live This Value:</h4>
                    <ul className="space-y-2">
                      {value.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-neutral-600">
                          <CheckCircle className={`w-5 h-5 ${value.color} mt-0.5 mr-3 flex-shrink-0`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="border-l-4 border-blue-200 pl-6 italic text-neutral-700">
                    "{value.story}"
                  </blockquote>
                </div>

                {/* Visual Element */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <Card className={`p-8 ${value.bgColor} ${value.borderColor} border-2 shadow-lg`}>
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-24 h-24 ${value.bgColor} rounded-3xl mb-6 ${value.color} border-4 border-white shadow-lg`}>
                        {React.cloneElement(value.icon, { className: 'w-12 h-12' })}
                      </div>
                      <h4 className="text-2xl font-bold text-neutral-900 mb-4">
                        {value.title}
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <TrendingUp className={`w-6 h-6 ${value.color} mx-auto mb-2`} />
                          <div className="font-semibold text-neutral-900">Growing</div>
                          <div className="text-neutral-600">Impact</div>
                        </div>
                        <div className="text-center">
                          <Award className={`w-6 h-6 ${value.color} mx-auto mb-2`} />
                          <div className="font-semibold text-neutral-900">Excellence</div>
                          <div className="text-neutral-600">Standard</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
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
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Our Mission
            </h2>

            <blockquote className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              "To accelerate Central Africa's transition to clean energy by delivering innovative,
              reliable solar solutions that empower communities, reduce carbon emissions, and create
              sustainable economic opportunities for all."
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Globe className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Clean Energy</h3>
                <p className="text-blue-100 text-sm">Powering sustainable development</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Community Impact</h3>
                <p className="text-blue-100 text-sm">Building stronger futures together</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Lightbulb className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                <p className="text-blue-100 text-sm">Advancing solar technology</p>
              </div>
            </div>

            <div className="mt-12">
              <AnimatedButton
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold"
              >
                Join Our Mission
                <ArrowRight className="w-5 h-5 ml-2" />
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
