import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Technology } from "@/components/sections/technology";
import { ProductsPreview } from "@/components/sections/products-preview";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { CareersCTA } from "@/components/sections/careers-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Technology />
      <ProductsPreview />
      <ProjectGallery />
      <Process />
      <Testimonials />
      <CareersCTA />
    </div>
  );
}
