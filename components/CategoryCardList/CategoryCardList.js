"use client";
import React, { useEffect, useState } from "react";
import CategoryCard from "../common/CategoryCard/CategoryCard";
import SubNavbar from "../common/SubNavbar/SubNavbar";
import style from "./CategoryCardList.module.css";
import Footer from "../common/Footer/Footer";
import LoaderComponent from "../common/Loader/Loader";
import { hasCookie } from "cookies-next";

const CategoryCardList = (props) => {
  const [categorySearch, setCategorySearch] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const cookieAvailable = hasCookie("YOUNGSTARS");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setCategoryData(
      cookieAvailable ? props.categoryDataYoung : props.categoryDataStories
    );
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredCategoryData = categoryData.filter((cate) => {
    if (categorySearch === "") {
      return cate;
    } else {
      return cate.category.toLowerCase().includes(categorySearch.toLowerCase());
    }
  });

  const getSlicedItem = () => {
    let value;
    if (isClient) {
      const mobileDevice = window.innerWidth < 768;
      value = mobileDevice ? 0 : categorySearch.length != 0 ? 0 : 5;
    }
    return value;
  };

  if (!isClient) {
    return <LoaderComponent />;
  }

  return (
    <div>
      <SubNavbar
        discription="Browse & discover Gyan videos, expert talks, tips and more from Indian professionals, business owners, startup founders, youngstars, and more"
        inputPlaceholder="Search Category"
        onChange={setCategorySearch}
        value={categorySearch}
      />
      <div>
        {filteredCategoryData.length > 0 ? (
          <div className={style.categoryMainContainer}>
            <div
              className={
                categorySearch.length === 0
                  ? style.categoriesFlex
                  : style.displayNone
              }
            >
              {[...filteredCategoryData]
                .reverse()
                .slice(0, 5)
                .map((category, index) => {
                  return (
                    <CategoryCard
                      category={category.category}
                      key={index}
                      type={false}
                      URL={
                        cookieAvailable
                          ? "https://cdn.workmob.com/youngstars_workmob"
                          : "https://cdn.workmob.com/stories_workmob"
                      }
                    />
                  );
                })}
            </div>
            <div className={style.categoryContainer}>
              {filteredCategoryData.length > 0
                ? [...filteredCategoryData]
                    .reverse()
                    .slice(getSlicedItem())
                    .map((category, index) => (
                      <CategoryCard
                        category={category.category}
                        key={index}
                        type={false}
                        URL={
                          cookieAvailable
                            ? "https://cdn.workmob.com/youngstars_workmob"
                            : "https://cdn.workmob.com/stories_workmob"
                        }
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

      <Footer dontShowSubFooter={true} />
    </div>
  );
};

export default CategoryCardList;
