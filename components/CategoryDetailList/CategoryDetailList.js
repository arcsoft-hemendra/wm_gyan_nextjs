"use client";
import React, { useEffect, useRef, useState } from "react";
import SubNavbar from "../common/SubNavbar/SubNavbar";
import VideoCard from "../common/VideoCard/VideoCard";
import style from "./CategoryDetailList.module.css";

const CategoryDetailList = (props) => {
  const [paginateData, setPaginateData] = useState(12);
  const videoListLength = useRef(props.data.length);

  // Handling scroller
  useEffect(() => {
    const scroller = window.addEventListener("scroll", (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= Number(scrollHeight) - 50) {
        if (paginateData <= videoListLength.current) {
          setPaginateData((prev) => prev + 17);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", scroller);
    };
  }, [paginateData]);

  const videoList = props.data.slice(0, paginateData);

  return (
    <div>
      <SubNavbar />
      {videoList?.length > 0 ? (
        <div className={style.videoContainer}>
          {videoList.map((item, index) => {
            return (
              <VideoCard
                key={index}
                video_landscape_thumb={item?.video_landscape_thumb}
                slug={`/${item?.slug}`}
              />
            );
          })}
        </div>
      ) : (
        <div className={style.notFound}>
          <p>No Video Available.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryDetailList;
