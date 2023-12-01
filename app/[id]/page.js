import React from "react";
import VideoDetailPageSkeleton from "@/components/VideoDetailPageSkeleton/VideoDetailPageSkeleton";
import VideoDetailPageComponent from "../../components/VideoDetailPageComponent/VideoDetailPageComponent";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export async function generateMetadata({ params }) {
  const cookieGet = getCookie("YOUNGSTARS", { cookies });
  // read route params
  const userId = params.id;
  const HOSTNAME = `https://gyan.workmob.com`;

  // fetch data
  let data;
  if (cookieGet) {
    data = await fetch(
      `https://cdn.workmob.com/youngstars_workmob/config/gyan-story-detail/${userId}.json`,
      {
        cache: "no-store",
      }
    ).then((res) => res.json());
  } else {
    data = await fetch(
      `https://cdn.workmob.com/stories_workmob/config/gyan-story-detail/${userId}.json`,
      {
        cache: "no-store",
      }
    ).then((res) => res.json());
  }

  return {
    title: data.metaTitle,
    description: data.metaDesc,
    keywords: data.keywords,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
      url: `${HOSTNAME}/${userId}`,
      siteName: HOSTNAME,
      images: [
        {
          url: data.mobileThumb,
          width: 800,
          height: 600,
        },
        {
          url: data.video_landscape_thumb,
          width: 1800,
          height: 1600,
          alt: data.metaTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDesc,
      creator: "@Workmob",
      images: {
        url: data.video_landscape_thumb,
        alt: `${HOSTNAME}/${userId}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    alternates: {
      canonical: `${HOSTNAME}/${userId}`,
    },
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
