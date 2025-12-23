import { useTranslations } from 'next-intl';
import { ShieldCheck, Wallet, LayoutGrid, HardHat } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  const t = useTranslations('HomePage.whyChoose');
  
  const features = [
    { icon: Wallet, key: "0" },      // Lower Energy Bills
    { icon: LayoutGrid, key: "1" },  // Integrated Aesthetics
    { icon: ShieldCheck, key: "2" }, // 35-Year Warranty
    { icon: HardHat, key: "3" },     // Expert Installation
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 mb-4">
            {t('title')}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="flex flex-col items-center text-center p-8 h-full">
                <div className="mb-6 p-4 bg-primary/10 rounded-full text-primary ring-1 ring-primary/20">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t(`items.${feature.key}`)}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
