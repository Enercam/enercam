'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/ui/animated-button'
import {
  Sun,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
  Award,
  Users,
  Globe
} from 'lucide-react'

const SITE_CONFIG = {
  name: 'Enercam Solar Roofs',
  description: 'Leading integrated solar roofing solutions across Central Africa.',
  phone: '+237-622-672-1748',
  email: 'info@enercam.com',
  address: 'Douala, Cameroon',
  social: {
    facebook: 'https://facebook.com/enercam',
    instagram: 'https://instagram.com/enercam',
    linkedin: 'https://linkedin.com/company/enercam',
    twitter: 'https://twitter.com/enercam',
  },
}

const FOOTER_LINKS = {
  products: [
    { name: 'Solar Roofs', href: '/products/solar-roofs' },
    { name: 'Heliu Tiles', href: '/products/solar-roofs/heliu' },
    { name: 'Roofit Steel', href: '/products/solar-roofs/roofit' },
    { name: 'Battery Storage', href: '/products/battery-storage' },
    { name: 'Solar Modules', href: '/products/solar-modules' },
    { name: 'Air Conditioners', href: '/products/air-conditioners' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about/team' },
    { name: 'Projects', href: '/projects' },
    { name: 'Partners', href: '/partners' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Financing', href: '/financing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

const SERVICE_COUNTRIES = [
  { code: 'CM', name: 'Cameroon', flag: '🇨🇲' },
  { code: 'TD', name: 'Chad', flag: '🇹🇩' },
  { code: 'GA', name: 'Gabon', flag: '🇬🇦' },
  { code: 'CG', name: 'Congo', flag: '🇨🇬' },
  { code: 'GQ', name: 'Equatorial Guinea', flag: '🇬🇶' },
  { code: 'CF', name: 'Central African Republic', flag: '🇨🇫' },
]

export default function Footer() {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Contact Form - Enercam Solar")
    const body = encodeURIComponent("Hello, I'd like to learn more about your solar products.")
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`
  }

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-neutral-700/50">
        <div className="container py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
              Stay Updated with Solar Innovation
            </h3>
            <p className="text-neutral-300 mb-8">
              Get the latest news on solar technology, energy savings tips, and exclusive offers delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent backdrop-blur-sm"
              />
              <AnimatedButton
                className="bg-gradient-to-r from-brand-600 to-brand-700 text-white hover:from-brand-700 hover:to-brand-800 whitespace-nowrap"
              >
                Subscribe
              </AnimatedButton>
            </div>

            <p className="text-xs text-neutral-400 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h2 className="text-xl font-display font-bold group-hover:text-brand-400 transition-colors">
                  Enercam
                </h2>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  Solar Roofs
                </p>
              </div>
            </Link>

            <p className="text-neutral-300 mb-6 leading-relaxed">
              {SITE_CONFIG.description} We combine cutting-edge solar technology with beautiful,
              durable roofing solutions to help Central African homes achieve energy independence.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-brand-400" />
                </div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-neutral-400">Years</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-brand-400" />
                </div>
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-xs text-neutral-400">Team</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="w-5 h-5 text-brand-400" />
                </div>
                <div className="text-2xl font-bold text-white">6</div>
                <div className="text-xs text-neutral-400">Countries</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {Object.entries(SITE_CONFIG.social).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Follow us on ${platform}`}
                >
                  {platform === 'facebook' && <Facebook className="w-5 h-5" />}
                  {platform === 'instagram' && <Instagram className="w-5 h-5" />}
                  {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                  {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Products</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-brand-400 transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-brand-400 transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-brand-400 transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-300 text-sm">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center space-x-3 text-neutral-300 hover:text-brand-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span className="text-sm">{SITE_CONFIG.phone}</span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center space-x-3 text-neutral-300 hover:text-brand-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span className="text-sm">{SITE_CONFIG.email}</span>
              </a>
            </div>

            <div className="mt-6">
              <AnimatedButton
                size="sm"
                onClick={handleContactClick}
                className="w-full bg-gradient-to-r from-brand-600 to-brand-700 text-white hover:from-brand-700 hover:to-brand-800"
              >
                Get In Touch
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* Service Countries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-neutral-700/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-0">
              <span className="text-neutral-400 text-sm font-medium">Serving:</span>
              {SERVICE_COUNTRIES.map((country) => (
                <div
                  key={country.code}
                  className="flex items-center space-x-2 px-3 py-1 bg-white/5 rounded-full border border-white/10"
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="text-xs text-neutral-300">{country.name}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <span>© 2025 Enercam Solar Roofs. All rights reserved.</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-700/50">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-neutral-400 hover:text-neutral-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-xs text-neutral-500">
                Made with ❤️ for clean energy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}