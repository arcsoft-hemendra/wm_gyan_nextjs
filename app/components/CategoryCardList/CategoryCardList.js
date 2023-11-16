"use client";
import React, { useState } from "react";
import SubNavbar from "../common/SubNavbar/SubNavbar";
import style from "./CategoryCardList.module.css";

const CategoryCardList = (props) => {
  const [categorySearch, setCategorySearch] = useState("");

  const filteredCategoryData = props.data.filter((cate) => {
    if (categorySearch === "") {
      return cate;
    } else {
      return cate.category.toLowerCase().includes(categorySearch.toLowerCase());
    }
  });

  return (
    <div>
      <SubNavbar
        discription="Browse & discover Gyan videos, expert talks, tips and more from Indian professionals, business owners, startup founders, and more"
        inputPlaceholder="Search Category"
        onChange={setCategorySearch}
        value={categorySearch}
      />
      {filteredCategoryData.length > 0 ? (
        [...filteredCategoryData]
          .reverse()
          .map((category, index) => <div>adsdj</div>)
      ) : (
        <div className={style.noCategoryFound}>
          <p>No Category Available.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryCardList;
