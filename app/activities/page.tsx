"use client";
import React, { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/legacy/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import BASH from "@/public/clubs/Biz/Events/BASH.jpeg";
import casebook from "@/public/clubs/Biz/Events/Casebook.jpeg";
import stockmarket from "@/public/clubs/Biz/Workshops/StockMarket.jpeg";
import Nitesh_Sinha from "@/public/clubs/Biz/Workshops/Nitesh_Sinha.jpeg";
import DP from "@/public/clubs/COPS/Workshops/DP.jpeg";
import IntroToApi from "@/public/clubs/COPS/Workshops/IntroToAPI.png";
import IntroToGameDesign from "@/public/clubs/COPS/Workshops/IntroToGameDev.png";
import CSOC from "@/public/clubs/COPS/Workshops/CSOC.png";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  const words = [
    {
      text: "Activies",
    },
    {
      text: "under",
    },
    {
      text: "SNTC",
      className: "text-primary",
    },
  ];
  const eventsHeading = [
    {
      text: "Events",
      className: "text-primary",
    },
  ];
  const workshopsHeading = [
    {
      text: "Workshops",
      className: "text-primary",
    },
  ];

  return (
    <div className={"container px-6 py-6"}>
      <div className="flex justify-center align-middle sm:mt-20 mt-32 sm:m-4 sm:p-4">
        <TypewriterEffectSmooth words={words} />
      </div>
      <section className={""}>
        <div className="flex justify-center align-middle sm:m-4 sm:p-4">
          <TypewriterEffectSmooth words={eventsHeading} />
        </div>
        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </section>
      <section>
        <div className="flex justify-center align-middle m-4 p-4">
          <TypewriterEffectSmooth words={workshopsHeading} />
        </div>
        <BentoGrid>
          {workshops.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </section>
      <BackgroundBeams />
    </div>
  );
};

export default page;

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
interface BannerProps {
  imgPath: StaticImageData;
}
const Banner: React.FC<BannerProps> = ({ imgPath }) => (
  <div className="flex flex-1 min-h-[6rem] rounded-xl relative">
    <Image
      src={imgPath}
      alt="Banner"
      objectFit={"cover"}
      className={"bg-cover"}
    />
  </div>
);
const workshops = [
  {
    title: "Stock Market Basics",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Banner imgPath={stockmarket} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Roadmap to Consumer Products",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Banner imgPath={Nitesh_Sinha} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dynamic Programming",
    description:
      "Workshop on Dynamic Programming, exploring its applications in solving complex problems with efficiency and elegance. Presented by CPG",
    header: <Banner imgPath={DP} />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Introduction to API Development",
    description: "Workshop on API Development, exploring its applications.",
    header: <Banner imgPath={IntroToApi} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Intro to Game Design",
    description: "Workshop on Game Design, using Unity and Blender.",
    header: <Banner imgPath={IntroToGameDesign} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
const items = [
  {
    title: "Business Associates Special Hours",
    description: "Hosted by Business Club",
    header: <Banner imgPath={BASH} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Casebook Competition",
    description: "Hosted by Business Club",
    header: <Banner imgPath={casebook} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "COPS Summer of Code (CSoC)",
    description: "Hosted by COPS",
    header: <Banner imgPath={CSOC} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
