import Nav from "@/components/Nav";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Roles from "@/components/Roles";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Preloader />
      <Nav />
      <Hero />
      <Roles />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}