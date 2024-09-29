import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Awards from "@/components/Awards";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Publications from "@/components/Publications";
import Talks from "@/components/Talks";
import News from "@/components/News";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Awards />
        <Publications />
        <Talks />
        <News />
        <Contact />
      </div>
    </main>
  );
}
