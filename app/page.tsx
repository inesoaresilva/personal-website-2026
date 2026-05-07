import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import WritingSection from "./components/WritingSection";
import StackSection from "./components/StackSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <WritingSection />
      <StackSection />
      <ContactSection />
    </main>
  );
}
