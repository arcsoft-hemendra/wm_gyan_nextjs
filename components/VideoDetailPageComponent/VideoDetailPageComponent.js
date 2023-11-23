import React from "react";
import Footer from "../common/Footer/Footer";
import SubFooter from "../common/SubFooter/SubFooter";
import SubNavbar from "../common/SubNavbar/SubNavbar";
import VideoJS from "../common/VideoJS/VideoJS";
import VideoDetailMoreVideos from "../VideoDetailMoreVideos/VideoDetailMoreVideos";
import VideoDetailPageContent from "../VideoDetailPageContent/VideoDetailPageContent";
import style from "./VideoDetailPageComponent.module.css";

const VideoDetailPageComponent = ({ data }) => {
  return (
    <React.Fragment>
      <SubNavbar />
      <div className="container">
        <div className={style.StoryDetailPageVideoContainer}>
          <VideoJS
            className={style.StoryDetailPageVideo}
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
        </div>
        <VideoDetailPageContent
          storyHeading={data.storyHeading}
          storySlug={data.storySlug}
          fullStory={data.fullStory}
        />
        <VideoDetailMoreVideos
          instructor={data?.instructor}
          name={data?.name}
        />
      </div>
      <Footer dontShowSubFooter={true} />
    </React.Fragment>
  );
};

export default VideoDetailPageComponent;
