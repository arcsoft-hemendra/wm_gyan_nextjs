import React from "react";
import VideoJS from "../common/VideoJS/VideoJS";
import style from "./StoryDetailPageVideoContainer.module.css";

const StoryDetailPageVideoContainer = () => {
  return (
    <>
      <VideoJS
        className={style.StoryDetailPageVideoContainer}
        options={{
          id: "StoryDetailPageVideo",
          muted: true,
          autoplay: "muted",
          loop: true,
          preload: "metadata",
          controls: true,
          preload: "auto",
          sources: [
            {
              src: "https://cdn.workmob.com/stories_workmob/web_home/gyanmanch_youngstars/gyanmanch_youngstars.m3u8",
              type: "application/x-mpegURL",
            },
          ],
        }}
        videoProps={{
          poster:
            "https://cdn.workmob.com/stories_workmob/web_home/gyanmanch_youngstars.jpg",
        }}
      />
    </>
  );
};

export default StoryDetailPageVideoContainer;
