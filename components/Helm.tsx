import React, { FunctionComponent } from "react";
import HelmCard from "@/components/cards/HelmCard";
import AdityaKumarSingh from "@/public/Helm/Aditya_Kumar_Singh.jpeg";
import AdityaSurana from "@/public/Helm/AdityaSurana.jpg";
import TanishaSingh from "@/public/Helm/Tanisha_singh.jpeg";

const helmData = [
  {
    name: "Aditya Surana",
    position: "Joint General Secretary",
    image: AdityaSurana,
  },
  {
    name: "Aditya Kumar Singh",
    position: "General Secretary",
    image: AdityaKumarSingh,
  },
  {
    name: "Tanisha Singh",
    position: "Joint General Secretary",
    image: TanishaSingh,
  },
];
interface OwnProps {}

type Props = OwnProps;

const Helm: FunctionComponent<Props> = (props) => {
  return (
    <section className="flex justify-center px-4">
      <div className="md:container md:px-6 md:py-6">
        <header className="text-center m-4 mb-8">
          <h2 className="font-semibold text-4xl sm:text-6xl">Current Helm</h2>
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
  );
};

export default Helm;
