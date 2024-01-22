'use client'
import { useEffect} from "react";
import GalleryCard from "../cards/GalleryCard";
import gsap from 'gsap';
import {Draggable} from 'gsap/Draggable'
const Gallery: React.FC = () => {
    gsap.registerPlugin(Draggable);
    useEffect(()=>{
      const images = document.querySelectorAll('.item');
      const imageSize = images.length;
      const total = images.length;
      const degree = 360/ total;
      console.log(degree);
      const init = () => {
        const timeline = gsap.timeline();
      
        images.forEach((image, index) => {
          const sign = Math.floor((index / 2) % 2) ? 1 : -1;
          const value = Math.floor((index + 4) / 4) * 4;
          const rotation = index > imageSize - 3 ? 0 : sign * value;
      
          gsap.set(image, {
            rotation: rotation,
            scale: 0.5,
          });
      
          timeline.from(image,{
              // x: () =>
              //   index % 2
              //     ? window.innerWidth + image.clientWidth 
              //     : -window.innerWidth - image.clientWidth,
              // y: () => window.innerHeight - image.clientHeight,
              rotation: index % 2 ? 200 : -200,
              // scale: 4,
              opacity: 1,
              ease: "power4.out",
              duration: 1,
              delay: 0.15 * Math.floor(index / 2),

            },0);
      
          let rotationAngle = index * degree;
          timeline.to(
            image,
            {
              scale: 1,
              duration: 0,
            },
            0.15 * (imageSize / 2 - 1) + 1
          );
      
          timeline.to(
            image,
            {
              transformOrigin: "center 200vh",
              rotation:
                index > imageSize / 2 ? -degree * (imageSize - index) : rotationAngle,
              duration: 1,
              ease: "power1.out",
            },
            0.15 * (imageSize / 2 - 1) + 1
          );
        });
      };
      
      const draggable = () => {
        let start = 0;
        Draggable.create(".items", {
          type: "rotation",
      
          onDragStart: function () {
            start = this.rotation;
          },
          onDragEnd: function () {
            const rotation = this.rotation;
            const offset = Math.abs(rotation - start);
            if (rotation > start) {
              if (rotation - start < degree / 2) {
                gsap.to(".items", {
                  rotation: `-=${offset}`,
                });
              } else {
                gsap.to(".items", {
                  rotation: `+=${2 * degree - offset}`,
                });
              }
            } else {
              if (Math.abs(rotation - start) < degree / 2) {
                gsap.to(".items", {
                  rotation: `+=${offset}`,
                });
              } else {
                gsap.to(".items", {
                  rotation: `-=${2 * degree - offset}`,
                });
              }
            }
          },
        });
      };
      
      init();
      draggable();
      },[])

  return (
    <main className="container1 w-screen h-screen select-none overflow-hidden">
        <div className="center h-screen absolute left-1/2 top-[-33%] translate-x-1/2 translate-y-1/2 select-none">
          <div className="items rotate-0 select-none flex origin-center-200vh">
            <GalleryCard link="https://www.themoviedb.org/t/p/original/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg"/>
            <GalleryCard link="https://www.themoviedb.org/t/p/original/aWh8R6jeAbmiB4TsF6CjYFrUsI8.jpg"/>
            <GalleryCard link="https://www.themoviedb.org/t/p/w220_and_h330_face/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg"/>
            <GalleryCard link="https://www.themoviedb.org/t/p/original/zxVEkxgreRkFkh1rBK85T2JyxFY.jpg"/>
            <GalleryCard link="https://www.themoviedb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"/>
            <GalleryCard link="https://www.themoviedb.org/t/p/w220_and_h330_face/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"/>
            <GalleryCard link="https://www.themoviedb.org/t/p/original/vKEBse3BPU7crfAjdPNaC6WePnO.jpg"/>
            <GalleryCard link="https://www.themoviedb.org/t/p/w220_and_h330_face/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg"/>
            <GalleryCard link="https://www.themoviedb.org/t/p/w220_and_h330_face/bCj4EfuehAlgBwVd3diyWyhuuau.jpg"/>
            <GalleryCard link="https://www.themoviedb.org/t/p/original/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg"/>
            <GalleryCard link="https://www.themoviedb.org/t/p/original/aWh8R6jeAbmiB4TsF6CjYFrUsI8.jpg" />
            <GalleryCard link="https://www.themoviedb.org/t/p/w220_and_h330_face/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg" />
            <GalleryCard link="https://www.themoviedb.org/t/p/original/zxVEkxgreRkFkh1rBK85T2JyxFY.jpg" />
            <GalleryCard link="https://www.themoviedb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg" />
            <GalleryCard link="https://www.themoviedb.org/t/p/w220_and_h330_face/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" />
            <GalleryCard link="https://www.themoviedb.org/t/p/original/vKEBse3BPU7crfAjdPNaC6WePnO.jpg" />
            <GalleryCard link="https://www.themoviedb.org/t/p/w220_and_h330_face/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg" />
            <GalleryCard link="https://www.themoviedb.org/t/p/w220_and_h330_face/bCj4EfuehAlgBwVd3diyWyhuuau.jpg" />
          </div>
        </div>
    </main>
  )
}

export default Gallery;
