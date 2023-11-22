"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import VideoCard from "../common/VideoCard/VideoCard";
import style from "./VideoDetailMoreVideos.module.css";
import MainHeading from "../common/MainHeading/MainHeading";

const VideoDetailMoreVideos = (props) => {
  const pathname = usePathname();
  const [suggestedVideo, setSuggestedVideo] = useState([]);

  useEffect(() => {
    fetchData();
  }, [props.instructor]);

  const fetchData = async () => {
    const URL = "https://cdn.workmob.com/stories_workmob";

    const result = await axios(
      `${URL}/config/instructor/${props.instructor}.json`
    );
    if (result?.data?.gyan && result?.data?.gyan.length > 0) {
      setSuggestedVideo(result.data.gyan);
    }
  };

  const filterData = suggestedVideo.filter(
    (item) => item.slug !== pathname?.split("/")[1]
  );

  const title = `MORE GYAN VIDEOS BY ${props.name}`;

  return (
    <>
      {filterData?.length > 0 && (
        <div className="container">
          <MainHeading title={title} />
          <div className={style.suggestedVideoContainer}>
            {filterData.map((item, index) => {
              return (
                <VideoCard
                  key={index}
                  video_landscape_thumb={item?.video_landscape_thumb}
                  slug={item?.slug}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default VideoDetailMoreVideos;