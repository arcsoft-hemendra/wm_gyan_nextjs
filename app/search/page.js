import React from "react";
import SearchVideoList from "./../../components/SearchVideoList/SearchVideoList";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

async function getVideosList(URL) {
  const res = await fetch(`${URL}/config/gyan-stories-top.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Search = async () => {
  const cookieGet = getCookie("YOUNGSTARS", { cookies });
  const URL = cookieGet
    ? "https://cdn.workmob.com/youngstars_workmob"
    : "https://cdn.workmob.com/stories_workmob";
  const videoData = await getVideosList(URL);
  return <SearchVideoList data={videoData} />;
};

export default Search;
