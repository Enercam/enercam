'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Contact Form - Enercam Solar")
    const body = encodeURIComponent("Hello, I'd like to learn more about your solar products.")
    window.location.href = `mailto:info@enercam.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-surface-primary">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(59 130 246 / 0.1) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 backdrop-blur-xl bg-surface-primary/80 border-b border-neutral-200/50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-display font-semibold text-neutral-900">Enercam</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#projects" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#contact" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
              </a>
              <button
                onClick={handleContactClick}
                className="bg-primary-600 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-700 hover:shadow-primary transition-all duration-300 hover:scale-105"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-surface-secondary to-secondary-50" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 rounded-full blur-xl animate-float" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-warning-200/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 text-primary-700 font-medium text-sm mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
              Revolutionizing Solar Energy in Central Africa
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              Smarter
              <span className="block bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent animate-shimmer">
                Roofing
              </span>
              <span className="block text-neutral-700">Solar Power Built In</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Beautiful, durable roofing that generates clean energy for your home.
              Experience the future of sustainable living with integrated solar technology.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up`} style={{ animationDelay: '0.6s' }}>
              <button
                onClick={handleContactClick}
                className="group relative bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Get Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </button>

              <a
                href="#products"
                className="group relative bg-surface-primary/80 backdrop-blur-xl text-neutral-900 px-8 py-4 rounded-2xl font-semibold text-lg border border-neutral-200/50 hover:border-primary-300/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center">
                  Explore Products
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
              {[
                { number: '10+', label: 'Years Experience', icon: '🏆' },
                { number: '30+', label: 'Happy Customers', icon: '😊' },
                { number: '6+', label: 'Countries Served', icon: '🌍' }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-surface-primary/60 backdrop-blur-xl rounded-2xl p-6 border border-neutral-200/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-display font-bold text-neutral-900 mb-1">{stat.number}</div>
                  <div className="text-neutral-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gradient-to-b from-surface-secondary to-surface-primary">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 text-primary-700 font-medium text-sm mb-6">
              Our Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Premium Solar Products
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Discover our comprehensive range of integrated solar roofing solutions designed for the African climate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Heliu Solar Roof Tile',
                description: 'Integrated solar tiles that seamlessly replace conventional roofing while generating clean energy.',
                icon: '☀️',
                gradient: 'from-yellow-400 to-orange-500',
                link: '/en/products/solar-roofs/heliu',
                features: ['Weather Resistant', '25-Year Warranty', 'Aesthetic Design']
              },
              {
                title: 'MiniCube Battery',
                description: 'Compact energy storage solution perfect for residential solar installations.',
                icon: '🔋',
                gradient: 'from-green-400 to-green-600',
                link: '/en/products',
                features: ['High Capacity', 'Fast Charging', 'Smart Monitoring']
              },
              {
                title: 'Complete Solar Systems',
                description: 'End-to-end solar solutions tailored for homes and businesses across Central Africa.',
                icon: '🏠',
                gradient: 'from-blue-400 to-purple-600',
                link: '/en/products',
                features: ['Custom Design', 'Full Installation', 'Ongoing Support']
              }
            ].map((product, index) => (
              <div
                key={product.title}
                className={`group bg-surface-primary rounded-3xl p-8 border border-neutral-200/50 hover:border-primary-300/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{product.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-neutral-700">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={product.link}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 group-hover:translate-x-1 transform duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium text-sm mb-8">
              Ready to Get Started?
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Transform Your Home with Solar
            </h2>

            <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
              Join thousands of satisfied customers across Central Africa who have made the switch to clean, renewable energy.
            </p>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Service Area</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent backdrop-blur-sm">
                    <option value="" className="bg-neutral-800">Select your location</option>
                    <option value="cameroon" className="bg-neutral-800">Cameroon</option>
                    <option value="chad" className="bg-neutral-800">Chad</option>
                    <option value="gabon" className="bg-neutral-800">Gabon</option>
                    <option value="congo" className="bg-neutral-800">Congo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent backdrop-blur-sm resize-none"
                    placeholder="Tell us about your project and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleContactClick}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>

                <p className="text-center text-neutral-400 text-sm">
                  We respond to all inquiries within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-xl font-display font-semibold">Enercam</span>
              </div>
              <p className="text-neutral-400 mb-4">
                Leading integrated solar roofing solutions across Central Africa.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="/en/products/solar-roofs/heliu" className="hover:text-white transition-colors">Heliu Solar Tiles</a></li>
                <li><a href="/en/products" className="hover:text-white transition-colors">Battery Storage</a></li>
                <li><a href="/en/products" className="hover:text-white transition-colors">Complete Systems</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="/en/projects" className="hover:text-white transition-colors">Our Projects</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>🇨🇲 Cameroon</li>
                <li>🇹🇩 Chad</li>
                <li>🇬🇦 Gabon</li>
                <li>🇨🇬 Congo</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-400 text-sm">
                © 2025 Enercam Solar Roofs. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
