import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Technex from '@/components/Technex'
import About from '@/components/About/About';
import Clubs from '@/components/Clubs';
export default function Home() {
  return (
    <>
    <Navbar />
    <Technex/>
    <About/>
    <Clubs/>
    </>
  );
}
