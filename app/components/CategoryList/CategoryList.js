"use client";
import React from "react";
import MainHeading from "../common/MainHeading/MainHeading";
import style from "./CategoryList.module.css";
import LoaderComponent from "../common/Loader/Loader";
import ScrollContainer from "react-indiana-drag-scroll";
import CategoryCard from "../common/CategoryCard/CategoryCard";

const CategoryList = ({ data }) => {
  return (
    <React.Fragment>
      <MainHeading title="CATEGORIES" route="/categories" />
      <div className={style.categorymain}>
        <div className={style.categoryContainer}>
          {!data ? (
            <div className={style.loaderHeight}>
              <div className={style.loaderContainer}>
                <LoaderComponent type={true} />
              </div>
            </div>
          ) : (
            <>
              {data
                ?.reverse()
                .slice(0, 3)
                ?.map((item, index) => (
                  <CategoryCard
                    category={item.category}
                    index={index}
                    type="web"
                  />
                ))}
              <ScrollContainer>
                <div className={style.mobile_link}>
                  {data
                    ?.reverse()
                    .slice(0, 3)
                    ?.map((item, index) => (
                      <CategoryCard
                        category={item.category}
                        index={index}
                        type="mobile"
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
