import Navbar from "@/components/Navbar";
import Technex from "@/components/Technex/Technex";
import About from "@/components/About/About";
import Achievements from "@/components/Achievments/Achievements";
import Gallery from "@/components/Gallery/Gallery";
import Helm from "@/components/Helm";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <>
      <div className="container px-6 py-6">
        <Hero />
        <About />
        {/*<Achievements></Achievements>*/}
        <Technex />
        <Helm />
      </div>
    </>
  );
}
