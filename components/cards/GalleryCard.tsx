import React from "react";
import styles from './GalleryCard.module.css'
type CardProps = {
  link: string,
  ref?: React.MutableRefObject<never>
}

const GalleryCard: React.FC<CardProps> = (props) => {
  const link = props.link;
  return (
    <div className="item absolute select-none cursor-pointer translate-x-[-50%]" ref={props.ref}>
      <div className={`${styles.card} block w-[430px] h-[610px] text-white select-none rounded-[17px] overflow-hidden cursor-grab relative border-[10px] border-solid border-black`}>
        <img
          className="image h-full w-full object-cover absolute top-0 left-0 grayscale-[100] pointer-events-none"
          src={link}
        />
      </div>
    </div>
  )
}
export default GalleryCard;