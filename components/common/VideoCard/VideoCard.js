"use client";
import Link from "next/link";
import React from "react";
import style from "./VideoCard.module.css";
import { IoPlaySharp } from "react-icons/io5";

const VideoCard = (props) => {
  return (
    <Link key={props?.index} href={props.slug} className={style.anchor}>
      <section className={style.mainCardSection}>
        <img
          className={style.mainCardImage}
          src={props?.video_landscape_thumb}
          alt="thumbnail"
        />
        <div className={style.playIconContainer}> 
        <IoPlaySharp className={style.playIcon} />
        </div>
      </section>
      {props?.storyHeading && (
        <p className={style.heading}>{props?.storyHeading}</p>
      )}
    </Link>
  );
};

export default VideoCard;
