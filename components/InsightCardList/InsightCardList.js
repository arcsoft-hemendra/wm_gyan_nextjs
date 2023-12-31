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
        discription="Insights & articles on sharing knowledge, ideas & learning"
        page="insight"
      />
      <div className="container">
        <h2 className={style.insighthead}>INSIGHTS</h2>
        <div className={style.insightMain_div}>
          {data?.map((item, index) => (
            <InsightCard item={item} key={index} page="insight" />
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default InsightCardList;
