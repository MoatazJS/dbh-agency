import { Navbar } from "@/lib/Components/LayoutComponents/Navbar";
import AboutSection from "@/lib/Components/PagesComponents/HomeComponents/AboutSection";
import WorkSection from "@/lib/Components/PagesComponents/HomeComponents/WorkSection";
import LogoSection from "@/lib/Components/PagesComponents/HomeComponents/LogoSection";
import ContactSection from "@/lib/Components/PagesComponents/HomeComponents/ContactSection";
import HomePage from "./(pages)/home/page";
import BrandsSection from "@/lib/Components/PagesComponents/HomeComponents/BrandsSection";

export default function Home() {
  return (
    <>
      <HomePage />
      <LogoSection />
      <AboutSection />
      <BrandsSection />
      <WorkSection />
      <LogoSection />
      <ContactSection />
    </>
  );
}
