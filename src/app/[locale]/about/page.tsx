import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations('AboutPage');

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

        <section className="grid gap-12 lg:grid-cols-2 items-center mb-24">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">{t('mission.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('mission.description')}
            </p>
          </div>
          <div className="aspect-video w-full rounded-xl overflow-hidden relative">
             <Image 
                src="/images/projects/Integrated Solar Roof.png" 
                alt="Enercam Mission" 
                fill 
                className="object-cover"
             />
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">{t('values.title')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t('values.items.integrity')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t('values.items.innovation')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t('values.items.sustainability')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Customer Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t('values.items.customerFocus')}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-24 bg-slate-50 p-8 rounded-2xl">
           <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">{t('history.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('history.description')}
              </p>
           </div>
        </section>

        <section>
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold mb-4">{t('team.title')}</h2>
             <blockquote className="text-xl italic text-muted-foreground">
               &quot;{t('team.quote')}&quot;
             </blockquote>
             <p className="mt-4">{t('team.description')}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
             {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                   <div className="h-40 w-40 rounded-full overflow-hidden">
                       <PlaceholderImage text={`Team Member ${i}`} />
                   </div>
                   <p className="font-semibold">Team Member {i}</p>
                   <p className="text-sm text-muted-foreground">Position</p>
                </div>
             ))}
          </div>
        </section>
      </div>
    </div>
  );
}
