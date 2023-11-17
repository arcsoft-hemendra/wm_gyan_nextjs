import Link from "next/link";
import React from "react";
import style from "./SubNavbar.module.css";

const SubNavbar = (props) => {
  return (
    <div>
      <div className={style.logoContainer}>
        <Link href="/">
          <img
            className={style.logoImage}
            src="/images/gyanmanchlogo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className={style.discriptionContainer}>
        <h1
          className={style.discription}
          dangerouslySetInnerHTML={{ __html: props?.discription }}
        />
      </div>
      <div className={style.mainSearchContainer}>
        <div className={style.searchContainer}>
          <i className={`${style.searchIcon} bi bi-search`}></i>
          <input
            className={style.InputBox}
            placeholder={props.inputPlaceholder}
            onChange={(e) => props?.onChange(e.target.value)}
            value={props?.value}
          />
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
