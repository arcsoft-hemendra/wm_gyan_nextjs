import React from "react";
import style from "./MainHeading.module.css";

const MainHeading = (props) => {
  return (
    <div className={style.headingContainer}>
      <h2 className={style.heading}>{props?.title}</h2>
      <span className={style.bottomDivider} />
      <i
        onClick={props?.onClick}
        className={`icon icon-right-arrow ${style.iconArrow} ${style.heading}`}
      />
    </div>
  );
};

export default MainHeading;
