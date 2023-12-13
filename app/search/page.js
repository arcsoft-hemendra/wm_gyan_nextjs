import React from "react";
import SearchVideoList from "./../../components/SearchVideoList/SearchVideoList";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { SearchpageData } from "@/utils/strings/string";

export const metadata = {
  title: SearchpageData.title,
  description: SearchpageData.description,
  applicationName: SearchpageData.applicationName,
  metadataBase: new URL("https://gyan.workmob.com"),
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: SearchpageData.title,
    description: SearchpageData.description,
    url: SearchpageData.url,
    siteName: SearchpageData.hostName,
    images: [
      {
        url: SearchpageData.ogImage,
        width: 800,
        height: 600,
      },
      {
        url: SearchpageData.ogImage,
        width: 1800,
        height: 1600,
        alt: SearchpageData.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SearchpageData.title,
    description: SearchpageData.description,
    creator: "@Workmob",
    images: {
      url: SearchpageData.ogImage,
      alt: SearchpageData.url,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: SearchpageData.url,
  },
};

async function getVideosListStoriesApi() {
  const URL = "https://cdn.workmob.com/stories_workmob";
  const res = await fetch(`${URL}/config/gyan-stories-top.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getVideosListYoungApi() {
  const URL = "https://cdn.workmob.com/youngstars_workmob";

  const res = await fetch(`${URL}/config/gyan-stories-top.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Search = async () => {
  const getVideosListStories = await getVideosListStoriesApi()
  const getVideosListYoung = await getVideosListYoungApi()

  return <SearchVideoList getVideosListStories={getVideosListStories} getVideosListYoung={getVideosListYoung} />;
};

export default Search;
