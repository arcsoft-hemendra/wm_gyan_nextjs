"use client";
import React from "react";
import style from "./VideoDetailPageSkeleton.module.css";

const VideoDetailPageSkeleton = () => {
  return (
    <section className={style.mainContainer}>
      <div className={style.skeletonContainer}></div>
      <div className={style.skeletonvideo}></div>
      <div className={style.items}>
        {Array.from({ length: 6 }, (v, i) => (
          <div key={i} className={style.thumbnail}></div>
        ))}
      </div>
    </section>
  );
};

export default VideoDetailPageSkeleton;
