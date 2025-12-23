import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { ArrowRight } from "lucide-react";

export function CareersCTA() {
  const t = useTranslations('CareersPage');

  return (
    <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Career/3.jpg"
          alt="Enercam Team"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="text-lg bg-primary hover:bg-primary/90 text-white border-none">
              <Link href="/careers">
                {t('apply')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
