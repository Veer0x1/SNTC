"use client";
import React, { FunctionComponent } from 'react';
import Image, {StaticImageData} from 'next/image';
import { BackgroundBeams} from "@/components/ui/background-beams";
import {TypewriterEffectSmooth} from "@/components/ui/text-generate-effect";
import { BentoGrid,BentoGridItem } from "@/components/ui/bento-grid";
import {LampContainer} from "@/components/ui/lamp";
import { motion } from "framer-motion";
import BASH from "@/public/clubs/Biz/Events/BASH.jpeg";
import casebook from "@/public/clubs/Biz/Events/Casebook.jpeg";
import stockmarket from "@/public/clubs/Biz/Workshops/StockMarket.jpeg";
import Nitesh_Sinha from "@/public/clubs/Biz/Workshops/Nitesh_Sinha.jpeg";
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
            className: "text-yellow-400 dark:text-yellow-400",
        },
    ];
    const eventsHeading = [
        {
            text: "Events",
            className: "text-yellow-400 dark:text-yellow-400",
        }
    ];
    const workshopsHeading = [
        {
            text: "Workshops",
            className: "text-yellow-400 dark:text-yellow-400",
        }
    ];

  return (
      <div className={'container px-6 py-6'}>
          <div className="flex justify-center align-middle m-4 p-4">
              <TypewriterEffectSmooth words={words}/>
          </div>
          <section className={""}>
              <div className="flex justify-center align-middle m-4 p-4">
                  <TypewriterEffectSmooth words={eventsHeading}/>
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
                  <TypewriterEffectSmooth words={workshopsHeading}/>
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
          <BackgroundBeams/>
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
const Banner:React.FC<BannerProps> = ({imgPath})=>(
    <div className="flex flex-1 min-h-[6rem] rounded-xl relative">
        <Image src={imgPath} alt="Banner" objectFit="contain"/>
    </div>
)
const workshops = [
    {
        title: "Stock Market Basics",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Banner imgPath={stockmarket}/>,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Roadmap to Consumer Products",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Banner imgPath={Nitesh_Sinha}/>,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    }
]
const items = [
    {
        title: "Business Associates Special Hours",
        description: "Hosted by Business Club",
        header: <Banner imgPath={BASH}/>,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Casebook Competition",
        description: "Hosted by Business Club",
        header: <Banner imgPath={casebook}/>,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
