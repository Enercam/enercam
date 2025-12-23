import { useTranslations } from 'next-intl';
import { ClipboardList, Hammer, Zap, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Process() {
  const t = useTranslations('HomePage.process');

  const steps = [
    { icon: ClipboardList, key: "assessment" },
    { icon: Hammer, key: "installation" },
    { icon: Zap, key: "integration" },
    { icon: CheckCircle2, key: "activation" },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">
             {t('subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 -z-10" />
          
          {/* Mobile Connecting Line */}
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-slate-200 -z-10" />

          <div className="grid gap-12 md:gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="flex md:flex-col items-start md:items-center gap-6 md:gap-0 relative group">
                <div className="flex-shrink-0 relative">
                  <div className={cn(
                    "flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border-4 border-white shadow-lg z-10 transition-transform duration-300 group-hover:scale-110",
                    index < steps.length ? "text-primary" : "text-slate-400"
                  )}>
                    <step.icon className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-sm">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex flex-col md:items-center md:text-center pt-2 md:pt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{t(`steps.${step.key}.title`)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    {t(`steps.${step.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
