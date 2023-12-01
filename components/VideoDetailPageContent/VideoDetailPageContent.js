"use client";
import React, { useEffect, useState } from "react";
import { hasCookie } from "cookies-next";
import style from "./VideoDetailPageContent.module.css";

const VideoDetailPageContent = (props) => {
  const [isClient, setIsClient] = useState(false);
  const cookieAvailable = hasCookie("YOUNGSTARS");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <>
        <div className={style.titleAndButtonContainer}>
          <h1 className={style.heading}>{props?.storyHeading}</h1>
          {!!props?.storySlug && (
            <a
              className={style.viewMyPage}
              target="_blank"
              rel="noreferrer"
              href={
                cookieAvailable
                  ? `https://youngstars.workmob.com/${props?.storySlug}`
                  : `https://stories.workmob.com/${props?.storySlug}`
              }
            >
              View my page
            </a>
          )}
        </div>
        {props?.fullStory && (
          <div
            className={style.fullStory}
            dangerouslySetInnerHTML={{ __html: props?.fullStory }}
          />
        )}
      </>
    );
  }
};

export default VideoDetailPageContent;
