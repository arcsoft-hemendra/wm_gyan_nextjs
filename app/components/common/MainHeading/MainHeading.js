import React from "react";
import style from "./MainHeading.module.css";

const MainHeading = (props) => {
  return (
    <div className={style.headingContainer}>
      <h2 className={style.heading}>{props?.title}
      <span className={style.bottomDivider} />
      </h2>
      <i
        onClick={props?.onClick}
        className={`icon icon-right-arrow  ${style.heading} ${style.iconArrow}`}
      />
    </div>
  );
};

export default MainHeading;
