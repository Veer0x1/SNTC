//😍on clicking the club image its background changes to the bg containing breif details
// if we keep one extra img than defined in css then it comes at center automatically(SNTC logo can be kept there)
"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./clubs.module.css";
import Navbar from "@/components/Navbar";
import { WindowIcon } from "@heroicons/react/16/solid";
const Clubs: React.FC = () => {
  var ang = 0;
  const handlenext = () => {
    ang -= 45;
    const allElements = document.querySelectorAll("*");
    allElements.forEach((element) => {
      const elementWithStyle = element as HTMLElement;
      elementWithStyle.style.setProperty("--ang", `${ang}`);
    });
  };
  const handleprev = () => {
    ang += 45;
    const allElements = document.querySelectorAll("*");
    allElements.forEach((element) => {
      const elementWithStyle = element as HTMLElement;
      elementWithStyle.style.setProperty("--ang", `${ang}`);
    });
  };
  document.addEventListener("keypress", (e) => {
    console.log(e);
    if (e.key === " ") handlenext();
  });

  return (
    <>
      <div id="layoutindashboard" className="mb-20">
        <Navbar />
      </div>
      <div
        id="clubspage"
        className=" mt-40  h-full flex flex-col sm:flex-wrap justify-center items-center"
      >
        <div id="holder" className={` ml-12 mb-15 ${styles.holder}`}>
          <div id="spinner" className={`${styles.spinner}`}>
            <div
              className={`flex flex-col  justify-center items-center ${styles.panel} `}
            >
              <Image
                src="/AMC.png"
                width={70}
                height={70}
                alt=""
                className=" rounded-md shadow-sm shadow-slate-300"
              />
            </div>
            <div className={` ${styles.panel} `}>
              <Image
                src="/Quant-black.png"
                width={100}
                height={100}
                alt=""
                className="rounded-md mt-8 shadow-sm shadow-slate-300 "
              />
            </div>
            <div
              className={` flex justify-center items-center ${styles.panel} `}
            >
              <Image
                src="/CSI.JPG"
                width={80}
                height={80}
                alt=""
                className="rounded-md shadow-sm shadow-slate-300"
              />
            </div>
            <div className={` ${styles.panel} `}>
              <Image
                src="/Biz new.png"
                width={100}
                height={100}
                alt=""
                className="rounded-md mt-5 shadow-sm shadow-slate-300"
              />
            </div>
            <div className={`${styles.panel} `}>
              <Image
                src="/ASTRO.jpeg"
                width={80}
                height={80}
                alt=""
                className="rounded-md mt-3 shadow-sm shadow-slate-300"
              />
            </div>
            <div className={` ${styles.panel} `}>
              <Image
                src="/Consulting.png"
                width={80}
                height={80}
                alt=""
                className="mt-3 rounded-md shadow-sm shadow-slate-300"
              />
            </div>
            <div className={` ${styles.panel} `}>
              <Image
                src="/Robo-black.png"
                width={80}
                height={80}
                alt=""
                className=" mt-3 rounded-md shadow-sm shadow-slate-300"
              />
            </div>
            <div className={` ${styles.panel} `}>
              <Image
                src="/COPS.png"
                width={80}
                height={80}
                alt=""
                className=" mt-3 rounded-md shadow-sm shadow-slate-300"
              />
            </div>
            <div className={`justify-between ${styles.panel} `}>
              <Image
                src="/logo.svg"
                width={100}
                height={100}
                alt=""
                className="rounded-md"
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
export default Clubs;
