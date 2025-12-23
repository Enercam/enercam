import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "@/navigation";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  const t = useTranslations('HomePage.hero');

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-900 text-white flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <Image 
            src="/images/hero/hero.jpg" 
            alt="Enercam Solar Roof Installation" 
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
         />
         {/* Gradient Overlays for better text readability and visual depth */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-black/20" />
      </div>
      
      <div className="container relative z-10 flex flex-col justify-center gap-8 py-20 md:py-32">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight sm:text-6xl md:text-7xl lg:leading-[1.1] text-shadow-sm">
            {t('title')}
          </h1>
          <p className="max-w-xl text-lg text-slate-100 sm:text-xl md:text-2xl font-light leading-relaxed text-shadow-sm">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <Button asChild size="lg" className="text-lg h-12 px-8 shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/30">
            <Link href="/contact">
              {t('cta.quote')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg h-12 px-8 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-md transition-all hover:scale-105">
            <Link href="/products">
              <PlayCircle className="mr-2 h-5 w-5" />
              {t('cta.howItWorks')}
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <div className="w-1 h-16 rounded-full bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </div>
    </section>
  );
}
