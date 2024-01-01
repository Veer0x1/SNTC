import Image from "next/image";
import Navbar from "@/components/Navbar";
import Technex from "@/components/Technex";
import Clubs from "@/components/Clubs";
export default function Home() {
  return (
    <>
      <Navbar />
      <Technex />
      <Clubs />
    </>
  );
}
