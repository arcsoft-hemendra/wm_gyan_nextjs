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
      <MainHeading title="CATEGORIES" />
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
              {data?.slice(0, 3)?.map((item, index) => (
                <CategoryCard
                  category={item.category}
                  index={index}
                  type="web"
                />
              ))}
              <ScrollContainer>
                <div className={style.mobile_link}>
                  {data?.slice(0, 3)?.map((item, index) => (
                    <CategoryCard
                      category={item.category}
                      index={index}
                      type={false}
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
