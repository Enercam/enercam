import Image from "next/image";

export function Partners() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
             Our Trusted Partners
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
             Collaborating with industry leaders to deliver the best solar roofing solutions.
          </p>
        </div>

        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] lg:aspect-[4/1] overflow-hidden rounded-xl border border-slate-100 bg-slate-50/50">
           <Image 
              src="/images/Partners/2.jpg" 
              alt="Enercam Partners" 
              fill
              className="object-contain p-8 mix-blend-multiply"
           />
        </div>
      </div>
    </section>
  );
}
