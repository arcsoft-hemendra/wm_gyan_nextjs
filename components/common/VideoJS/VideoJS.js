"use client";
import React, { useEffect ,useRef} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { usePathname } from 'next/navigation'

export const VideoJS = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const pathname = usePathname()
  const { options, onReady, videoProps } = props;

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      }));
    }
  }, [options, videoRef,pathname]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player && player.isDisposed_) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef,pathname]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className={`video-js vjs-default-skin vjs-big-play-centered ${props?.className}`}
        playsInline
        {...videoProps}
      />
    </div>
  );
};

export default VideoJS;
