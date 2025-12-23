import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ProductsPreview() {
  const tProducts = useTranslations('ProductsPage.categories.solarRoofs');

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 mb-4">
              {tProducts('title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {tProducts('description')}
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden md:inline-flex group">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Heliu Tile */}
          <div className="group relative overflow-hidden rounded-2xl border bg-slate-50 transition-all hover:shadow-lg">
            <div className="aspect-[16/9] w-full overflow-hidden relative">
               <Image 
                  src="/images/products/4.jpg" 
                  alt="Heliu Tile Product" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
               />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-2">{tProducts('heliu.name')}</h3>
              <p className="text-muted-foreground mb-6">
                {tProducts('heliu.description')}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                 <li className="flex items-center text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    Triple waterproof
                 </li>
                 <li className="flex items-center text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    Class A Fireproof
                 </li>
                 <li className="flex items-center text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    Noise reduction
                 </li>
                 <li className="flex items-center text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    Easy installation
                 </li>
              </ul>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/products">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Roofit */}
          <div className="group relative overflow-hidden rounded-2xl border bg-slate-50 transition-all hover:shadow-lg">
            <div className="aspect-[16/9] w-full overflow-hidden relative">
               <Image 
                  src="/images/products/5.jpg" 
                  alt="Roofit Steel Roof Product" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
               />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-2">{tProducts('roofit.name')}</h3>
              <p className="text-muted-foreground mb-6">
                {tProducts('roofit.description')}
              </p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                 <li className="flex items-center text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    100% Weatherproof
                 </li>
                 <li className="flex items-center text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    2-in-1 Material
                 </li>
                 <li className="flex items-center text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    Maintenance free
                 </li>
                 <li className="flex items-center text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    360° protection
                 </li>
              </ul>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/products">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="ghost" className="group">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
