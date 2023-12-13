import React from "react";
import CategoryDetailList from "./../../../components/CategoryDetailList/CategoryDetailList";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export async function generateMetadata({ params: { id } }) {
  const category = id
    .replace(/-/g, " ")
    .replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

  const title = `${category} Expert Talks & Learning Videos | Learn & Grow your Knowledge`;
  const description = `Watch ${category} expert talk videos by India's own Gyan Gurus. Learn from India's own professional community and youngstars in the field of ${category}. Grow your skills.`;

  const HOSTNAME = `https://gyan.workmob.com`;
  const ogImage = ""

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${HOSTNAME}/${id}`,
      siteName: HOSTNAME,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 600,
        },
        {
          url: ogImage,
          width: 1800,
          height: 1600,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      creator: "@Workmob",
      images: {
        url: ogImage,
        alt: `${HOSTNAME}/${id}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    alternates: {
      canonical: `${HOSTNAME}/${id}`,
    },
  };
}

async function getCategoryVideoList(category, URL) {
  const res = await fetch(
    `${URL}/config/gyan-category-index/${category}.json`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const CategoryDetail = async ({ params: { id } }) => {
  const cookieGet = getCookie("YOUNGSTARS", { cookies });
  const URL = cookieGet
    ? "https://cdn.workmob.com/youngstars_workmob"
    : "https://cdn.workmob.com/stories_workmob";
  const categoryVideoData = await getCategoryVideoList(id, URL);

  return (
    <CategoryDetailList
      data={categoryVideoData}
      category={id
        .replace(/-/g, " ")
        .replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())}
    />
  );
};

export default CategoryDetail;
