"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import Container from "@/components/common/container"

export default function Hero() {
  const t = useTranslations()
  const scrollToNext = () => {
    const nextSection = document.querySelector('#features')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-repeat opacity-5"></div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl text-center mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-display-1 font-display text-primary-900 mb-6"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" asChild>
              <Link href="/contact?interest=quote">{t('hero.primaryCTA')}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/how-it-works">{t('hero.secondaryCTA')}</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 text-sm text-neutral-600"
          >
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              {t('trustIndicators.experience')}
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              {t('trustIndicators.employees')}
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              {t('trustIndicators.countries')}
            </span>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-neutral-500 hover:text-primary-600 transition-colors"
        >
          <span className="text-sm mb-2">{t('common.scrollToExplore')}</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
