"use client";
import React from "react";
import style from "./InsightList.module.css";
import MainHeading from "../common/MainHeading/MainHeading";
import InsightCard from "../common/InsightCard/InsightCard";

const InsightList = ({ data }) => {
  return (
    <React.Fragment>
      <MainHeading title="Insights" route="/insights" />
      <div className={style.insightMain_div}>
        {data.map((item, index) => (
          <InsightCard item={item} key={index}/>
        ))}
      </div>
    </React.Fragment>
  );
};

export default InsightList;
