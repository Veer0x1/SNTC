import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Technex from '@/components/Technex'
import About from '@/components/About/About'

export default function Home() {
  return (
    <>
    <Navbar />
    {/* <Technex/> */}
    <About/>
    </>
  )
}
