"use client";
import React, { FunctionComponent } from "react";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { Player } from "@lottiefiles/react-lottie-player";
interface OwnProps {}

type Props = OwnProps;

const About: FunctionComponent<Props> = (props) => {
  return (
    <>
      <section id={"#aboutus"} className="sm:pl-36 sm:pr-36">
        <header className="text-center">
          <h2 className="font-semibold text-4xl sm:text-6xl">About Us</h2>
        </header>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light sm:text-lg text-center sm:text-left">
            <h2 className="mb-4 text-2xl sm:text-4xl font-extrabold">
              Igniting Innovation at <br /> IIT BHU (Varanasi)
            </h2>
            <p className="mb-4 sm:text-lg text-md text-muted-foreground">
              The Science and Technology Council, nestled within the prestigious
              walls of IIT BHU, is a beacon of student initiative and
              innovation. This organization, driven by the relentless curiosity
              and passion of its student members, is dedicated to fostering a
              deep understanding and practical application of science and
              technology. It serves as a vibrant hub within the IIT BHU
              community, illuminating the path of scientific discovery and
              technological advancement.
            </p>
          </div>
          <div className="grid grid-cols-1">
            <Player
              src="https://lottie.host/c6616ef4-6132-4b3c-8aa0-934ee1b76ab5/C1fiODCe9X.json"
              loop
              autoplay
              // style={{ height: "200px", width: "200px" }}
              className={
                " rounded-lg ml-8 sm:h-[400px] sm:w-[400px] h-[200px] w-[200px]"
              }
            ></Player>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
