import HomePage from "@/app/(pages)/HomePage/page";
import { Navbar } from "@/lib/Components/LayoutComponents/Navbar";
import AboutSection from "@/lib/Components/PagesComponents/HomeComponents/AboutSection";
import WorkSection from "@/lib/Components/PagesComponents/HomeComponents/WorkSection";
import LogoSection from "@/lib/Components/PagesComponents/HomeComponents/LogoSection";
import ContactSection from "@/lib/Components/PagesComponents/HomeComponents/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <LogoSection />
      <AboutSection />
      <LogoSection />
      <WorkSection />
      <LogoSection />
      <ContactSection />
    </>
  );
}
