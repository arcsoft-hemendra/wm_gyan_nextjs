"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import VideoJS from "../common/VideoJS/VideoJS";
import { hasCookie } from "cookies-next";
import LoaderComponent from "../common/Loader/Loader";
import { youngstarVideo, karmyogisVideo } from "./HeroSectionData";
import style from "./HeroSection.module.css";
import { UrlContextProvider } from "@/context/UrlContext";

const HeroSection = () => {
  const { urlChange } = useContext(UrlContextProvider);
  const [youngVideo, setYoungVideo] = useState({});
  const [karmyogiVideo, setKarmYogiVideo] = useState({});
  const [playVideo, setPlayVideo] = useState(true);
  const [loader, setLoader] = useState(true);

  const videoRef = useRef(null);

  useEffect(() => {
    const cookieAvailable = hasCookie("YOUNGSTARS");
    if (cookieAvailable) {
      setYoungVideo(youngstarVideo);
      setKarmYogiVideo({});
      setLoader(false);
    } else {
      setKarmYogiVideo(karmyogisVideo);
      setYoungVideo({});
      setLoader(false);
    }
  }, [urlChange]);

  // Handling the play and pause of header video
  useEffect(() => {
    if (playVideo) {
      videoRef?.current?.play();
    } else {
      videoRef?.current?.pause();
    }
  }, [playVideo]);

  // Here we are handling the state for play and pause of top header video
  const handleToggle = (event) => {
    if (event.target.tagName === "VIDEO") {
      videoRef.current = event.target;
      setPlayVideo(!playVideo);
    }
  };

  return (
    <>
      {loader ? (
        <div className={style.videoBackgroundLayout}>
          <LoaderComponent />
        </div>
      ) : (
        <div
          className={style.homeVideoContainerBackground}
          onClick={(event) => handleToggle(event)}
        >
          <div className={style.homeVideoContainer}></div>

          {karmyogiVideo && !youngVideo.video && (
            <VideoJS
              className={style.homeVideoContainerVideo}
              options={{
                id: "headermainvideo",
                muted: true,
                autoplay: "muted",
                loop: true,
                preload: "metadata",
                controls: false,
                sources: [
                  {
                    src: karmyogiVideo.video,
                    type: "application/x-mpegURL",
                  },
                ],
              }}
              videoProps={{
                poster: karmyogiVideo.background,
              }}
            />
          )}
          {youngVideo && !karmyogiVideo.video && (
            <VideoJS
              className={style.homeVideoContainerVideo}
              options={{
                id: "headermainvideo",
                muted: true,
                autoplay: "muted",
                loop: true,
                preload: "metadata",
                controls: false,
                sources: [
                  {
                    src: youngVideo.video,
                    type: "application/x-mpegURL",
                  },
                ],
              }}
              videoProps={{
                poster: youngVideo.background,
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default HeroSection;
