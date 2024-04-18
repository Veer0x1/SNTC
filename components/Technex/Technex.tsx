//importing stylesheets
import style from "./Technex.module.css";

//importing components
import Box from "./Box";
import BgImg from "./BgImg";
import TypedText from "./TypedText";
//importing components from next
import Link from "next/link";
import Image from "next/legacy/image";
import React from "react";
import { Button } from "../ui/button";



const Technex: React.FC = () => {
  return (
    <section className="flex justify-center px-4">
      <div className="m-auto w-full sm:px-6 sm:py-6">
        <main className="overflow-hidden">
          <section
            className={`${style.info_section}  w-screen p-0 pl-[30px] flex items-center content-end relative z-[1] select-none before:content-[''] before:rounded-ellipse1 before:opacity-40 before:blur-[162px] before:h-[35%] before:w-[55%] before:absolute before:top-[-40%] before:left-[-66%] before:translate-x-1/2 before:translate-y-1/2 before:z-[-1]`}
          >
            <div className={`${style.left_part} pt-[20px] overflow-hidden`}>
              <h1 className="text-sm sm:text-4xl leading-[0.75] font-normal not-italic uppercase">
                <span className="flex items-center mb-4 sm:mb-8">Technex For</span>
                <TypedText />
              </h1>
              <p className="mt-8 uppercase text-muted-foreground">
                The annual techno-management festival of IIT (BHU) Varanasi
              </p>
              <Link href={'https://www.technex.co.in/'} target={"_blank"} className={'mt-4'}>
                <Button className={'text-xs h-8 mt-4'}>
                    Visit our website now
                </Button>
              </Link>
            </div>
            <div
              className={`${style.right_part} bg-transparent h-[588px] w-[588px] m-0 ml-auto mr-[-14px] block relative z-[1] shrink-0 before:content-[''] before:rounded-ellipse1 before:opacity-40 before:bg-primary before:blur-[112px] before:h-[35%] before:w-[55%] before:absolute before:top-1/2 before:right-1/3 before:translate-x-1/2 before:translate-y-[-50%] before:z-[-1]`}
            >
              <div
                className={`${style.bg_line} absolute top-0 right-0 w-1/2 h-[85px] z-[-1] overflow-hidden flex whitespace-nowrap `}
              >
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="line"
                  // fill={true}
                  className="relative shrink-0 animate-first-text"
                />
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="line"
                  // fill={true}
                  className="relative shrink-0 animate-second-text"
                />
              </div>
              <div
                className={`${style.main_grid} ${style.d_flex} relative h-full gap-[24px] flex flex-wrap content-between`}
              >
                <Box className="top-0 left-0 animate-box-1">
                  <span className="absolute opacity-80 z-[5] block top-[43%] left-[-27px] translate-y-[-50%]">
                    Workshops
                  </span>
                </Box>
                <Box className="left-1/3 top-0 animate-box-2">
                  <BgImg
                    Image="https://www.yudiz.com/codepen/photography-banner/photography.png"
                    alt="Photography"
                  />
                </Box>
                <Box className="left-2/3 top-0 animate-box-3">
                  <span className="absolute opacity-80 z-[5] block left-[-10px] bottom-[2px]">
                    Robowars
                  </span>
                </Box>
                <Box className="left-0 top-1/3 animate-box-4">
                  <span className="absolute opacity-80 z-[5] block top-1/2 left-[55%] translate-x-[-50%] translate-y-[-50%]">
                    Hackathons
                  </span>
                </Box>
                <Box className="left-2/3 top-1/3 animate-box-5">
                  <BgImg
                    Image="https://www.yudiz.com/codepen/photography-banner/VFX.png"
                    alt="VFX"
                  />
                </Box>
                <Box className="left-0 top-2/3 animate-box-6">
                  <BgImg
                    Image="https://www.yudiz.com/codepen/photography-banner/under-water.png"
                    alt="VFX"
                  />
                </Box>
                <Box className="left-1/3 top-2/3 animate-box-7">
                  <span className="absolute opacity-80 z-[5] block">
                    Guest Talks
                  </span>
                </Box>
                <Box className="left-2/3 top-2/3 animate-box-8">
                  <BgImg
                    Image="https://www.yudiz.com/codepen/photography-banner/Videography.png"
                    alt="Videography"
                  />
                </Box>
              </div>
              <div
                className={`${style.bg_dash_circle} absolute bottom-[-35px] right-[-13px] z-[-1] w-[180px] aspect-square`}
              >
                <Image
                  src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
                  alt="dash-circle"
                  layout={"fill"}
                  className="h-full w-full object-cover object-center-center animate-circle-rotate"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};
export default Technex;
