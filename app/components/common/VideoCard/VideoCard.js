"use client";
import React from "react";
import style from "./VideoCard.module.css";

const VideoCard = (props) => {
  return (
    <div key={props?.index}>
      <section
        onClick={() => props.onClick()}
        className={style.mainCardSection}
      >
        <img
          className={style.mainCardImage}
          src={props?.video_landscape_thumb}
          alt="thumbnail"
        />
        <div className={style.playIconContainer}>
          <i className={`icon icon-play ${style.playIcon}`} />
        </div>
      </section>
      <p className={style.heading}>{props?.storyHeading}</p>
    </div>
  );
};

export default VideoCard;
