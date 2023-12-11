"use client";
import React from "react";
import { usePathname } from "next/navigation";
import VideoCard from "../common/VideoCard/VideoCard";
import MainHeading from "../common/MainHeading/MainHeading";
import style from "./VideoDetailMoreVideos.module.css";

const VideoDetailMoreVideos = (props) => {
  const pathname = usePathname();

  const filterData = props.suggestedVideo.filter(
    (item) => item.slug !== pathname?.split("/")[1]
  );

  const title = `MORE GYAN VIDEOS BY ${props.name}`;

  return (
    <>
      {filterData?.length > 0 && (
        <>
          <MainHeading title={title} page={"videoDetail"} />
          <div className={style.suggestedVideoContainer}>
            {filterData.map((item, index) => {
              return (
                <VideoCard
                  key={index}
                  video_landscape_thumb={item?.video_landscape_thumb}
                  slug={item?.slug}
                  storyHeading={item?.storyHeading}
                  category={item?.category}
                  storyType={item?.storyType}
                  showHeading={true}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default VideoDetailMoreVideos;
