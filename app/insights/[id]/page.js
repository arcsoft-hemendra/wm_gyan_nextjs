import React from "react";
import InsightDetailList from "@/components/InsightsDetailList/InsightDetailList";

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
