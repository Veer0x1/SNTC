//😍on clicking the club image its background changes to the bg containing breif details
"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../../components/clubsdemo.module.css";
import Navbar from "@/components/Navbar";
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

  return (
    <>
      <div
        id="clubspage"
        className="bg-black mt-40  h-full flex flex-col justify-center items-center"
      >
        <div id="holder" className={` ${styles.holder}`}>
          <div id="spinner" className={` ${styles.spinner}`}>
            <div className={` ${styles.panel} ${styles.a}`}></div>
            <div className={` ${styles.panel} ${styles.b}`}></div>
            <div className={` ${styles.panel} ${styles.c}`}></div>
            <div className={` ${styles.panel} ${styles.d}`}></div>
            <div className={` ${styles.panel} ${styles.e}`}></div>
            <div className={` ${styles.panel} ${styles.f}`}></div>
            <div className={` ${styles.panel} ${styles.g}`}></div>
            <div className={` ${styles.panel} ${styles.h}`}></div>
            <div className={`${styles.fade}`}></div>
          </div>
        </div>
        <div className={` ${styles.pagination}`}>
          <button type="button" id="prev" onClick={handleprev}>
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
