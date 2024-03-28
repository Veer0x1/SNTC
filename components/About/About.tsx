"use client";
// import styles from "./About.module.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect } from "react";
//
// gsap.registerPlugin(ScrollTrigger);
// const About: React.FC = () => {
//   useEffect(() => {
//     const scrub = 0.5;
//     const trigger = document.querySelector(".mainAbout");
//     const spanElement: Element = document.querySelector(".textBgAbout")!;
//     gsap.set(spanElement, {
//       "--progress": 0,
//       color: "transparent",
//       backgroundPositionX:
//         "calc(-470vmax + (var(--progress) * 470vmax)), calc(-470vmax + (var(--progress) * 470vmax)), 0",
//     });
//     console.log(spanElement);
//     gsap.to(spanElement, {
//       "--progress": 1,
//       scrollTrigger: {
//         trigger,
//         scrub,
//         start: "top top",
//         end: "top top-=75%",
//       },
//     });
//     gsap.to(spanElement, {
//       color: "white",
//       scrollTrigger: {
//         trigger,
//         scrub,
//         start: "top top-=75%",
//         end: "bottom bottom",
//       },
//     });
//     console.log(spanElement);
//   }, []);
//   return (
//     <section className="flex justify-center px-4">
//       <div className="container px-6 py-6">
//         <header className="text-white grid place-items-center text-[clamp(2rem,8vw+1rem,12rem)]">
//           <h1 className="">About Us</h1>
//         </header>
//         <main className={`${styles.main} mainAbout`}>
//           <div className="sticky place-items-center grid ">
//             <p className="overflow-hidden p-[5ch] m-0">
//               <span
//                 className={`text-[clamp(1rem,2vw+1rem,10rem)] flex justify-center items-center text-center text-white no-underline ${styles.textBg} textBgAbout`}
//               >
//                 The Science and Technology Council at IIT BHU is a student-run
//                 organization that aims to promote the understanding and
//                 application of science and technology among the IIT BHU
//                 community.
//               </span>
//             </p>
//           </div>
//         </main>
//       </div>
//     </section>
//   );
// };
// export default About;
import React, { FunctionComponent } from "react";
import { TypewriterEffect,TypewriterEffectSmooth } from "@/components/ui/text-generate-effect";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
interface OwnProps { }

type Props = OwnProps;

const About: FunctionComponent<Props> = (props) => {
  const words =
    "The Science and Technology Council at IIT BHU is a student-run organization that aims to promote the understanding and application of science and technology among the IIT BHU community.";
  return(
    <>
      <div className="flex justify-center items-center m-4 p-4">
        <TextRevealCard text={"About Us"} revealText={words} />
      </div>
    </>
  )
};

export default About;
