import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import ContactForm from '@/components/forms/ContactForm'
import Container from '@/components/common/container'
import Breadcrumbs from '@/components/layout/breadcrumbs'

export const metadata: Metadata = {
  title: 'Contact Enercam Solar Roofs - Get Your Free Quote',
  description: 'Ready to power your future? Contact Enercam for integrated solar roofing solutions in Central Africa. We respond within 24 hours.',
}

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h1 font-display mb-6">
              Ready to Power Your Future?
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Get in touch with our solar experts. We'll help you find the perfect integrated solar roofing solution for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-600" />
                <span>24-hour response time</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span>Serving 6 countries</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-6xl mx-auto">
            <Breadcrumbs items={breadcrumbs} className="mb-8" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
                  <h2 className="text-h2 font-display mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div>
                  <h3 className="text-h3 font-display mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          {SITE_CONFIG.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <div className="space-y-1">
                          <a
                            href={`mailto:${SITE_CONFIG.email.info}`}
                            className="text-primary-600 hover:text-primary-700 transition-colors block"
                          >
                            {SITE_CONFIG.email.info}
                          </a>
                          <a
                            href={`mailto:${SITE_CONFIG.email.support}`}
                            className="text-primary-600 hover:text-primary-700 transition-colors block"
                          >
                            {SITE_CONFIG.email.support}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Service Areas</p>
                        <div className="text-neutral-600 space-y-1">
                          <p>Cameroon</p>
                          <p>Chad</p>
                          <p>Gabon</p>
                          <p>Congo</p>
                          <p>Equatorial Guinea</p>
                          <p>Central African Republic</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-neutral-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-primary-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <div className="space-y-2">
                    <Link
                      href="/products"
                      className="block text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      View Our Products
                    </Link>
                    <Link
                      href="/how-it-works"
                      className="block text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      How It Works
                    </Link>
                    <Link
                      href="/projects"
                      className="block text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Our Projects
                    </Link>
                    <Link
                      href="/financing"
                      className="block text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Financing Options
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
