import Navbar from '@/components/Navbar'
import Technex from '@/components/Technex/Technex'
import About from '@/components/About/About'
import Achievements from '@/components/Achievments/Achievements'
import Gallery from '@/components/Gallery/Gallery'
import Helm from "@/components/Helm";
export default function Home() {
  return (
    <>
     <About/>
     <Achievements></Achievements>
      <Technex/>
      <Helm/>
    </>
  )
}
