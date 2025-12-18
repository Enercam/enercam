"use client"

import { TrendingDown, Layout, Shield, Users } from "lucide-react"
import { useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"
import Container from "@/components/common/container"
import AnimatedSection from "@/components/common/animated-section"

interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export default function Features() {
  const t = useTranslations()

  const features: Feature[] = [
    {
      icon: TrendingDown,
      title: t('features.lowerBills.title'),
      description: t('features.lowerBills.description'),
    },
    {
      icon: Layout,
      title: t('features.integratedDesign.title'),
      description: t('features.integratedDesign.description'),
    },
    {
      icon: Shield,
      title: t('features.warranty.title'),
      description: t('features.warranty.description'),
    },
    {
      icon: Users,
      title: t('features.expertInstallation.title'),
      description: t('features.expertInstallation.description'),
    },
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-h1 font-display mb-4">{t('features.title')}</h2>
          <p className="text-body-lg text-neutral-600">{t('features.subtitle')}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="h-full"
            >
              <Card className="text-center p-8 h-full hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 bg-primary-100 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-h4 mb-4">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
