
import Technex from '@/components/Technex'
import About from '@/components/About/About'
import Achievements from '@/components/Achievments/Achievements'
// import HelmCard from "@/components/cards/HelmCard";
import Helm from "@/components/Helm";
export default function Home() {
  return (
    <>
     <About/>
    <Achievements/>
        {/*<HelmCard/>*/}
        <Helm />
    </>
  )
}
