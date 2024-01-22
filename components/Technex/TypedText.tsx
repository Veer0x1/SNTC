"use client"

import Typed from 'typed.js'
import style from './Technex.module.css'
import { useEffect, useRef } from 'react'
const TypedText: React.FC = () => {
    const el = useRef(null)
    useEffect(()=>{
        const typed = new Typed(el.current,{
            strings: ['', 'creators.', 'editors.'],
            typeSpeed: 100,
            backSpeed: 40,
            loop: true,
        })
        return ()=>{
            typed.destroy()
        }
    },[])
  return (
    // i removed the class block as it was creating issues with the curson
    <span className={`${style.text} text-[#f1e728] h-[200px]`} ref={el}/>
  )
}

export default TypedText
