import React from "react";
import CategoryCardList from "./../../components/CategoryCardList/CategoryCardList";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

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
