import React from "react";
import VideoDetailPageSkeleton from "@/components/VideoDetailPageSkeleton/VideoDetailPageSkeleton";
import VideoDetailPageComponent from "../../components/VideoDetailPageComponent/VideoDetailPageComponent";

export async function generateMetadata({ params }) {
  const URL = "https://cdn.workmob.com/stories_workmob";

  // read route params
  const userId = params.id;

  // fetch data
  const data = await fetch(`${URL}/config/gyan-story-detail/${userId}.json`, {
    cache: "no-store",
  }).then((res) => res.json());

  return {
    title: data.metaTitle,
    description: data.metaDesc,
    keywords: data.keywords,
  };
}

async function getVideosDetail(userId) {
  const URL = "https://cdn.workmob.com/stories_workmob";

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
  const data = await getVideosDetail(id);

  if (!data) {
    return <VideoDetailPageSkeleton />;
  }

  return <VideoDetailPageComponent data={data} />;
};

export default StoryDetailPage;
