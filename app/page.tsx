import Technex from "@/components/Technex/Technex";
import About from "@/components/About/About";
import Achievements from "@/components/Achievments/Achievements";
import Helm from "@/components/Helm";
import Hero from "@/components/Hero";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <div className="container px-6 py-6">
        <Hero />
        <About />
        <Achievements />
        <div>
          <h3 className="md:w-1/2 m-auto items-center font-semibold text-6xl md:font-bold text-center p-2 ">
            Annual Techno Fest
          </h3>
          <Technex />
        </div>
        <Helm />
        <div className={"flex justify-center items-center md:-mt-8"}>
          <Link href={"/team"}>
            <Button variant={"secondary"}>View Team</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
