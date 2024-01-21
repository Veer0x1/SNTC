import React, { FunctionComponent } from 'react';
import {StaticImageData} from "next/image";
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface OwnProps {
    name:string,
    position:string,
    image:StaticImageData | string,
}

type Props = OwnProps;

const HelmCard: FunctionComponent<Props> = (props) => {
  return (
      <div className="flex items-center justify-center gap-16 flex-wrap p-12 rounded">
          <Card className="p-6 w-72 shadow-lg relative rounded">
              <div
                  className="h-2.5 w-20 bg-gray-300 rounded-full absolute top-7 left-1/2 transform -translate-x-1/2"></div>
              <div className="card-img relative pt-8">
                  <Image className="w-full h-64 object-cover rounded-lg"
                         src={props.image}
                         alt={props.name}
                  />
              </div>
              <div className="card-content m-4">
                  <h2 className="uppercase text-center text-sm text-primary tracking-wider mb-2 font-semibold">{props.name}</h2>
                  <p className="text-xs tracking-wider text-center text-accent-foreground">{props.position}</p>
              </div>
          </Card>
      </div>
  );
};

export default HelmCard;
