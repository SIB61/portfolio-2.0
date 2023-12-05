import { Avatar } from "@/components/hero/avatar";
import { NavBar } from "@/components/portfolio/navbar";
import { ContactSection } from "@/sections/contact";
import { ExperienceSection } from "@/sections/experience";
import { HeroSection } from "@/sections/hero";
import { ProjectSection } from "@/sections/projects";
import { Tools } from "@/sections/tools";

export default function Page() {
  return (
    <main className="flex flex-col w-full items-center">
      <HeroSection />
      <Tools className="pt-[90px]" />
      <ProjectSection className="pt-[90px]" />
      <ExperienceSection className="pt-[90px]" />
      <ContactSection className="pt-[90px]" />
    </main>
  );
}
