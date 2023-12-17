type BoxProps ={
    children: React.ReactNode
    className?: string
}
import style from './Technex.module.css'
const Box :React.FC<BoxProps> =(props)=>{
    const { className = ""} = props
    return(
        <div className={`${style.box} w-1/3-16 h-1/3-16 border border-solid border-[#555555] bg-transparent flex items-center justify-center text-[16px] not-italic font-normal text-white font-monument leading-[32px] rounded-[120px] absolute ${className}`}>
            {props.children}
        </div>
    )
}
export default Box;