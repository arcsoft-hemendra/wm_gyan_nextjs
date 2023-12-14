"use client";
import React, { useContext, useEffect, useState } from "react";
import MainHeading from "../common/MainHeading/MainHeading";
import style from "./CategoryList.module.css";
import LoaderComponent from "../common/Loader/Loader";
import ScrollContainer from "react-indiana-drag-scroll";
import CategoryCard from "../common/CategoryCard/CategoryCard";
import { UrlContextProvider } from "@/context/UrlContext";
import { hasCookie } from "cookies-next";

const CategoryList = ({ categoryDataStories, categoryDataYoung }) => {
  const { urlChange } = useContext(UrlContextProvider);
  const cookieAvailable = hasCookie("YOUNGSTARS");
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    setCategoryData(cookieAvailable ? categoryDataYoung : categoryDataStories);
    return () => {
      setCategoryData([]);
    };
  }, [urlChange]);


  return (
    <React.Fragment>
      <MainHeading title="CATEGORIES" route="/categories" />
      <div className={style.categorymain}>
        <div className={style.categoryContainer}>
          {!categoryData ? (
            <div className={style.loaderHeight}>
              <div className={style.loaderContainer}>
                <LoaderComponent type={true} />
              </div>
            </div>
          ) : (
            <>
              {categoryData
                ?.reverse()
                .slice(0, 3)
                ?.map((item, index) => (
                  <CategoryCard
                    category={item.category}
                    key={index}
                    type="web"
                    URL={
                      cookieAvailable
                        ? "https://cdn.workmob.com/youngstars_workmob"
                        : "https://cdn.workmob.com/stories_workmob"
                    }
                  />
                ))}
              <ScrollContainer>
                <div className={style.mobile_link}>
                  {categoryData
                    ?.reverse()
                    .slice(0, 3)
                    ?.map((item, index) => (
                      <CategoryCard
                        category={item.category}
                        key={index}
                        type="mobile"
                        URL={
                          cookieAvailable
                            ? "https://cdn.workmob.com/youngstars_workmob"
                            : "https://cdn.workmob.com/stories_workmob"
                        }
                      />
                    ))}
                </div>
              </ScrollContainer>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoryList;
