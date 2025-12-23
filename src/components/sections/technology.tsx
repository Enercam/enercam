import { useTranslations } from 'next-intl';
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function Technology() {
  const t = useTranslations('HomePage');

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
               <Image 
                  src="/images/projects/Integrated Solar Roof.png" 
                  alt="Enercam Technology Visualization" 
                  fill
                  className="object-cover"
               />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-3xl" />
          </div>
          
          {/* Content Side */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                {t('future.title')}
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                {t('technology.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('technology.description')}
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
               <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                 <CheckCircle2 className="h-6 w-6 text-primary" />
                 {t('future.title')}
               </h3>
               <p className="text-slate-600 leading-relaxed">
                 {t('future.description')}
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
