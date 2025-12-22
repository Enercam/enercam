"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Container from "@/components/common/container"
import AnimatedSection from "@/components/common/animated-section"

interface CTAProps {
  title?: string
  subtitle?: string
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  background?: 'primary' | 'neutral' | 'gradient'
}

export default function CTA({
  title = "Ready to Power Your Future?",
  subtitle = "Join hundreds of satisfied customers who have switched to clean, renewable energy with Enercam.",
  primaryCTA = { text: "Get Your Free Quote", href: "/contact?interest=quote" },
  secondaryCTA = { text: "Call Us Now", href: "tel:+2376226721748" },
  background = 'primary',
}: CTAProps) {
  const bgClasses = {
    primary: 'bg-primary-600 text-white',
    neutral: 'bg-neutral-900 text-white',
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-800 text-white',
  }

  return (
    <section className={`py-24 ${bgClasses[background]}`}>
      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-h1 font-display mb-6">{title}</h2>
          {subtitle && <p className="text-xl mb-8 opacity-90">{subtitle}</p>}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" variant={background === 'primary' ? 'secondary' : 'outline'} asChild>
              <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
            </Button>
            {secondaryCTA && (
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-sm opacity-75"
          >
            <p>✓ 24-hour response time</p>
            <p>✓ No obligation consultation</p>
            <p>✓ Serving 6 countries across Central Africa</p>
          </motion.div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
