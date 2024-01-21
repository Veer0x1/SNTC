'use client'
import styles from './About.module.css'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect} from 'react';

gsap.registerPlugin(ScrollTrigger);
const About :React.FC = ()=>{
    useEffect(()=>{
        const scrub = 0.5;
        const trigger = document.querySelector('.mainAbout');
        const spanElement: Element = document.querySelector('.textBgAbout')!;
        gsap.set(spanElement,{
            '--progress': 0,
            color: 'transparent',
            backgroundPositionX: 'calc(-470vmax + (var(--progress) * 470vmax)), calc(-470vmax + (var(--progress) * 470vmax)), 0',
        })
        console.log(spanElement)
        gsap.to(spanElement, {
            '--progress': 1,
            scrollTrigger: {
              trigger,
              scrub,
              start: 'top top',
              end: 'top top-=75%'
            }
          })
          gsap.to(spanElement, {
            color: 'white',
            scrollTrigger: {
              trigger,
              scrub,
              start: 'top top-=75%',
              end: 'bottom bottom',
            }
        })
        console.log(spanElement)

    },[])
    return(
        <div className="bg-[#050505] font-monument">
        <header className="h-screen text-white grid place-items-center text-[clamp(2rem,8vw+1rem,12rem)]">
            <h1 className="font-[120] bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] to-[#808080]">About Us</h1>
        </header>
        <main className={`h-[350vh] ${styles.main} mainAbout`}>
            <section className='sticky top-0 h-screen w-screen place-items-center grid '>
                <p className="max-w-[90vw] overflow-hidden p-[5ch] m-0">
                    <span className={`text-[clamp(1rem,2vw+1rem,10rem)] text-white no-underline ${styles.textBg} textBgAbout`}> 
                    The Science and Technology Council at IIT BHU is a student-run organization that aims to promote the understanding and application of science and technology among the IIT BHU community.
                    </span>
                </p>
            </section>
        </main>
        </div>
    )
}
export default About