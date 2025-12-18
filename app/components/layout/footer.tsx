import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import Container from "@/components/common/container"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary-400">Enercam</div>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Premium integrated solar roofing solutions for Central Africa. Beautiful, durable roofing that generates clean energy for your home.
            </p>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.social.facebook}
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                  <Link
                    href="/products/solar-roofs"
                    className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    Solar Roofs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/battery-storage"
                    className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    Battery Storage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/solar-modules"
                    className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    Solar Modules
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/air-conditioners"
                    className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    Air Conditioners
                  </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Our Company
                </Link>
              </li>
              <li>
                <Link
                  href="/about/team"
                  className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/financing"
                  className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Financing
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email.info}`}
                  className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {SITE_CONFIG.email.info}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-neutral-300 text-sm">
                  <div>Serving:</div>
                  <div>Cameroon • Chad • Gabon</div>
                  <div>Congo • Equatorial Guinea • CAR</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © {currentYear} Enercam Solar Roofs. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
