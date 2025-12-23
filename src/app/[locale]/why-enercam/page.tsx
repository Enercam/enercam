import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, ShieldCheck, Home, UserCheck } from "lucide-react";

export default function WhyEnercamPage() {
  const t = useTranslations('WhyEnercamPage');

  const icons = [Zap, Home, ShieldCheck, UserCheck];

  return (
    <div className="flex flex-col min-h-screen py-12">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('title')}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* Future of Roofing */}
        <section className="mb-20">
           <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                 <h2 className="text-2xl md:text-4xl font-bold">{t('future.title')}</h2>
                 <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                    {t('future.description')}
                 </p>
              </div>
           </div>
        </section>

        {/* Benefits Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">{t('benefits.title')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => {
               const Icon = icons[i];
               return (
                <Card key={i} className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="p-3 w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 flex items-center justify-center">
                       <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{t(`benefits.items.${i}.title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {t(`benefits.items.${i}.description`)}
                    </CardDescription>
                  </CardContent>
                </Card>
               );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
