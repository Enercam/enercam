import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Zap, Hammer, Home } from "lucide-react";

export default function RecommendationsPage() {
  const t = useTranslations('RecommendationsPage');

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

        {/* Approach */}
        <section className="mb-20 max-w-4xl mx-auto text-center">
           <h2 className="text-2xl font-bold mb-4">{t('methods.title')}</h2>
           <p className="text-lg text-muted-foreground leading-relaxed">
              {t('methods.description')}
           </p>
        </section>

        <div className="grid gap-12 lg:grid-cols-2">
           {/* Need Based */}
           <section className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                    <Zap className="h-6 w-6" />
                 </div>
                 <h2 className="text-2xl font-bold">{t('needBased.title')}</h2>
              </div>
              
              <div className="grid gap-6">
                 <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                       <CardTitle>{t('needBased.integrated.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground">{t('needBased.integrated.description')}</p>
                    </CardContent>
                 </Card>

                 <Card className="border-l-4 border-l-indigo-500">
                    <CardHeader>
                       <CardTitle>{t('needBased.complete.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground">{t('needBased.complete.description')}</p>
                    </CardContent>
                 </Card>
              </div>
           </section>

           {/* Stage Based */}
           <section className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-green-100 rounded-lg text-green-700">
                    <Layers className="h-6 w-6" />
                 </div>
                 <h2 className="text-2xl font-bold">{t('stageBased.title')}</h2>
              </div>
              
              <div className="grid gap-6">
                 <Card className="border-l-4 border-l-amber-500">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                       <Hammer className="h-5 w-5 text-amber-600" />
                       <CardTitle>{t('stageBased.retrofit.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground">{t('stageBased.retrofit.description')}</p>
                    </CardContent>
                 </Card>

                 <Card className="border-l-4 border-l-emerald-500">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                       <Home className="h-5 w-5 text-emerald-600" />
                       <CardTitle>{t('stageBased.new.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground">{t('stageBased.new.description')}</p>
                    </CardContent>
                 </Card>
              </div>
           </section>
        </div>

      </div>
    </div>
  );
}
