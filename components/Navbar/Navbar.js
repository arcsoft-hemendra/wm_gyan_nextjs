"use client";
import React, { useEffect, useState } from "react";
import "./../../app/globals.css";
import style from "./Navbar.module.css";
import { useRef } from "react";
import { WorkmobLogo } from "./NavBarData";
import Dropdown from "react-dropdown";
import Link from "next/link";
import { setCookie, deleteCookie, hasCookie } from "cookies-next";
import "react-dropdown/style.css";

const Navbar = () => {
  const cookieAvailable = hasCookie("YOUNGSTARS");
  const defaultOption = cookieAvailable ?  "YOUNGSTARS"  : "KARMYOGIS";
  const options = ["KARMYOGIS", "YOUNGSTARS"];
  const [activeTabChange, setActiveTabChange] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    let isThrottle;
    function changeHeaderBg() {
      if (isThrottle) return;
      isThrottle = true;
      setTimeout(() => {
        const header = headerRef.current;
        if (header) {
          if (window.scrollY) {
            header.style.background = "black";
            header.style.boxShadow = "rgba(255, 255, 255, 0.2) 0px 3px 6px";
          } else {
            header.removeAttribute("style");
          }
        }
        isThrottle = false;
      }, 100);
    }
    document.addEventListener("scroll", changeHeaderBg);
    return () => document.removeEventListener("scroll", changeHeaderBg);
  }, []);

  const handleClick = (value) => {
    setActiveTabChange(!activeTabChange);
    if (value === "YOUNGSTARS" || value?.value === "YOUNGSTARS") {
      setCookie("YOUNGSTARS", "YOUNGSTARS");
    } else {
      deleteCookie("YOUNGSTARS");
    }
    window.location.reload();
  };

  useEffect(() => {
    setIsClient(true);
  }, [activeTabChange]);


  if (isClient) {
    return (
      <div className={style.navcontainer}>
        <div className={style.header} ref={headerRef}>
          <a className={style.headlogo} href="/">
            <img src={WorkmobLogo.image} alt={WorkmobLogo} />
          </a>
          <nav className={style.navbarMain}>
            <div className={style.head_tab}>
              <div
                className={
                  cookieAvailable
                    ? `${style.tab_data}`
                    : `${style.tab_data} ${style.active_tab}`
                }
                onClick={() => handleClick("KARMYOGIS")}
              >
                KARMYOGIS
              </div>
              <div
                className={
                  cookieAvailable
                    ? `${style.tab_data} ${style.active_tab}`
                    : `${style.tab_data}`
                }
                onClick={() => handleClick("YOUNGSTARS")}
              >
                YOUNGSTARS
              </div>
              <Dropdown
                className={style.dropdown_mobile}
                options={options}
                value={defaultOption}
                placeholder="Select an option"
                onChange={(value) => handleClick(value)}
              />
            </div>
            <div className={style.rightbtn}>
              <Link href="/categories">
                <div className={style.cat_icon}>
                  <svg viewBox="0 0 32 32" width="100%" height="100%">
                    <g>
                      <path d="M12,0H2C0.895,0,0,0.895,0,2v10c0,1.104,0.895,2,2,2h10c1.105,0,2-0.896,2-2V2C14,0.895,13.105,0,12,0z    M12,12H2V2h10V12z"></path>
                      <path d="M30,0H20c-1.105,0-2,0.895-2,2v10c0,1.104,0.895,2,2,2h10c1.104,0,2-0.896,2-2V2C32,0.895,31.104,0,30,0z    M30,12H20V2h10V12z"></path>
                      <path d="M30,18H20c-1.105,0-2,0.896-2,2v10c0,1.105,0.895,2,2,2h10c1.104,0,2-0.895,2-2V20   C32,18.895,31.104,18,30,18z M30,30l-10,0V20h10V30z"></path>
                      <path d="M12,18H2c-1.105,0-2,0.896-2,2v10c0,1.105,0.895,2,2,2h10c1.105,0,2-0.895,2-2V20   C14,18.895,13.105,18,12,18z M12,30L2,30V20h10V30z"></path>
                    </g>
                  </svg>
                </div>
              </Link>
              <Link href="/search">
                <i className={style.search_icon}>
                  <svg viewBox="0 0 512 512" fill="white" width="100%">
                    <path d="M507.3 484.7l-141.5-141.5C397 306.8 415.1 259.7 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5C487.8 510.4 491.9 512 496 512s8.188-1.562 11.31-4.688C513.6 501.1 513.6 490.9 507.3 484.7zM208 384C110.1 384 32 305 32 208S110.1 32 208 32S384 110.1 384 208S305 384 208 384z"></path>
                  </svg>
                </i>
              </Link>
              <Link href="/share" className={style.shareLink}>
                <div className={style.sharebtn}>Share your Gyan</div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
};

export default Navbar;
