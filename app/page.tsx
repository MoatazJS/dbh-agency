import HomePage from "@/app/(pages)/HomePage/page";
import { Navbar } from "@/lib/Components/LayoutComponents/Navbar";
import AboutSection from "@/lib/Components/PagesComponents/HomeComponents/AboutSection";
import WorkSection from "@/lib/Components/PagesComponents/HomeComponents/WorkSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutSection />
      <WorkSection />
    </>
  );
}
