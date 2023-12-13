"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import SubNavbar from "../common/SubNavbar/SubNavbar";
import VideoCard from "../common/VideoCard/VideoCard";
import style from "./SearchVideoList.module.css";
import Footer from "../common/Footer/Footer";
import { hasCookie } from "cookies-next";
import LoaderComponent from "../common/Loader/Loader";

const SearchVideoList = (props) => {
  const [searchVideo, setSearchVideo] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [paginateData, setPaginateData] = useState(12);
  const [loading, setLoading] = useState(true);
  const videoListLength = useRef();
  const cookieAvailable = hasCookie("YOUNGSTARS");

  useEffect(() => {
    setLoading(true);
    setVideoData(
      cookieAvailable ? props.getVideosListYoung : props.getVideosListStories
    );
    videoListLength.current = cookieAvailable
      ? props.getVideosListYoung.length
      : props.getVideosListStories.length;
    setLoading(false);
  }, []);

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

  const filteredDataVideo = videoData
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

  if (loading) {
    return <LoaderComponent />;
  }

  return (
    <>
      <SubNavbar
        discription="Search Gyan videos from Indian professionals, business owners, startup founders, youngstars, and more"
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
                storyHeading={item?.storyHeading}
                category={item?.category}
                storyType={item?.storyType}
                showHeading={false}
              />
            );
          })}
        </div>
      ) : (
        <div className={style.notFound}>
          <p>No Video Available.</p>
        </div>
      )}
      <Footer dontShowSubFooter={true} />
    </>
  );
};

export default SearchVideoList;
