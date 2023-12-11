import React from "react";
import Link from "next/link";
import style from "./MainHeading.module.css";
import { IoIosArrowForward } from "react-icons/io";

const MainHeading = (props) => {
  return (
    <div className={style.headingContainer}>
      <h2
        className={
          props?.page === "videoDetail"
            ? style.headingResponsive
            : style.heading
        }
      >
        {props?.title}
        <span
          className={
            props?.page === "videoDetail"
              ? style.bottomDividerResponsive
              : style.bottomDivider
          }
        />
      </h2>
      {props?.route && (
        <Link href={`${props?.route}`}>
          <IoIosArrowForward
            color="#fff"
            opacity={0.8}
            fontSize="1.3rem"
            onClick={props?.onClick}
            className={`${style.iconArrow}`}
          />
        </Link>
      )}
    </div>
  );
};

export default MainHeading;
