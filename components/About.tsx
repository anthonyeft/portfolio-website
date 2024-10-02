// components/About.js
import { SparklesCore } from "./ui/Sparkles";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-5 py-16 sm:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Sparkles */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        }}
      >
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="absolute inset-0"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center space-y-16">
        {/* Biography Section */}
        <div className="bg-black/60 p-8 rounded-lg text-center shadow-lg backdrop-blur-md">
          <h2 className="text-3xl font-semibold text-white mb-4">About Me</h2>
          <div className="text-lg text-white">
            {/* Placeholder for Typewriter Animation */}
            <span id="typewriter">Hi, I'm Anthony, a passionate student...</span>
            <p className="mt-4 opacity-80">
              {/* Add detailed biography here */}
              I specialize in AI and computer vision, constantly exploring the boundaries of technology...
            </p>
          </div>
        </div>

        {/* Interests Section */}
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-white text-center mb-4">My Interests</h2>
          <div className="flex flex-col items-center">
            {/* Placeholder for Parallax Scroll Content */}
            <div className="w-full h-64 bg-white/10 rounded-lg shadow-inner">
              {/* Add parallax scrolling content here */}
              <p className="text-center text-white opacity-80 p-4">Parallax scrolling content...</p>
            </div>
          </div>
        </div>

        {/* Skills & Frameworks Section */}
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-white text-center mb-4">Skills & Frameworks</h2>
          <div className="w-full flex justify-center">
            {/* Placeholder for Hexagonal Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              {/* Add hexagon items here */}
              <div className="h-32 w-32 bg-gray-800/60 rounded-lg shadow-lg flex items-center justify-center text-white">
                Skill 1
              </div>
              <div className="h-32 w-32 bg-gray-800/60 rounded-lg shadow-lg flex items-center justify-center text-white">
                Skill 2
              </div>
              <div className="h-32 w-32 bg-gray-800/60 rounded-lg shadow-lg flex items-center justify-center text-white">
                Skill 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
