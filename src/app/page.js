import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/common/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Hero from "@/components/reuseable/Hero";
import TechStack from "@/components/tech-stack";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <div className=" m-auto overflow-hidden">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <AboutSection/>
      {/* <TechStack /> */}
    </div>
  );
}
