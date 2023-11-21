import React from "react";
import style from "./InsightCard.module.css";

const InsightCard = (props) => { 
  return (
    <div className={style.insightItemDiv} key={props?.index}>
      <a className={style.insightItemLink} href={props?.item?.slug}>
        <img
          className={style.insightItemDivImage}
          src={props?.item?.thumb}
          alt="insightIcon"
        />
      </a>
      <div className={style.insightStoryHeading}>
        {props?.item?.storyHeading}
      </div>
    </div>
  );
};

export default InsightCard;
