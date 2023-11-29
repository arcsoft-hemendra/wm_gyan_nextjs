import React from "react";
import CategoryDetailList from "./../../../components/CategoryDetailList/CategoryDetailList";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

async function getCategoryVideoList(category,URL) {
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
  const categoryVideoData = await getCategoryVideoList(id,URL);

  return <CategoryDetailList data={categoryVideoData} />;
};

export default CategoryDetail;
