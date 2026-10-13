"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import ThemeCard from "./ui/ThemeCard";
import MagicButton from "./ui/MagicButton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/Carousel";

export default function Blogs() {
  return (
    <section id="blogs" className="py-12 px-0 sm:px-6 scroll-mt-28">
      <h1 className="heading mb-16">Blogs</h1>
      <Carousel opts={{ align: "start" }} aria-label="ScienceFair.io blogs">
        <CarouselContent>
          {blogs.map((blog) => (
            <CarouselItem key={blog.slug} className="md:basis-1/2">
              <ThemeCard otherClasses="flex flex-col !p-4 sm:!p-6 rounded-3xl h-full">
                <div className="group flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                    <Image src={blog.image} alt={blog.imageAlt} fill sizes="(max-width: 767px) 90vw, (max-width: 1200px) 45vw, 520px" style={{ objectPosition: blog.imagePosition }} className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                    <span className="rounded-full border border-purple/20 bg-purple/5 px-3 py-1 text-purple">{blog.category}</span>
                    <time dateTime={blog.date} className="text-neutral-400">{new Date(`${blog.date}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</time>
                  </div>
                  <h2 className="text-xl sm:text-2xl leading-snug font-bold mb-3 group-hover:text-purple transition-colors">{blog.title}</h2>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-400 mb-7">{blog.description}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                    <span className="text-neutral-400">ScienceFair.io</span>
                    <a href={`https://www.sciencefair.io/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer" aria-label={`Read ${blog.title} on ScienceFair.io (opens in a new tab)`}>
                      <MagicButton title="Read article" icon={<ArrowUpRight className="h-4 w-4" />} position="right" otherClasses="px-3 sm:px-4 py-2" />
                    </a>
                  </div>
                </div>
              </ThemeCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex justify-end gap-3">
          <CarouselPrevious className="static translate-y-0 h-10 w-10 border-white/15 bg-black-200 hover:bg-black-300" />
          <CarouselNext className="static translate-y-0 h-10 w-10 border-white/15 bg-black-200 hover:bg-black-300" />
        </div>
      </Carousel>
    </section>
  );
}
