//😍on clicking the club image its background changes to the bg containing breif details
// if we keep one extra img than defined in css then it comes at center automatically(SNTC logo can be kept there)
{
  /*"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./clubsdemo.module.css";
import Navbar from "@/components/Navbar";
import { WindowIcon } from "@heroicons/react/16/solid";

const Clubs2: React.FC = () => {
  var ang = 0;
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const ref5 = useRef<HTMLDivElement | null>(null);
  const ref6 = useRef<HTMLDivElement | null>(null);
  const ref7 = useRef<HTMLDivElement | null>(null);
  const ref8 = useRef<HTMLDivElement | null>(null);

  var refs = [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8];

  const handlenext = () => {
    // Check if the ref has been assigned to a DOM element
    ang += 45;
    refs.forEach((ref, index) => {
      if (ref.current) {
        // Explicitly assert the type using "as" keyword
        (ref.current as HTMLDivElement).style.setProperty("--ang", `${ang}`);
      }
    });
  };

  const handleprev = () => {
    ang -= 45;
    refs.forEach((ref, index) => {
      if (ref.current) {
        // Explicitly assert the type using "as" keyword
        (ref.current as HTMLDivElement).style.setProperty("--ang", `${ang}`);
      }
    });
  };

  return (
    <>
      <div
        id="clubspage"
        className=" mt-40  h-full flex flex-col sm:flex-wrap justify-center items-center"
      >
        <div id="holder" className={` ml-12 mb-15 ${styles.holder}`}>
          <div id="spinner" className={`${styles.spinner}`}>
            <div
              className={`flex flex-col  justify-center items-center ${styles.panel} `}
              ref={ref1}
            >
              <Image
                src="/AMC.png"
                width={70}
                height={70}
                alt=""
                className=" rounded-md shadow-sm shadow-slate-300"
                //ref={ref0}
              />
            </div>
            <div className={` ${styles.panel} `} ref={ref2}>
              <Image
                src="/Quant-black.png"
                width={100}
                height={100}
                alt=""
                className="rounded-md mt-8 shadow-sm shadow-slate-300 "
                //ref={ref1}
              />
            </div>
            <div
              ref={ref3}
              className={` flex justify-center items-center ${styles.panel} `}
            >
              <Image
                src="/CSI logo.JPG"
                width={80}
                height={80}
                alt=""
                className="rounded-md shadow-sm shadow-slate-300"
                //ref={ref2}
              />
            </div>
            <div ref={ref4} className={` ${styles.panel} `}>
              <Image
                src="/Biz new.png"
                width={100}
                height={100}
                alt=""
                className="rounded-md mt-5 shadow-sm shadow-slate-300"
                //ref={ref3}
              />
            </div>
            <div ref={ref5} className={`${styles.panel} `}>
              <Image
                src="/ASTRO.jpeg"
                width={80}
                height={80}
                alt=""
                className="rounded-md mt-3 shadow-sm shadow-slate-300"
                //ref={ref4}
              />
            </div>
            <div ref={ref6} className={` ${styles.panel} `}>
              <Image
                src="/Consulting.png"
                width={80}
                height={80}
                alt=""
                className="mt-3 rounded-md shadow-sm shadow-slate-300"
                //ref={ref5}
              />
            </div>
            <div ref={ref7} className={` ${styles.panel} `}>
              <Image
                src="/Robo-black.png"
                width={80}
                height={80}
                alt=""
                className=" mt-3 rounded-md shadow-sm shadow-slate-300"
                //ref={ref6}
              />
            </div>
            <div ref={ref8} className={` ${styles.panel} `}>
              <Image
                src="/COPS.png"
                width={80}
                height={80}
                alt=""
                className=" mt-3 rounded-md shadow-sm shadow-slate-300"
                //ref={ref7}
              />
            </div>
            <div className={`${styles.fade}`}></div>*
          </div>
        </div>
        <div
          className={` px-auto flex flex-wrap gap-10 items-center justify-center
           ${styles.pagination}`}
        >
          <button className="" type="button" id="prev" onClick={handleprev}>
            &#8592;
          </button>
          <button type="button" id="next" onClick={handlenext}>
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
};

export default Clubs2;*/
}
