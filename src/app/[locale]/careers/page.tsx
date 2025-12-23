import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  const t = useTranslations('CareersPage');

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
        
        <div className="max-w-4xl mx-auto grid gap-6">
           <Card>
              <CardHeader>
                 <CardTitle>{t('positions.install.title')}</CardTitle>
                 <CardDescription>{t('positions.install.location')}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                 <p className="text-sm text-muted-foreground">{t('positions.install.description')}</p>
                 <Button>{t('apply')}</Button>
              </CardContent>
           </Card>

           <Card>
              <CardHeader>
                 <CardTitle>{t('positions.sales.title')}</CardTitle>
                 <CardDescription>{t('positions.sales.location')}</CardDescription>
              </CardHeader>
               <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                 <p className="text-sm text-muted-foreground">{t('positions.sales.description')}</p>
                 <Button>{t('apply')}</Button>
              </CardContent>
           </Card>
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-muted-foreground">{t('noOpenings')}</p>
        </div>
      </div>
    </div>
  );
}
