import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Container } from "postcss";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
        <Navbar/>
        <div class="container mt-24 mx-auto">
          <HeroSection/>
          <AboutSection/>
          <ProjectSection/>
          <EmailSection/>
        </div>
    </main>
  );
}
