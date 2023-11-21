"use client";
import React, { useEffect, useState } from "react";
import SubFooterData from "./SubFooterData.json";
import style from "./SubFooter.module.css";
import Link from "next/link";
const SubFooter = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const { gyanJson } = SubFooterData;
  const whatsappurl =
    "https://wa.me/919001985566?text=I%20want%20to%20join%20your%20movement.";

  const bottomText = (
    <>
      <span>{gyanJson.spanMain}</span>
      <span>{gyanJson.spanSub}</span>
    </>
  );

  useEffect(() => {
    let lastScroll;
    let isThrottle;

    function listenScroll() {
      if (isThrottle) return;
      isThrottle = true;
      setTimeout(() => {
        const currentScroll = window.scrollY;
        if (lastScroll < currentScroll) {
          setIsScrollDown(true);
        } else {
          setIsScrollDown(false);
        }
        lastScroll = currentScroll;
        isThrottle = false;
      }, 100);
    }

    document.addEventListener("scroll", listenScroll);

    return () => {
      document.removeEventListener("scroll", listenScroll);
    };
  }, []);

  return (
    <div
      className={
        isScrollDown
          ? `${style.fixedBottom}  ${style.fixedBottomHidden}`
          : `${style.fixedBottom}`
      }
    >
      <div className={style.bottomText}>{bottomText}</div>
      <Link className={style.contactUs} href={whatsappurl} target="_blank">
        Contact Us
      </Link>
    </div>
  );
};

export default SubFooter;
