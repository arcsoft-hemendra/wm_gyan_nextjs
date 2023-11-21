import React from "react";
import Link from "next/link";
import style from "./InsightCard.module.css";

const InsightCard = (props) => {
  return (
    <div className={style.insightItemDiv} key={props?.index}>
      <Link className={style.insightItemLink} href={props?.item?.slug}>
        <img
          className={style.insightItemDivImage}
          src={props?.item?.thumb}
          alt="insightIcon"
        />
      </Link>
      <div className={style.insightStoryHeading}>
        {props?.item?.storyHeading}
      </div>
    </div>
  );
};

export default InsightCard;
