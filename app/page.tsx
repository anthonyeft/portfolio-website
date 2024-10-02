// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import RecentProjects from "@/components/RecentProjects";
import Awards from "@/components/Awards";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index.tsx";
import Publications from "@/components/Publications";
import Talks from "@/components/Talks";
import News from "@/components/News";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <FloatingNav navItems={navItems}/>
      <Hero />
      <About />
      <RecentProjects />
      <Awards />
      <Publications />
      <Talks />
      <News />
      <Contact />
    </main>
  );
}
