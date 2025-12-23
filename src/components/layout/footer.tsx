import { Link } from "@/navigation"
import { useTranslations } from "next-intl"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const t = useTranslations('Navigation')
  const tFooter = useTranslations('Footer')
  
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800 pt-16 pb-8">
      <div className="container">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-block relative w-32 h-10">
               {/* Logo placeholder - replace with actual logo image component if needed */}
               <span className="text-2xl font-bold text-white tracking-tight">Enercam</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Smarter Roofing. Solar Power Built In. Beautiful, durable roofing that generates clean energy for your home.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">{t('home')}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">{t('about')}</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors">{t('products')}</Link></li>
              <li><Link href="/partners" className="text-slate-400 hover:text-white transition-colors">{t('partners')}</Link></li>
              <li><Link href="/why-enercam" className="text-slate-400 hover:text-white transition-colors">{t('whyEnercam')}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/projects" className="text-slate-400 hover:text-white transition-colors">{t('projectsTestimonials')}</Link></li>
              <li><Link href="/recommendations" className="text-slate-400 hover:text-white transition-colors">{t('recommendations')}</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-white transition-colors">{t('careers')}</Link></li>
              <li><Link href="/faq" className="text-slate-400 hover:text-white transition-colors">{t('faq')}</Link></li>
            </ul>
          </div>

          {/* Legal / Copyright */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">{t('contact')}</Link></li>
            </ul>
            <p className="mt-6 text-xs text-slate-500">{tFooter('rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
