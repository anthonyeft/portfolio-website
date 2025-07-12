// app/components/Hero.tsx (Server Component)
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import ThemeCard from "./ui/ThemeCard";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy load TextGenerateEffect (Client Component)
const TextGenerateEffect = dynamic(() => import("./ui/TextGenerateEffect"), { ssr: false });

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center py-12 lg:flex-row lg:py-16 min-h-screen">
      {/* Left Side - Text Content */}
      <ThemeCard otherClasses="relative w-full lg:w-1/2 px-6 md:px-8 lg:px-12 bg-black-200 py-6 lg:py-12 rounded-[1.5rem] lg:rounded-[3rem] text-center md:text-left overflow-hidden flex-shrink-0">
        <p className="text-[0.7rem] sm:text-xs md:tracking-wide md:uppercase lg:tracking-widest lg:text-blue-100 lg:mb-4">
          Computer Vision • AI Research • Deep Learning
        </p>

        {/* Only TextGenerateEffect hydrates on the client */}
        <TextGenerateEffect
          words="Hi, I'm Anthony Efthimiadis"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
          duration={1.5}
          delay={0.4}
        />

        <p className="text-[0.85rem] md:text-lg lg:text-xl text-gray-400 mb-4 lg:mb-8">
          High school student and AI researcher from Toronto,
          specializing in deep learning for medical imaging. Dedicated to
          solving global health challenges through machine learning.
        </p>

        <a href="https://www.linkedin.com/in/helen-efthimiadis/">View Details</a>

        <a href="#about">
          <MagicButton
            title="Learn More"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="h-8 lg:h-12 w-40 md:w-48 lg:w-56 mt-4 md:mt-6 px-7 gap-2"
          />
        </a>
      </ThemeCard>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
        <div className="relative max-w-[300px] md:max-w-[350px] lg:max-w-[450px] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple rounded-full" />
          <Image
            src="/transparent-award-image.png"
            width={450}
            height={450}
            alt="Anthony Efthimiadis"
            priority={true}
            className="relative rounded-full object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
