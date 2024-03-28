"use client";
import React, { FunctionComponent } from "react";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
interface OwnProps {}

type Props = OwnProps;

const About: FunctionComponent<Props> = (props) => {
  const words =
    "The Science and Technology Council at IIT BHU is a student-run organization that aims to promote the understanding and application of science and technology among the IIT BHU community.";
  return (
    <>
      <div id="aboutus" className="flex justify-center items-center m-4 p-4">
        <TextRevealCard text={"About Us"} revealText={words} />
      </div>
    </>
  );
};

export default About;
