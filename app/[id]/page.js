import React from "react";
import VideoDetailPageSkeleton from "@/components/VideoDetailPageSkeleton/VideoDetailPageSkeleton";
import VideoDetailPageComponent from "../../components/VideoDetailPageComponent/VideoDetailPageComponent";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export async function generateMetadata({ params }) {
  const cookieGet = getCookie("YOUNGSTARS", { cookies });
  // read route params
  const userId = params.id; 

  // fetch data
  let data;
  if(cookieGet){
     data = await fetch(`https://cdn.workmob.com/youngstars_workmob/config/gyan-story-detail/${userId}.json`, {
      cache: "no-store",
    }).then((res) => res.json());
  }else{
    console.log("stories")
     data = await fetch(`https://cdn.workmob.com/stories_workmob/config/gyan-story-detail/${userId}.json`, {
      cache: "no-store",
    }).then((res) => res.json());

  }

  return {
    title: data.metaTitle,
    description: data.metaDesc,
    keywords: data.keywords,
  };
}

async function getVideosDetail(userId, URL) {
  // read route params
  const res = await fetch(`${URL}/config/gyan-story-detail/${userId}.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const StoryDetailPage = async ({ params: { id } }) => {
  const cookieGet = getCookie("YOUNGSTARS", { cookies });
  const URL = cookieGet
    ? "https://cdn.workmob.com/youngstars_workmob"
    : "https://cdn.workmob.com/stories_workmob";
  const data = await getVideosDetail(id, URL);

  if (!data) {
    return <VideoDetailPageSkeleton />;
  }

  return <VideoDetailPageComponent data={data} />;
};

export default StoryDetailPage;
