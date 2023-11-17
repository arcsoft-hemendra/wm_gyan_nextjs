import React from "react";
import style from "./InsightCard.module.css";

const InsightCard = ({item, index}) => {
  return (
    <div className={style.insightItemDiv} key={index}>
      <a className={style.insightItemLink} href="/">
        <img
          className={style.insightItemDivImage}
          src={item.thumb}
          alt="insightIcon"
        />
      </a>
      <div className={style.insightStoryHeading}>
        {item.storyHeading}
      </div>
    </div>
  );
};

export default InsightCard;
