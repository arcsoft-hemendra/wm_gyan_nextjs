import React from "react";
import SearchVideoList from "../components/SearchVideoList/SearchVideoList";

async function getVideosList() {
  const URL = "https://cdn.workmob.com/stories_workmob";
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
  const videoData = await getVideosList();
  return <SearchVideoList data={videoData} />;
};

export default Search;
