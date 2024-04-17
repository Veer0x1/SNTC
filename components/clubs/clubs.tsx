"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
interface ClubPerson {
  id: number;
  name: string;
  designation: string;
  image: string;
}
interface ClubData {
  title: string;
  badge: string;
  image?: string;
  people: ClubPerson[];
  description: JSX.Element;
}

interface TracingBeamDemoProps {
  clubsData: ClubData[];
}

export function TracingBeamDemo(props: TracingBeamDemoProps) {
  const { clubsData } = props;
  return (
    <TracingBeam className="">
      <div className="max-w-2xl sm:mx-auto ml-4 antialiased pt-4 relative">
        {clubsData.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
            <p className={twMerge("sm:text-4xl text-xl mb-4")}>{item.title}</p>
            <div className="text-sm text-muted-foreground p-4 prose prose-sm dark:prose-invert flex justify-center flex-col items-center">
              {item?.image && (
                <div className="w-full flex m-4 items-center justify-center relative h-80 overflow-hidden rounded-xl mix-blend-difference">
                  <Image
                    src={item.image}
                    layout={"fill"}
                    alt="blog thumbnail"
                    style={{ objectFit: "contain" }}
                    objectFit="contain"
                  />
                </div>
              )}
              {item.description}
            </div>
            <div className="flex flex-col justify-center items-center gap-2 m-2">
              <div className="text-2xl">Secretaries</div>
              <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={item.people} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
