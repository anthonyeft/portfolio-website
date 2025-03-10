import dynamic from "next/dynamic";
import { projects } from "@/data";
import ThemeCard from "./ui/ThemeCard";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const ProjectIcons = dynamic(() => import("./ui/ProjectIcons"), { ssr: false });

export default function RecentProjects() {
  return (
    <section id="projects" className="flex flex-col px-4 sm:px-6 py-8 sm:py-10 lg:py-12 lg:min-h-screen">
      <h1 className="heading text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 lg:mb-14 text-center">
        My Recent Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
        {projects.map(({ id, title, des, img, iconLists, link }, index) => (
          <ThemeCard
            otherClasses="flex flex-col cursor-pointer rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.8rem] p-4 sm:p-5 lg:p-6"
            key={id}
          >
            {/* Image Section */}
            <div className="relative flex overflow-hidden mb-3 sm:mb-4 lg:mb-5 rounded-[1rem] sm:rounded-[1.2rem] lg:rounded-[1.5rem] bg-slate-900">
              <div className="aspect-video w-full relative">
                <Image
                  src={img}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0} // Load first project image first
                  className="object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="font-bold text-base sm:text-base md:text-base lg:text-lg line-clamp-2 lg:line-clamp-1 mb-1 sm:mb-2">
              {title}
            </h1>

            {/* Description */}
            <p className="text-sm lg:text-base line-clamp-3 mb-3 text-gray-400">
              {des}
            </p>

            {/* Icons and Link Section */}
            <div className="flex items-center justify-between mt-auto pt-2">
              <ProjectIcons iconLists={iconLists} />
              <a href={link} target="_blank" rel="noopener noreferrer" className="ml-2 sm:ml-0">
                <MagicButton
                  title={"Visit"}
                  icon={<FaLocationArrow className="text-xs sm:text-sm" />}
                  position="right"
                  otherClasses="h-8 sm:h-9 lg:h-10 px-4 sm:px-5 lg:px-8 gap-1 md:gap-2 tracking-wide text-sm lg:text-base"
                />
              </a>
            </div>
          </ThemeCard>
        ))}
      </div>
    </section>
  );
}
