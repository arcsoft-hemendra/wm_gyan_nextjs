import React from "react";
import Link from "next/link";
import CloseBtn from "../CloseBtn/CloseBtn";
import style from "./SubNavbar.module.css";

const   SubNavbar = (props) => {
  return (
    <div>
      <CloseBtn />
      <div className={style.logoContainer}>
        <Link href="/">
          <img
            className={style.logoImage}
            src="/images/gyanmanchlogo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        {props.discription && (
          <>
            {props?.page === "insight" ? (
              <h1 className={style.discriptionContainerInsight}>
                <span className={style.discriptionInsight}>
                  Insights &amp; articles on personal, professional and business
                  digital branding
                </span>
              </h1>
            ) : (
              <div className={style.discriptionContainer}>
                <h1
                  className={style.discription}
                  dangerouslySetInnerHTML={{ __html: props?.discription }}
                />
              </div>
            )}
          </>
        )}
    </div>
    </div>
  );
};

export default SubNavbar;
