import { useTranslations } from 'next-intl';
import { Card } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { MapPin, Zap, Wallet } from "lucide-react";

export default function ProjectsPage() {
  const t = useTranslations('ProjectsPage');

  return (
    <div className="flex flex-col min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('title')}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <section className="max-w-5xl mx-auto">
           <Card className="overflow-hidden">
             <div className="grid md:grid-cols-2 gap-0">
               <div className="aspect-square md:aspect-auto relative min-h-[400px]">
                 <PlaceholderImage text="Douala Project - Roof Shot" className="rounded-none h-full w-full" />
               </div>
               <div className="flex flex-col justify-center p-6 md:p-8">
                  <div className="space-y-4">
                     <div className="flex items-center gap-2 text-primary">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm font-medium">{t('douala.location')}</span>
                     </div>
                     <h2 className="text-3xl font-bold">{t('douala.title')}</h2>
                     <p className="text-muted-foreground leading-relaxed">
                        {t('douala.description')}
                     </p>
                     
                     <div className="grid gap-4 py-4">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-green-100 rounded-full text-green-700">
                              <Wallet className="h-5 w-5" />
                           </div>
                           <div>
                              <p className="font-medium">Annual Savings</p>
                              <p className="text-sm text-muted-foreground">{t('douala.savings')}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-blue-100 rounded-full text-blue-700">
                              <Zap className="h-5 w-5" />
                           </div>
                           <div>
                              <p className="font-medium">System Outcome</p>
                              <p className="text-sm text-muted-foreground">{t('douala.outcome')}</p>
                           </div>
                        </div>
                     </div>

                     <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        &quot;{t('douala.quote')}&quot;
                     </blockquote>
                  </div>
               </div>
             </div>
           </Card>
        </section>
      </div>
    </div>
  );
}
