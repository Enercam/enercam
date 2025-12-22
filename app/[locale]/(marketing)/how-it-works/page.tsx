import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Search,
  Calculator,
  Wrench,
  Zap,
  CheckCircle,
  Clock,
  Users,
  Phone,
  ArrowRight,
  Play,
  Shield,
  Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works - Enercam Solar Installation Process',
  description: 'Learn about our comprehensive solar installation process. From initial consultation to system activation, discover how Enercam makes going solar simple and reliable.',
  keywords: ['solar installation process', 'how solar works', 'solar installation Cameroon', 'solar system setup', 'solar installation steps'],
}

const INSTALLATION_STEPS = [
  {
    step: 1,
    title: 'Initial Consultation',
    subtitle: 'Understanding Your Needs',
    description: 'We start with a comprehensive assessment of your energy needs, roof condition, and solar potential.',
    icon: <Search className="w-8 h-8" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    duration: '1-2 days',
    details: [
      'Site visit and energy assessment',
      'Roof inspection and solar potential analysis',
      'Custom system design and proposal',
      'Financial planning and ROI calculation',
      'Q&A session to address concerns'
    ],
    image: '/images/process/consultation.jpg'
  },
  {
    step: 2,
    title: 'System Design',
    subtitle: 'Customized Solution',
    description: 'Our engineers create a tailored solar system design optimized for your specific location and energy requirements.',
    icon: <Calculator className="w-8 h-8" />,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    duration: '3-5 days',
    details: [
      'Detailed system specifications',
      '3D modeling of solar installation',
      'Energy production estimates',
      'Permitting and documentation',
      'Final proposal and contract'
    ],
    image: '/images/process/design.jpg'
  },
  {
    step: 3,
    title: 'Installation',
    subtitle: 'Professional Setup',
    description: 'Our certified installation team handles the entire process with precision, safety, and minimal disruption.',
    icon: <Wrench className="w-8 h-8" />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    duration: '2-5 days',
    details: [
      'Roof preparation and safety setup',
      'Solar panel and tile installation',
      'Electrical wiring and connections',
      'Battery system integration',
      'Quality checks and testing'
    ],
    image: '/images/process/installation.jpg'
  },
  {
    step: 4,
    title: 'System Activation',
    subtitle: 'Going Live',
    description: 'Final testing, system activation, and comprehensive training on your new solar energy system.',
    icon: <Zap className="w-8 h-8" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    duration: '1 day',
    details: [
      'Final system testing and calibration',
      'Smart monitoring setup',
      'User training and documentation',
      'Warranty activation',
      'Ongoing support introduction'
    ],
    image: '/images/process/activation.jpg'
  },
  {
    step: 5,
    title: 'Monitoring & Support',
    subtitle: 'Ongoing Partnership',
    description: 'Continuous monitoring and support to ensure optimal performance and maximum energy savings.',
    icon: <Shield className="w-8 h-8" />,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    duration: 'Ongoing',
    details: [
      '24/7 system monitoring',
      'Performance optimization',
      'Regular maintenance checks',
      'Technical support hotline',
      'Annual system inspections'
    ],
    image: '/images/process/monitoring.jpg'
  }
]

const BENEFITS = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Expert Installation',
    description: 'Certified professionals with 10+ years of experience'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Quick Timeline',
    description: 'Complete installation in 1-2 weeks from start to finish'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: '35-Year Warranty',
    description: 'Comprehensive coverage on all system components'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Dedicated Support',
    description: 'Personal project manager throughout the process'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Quality Guarantee',
    description: '100% satisfaction guarantee on all installations'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Energy Independence',
    description: 'Reduce electricity bills by up to 80%'
  }
]

const FAQS = [
  {
    question: 'How long does the entire process take?',
    answer: 'From initial consultation to system activation, the typical timeline is 2-4 weeks, depending on system complexity and permitting requirements.'
  },
  {
    question: 'Do I need to be home during installation?',
    answer: 'While you don\'t need to be present for the entire installation, we recommend being available for the final walkthrough and system training.'
  },
  {
    question: 'What if I need to make changes during installation?',
    answer: 'We build flexibility into our process. Changes can be accommodated up to 24 hours before installation begins.'
  },
  {
    question: 'How do you ensure safety during installation?',
    answer: 'All our installers are certified, insured, and follow strict safety protocols. We maintain a perfect safety record across 500+ installations.'
  }
]

export default function HowItWorksPage() {

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
              <Play className="w-4 h-4" />
              Installation Process
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 mb-6"
            >
              From Vision to
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent">
                Clean Energy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Discover our proven 5-step process that transforms your home into a clean energy powerhouse.
              From consultation to activation, we're with you every step of the way.
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
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-5 h-5 mr-2" />
                See the Process
              </AnimatedButton>

              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </AnimatedButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section id="process" className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">5-Step Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Your Solar Journey
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We've streamlined the solar installation process to make going solar as simple and stress-free as possible.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-green-200 to-purple-200 transform -translate-x-1/2" />

            {INSTALLATION_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex-row items-center gap-8 md:gap-16`}
              >
                {/* Step Number & Icon */}
                <div className={`flex-shrink-0 w-20 h-20 ${step.bgColor} ${step.borderColor} border-4 rounded-full flex items-center justify-center shadow-lg z-10`}>
                  <div className={step.color}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-neutral-100 text-neutral-700">
                      Step {step.step}
                    </Badge>
                    <span className="text-sm text-neutral-500">{step.duration}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-neutral-700 mb-4">
                    {step.subtitle}
                  </p>

                  <p className="text-neutral-600 mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className={`w-5 h-5 ${step.color} mt-0.5 mr-3 flex-shrink-0`} />
                        <span className="text-neutral-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              The Enercam Advantage
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              What sets us apart isn't just our technology—it's our commitment to excellence,
              safety, and customer satisfaction at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 text-blue-600">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Common Questions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Process FAQs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Get answers to the most frequently asked questions about our installation process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {faq.answer}
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
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of satisfied customers who have transformed their homes with clean energy.
              Our process is designed to be simple, transparent, and stress-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 font-semibold"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
              </Link>

              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More About the Process
              </AnimatedButton>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-100">Installations Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-blue-100">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24hrs</div>
                <div className="text-blue-100">Average Response Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
