"use client";
import React from "react";
import style from "./not-found.module.css";
import Link from "next/link";

const NotFound = () => {
    const title = "Page Not Found";
  return (
    <div className={"root"}>
      <div className={style.NotFoundcontainer}>
        <div className={style.logodiv}>
          <img src="https://cdn.workmob.com/stories_workmob/images/common/logo.png" alt="logo" />
        </div>
        <div className={style.NotFoundcontent}>
          <h1 className={style.notfoundtitle}>{title}</h1>
          <Link href="/" className={style.notfoundtitle}>
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
