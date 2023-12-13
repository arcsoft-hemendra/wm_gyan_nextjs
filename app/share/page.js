import React from "react";
import SharePageComponent from "./../../components/SharePageComponent/SharePageComponent";
import { SharepageData } from "@/utils/strings/string";

export const metadata = {
  title: SharepageData.title,
  description: SharepageData.description,
  applicationName: SharepageData.applicationName,
  metadataBase: new URL("https://gyan.workmob.com"),
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: SharepageData.title,
    description: SharepageData.description,
    url: SharepageData.url,
    siteName: SharepageData.hostName,
    images: [
      {
        url: SharepageData.ogImage,
        width: 800,
        height: 600,
      },
      {
        url: SharepageData.ogImage,
        width: 1800,
        height: 1600,
        alt: SharepageData.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SharepageData.title,
    description: SharepageData.description,
    creator: "@Workmob",
    images: {
      url: SharepageData.ogImage,
      alt: SharepageData.url,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: SharepageData.url,
  },
};

const Share = () => {
  return <SharePageComponent />;
};

export default Share;
