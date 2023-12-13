import React from "react";
import { InsightspageData } from "@/utils/strings/string";
import InsightCardList from "./../../components/InsightCardList/InsightCardList";

export const metadata = {
  title: InsightspageData.title,
  description: InsightspageData.description,
  applicationName: InsightspageData.applicationName,
  metadataBase: new URL("https://gyan.workmob.com"),
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: InsightspageData.title,
    description: InsightspageData.description,
    url: InsightspageData.url,
    siteName: InsightspageData.hostName,
    images: [
      {
        url: InsightspageData.ogImage,
        width: 800,
        height: 600,
      },
      {
        url: InsightspageData.ogImage,
        width: 1800,
        height: 1600,
        alt: InsightspageData.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: InsightspageData.title,
    description: InsightspageData.description,
    creator: "@Workmob",
    images: {
      url: InsightspageData.ogImage,
      alt: InsightspageData.url,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: InsightspageData.url,
  },
};

async function getInsightList() {
  const URL = "https://cdn.workmob.com/stories_workmob";
  const res = await fetch(`${URL}/config/gyan-insightlisting.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Insights = async () => {
  const categoryData = await getInsightList();
  return (
    <div>
      <InsightCardList data={categoryData} />
    </div>
  );
};

export default Insights;
