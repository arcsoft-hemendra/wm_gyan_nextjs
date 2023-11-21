"use client";
import React from "react";
import style from "./InsightCardList.module.css";
import SubNavbar from "../common/SubNavbar/SubNavbar";
import InsightCard from "../common/InsightCard/InsightCard";
import Footer from "../common/Footer/Footer";

const InsightCardList = ({ data }) => {
  return (
    <React.Fragment>
      <SubNavbar
        discription="Browse & discover Gyan videos, expert talks, tips and more from Indian professionals, business owners, startup founders, and more"
      />
      <div className="container">
        <h1 className={style.insighthead}>INSIGHTS</h1>
        <div className={style.insightMain_div}>
          {data?.map((item, index) => (
            <InsightCard item={item} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default InsightCardList;
