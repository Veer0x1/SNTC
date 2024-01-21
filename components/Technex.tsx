// https://codepen.io/yudizsolutions/pen/yLZaJMx

//importing stylesheets
import style from './Technex.module.css'

//importing components
import Box from "./Box"
import BgImg from "./BgImg"
import TypedText from './TypedText'
//importing components from next
import Link from "next/link"
import Image from "next/image"

const Technex: React.FC = () => {

  return (
    <main className="overflow-x-hidden m-0 bg-[#212121] bg-Technex-bg min-h-screen w-screen">
      {/* here in section orignally width is specified as 780px  we will test it again after media queries*/}
      <section className={`${style.info_section} h-[100svh] w-screen p-0 pl-[30px] flex items-center content-end relative z-[1] select-none before:content-[''] before:rounded-ellipse1 before:opacity-40 before:blur-[162px] before:h-[35%] before:w-[55%] before:absolute before:top-[-40%] before:left-[-66%] before:translate-x-1/2 before:translate-y-1/2 before:z-[-1]`}>
        <div className={`${style.left_part} p-0 pt-[20px] overflow-hidden`}>
          <h1 className="font-Extenda m-0 text-white text-[clamp(100px,18.5vw,282px)] leading-[0.75] font-normal not-italic uppercase">
            <span className="flex items-center">We make</span>
            {/* <span className={`${style.text} text-[#f1e728] block h-[200px]`}></span> */}
            <TypedText/>
          </h1>
          <p className="w-[72%] mt-[20px] text-white text-[16px] font-normal not-italic leading-[2] font-monument opacity-[0.8]">
            We create classNames every next month with our new talented creators
          </p>
          <Link
            href="https://www.yudiz.com/"
            className={`${style.book_link} mt-[40px] p-0 border-0 text-[56px] leading-[1] text-[#f1f1f1] tracking-[0.25px] uppercase font-Extenda font-light not-italic inline-flex items-center relative gap-[28px]`}
            style={{ textDecoration: "none" }}
          >
            <span className={`${style.linktext} relative overflow-hidden inline-block before:content-[''] before:absolute before:left-0 before:bottom-[6px] before:w-full before:h-[3px] before:bg-white before:scale-x-100 before:transition-translate before:duration-300 before:ease-in-out before:origin-origin`}>
              Visit our website now
            </span>
            <span className={`${style.arrow} h-[36px] w-[36px] top-[-5px] inline-block relative overflow-hidden before:absolute before:content-[''] before:bg-[#f1e728] before:transition-all before:ease-in-out before:duration-300 before:origin-origin before:rounded-[30px] before:h-[2px] before:w-full before:top-0 before:right-0 after:absolute after:contents-[''] after:bg-[#f1e728] after:transition-all after:origin-origin after:rounded-[30px] after:ease-in-out after:duration-300 after:w-[2px] after:h-full after:top-0 after:right-0`}>
              <span className="bg-[#f1e728] h-[2px] w-full inline-block top-0 left-0 absolute rounded-[30px] origin-right-top transition-all ease-in-out duration-300 rotate-[-45deg] translate-x-[-3px] translate-y-[-1px] before:absolute before:bg-[#f1e728] before:content-[''] before:h-full before:w-[15px] before:left-[-15px] before:top-0"></span>
            </span>
          </Link>
        </div>
        <div className={`${style.right_part} bg-transparent h-[588px] w-[588px] m-0 ml-auto mr-[-14px] block relative z-[1] shrink-0 before:content-[''] before:rounded-ellipse1 before:opacity-40 before:bg-[#f1e728] before:blur-[112px] before:h-[35%] before:w-[55%] before:absolute before:top-1/2 before:right-1/3 before:translate-x-1/2 before:translate-y-[-50%] before:z-[-1]`}>
          <div className={`${style.bg_line} absolute top-0 right-0 w-1/2 h-[85px] z-[-1] overflow-hidden flex whitespace-nowrap `}>
            <img src="https://www.yudiz.com/codepen/photography-banner/wave.svg" alt="line" 
            // fill={true} 
            className="relative shrink-0 animate-first-text"/>
            <img src="https://www.yudiz.com/codepen/photography-banner/wave.svg" alt="line" 
            // fill={true} 
            className="relative shrink-0 animate-second-text"/>
          </div>
          <div className={`${style.main_grid} ${style.d_flex} relative h-full gap-[24px] flex flex-wrap content-between`}>
            <Box className="top-0 left-0 animate-box-1">
              <span className="absolute opacity-80 z-[5] block top-[43%] left-[-27px] translate-y-[-50%]">
                Photography
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
                Under Water
              </span>
            </Box>
            <Box className="left-0 top-1/3 animate-box-4">
              <span className="absolute opacity-80 z-[5] block top-1/2 left-[55%] translate-x-[-50%] translate-y-[-50%]">
                VFX
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
                Videography
              </span>
            </Box>
            <Box className="left-2/3 top-2/3 animate-box-8">
              <BgImg
                Image="https://www.yudiz.com/codepen/photography-banner/Videography.png"
                alt="Videography"
              />
            </Box>
          </div>
          <div className={`${style.bg_circle_h_line} bottom-[42px] left-[-68px] z-[1] w-[181px] h-[111px] relative`}>
            <img
              src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg"
              alt="Horizontal-circle"
              // fill={true}
              className="absolute w-full h-auto max-w-full left-0 top-0 animate-top-ring-move"
            />
            <img
              src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg"
              alt="Horizontal-circle"
              // fill={true}
              className="absolute w-full h-auto max-w-full left-0 top-1/2 translate-y-[-50%] "
            />
            <img
              src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg"
              alt="Horizontal-circle"
              // fill={true}
              className="absolute w-full h-auto max-w-full left-0 bottom-0 animate-bottom-ring-move"
            />
          </div>
          <div className={`${style.bg_dash_circle} absolute bottom-[-35px] right-[-13px] z-[-1] w-[180px] aspect-square`}>
            <Image
              src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
              alt="dash-circle"
              fill={true}
              className="h-full w-full object-cover object-center-center animate-circle-rotate"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
export default Technex
