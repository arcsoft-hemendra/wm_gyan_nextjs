import Link from "next/link";
import React from "react";
import style from "./CategoryCard.module.css";

const CategoryCard = (props) => {
  const URL = "https://cdn.workmob.com/stories_workmob";
  return (
    <Link
      key={props.index}
      href={`/categories/${props.category}`}
      className={
        props.type === "web"
          ? `${style.category_d} ${style.cat_link}`
          : `${style.category_m}  ${style.mobile_link}`
      }
    >
      <img
        className={style.catimage}
        src={`${URL}/images/gyan_category/${props.category}.png`}
        alt={`${props.category} imageIcon`}
      />
    </Link>
  );
};

export default CategoryCard;
