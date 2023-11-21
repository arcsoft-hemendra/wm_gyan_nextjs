import React from "react";
import VideoJS from "../common/VideoJS/VideoJS";
import style from "./StoryDetailPageVideoContainer.module.css";

const StoryDetailPageVideoContainer = ({ data }) => {

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
              src: data.video_url_landscape,
              type: "application/x-mpegURL",
            },
          ],
        }}
        videoProps={{
          poster: data.video_landscape_thumb,
        }}
      />
    </>
  );
};

export default StoryDetailPageVideoContainer;
