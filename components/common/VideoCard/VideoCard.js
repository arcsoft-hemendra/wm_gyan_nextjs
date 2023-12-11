"use client";

import React from "react";
import Link from "next/link";
import { customEvent } from "@/utils/firebase/firebase";
import { EVENT_TYPE } from "@/utils/firebase/firebaseString";
import style from "./VideoCard.module.css";
import { IoPlaySharp } from "react-icons/io5";

const VideoCard = (props) => {
  const handleClick = () => {
    // Handle artical view event
    customEvent(EVENT_TYPE.articleView, {
      slug: props.slug,
      category: props.category,
      heading: props.storyHeading,
      type: props.storyType,
      src: "gyan",
    });
  };

  return (
    <Link
      key={props?.index}
      href={props.slug}
      className={style.anchor}
      onClick={handleClick}
    >
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
      {props?.showHeading && (
        <p className={style.heading}>{props?.storyHeading}</p>
      )}
    </Link>
  );
};

export default VideoCard;
