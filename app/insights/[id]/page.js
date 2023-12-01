import React from "react";
import InsightDetailList from "@/components/InsightsDetailList/InsightDetailList";

export async function generateMetadata({ params }) {
  const URL = "https://cdn.workmob.com/stories_workmob";
  // read route params
  const userId = params.id;
  const HOSTNAME = `https://gyan.workmob.com`;

  // fetch data
  let data;
  data = await fetch(`${URL}/config/gyan-insightlisting.json`, {
    cache: "no-store",
  }).then((res) => res.json());
  data = data.find((item) => item.slug === userId);

  return {
    title: data.metaTitle,
    description: data.metaDesc,
    keywords: data.keywords,
    referrer: 'origin-when-cross-origin',
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
      url: `${HOSTNAME}/insights/${userId}`,
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
        alt: `${HOSTNAME}/insights/${userId}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    alternates: {
      canonical: `${HOSTNAME}/insights/${userId}`,
    },
  };
}

async function getInsightDetail() {
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

const InsightDetail = async ({ params: { id } }) => {
  const insightDetail = await getInsightDetail();

  const data = insightDetail.find((item) => item.slug === id);

  return (
    <div>
      <InsightDetailList insightData={data} />
    </div>
  );
};

export default InsightDetail;
