"use client";
import React, { useEffect, useRef, useState } from "react";
import SubNavbar from "../common/SubNavbar/SubNavbar";
import VideoCard from "../common/VideoCard/VideoCard";
import style from "./SearchVideoList.module.css";
import Footer from "../common/Footer/Footer";

const SearchVideoList = (props) => {
  const [searchVideo, setSearchVideo] = useState("");
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

  const filteredDataVideo = props.data
    .filter((cate) => {
      if (searchVideo === "") {
        return cate;
      } else {
        return (
          cate.name.toLowerCase().includes(searchVideo.toLowerCase()) ||
          cate.storyType
            .toLowerCase()
            .replace(/ /g, "-")
            .includes(searchVideo.toLowerCase().replace(/ /g, "-"))
        );
      }
    })
    .slice(0, paginateData);

  return (
    <>
      <SubNavbar
        discription="Search Gyan videos from Indian <br/> professionals, business owners, startup founders, and more"
        inputPlaceholder="Search by name"
        value={searchVideo}
        onChange={setSearchVideo}
      />
      {filteredDataVideo && filteredDataVideo.length > 0 ? (
        <div className={`${style.searchVideoContainer} container`}>
          {filteredDataVideo.map((item, index) => {
            return (
              <VideoCard
                key={index}
                video_landscape_thumb={item?.video_landscape_thumb}
                slug={item?.slug}
              />
            );
          })}
        </div>
      ) : (
        <div className={style.notFound}>
          <p>No Video Available.</p>
        </div>
      )}
        <Footer dontShowSubFooter={true}/>
    </>
  );
};

export default SearchVideoList;
