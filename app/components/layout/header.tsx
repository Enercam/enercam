'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { AnimatedButton } from '@/components/ui/animated-button'
import {
  Menu,
  ChevronDown,
  Sun,
  Phone,
  Mail
} from 'lucide-react'

interface NavItem {
  name: string
  href: string
  children?: NavItem[]
}

const NAVIGATION: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Products',
    href: '/products',
    children: [
      { name: 'Solar Roofs', href: '/products/solar-roofs' },
      { name: 'Heliu Tiles', href: '/products/solar-roofs/heliu' },
      { name: 'Roofit Steel', href: '/products/solar-roofs/roofit' },
      { name: 'Mema Sheets', href: '/products/solar-roofs/mema' },
      { name: 'Battery Storage', href: '/products/battery-storage' },
      { name: 'Solar Modules', href: '/products/solar-modules' },
      { name: 'Air Conditioners', href: '/products/air-conditioners' },
      { name: 'Solar Lighting', href: '/products/lighting' },
    ]
  },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Projects', href: '/projects' },
  {
    name: 'About',
    href: '/about',
    children: [
      { name: 'Our Company', href: '/about' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Values & Mission', href: '/about/values' },
    ]
  },
  { name: 'Financing', href: '/financing' },
  { name: 'Contact', href: '/contact' },
]

const SITE_CONFIG = {
  name: 'Enercam Solar Roofs',
  phone: '+237-622-672-1748',
  email: 'info@enercam.com',
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent("Contact Form - Enercam Solar")
    const body = encodeURIComponent("Hello, I'd like to learn more about your solar products.")
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-neutral-200/50'
          : 'bg-white/80 backdrop-blur-md border-b border-white/20'
      )}
    >
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="container">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-accent-300 transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-accent-300 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-brand-100">Serving Central Africa</span>
              <div className="flex space-x-1">
                <span className="text-lg">🇨🇲</span>
                <span className="text-lg">🇹🇩</span>
                <span className="text-lg">🇬🇦</span>
                <span className="text-lg">🇨🇬</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sun className="w-6 h-6 text-white" />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-display font-bold text-neutral-900 group-hover:text-brand-700 transition-colors">
                Enercam
              </h1>
              <p className="text-xs text-neutral-600 group-hover:text-brand-600 transition-colors">
                Solar Roofs
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAVIGATION.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={cn(
                      'flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-brand-50 hover:text-brand-700 group',
                      pathname?.startsWith(item.href) && 'text-brand-700 bg-brand-50'
                    )}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />

                    {/* Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-neutral-200/50 backdrop-blur-xl overflow-hidden"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-3 text-sm text-neutral-700 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-all duration-200"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-brand-50 hover:text-brand-700 relative group',
                      pathname === item.href && 'text-brand-700 bg-brand-50'
                    )}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleContactClick}
              className="text-neutral-700 hover:text-brand-700 hover:bg-brand-50"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <AnimatedButton
              size="sm"
              glow={true}
              className="bg-gradient-to-r from-brand-600 to-brand-700 text-white hover:from-brand-700 hover:to-brand-800 shadow-lg"
            >
              Get Quote
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-brand-700 rounded-lg flex items-center justify-center">
                      <Sun className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-neutral-900">Enercam</h2>
                      <p className="text-xs text-neutral-600">Solar Roofs</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-6">
                  <div className="space-y-2">
                    {NAVIGATION.map((item) => (
                      <div key={item.name}>
                        {item.children ? (
                          <div className="space-y-2">
                            <div className="px-4 py-2 text-sm font-semibold text-neutral-900 bg-neutral-50 rounded-lg">
                              {item.name}
                            </div>
                            <div className="ml-4 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block px-4 py-2 text-sm text-neutral-700 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              'block px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                              pathname === item.href
                                ? 'text-brand-700 bg-brand-50'
                                : 'text-neutral-700 hover:text-brand-700 hover:bg-brand-50'
                            )}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>

                {/* Mobile Contact */}
                <div className="border-t border-neutral-200 pt-6 space-y-4">
                  <div className="space-y-3">
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex items-center space-x-3 p-3 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-brand-600" />
                      <span className="text-sm font-medium text-brand-700">{SITE_CONFIG.phone}</span>
                    </a>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-neutral-600" />
                      <span className="text-sm font-medium text-neutral-700">{SITE_CONFIG.email}</span>
                    </a>
                  </div>

                  <AnimatedButton
                    onClick={(e) => {
                      handleContactClick(e)
                      setMobileMenuOpen(false)
                    }}
                    className="w-full bg-gradient-to-r from-brand-600 to-brand-700 text-white hover:from-brand-700 hover:to-brand-800"
                  >
                    Get Free Quote
                  </AnimatedButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}