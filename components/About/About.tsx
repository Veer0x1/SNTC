"use client"// to run it on the client side to access the document and the window 
import React, { FC, useEffect } from "react";
import styles from './About.module.css'
import SplitType from 'split-type';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {fadein} from "./Variants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


type AboutProps = {

}

const update = (): any => {

  gsap.registerPlugin(ScrollTrigger);
  const splitTypes = document.querySelectorAll<HTMLElement>("text-reveal");

  splitTypes.forEach((char: HTMLElement) => {
    const text = new SplitType(char, { types: 'chars' });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
      },
      opacity: 0.8,
      stagger: 0.1,
    });
  });
};


const About: FC<AboutProps> = (props) => {

  const [ref, InView] = useInView({
      threshold: 0.5,
  })

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      // Run only on the client side
      gsap.registerPlugin(ScrollTrigger);

      const splitTypes = document.querySelectorAll<HTMLElement>(".text-reveal");

      splitTypes.forEach((char: HTMLElement) => {
        const text = new SplitType(char, { types: 'chars' });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char.parentElement,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.8,
          stagger: 0.1,
        });
      });
    }
  }, []);

  return (
    <div className={styles.body} ref={ref}>
      <motion.div
        variants={fadein("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }} className={styles.container1}>
        <h2>
          About Us
        </h2>
      </motion.div>
      <motion.div
        variants={fadein("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }} className={styles.container2}>
        <section >
          <p className={styles.text}>
            <span className="text-reveal">
              The Science and Technology Council at IIT BHU is a
              student-run organization that aims to promote the
              understanding and application of science and technology
              among the IIT BHU community.
            </span>
          </p>
        </section>
      </motion.div>
    </div>
  )
}



export default About;