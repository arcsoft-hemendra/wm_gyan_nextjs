"use client";
import React, { useContext, useEffect, useState } from "react";
import { UrlContextProvider } from "@/context/UrlContext";
import LoaderComponent from "../common/Loader/Loader";
import MainHeading from "../common/MainHeading/MainHeading";
import VideoCard from "../common/VideoCard/VideoCard";
import { hasCookie } from "cookies-next";
import style from "./HomeVideoList.module.css";

const HomeVideoList = ({ videoDataStories, videoDataYoung }) => {
  const { urlChange } = useContext(UrlContextProvider);
  const cookieAvailable = hasCookie("YOUNGSTARS");
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    setVideoData(cookieAvailable ? videoDataYoung : videoDataStories);
    return () => {
      setVideoData([]);
    };
  }, [urlChange]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const videoList =
    videoData.length < 12 && videoData.length > 7
      ? videoData.slice(0, 6)
      : isMobile
      ? videoData.slice(0, 6)
      : videoData.slice(0, 12);

  return (
    <React.Fragment>
      <MainHeading title="Gyan Videos" route="/search" />
      <div className={style.videoListContainer}>
        {!videoList ? (
          <div className={style.loaderHeight}>
            <div className={style.loaderContainer}>
              <LoaderComponent type={true} />
            </div>
          </div>
        ) : (
          videoList?.map((item, index) => {
            return (
              <VideoCard
                key={index}
                video_landscape_thumb={item?.video_landscape_thumb}
                slug={item?.slug}
                storyHeading={item?.storyHeading}
                category={item?.category}
                storyType={item?.storyType}
                showHeading={false}
              />
            );
          })
        )}
      </div>
    </React.Fragment>
  );
};

export default HomeVideoList;
