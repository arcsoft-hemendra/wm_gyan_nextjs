import React from "react";
import Link from "next/link";
import style from "./InsightCard.module.css";

const InsightCard = (props) => {
  return (
    <div className={style.insightItemDiv} key={props?.index}>
      <Link
        className={style.insightItemLink}
        href={`insights/${props?.item?.slug}`}
      >
        <img
          className={style.insightItemDivImage}
          src={props?.item?.thumb}
          alt="insightIcon"
        />
      </Link>
      <div className={
          props?.page === "insight"
            ? style.insightStoryHeadingInner
            : style.insightStoryHeading
        }>
        {props?.item?.storyHeading}
      </div>
    </div>
  );
};

export default InsightCard;
