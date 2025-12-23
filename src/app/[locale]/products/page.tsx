import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import Image from "next/image";

export default function ProductsPage() {
  const t = useTranslations('ProductsPage');

  return (
    <div className="flex flex-col min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('title')}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <Tabs defaultValue="roofs" className="mt-12 w-full">
          <div className="flex justify-center">
            <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
              <TabsTrigger value="roofs">{t('categories.solarRoofs.title')}</TabsTrigger>
              <TabsTrigger value="other">{t('categories.solarModules.title')}</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="roofs" className="mt-8 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="aspect-video w-full relative">
                    <Image 
                      src="/images/products/6.jpg" 
                      alt="Heliu Tile Product Shot" 
                      fill 
                      className="object-cover"
                    />
                </div>
                <CardHeader>
                  <CardTitle>{t('categories.solarRoofs.heliu.name')}</CardTitle>
                  <CardDescription>{t('categories.solarRoofs.heliu.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{t('categories.solarRoofs.heliu.features.0')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{t('categories.solarRoofs.heliu.features.1')}</span>
                    </li>
                     <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{t('categories.solarRoofs.heliu.features.2')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{t('categories.solarRoofs.heliu.features.3')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                 <div className="aspect-video w-full relative">
                    <Image 
                      src="/images/products/7.jpg" 
                      alt="Roofit Steel Roof Product Shot" 
                      fill 
                      className="object-cover"
                    />
                </div>
                <CardHeader>
                  <CardTitle>{t('categories.solarRoofs.roofit.name')}</CardTitle>
                  <CardDescription>{t('categories.solarRoofs.roofit.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                   <p className="text-muted-foreground mb-4">
                     Combined roofing and solar solution. Strong steel construction with integrated PV.
                   </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="other" className="mt-8">
             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="overflow-hidden">
                   <div className="aspect-[4/3] w-full relative">
                        <Image 
                          src="/images/products/4.jpg" 
                          alt="Solar Modules" 
                          fill 
                          className="object-cover"
                        />
                   </div>
                  <CardHeader>
                    <CardTitle>{t('categories.solarModules.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className="text-sm text-muted-foreground">{t('categories.solarModules.description')}</p>
                     <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">S Nano</Badge>
                        <Badge variant="secondary">S MAX</Badge>
                        <Badge variant="secondary">S BLADE</Badge>
                     </div>
                  </CardContent>
                </Card>
                 <Card className="overflow-hidden">
                   <div className="aspect-[4/3] w-full relative">
                        <Image 
                          src="/images/products/10.jpg" 
                          alt="Solar Air Conditioner" 
                          fill 
                          className="object-cover"
                        />
                   </div>
                  <CardHeader>
                    <CardTitle>{t('categories.airConditioning.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className="text-sm text-muted-foreground">{t('categories.airConditioning.description')}</p>
                  </CardContent>
                </Card>
                 <Card className="overflow-hidden">
                   <div className="aspect-[4/3] w-full relative">
                        <Image 
                          src="/images/products/11.jpg" 
                          alt="Solar Street Light" 
                          fill 
                          className="object-cover"
                        />
                   </div>
                  <CardHeader>
                    <CardTitle>{t('categories.lighting.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className="text-sm text-muted-foreground">{t('categories.lighting.description')}</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                   <div className="aspect-[4/3] w-full relative">
                        <Image 
                          src="/images/projects/Solar Power Supply.png" 
                          alt="Battery Storage" 
                          fill 
                          className="object-cover"
                        />
                   </div>
                  <CardHeader>
                    <CardTitle>{t('categories.batteryStorage.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className="text-sm text-muted-foreground">{t('categories.batteryStorage.description')}</p>
                  </CardContent>
                </Card>
             </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
