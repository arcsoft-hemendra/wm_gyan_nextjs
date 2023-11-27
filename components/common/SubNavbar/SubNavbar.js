import React from "react";
import Link from "next/link";
import CloseBtn from "../CloseBtn/CloseBtn";
import style from "./SubNavbar.module.css";

const SubNavbar = (props) => {
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
        <div className={style.discriptionContainer}>
          <h1
            className={style.discription}
            dangerouslySetInnerHTML={{ __html: props?.discription }}
          />
        </div>
      )}

      {props.onChange && (
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
      )}
    </div>
    </div>
  );
};

export default SubNavbar;
