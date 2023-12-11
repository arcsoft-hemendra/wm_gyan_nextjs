import React from "react";
import Link from "next/link";
import CloseBtn from "../CloseBtn/CloseBtn";
import style from "./SubNavbar.module.css";
import { GoSearch } from "react-icons/go";
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
         {props.onChange && (
          <div className={style.mainSearchContainer}>
            <div className={style.searchContainer}> 
              <GoSearch className={style.searchIcon}/> 
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
