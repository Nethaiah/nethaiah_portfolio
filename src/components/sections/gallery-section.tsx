import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const gallery: { id: string; emoji: string; wide?: boolean }[] = [
  { id: "speaking", emoji: "🎤", wide: true },
  { id: "award", emoji: "🏆" },
  { id: "build", emoji: "💻" },
  { id: "data", emoji: "📊" },
  { id: "community", emoji: "🤝" },
  { id: "target", emoji: "🎯", wide: true },
  { id: "launch", emoji: "🚀" },
];

export function GallerySection() {
  return (
    <section className="portfolio-col portfolio-section relative">
      <SectionHeading title="Gallery" />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {gallery.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="overflow-hidden border-border bg-card aspect-square relative">
                <CardContent className="flex h-full p-0 items-center justify-center text-6xl">
                  {item.emoji}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block" suppressHydrationWarning>
          <CarouselPrevious
            suppressHydrationWarning
            className="left-2 border-border bg-background/50 backdrop-blur hover:bg-background/80"
          />
          <CarouselNext
            suppressHydrationWarning
            className="right-2 border-border bg-background/50 backdrop-blur hover:bg-background/80"
          />
        </div>
      </Carousel>
    </section>
  );
}
