import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { Quote } from "lucide-react";

export function Testimonials() {
  const t = useTranslations('HomePage.testimonials');

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pattern-dots" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative z-10 flex flex-col items-center text-center px-4 md:px-6">
        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
           <Quote className="h-8 w-8 text-white" />
        </div>
        
        <h2 className="text-xl font-medium tracking-wide uppercase opacity-80 mb-8">
          {t('title')}
        </h2>
        
        <figure className="max-w-4xl space-y-8 mb-12">
          <blockquote className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight italic">
            &quot;{t('quote')}&quot;
          </blockquote>
          <figcaption className="flex items-center justify-center gap-2 text-xl font-semibold opacity-90">
            <div className="h-1 w-8 bg-white/50 rounded-full" />
            {t('author')}
            <div className="h-1 w-8 bg-white/50 rounded-full" />
          </figcaption>
        </figure>
        
        <Button asChild size="lg" variant="secondary" className="text-lg px-8 h-12 shadow-lg transition-transform hover:scale-105">
          <Link href="/projects">
            {t('cta')}
          </Link>
        </Button>
      </div>
    </section>
  );
}
