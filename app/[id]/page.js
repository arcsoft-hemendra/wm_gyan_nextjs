import React from "react";
import StoryDetailPageVideoContainer from "../components/StoryDetailPageVideoContainer/StoryDetailPageVideoContainer";

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

const StoryDetailPage = () => {
  return (
    <>
      <StoryDetailPageVideoContainer />
    </>
  );
};

export default StoryDetailPage;
