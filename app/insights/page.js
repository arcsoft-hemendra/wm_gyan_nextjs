import React from "react";
import InsightCardList from "./../../components/InsightCardList/InsightCardList";

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
  return <div><InsightCardList data={categoryData}/></div>;
};

export default Insights;
