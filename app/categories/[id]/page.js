import React from "react";
import CategoryDetailList from "./../../../components/CategoryDetailList/CategoryDetailList";

async function getCategoryVideoList(category) {
  const URL = "https://cdn.workmob.com/stories_workmob";
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
  const categoryVideoData = await getCategoryVideoList(id);

  return <CategoryDetailList data={categoryVideoData} />;
};

export default CategoryDetail;
