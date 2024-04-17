"use client";
import React, { FunctionComponent } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Button } from "@/components/ui/button";

interface OwnProps {}

type Props = OwnProps;

const Hero: FunctionComponent<Props> = (props) => {
  return (
    <section className="flex justify-center px-4">
      <div className="flex p-20 md:p-36">
        <div className="mr-auto place-self-center text-center sm:text-left lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-center sm:text-left font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Science and Technology Council{" "}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-center sm:text-left  lg:mb-8 md:text-lg lg:text-xl text-muted-foreground">
            {" "}
            The official technical body of IIT (BHU) Varanasi
          </p>
          <Button variant={"default"} className={"text-center"}>
            Get Started{" "}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
          <Button variant={"ghost"} className={"m-2"}>
            Learn More
          </Button>
        </div>
        <div className="hidden lg:mt-0 lg:rounded-2xl lg:col-span-5 lg:flex">
          <Player
            src="https://lottie.host/1bb5a965-2cfd-4b50-82a3-8ddc9d2b646d/jAabybE1tH.json"
            loop
            speed={0.7}
            autoplay
            style={{ height: "300px", width: "300px" }}
            className={'rounded-lg lg:rounded-2xl'}
          ></Player>
        </div>
      </div>
    </section>
  );
};

export default Hero;
