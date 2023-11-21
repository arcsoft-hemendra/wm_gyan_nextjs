import React from "react";
import CategoryCardList from "./../../components/CategoryCardList/CategoryCardList";

async function getCategoryList() {
  const URL = "https://cdn.workmob.com/stories_workmob";
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
  const categoryData = await getCategoryList();
  return <CategoryCardList data={categoryData} />;
};

export default Categories;
