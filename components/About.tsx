import dynamic from "next/dynamic";
import { FaBrain, FaBolt, FaTrophy, FaImage } from "react-icons/fa";
import { PiShareNetwork, PiStethoscope } from "react-icons/pi";
import ThemeCard from "./ui/ThemeCard";
import { tools } from "@/data";

const TypewriterEffect = dynamic(() => import("./ui/TypewriterEffect"), { ssr: false });
const MotionTooltip = dynamic(() => import("./ui/MotionTooltip"), { ssr: false });

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center py-8 lg:py-12 lg:min-h-screen px-4 lg:px-6">
      <h1 className="heading text-2xl sm:text-3xl lg:text-4xl">About Me</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full mt-8 lg:mt-14">
        {/* Biography */}
        <div className="col-span-2 lg:col-span-3">
          <ThemeCard otherClasses="relative bg-black-200 p-5 lg:p-10 rounded-[1.5rem] lg:rounded-[2.8rem] overflow-hidden h-full">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">Biography</h2>

            <div className="text-base lg:text-lg text-white leading-relaxed tracking-wide">
              <div className="flex flex-wrap items-start gap-1 mt-2 lg:mt-4 mb-4">
                <span>Student at Oakville Trafalgar H.S. with a passion for</span>
                <span className="inline-block min-w-[180px]">
                  <TypewriterEffect />
                </span>
              </div>
              <p className="text-justify">
                I specialize in developing deep learning pipelines for rapid disease screening. My research has won awards, including the First Place Grand Award at ISEF 2024 for a deep learning pipeline for skin cancer detection.
              </p>
            </div>
          </ThemeCard>
        </div>

        {/* Interests */}
        <ThemeCardContainer title="Interests" items={[
          { icon: FaImage, label: "Image Processing" },
          { icon: PiShareNetwork, label: "Deep Learning" },
          { icon: PiStethoscope, label: "Diagnostics" }
        ]} />

        {/* Traits */}
        <ThemeCardContainer title="Traits" items={[
          { icon: FaBrain, label: "Creative Problem Solving" },
          { icon: FaBolt, label: "Rapid Learning" },
          { icon: FaTrophy, label: "Strive for Perfection" }
        ]} />

        {/* Toolkit */}
        <div className="col-span-2 lg:col-span-3">
          <ThemeCard otherClasses="rounded-[1.5rem] lg:rounded-[2.8rem] p-5 lg:p-6 h-full">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-6">My Toolkit</h2>
            <MotionTooltip tools={tools} />
          </ThemeCard>
        </div>
      </div>
    </section>
  );
}

/* Reusable Component for Interests & Traits */
import { IconType } from "react-icons";
function ThemeCardContainer({ title, items }: { title: string; items: { icon: IconType; label: string }[] }) {
  return (
    <div className="col-span-1">
      <ThemeCard otherClasses="rounded-[1.5rem] lg:rounded-[2.8rem] p-5 lg:p-6 h-full">
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">{title}</h2>
        <ul className="list-none space-y-3 lg:space-y-4 text-white">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <item.icon className="hidden sm:block min-w-5 min-h-5 mr-3" />
              <span className="text-sm lg:text-base">{item.label}</span>
            </li>
          ))}
        </ul>
      </ThemeCard>
    </div>
  );
}
