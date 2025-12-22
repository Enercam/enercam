import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Linkedin,
  Mail,
  Award,
  Users,
  Lightbulb,
  Target,
  ChevronRight,
  Star,
  Trophy,
  Heart
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Team - Enercam Solar Roofs Experts',
  description: 'Meet the Enercam Solar Roofs team of experts with 10+ years of experience in solar technology and clean energy solutions across Central Africa.',
  keywords: ['Enercam team', 'solar experts', 'clean energy professionals', 'solar installation Cameroon'],
}

const TEAM_MEMBERS = [
  {
    id: 'john-doe',
    name: 'John Doe',
    position: 'CEO & Founder',
    bio: 'With 15+ years in renewable energy, John founded Enercam to bring world-class solar solutions to Central Africa. Previously led solar initiatives at major international energy firms.',
    image: '/images/team/john-doe.jpg',
    linkedin: 'https://linkedin.com/in/john-doe',
    email: 'john@enercam.com',
    expertise: ['Strategic Leadership', 'Solar Technology', 'Business Development'],
    achievements: ['Founded Enercam in 2015', '500+ installations completed', 'Regional expansion to 6 countries'],
    years: '15+',
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    position: 'Chief Technology Officer',
    bio: 'Jane leads our engineering and product development with a PhD in Electrical Engineering. She oversees the design and optimization of our integrated solar roofing systems.',
    image: '/images/team/jane-smith.jpg',
    linkedin: 'https://linkedin.com/in/jane-smith',
    email: 'jane@enercam.com',
    expertise: ['Solar Engineering', 'Product Design', 'Technical Innovation'],
    achievements: ['Developed proprietary solar tile technology', '10+ patents filed', 'Industry-leading 35-year warranty'],
    years: '12+',
  },
  {
    id: 'david-lee',
    name: 'David Lee',
    position: 'VP of Operations',
    bio: 'David ensures flawless execution of every solar installation project. His team maintains our 100% safety record and exceptional quality standards across all service areas.',
    image: '/images/team/david-lee.jpg',
    linkedin: 'https://linkedin.com/in/david-lee',
    email: 'david@enercam.com',
    expertise: ['Project Management', 'Quality Assurance', 'Operations Excellence'],
    achievements: ['Zero safety incidents in 10 years', '99.5% customer satisfaction', 'Streamlined installation process'],
    years: '13+',
  },
  {
    id: 'sarah-jones',
    name: 'Sarah Jones',
    position: 'Head of Customer Success',
    bio: 'Sarah and her team ensure every customer achieves maximum energy savings and satisfaction. She personally oversees complex installations and long-term support.',
    image: '/images/team/sarah-jones.jpg',
    linkedin: 'https://linkedin.com/in/sarah-jones',
    email: 'sarah@enercam.com',
    expertise: ['Customer Relations', 'Energy Optimization', 'Technical Support'],
    achievements: ['54% average energy savings', '24-hour response guarantee', 'Customer retention rate 98%'],
    years: '10+',
  },
  {
    id: 'mike-brown',
    name: 'Mike Brown',
    position: 'Regional Director - Cameroon',
    bio: 'Mike leads our largest market operations in Cameroon. With deep local expertise and relationships, he ensures seamless service delivery across the country.',
    image: '/images/team/mike-brown.jpg',
    linkedin: 'https://linkedin.com/in/mike-brown',
    email: 'mike@enercam.com',
    expertise: ['Regional Management', 'Local Partnerships', 'Market Development'],
    achievements: ['300+ installations in Cameroon', 'Established 15 local partnerships', 'Pioneered mobile service vans'],
    years: '11+',
  },
  {
    id: 'emily-white',
    name: 'Emily White',
    position: 'Sustainability Director',
    bio: 'Emily drives our environmental impact initiatives and ensures all operations meet the highest sustainability standards. She leads carbon reduction and community education programs.',
    image: '/images/team/emily-white.jpg',
    linkedin: 'https://linkedin.com/in/emily-white',
    email: 'emily@enercam.com',
    expertise: ['Environmental Impact', 'Sustainability', 'Community Engagement'],
    achievements: ['Reduced carbon emissions by 50,000 tons', 'Launched community solar programs', 'Industry sustainability certifications'],
    years: '9+',
  },
  {
    id: 'peter-green',
    name: 'Peter Green',
    position: 'Installation Manager',
    bio: 'Peter oversees our certified installation teams across all service areas. His expertise in solar roofing ensures every project meets our exacting standards.',
    image: '/images/team/peter-green.jpg',
    linkedin: 'https://linkedin.com/in/peter-green',
    email: 'peter@enercam.com',
    expertise: ['Solar Installation', 'Team Leadership', 'Technical Training'],
    achievements: ['Trained 50+ certified installers', 'Developed safety protocols', 'Reduced installation time by 40%'],
    years: '8+',
  },
  {
    id: 'lisa-black',
    name: 'Lisa Black',
    position: 'Finance & Operations Director',
    bio: 'Lisa manages our financial operations and partner relationships. She ensures competitive financing options and seamless partnerships across our service network.',
    image: '/images/team/lisa-black.jpg',
    linkedin: 'https://linkedin.com/in/lisa-black',
    email: 'lisa@enercam.com',
    expertise: ['Financial Management', 'Partner Relations', 'Operations Strategy'],
    achievements: ['Secured $2M in financing partnerships', 'Zero-down payment programs', 'Expanded to 6 countries'],
    years: '12+',
  },
]

const DEPARTMENTS = [
  {
    name: 'Leadership',
    count: 3,
    icon: <Star className="w-6 h-6" />,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    name: 'Engineering',
    count: 8,
    icon: <Lightbulb className="w-6 h-6" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Operations',
    count: 12,
    icon: <Target className="w-6 h-6" />,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    name: 'Customer Success',
    count: 7,
    icon: <Heart className="w-6 h-6" />,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
]

export default function TeamPage() {
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
              <Users className="w-4 h-4" />
              Meet Our Experts
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 mb-6"
            >
              The People Behind
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
              Our diverse team of engineers, project managers, and energy experts brings together
              decades of experience in solar technology and a deep commitment to Central Africa's
              clean energy future.
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
                Join Our Team
              </AnimatedButton>

              <Link href="/about">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  Our Story
                </AnimatedButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {DEPARTMENTS.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${dept.bgColor} rounded-2xl mb-4 ${dept.color}`}>
                  {dept.icon}
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-2">
                  {dept.count}
                </div>
                <div className="text-sm text-neutral-600">
                  {dept.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Leadership Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Meet the Experts
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our leadership team combines technical expertise, business acumen, and a shared
              passion for bringing clean energy to Central Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <div className="relative h-64 bg-gradient-to-br from-blue-100 to-green-100">
                    {/* Placeholder for team member photo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="w-12 h-12 text-white/60" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-neutral-800">
                        {member.years} years
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {member.position}
                      </p>
                    </div>

                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Expertise */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 2).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-2">Key Achievements</h4>
                      <ul className="text-xs text-neutral-600 space-y-1">
                        {member.achievements.slice(0, 2).map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <Trophy className="w-3 h-3 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
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
              Join Our Growing Team
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals who share our passion for
              clean energy and sustainable development in Central Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/careers">
                <AnimatedButton
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 font-semibold"
                >
                  View Open Positions
                  <ChevronRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
              </Link>

              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Contact HR
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
