import React, { FunctionComponent } from "react";
import Helm from "@/components/Helm";
import AdityaSinghSurana from "@/public/Helm/Aditya_surana.jpeg";
import AdityaKumarSingh from "@/public/Helm/Aditya_Kumar_Singh.jpeg";
import TanishaSingh from "@/public/Helm/Tanisha_singh.jpeg";
import Lakshya from "@/public/Helm/Lakshya.jpeg";
import Manish from "@/public/Helm/manish.jpeg";
import Bhavna from "@/public/Helm/bhavna.jpeg";
import HelmCard from "@/components/cards/HelmCard";

interface OwnProps {}

type Props = OwnProps;
const helmData = [
  {
    name: "Aditya Singh Surana",
    position: "Joint General Secretary",
    image: Lakshya,
  },
  {
    name: "Aditya Kumar Singh",
    position: "General Secretary",
    image: Manish,
  },
  {
    name: "Tanisha Singh",
    position: "Joint General Secretary",
    image: Bhavna,
  },
];
const page: FunctionComponent<Props> = (props) => {
  return (
    <div className="container px-6 py-6">
      <div className={'mt-8'}>

      <Helm />
      </div>
      <section className="flex justify-center px-4">
        <div className="md:container md:px-6 md:py-6">
          <header className="text-center m-4 mb-8">
            <h2 className="font-semibold text-4xl sm:text-6xl">Past Helm</h2>
          </header>
          <div className={"md:flex justify-center items-center"}>
            {helmData.map((item, index) => {
              return (
                <HelmCard
                  name={item.name}
                  position={item.position}
                  image={item.image}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
