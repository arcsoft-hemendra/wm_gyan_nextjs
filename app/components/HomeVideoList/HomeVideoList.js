"use client";
import React from "react";
import LoaderComponent from "../common/Loader/Loader";
import MainHeading from "../common/MainHeading/MainHeading";
import VideoCard from "../common/VideoCard/VideoCard";
import style from "./HomeVideoList.module.css";

const HomeVideoList = ({ data }) => {
  const videoList =
    data.length < 12 && data.length > 7 ? data.slice(0, 6) : data.slice(0, 12);

  return (
    <React.Fragment>
      <MainHeading title="Gyan Videos" route="/search" />
      <div className={style.videoListContainer}>
        {!data ? (
          <div className={style.loaderHeight}>
            <div className={style.loaderContainer}>
              <LoaderComponent type={true} />
            </div>
          </div>
        ) : (
          videoList.map((item, index) => {
            return (
              <VideoCard
                key={index}
                video_landscape_thumb={item?.video_landscape_thumb}
                slug={item?.slug}
              />
            );
          })
        )}
      </div>
    </React.Fragment>
  );
};

export default HomeVideoList;
