"use client";
import React, { useEffect, useState } from "react";
import Footer from "../common/Footer/Footer";
import SubNavbar from "../common/SubNavbar/SubNavbar";
import VideoJS from "../common/VideoJS/VideoJS";
import VideoDetailMoreVideos from "../VideoDetailMoreVideos/VideoDetailMoreVideos";
import VideoDetailPageContent from "../VideoDetailPageContent/VideoDetailPageContent";
import style from "./VideoDetailPageComponent.module.css";
import { hasCookie } from "cookies-next";
import axios from "axios";
const VideoDetailPageComponent = ({ data }) => {
  const [suggestedVideo, setSuggestedVideo] = useState([]);
  const [ storySlug,  setStorySlug ] = useState("")
 
  useEffect(() => {
    fetchData();
  }, [data.instructor]);

  const fetchData = async () => {
    const cookieAvailable = hasCookie("YOUNGSTARS");
    const URL = cookieAvailable
      ? "https://cdn.workmob.com/youngstars_workmob"
      : "https://cdn.workmob.com/stories_workmob";

    const result = await axios(
      `${URL}/config/instructor/${data.instructor}.json`
    );
        
    const slug = result?.data?.story[0]?.slug; 
    if (slug) {
      setStorySlug(slug)      
    } else{
      return;
    }
    if (result?.data?.gyan && result?.data?.gyan.length > 0) {
      setSuggestedVideo(result.data.gyan);
    }
  };

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
          storySlug={storySlug}
          fullStory={data.fullStory}
        />
        <VideoDetailMoreVideos
          suggestedVideo={suggestedVideo}
          name={data?.name}
        />
      </div>
      <Footer dontShowSubFooter={true} />
    </React.Fragment>
  );
};

export default VideoDetailPageComponent;
