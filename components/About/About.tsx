import React, { FC } from "react";
import SplitType from "split-type";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadein } from "./Variants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type AboutProps = {};

const update = (): any => {
  gsap.registerPlugin(ScrollTrigger);

  const splitTypes = document.querySelectorAll<HTMLElement>(".text-reveal");

  splitTypes.forEach((char: HTMLElement) => {
    const text = new SplitType(char, { types: "chars" });

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
  });

  return (
    <>
      <div
        className="bg-black section mt-36 mb-48"
        id="About"
        onScroll={update()}
        ref={ref}
      >
        <div className="container mx-auto">
          <div className="mx-auto flex flex-row max-lg:flex-col items-center px-4 gap-8">
            <motion.div
              variants={fadein("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="lg:w-[50%] max-lg:max-w-[476px] px-[8px] mx-auto"
            >
              <h2 className="text-start font-semibold text-white text-[40px]">
                About Us
              </h2>
            </motion.div>

            <motion.div
              variants={fadein("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="lg:w-[50%] max-lg:max-w-[476px] mx-auto px-[16px] "
            >
              <section className="text-white">
                <p className="text-reveal">
                  <span className="text-decoration:none">
                    The Science and Technology Council at IIT BHU is a
                    student-run organization that aims to promote the
                    understanding and application of science and technology
                    among the IIT BHU community.
                  </span>
                </p>
              </section>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
