"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NAVIGATION } from "@/lib/constants"
import Container from "@/components/common/container"

interface HeaderProps {
  transparent?: boolean
}

export default function Header({ transparent = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        transparent
          ? "bg-transparent"
          : "bg-white shadow-sm border-b border-neutral-200"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-600">Enercam</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <div key={item.name} className="relative group">
                {'children' in item && item.children ? (
                  <>
                    <button className="flex items-center space-x-1 text-neutral-700 hover:text-primary-600 transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="py-2">
                        {item.children.map((child: { name: string; href: string }) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary-600"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-neutral-700 hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/contact">{t('navigation.contact')}</Link>
            </Button>
            <Button asChild>
              <Link href="/contact?interest=quote">{t('common.getQuote')}</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-2xl font-bold text-primary-600">Enercam</div>
                </Link>

                <nav className="flex flex-col space-y-4">
                  {NAVIGATION.map((item) => (
                    <div key={item.name}>
                      {'children' in item && item.children ? (
                        <div className="space-y-2">
                          <div className="font-medium text-neutral-900">{item.name}</div>
                          <div className="pl-4 space-y-2">
                            {item.children.map((child: { name: string; href: string }) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block text-neutral-600 hover:text-primary-600 py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block text-neutral-900 hover:text-primary-600 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="flex flex-col space-y-3 pt-6 border-t">
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      {t('navigation.contact')}
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/contact?interest=quote" onClick={() => setIsOpen(false)}>
                      {t('common.getQuote')}
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </Container>
    </header>
  )
}
