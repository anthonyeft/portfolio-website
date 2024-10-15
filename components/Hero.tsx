import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ThemeCard from "./ui/ThemeCard";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center pt-36 pb-20 h-screen">
      {/* Left Side - Text Content */}
      <ThemeCard className="relative w-full lg:w-1/2 px-6 lg:px-12 bg-black-200 py-12 rounded-[50px] overflow-hidden">
        <p className="uppercase tracking-widest text-xs text-blue-100 mb-4">
          Computer Vision • AI Research • Deep Learning
        </p>

        <TextGenerateEffect
          words="Hi, I'm Anthony Efthimiadis"
          className="text-[40px] md:text-5xl lg:text-6xl font-bold mb-6"
          duration={1.5}
          delay={0.4}
        />

        <p className="text-sm md:text-lg lg:text-xl text-gray-400 mb-8">
          High school student and passionate researcher from Toronto,
          specializing in biomedical AI and disruptive innovation. Dedicated to
          solving global health challenges through advanced machine learning
          techniques.
        </p>

        <a href="#about">
          <MagicButton
            title="Learn More"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="h-12 md:w-56 md:mt-6 px-7 gap-2"
          />
        </a>
      </ThemeCard>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple rounded-full transform" />
          <img
            src="/transparent-award-image.png"
            alt="Anthony Efthimiadis"
            className="relative rounded-full w-[450px] h-[450px] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
