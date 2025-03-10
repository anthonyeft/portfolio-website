// app/page.tsx
import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import About from "@/components/About";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index.tsx";

// Lazy load components that aren't immediately visible
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  loading: () => <div className="h-96 w-full bg-black-100 animate-pulse"></div>,
  ssr: true,
});

const Awards = dynamic(() => import("@/components/Awards"));
const News = dynamic(() => import("@/components/News"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[85vw] lg:max-w-[68rem]">
        {/* Hide on small screens, show on md screens and above */}
        <div className="hidden md:block">
          <FloatingNav navItems={navItems} />
        </div>
        <Hero />
        <About />
        <RecentProjects />
        <Awards />
        <News />
        <Contact />
      </div>
    </main>
  );
}
