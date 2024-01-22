"use client";
import Link from "next/link";
import { Pointer, Stars } from "./Svg";
import styles from "./AchievementsCard.module.css";
import React, { useEffect, useRef } from "react";
import Image, {StaticImageData} from "next/image";

type AchievementCardProps = {
  title?: string;
  description?: string;
  icon: StaticImageData ;
};

const AchievementCard: React.FC<AchievementCardProps> = (props) => {
  const card = useRef<HTMLElement>(null);
  const update = (event: React.MouseEvent<HTMLDivElement>) => {
    if (card.current) {
      const proximity = 40;
      const cardBounds = card.current.getBoundingClientRect();
      if (
        event?.clientX > cardBounds.left - proximity &&
        event?.clientX < cardBounds.left + cardBounds.width + proximity &&
        event?.clientY > cardBounds.top - proximity &&
        event?.clientY < cardBounds.top + cardBounds.height + proximity
      )
        card.current.style.setProperty("--active", "1");
      else card.current.style.setProperty("--active", "0");

      const CARD_CENTER = [
        cardBounds.left + cardBounds.width * 0.5,
        cardBounds.top + cardBounds.height * 0.5,
      ];
      let ANGLE =
        (Math.atan2(
          event?.clientY - CARD_CENTER[1],
          event?.clientX - CARD_CENTER[0]
        ) *
          180) /
        Math.PI;
      ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
      card.current.style.setProperty("--start", `${ANGLE + 90}`);
    }
  };
  return (

    <article
      className={`${styles.article} h-full p-[2rem] aspect-[33/40] rounded-[12px] min-w-[280px] max-w-[280px] flex flex-col gap-[0.25rem] relative`}
      ref={card}
      onMouseMove={update}
    >
      <div
        className={`${styles.glows} pointer-events-none absolute inset-0 blur-[20px]`}
      ></div>
      <span className="relative flex items-center flex-[1]">
         <Image
             src={props.icon}
             width={64}
             height={64}
             alt="gold medal"
         />
      </span>

      <span className="border-2 border-solid border-[#84738C] self-start rounded-[100px] px-[0.5rem] py-[0.7rem] text-[0.675rem] flex items-center gap-[0.25rem]">
        <Stars />
        <span>{props.title}</span>
      </span>
      <p className="m-0 py-[1rem] px-0 text-[1.5rem]">
        {props.description}
      </p>
      <Link
        href=""
        className={`${styles.a} text-[#C3C3D5] no-underline inline-block self-start opacity-50`}
      >
        Learn more
      </Link>
    </article>
  );
};
export default AchievementCard;
