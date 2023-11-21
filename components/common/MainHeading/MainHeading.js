import React from "react";
import Link from "next/link";
import style from "./MainHeading.module.css";

const MainHeading = (props) => {
  return (
    <div className={style.headingContainer}>
      <h2 className={style.heading}>
        {props?.title}
        <span className={style.bottomDivider} />
      </h2>
      <Link href={`${props?.route}`}>
        <i
          onClick={props?.onClick}
          className={`icon icon-right-arrow  ${style.heading} ${style.iconArrow}`}
        />
      </Link>
    </div>
  );
};

export default MainHeading;
