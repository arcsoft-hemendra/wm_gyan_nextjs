import React from "react"; 
import style from "./InsightDetailList.module.css";
import SubNavbar from "../common/SubNavbar/SubNavbar";
import Footer from "../common/Footer/Footer";
import SocialShare from "../common/SocialShare/SocialShare";

const InsightDetailList = (props) => {
  return (
    <React.Fragment>
      <SubNavbar />
      <div className={style.InsightDetailmain}>
        {/* Heading and Image */}
        <div className={`${style.details} container`}>
          <h1 className={style.headInsight}>
            {props.insightData?.storyHeading}
          </h1>
          <div> 
            <img
              className={style.banner}
              src={props?.insightData?.full}
              alt={"insightIcon"}
            />
          </div>
        </div>
        {/* Text Content */}
        <div className={`${style.articleDetail} container`}>
          <div className={style.content}>
            <div
              className={style.contentDetails}
              dangerouslySetInnerHTML={{
                __html: props?.insightData?.fullStory,
              }}
            />
          </div>
          <div className={style.datediv}>
            <p>{props?.insightData?.date}</p>
          </div>
        </div>
      </div>
      <Footer />
      <SocialShare
        emailText={props?.insightData?.metaTitle}
        emailSub="Interesting Read"
        insightData={props?.insightData?.storyHeading}
      />
    </React.Fragment>
  );
};

export default InsightDetailList;
