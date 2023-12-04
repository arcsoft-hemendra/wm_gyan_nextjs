"use client";
import React, { useState } from "react";
import VideoJS from "../common/VideoJS/VideoJS";
import VideoUploadContainer from "./VideoUploadContainer/VideoUploadContainer";
import CloseBtn from "../common/CloseBtn/CloseBtn";
import style from "./SharePageComponent.module.css";

const SharePageComponent = () => {
  const [play, setPlay] = useState(true);

  const videoData = {
    video:
      "https://cdn.workmob.com/stories_workmob/web_home/gyanmanch/gyanmanch.m3u8",
    poster: "https://cdn.workmob.com/stories_workmob/web_home/gyanmanch.jpg",
  };

  const handleVideo = (e) => {
    if (play) {
      e.target.pause();
      setPlay(!play);
    } else {
      e.target.play();
      setPlay(!play);
    }
  };

  return (
    <React.Fragment>
    <CloseBtn />
    <div className={style.mainContainer}>
      
      <div className={style.subContainer}>
        <VideoUploadContainer />
        <div className={style.videoContainer} onClick={handleVideo}>
          <div className={style.videoSubContainer}>
            <div className={style.videoMain}>
              <VideoJS
                className={style.sharePageVideo}
                options={{
                  id: "kahanimainvideo",
                  muted: true,
                  autoplay: true,
                  loop: true,
                  preload: "auto",
                  controls: false,
                  sources: [
                    {
                      src: videoData.video,
                      type: "application/x-mpegURL",
                    },
                  ],
                }}
                videoProps={{
                  poster: videoData.poster,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default SharePageComponent;
