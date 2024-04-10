"use client"

import Typed from 'typed.js'
import style from './Technex.module.css'
import { useEffect, useRef } from 'react'
const TypedText: React.FC = () => {
    const el = useRef(null)
    useEffect(()=>{
        const typed = new Typed(el.current,{
            strings: ['','engineers', 'creators.', 'editors.'],
            typeSpeed: 100,
            backSpeed: 40,
            loop: true,
            cursorChar: '.',
        })
        return ()=>{
            typed.destroy()
        }
    },[])
  return (
    // i removed the class block as it was creating issues with the curson
      <div>
    <span className={`${style.cursor} text-primary text-4xl`} ref={el}/>
      </div>
  )
}

export default TypedText
