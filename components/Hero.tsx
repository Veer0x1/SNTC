'use client';
import React, { FunctionComponent } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import {Button} from "@/components/ui/button";

interface OwnProps {}

type Props = OwnProps;

const Hero: FunctionComponent<Props> = (props) => {

  return (

      <section className="flex justify-center px-4">
          <div className="flex p-36">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Science and Technology Council </h1>
                  <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-muted-foreground"> The official technical body of IIT (BHU) Varanasi</p>
                  <Button variant={'default'} className={'m-2'}>
                      Get Started <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                       xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                  </svg>
                  </Button>
                  <Button variant={'ghost'} className={'m-2'}>
                      Learn More
                  </Button>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <Player
                      src="https://lottie.host/5d539f9d-1902-41d8-9e55-bd393c9b22ed/yFRQAFWnhX.json"
                     loop
                     autoplay
                     style={{ height: '300px', width: '300px' }}
                 >
                 </Player>
              </div>
          </div>
      </section>
  );
};

export default Hero;
