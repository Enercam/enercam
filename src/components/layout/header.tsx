"use client"

import * as React from "react"
import { Link } from "@/navigation"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Facebook, Twitter, Instagram, Linkedin, Phone } from "lucide-react"
import { useTranslations } from "next-intl"

export function Header() {
  const t = useTranslations('Navigation')
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { href: '/about', label: t('about') },
    { href: '/products', label: t('products') },
    { href: '/partners', label: t('partners') },
    { href: '/why-enercam', label: t('whyEnercam') },
    { href: '/projects', label: t('projectsTestimonials') },
    { href: '/recommendations', label: t('recommendations') },
    { href: '/careers', label: t('careers') },
    { href: '/faq', label: t('faq') },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="relative h-12 w-40">
            <Image 
              src="/images/logo.svg" 
              alt="Enercam" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.slice(0, 5).map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href} className={navigationMenuTriggerStyle()}>
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              {/* Dropdown or More menu could go here if items exceed space, for now keeping it simple */}
              <NavigationMenuItem>
                 <Button asChild variant="default" className="ml-2">
                    <Link href="/contact">
                      {t('contact')}
                    </Link>
                 </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] flex flex-col p-6">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <SheetDescription className="sr-only">
                        Main navigation menu for mobile devices
                    </SheetDescription>
                    
                    <div className="mb-8">
                       <Link href="/" onClick={() => setIsOpen(false)} className="block relative h-10 w-32">
                          <Image 
                            src="/images/logo.svg" 
                            alt="Enercam" 
                            fill
                            className="object-contain object-left"
                          />
                       </Link>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-4 py-3 text-lg font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 space-y-6 pt-6 border-t">
                        <Button asChild className="w-full h-12 text-lg" size="lg">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                {t('contact')}
                            </Link>
                        </Button>
                        
                        <div className="flex justify-center gap-6 text-slate-400">
                             <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                             <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                             <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                             <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                        
                        <div className="flex justify-center items-center gap-2 text-sm text-slate-500 font-medium">
                            <Phone className="h-4 w-4" />
                            <span>622-672-1748</span>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  )
}
