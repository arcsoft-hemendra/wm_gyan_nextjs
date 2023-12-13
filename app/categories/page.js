import React from "react";
import CategoryCardList from "./../../components/CategoryCardList/CategoryCardList";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { CategoriespageData } from "@/utils/strings/string";

export const metadata = {
  title: CategoriespageData.title,
  description: CategoriespageData.description,
  applicationName: CategoriespageData.applicationName,
  metadataBase: new URL("https://gyan.workmob.com"),
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: CategoriespageData.title,
    description: CategoriespageData.description,
    url: CategoriespageData.url,
    siteName: CategoriespageData.hostName,
    images: [
      {
        url: CategoriespageData.ogImage,
        width: 800,
        height: 600,
      },
      {
        url: CategoriespageData.ogImage,
        width: 1800,
        height: 1600,
        alt: CategoriespageData.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: CategoriespageData.title,
    description: CategoriespageData.description,
    creator: "@Workmob",
    images: {
      url: CategoriespageData.ogImage,
      alt: CategoriespageData.url,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: CategoriespageData.url,
  },
};

async function getCategoryList(URL) {
  const res = await fetch(`${URL}/config/gyan-category.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Categories = async () => {
  const cookieGet = getCookie("YOUNGSTARS", { cookies });
  const URL = cookieGet
    ? "https://cdn.workmob.com/youngstars_workmob"
    : "https://cdn.workmob.com/stories_workmob";
  const categoryData = await getCategoryList(URL);
  return <CategoryCardList data={categoryData} />;
};

export default Categories;
