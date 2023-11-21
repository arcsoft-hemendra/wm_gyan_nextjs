"use client";
import React, { useState } from "react";
import CategoryCard from "../common/CategoryCard/CategoryCard";
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

      <div>
        {filteredCategoryData.length > 0 ? (
          <div className={style.categoryMainContainer}>
            <div
              className={
                style.categoriesFlex +
                " " +
                `${categorySearch.length === 0 ? " " : style.displayNone}`
              }
            >
              {filteredCategoryData
                .reverse()
                .slice(0, 5)
                .map((category, index) => {
                  return (
                    <CategoryCard
                      category={category.category}
                      key={index}
                      type={false}
                    />
                  );
                })}
            </div>
            <div className={style.categoryContainer}>
              {filteredCategoryData.length > 0
                ? filteredCategoryData
                    .reverse()
                    .slice(categorySearch.length != 0 ? 0 : 5)
                    .map((category, index) => (
                      <CategoryCard
                        category={category.category}
                        key={index}
                        type={false}
                      />
                    ))
                : null}
            </div>
          </div>
        ) : (
          <div className={style.noCategoryFound}>
            <p>No Category Available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCardList;
