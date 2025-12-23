import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import Image from "next/image";
import { Factory, Truck, Wrench } from "lucide-react";

export default function PartnersPage() {
  const t = useTranslations('PartnersPage');

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

        <section className="mb-16">
           <div className="grid gap-12 lg:grid-cols-2 items-center">
             <div className="space-y-6">
               <p className="text-lg text-muted-foreground leading-relaxed">
                 {t('description')}
               </p>
               <div className="bg-slate-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-2">{t('benefits.title')}</h3>
                  <p className="text-muted-foreground">{t('benefits.description')}</p>
               </div>
               <Button size="lg">{t('cta')}</Button>
             </div>
             <div className="aspect-square relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Partners/2.jpg"
                  alt="Enercam Partners"
                  fill
                  className="object-cover"
                />
             </div>
           </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">{t('types.manufacturing')}</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="h-40 w-full rounded-md overflow-hidden mt-2">
                  <PlaceholderImage text="Manufacturing Partner" />
               </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">{t('types.distribution')}</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="h-40 w-full rounded-md overflow-hidden mt-2">
                  <PlaceholderImage text="Distribution Logistics" />
               </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">{t('types.installation')}</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="h-40 w-full rounded-md overflow-hidden mt-2">
                  <PlaceholderImage text="Certified Installer" />
               </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
