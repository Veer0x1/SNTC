import React, { FunctionComponent } from "react";
import { StaticImageData } from "next/legacy/image";
import Image from "next/legacy/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface OwnProps {
  name: string;
  position: string;
  image: StaticImageData | string;
}

type Props = OwnProps;

const HelmCard: FunctionComponent<Props> = (props) => {
  return (
    <div className="flex items-center justify-center gap-16 flex-wrap md:p-12 rounded">
      <Card className="p-4 md:p-6 md:w-72 shadow-lg relative rounded m-2">
        <div className="h-2.5 md:w-20 w-8 bg-gray-300 rounded-full absolute top-7 left-1/2 transform -translate-x-1/2"></div>
        <div className="card-img relative pt-8">
          <Image
            className="md:h-64 object-cover rounded-lg"
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className="card-content m-4">
          <h2 className="uppercase text-center text-sm text-primary tracking-wider mb-2 md:font-semibold">
            {props.name}
          </h2>
          <p className="md:text-xs text-[0.6rem] tracking-wider text-center text-accent-foreground">
            {props.position}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default HelmCard;
