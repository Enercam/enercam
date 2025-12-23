import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectGallery() {
  const projects = [
    {
      image: "/images/projects/Construction Project.png",
      title: "Residential Construction",
      category: "New Build",
      description: "Complete solar roof integration for a modern residential complex."
    },
    {
      image: "/images/projects/Solar Power Supply.png",
      title: "Commercial Power Supply",
      category: "Commercial",
      description: "High-capacity solar solution for industrial power stability."
    },
    {
      image: "/images/products/6.jpg",
      title: "Sango Tile Installation",
      category: "Residential",
      description: "Aesthetics and power combined in our Sango tile series."
    },
    {
      image: "/images/products/7.jpg",
      title: "Retrofit Project",
      category: "Renovation",
      description: "Seamless retrofitting of existing roof structure."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground">
             Discover how Enercam is transforming roofs across the region.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <span className="text-white font-semibold">{project.category}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
