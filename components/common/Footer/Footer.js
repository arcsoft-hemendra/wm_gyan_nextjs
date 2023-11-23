"use client";
import React from "react";
import style from "./Footer.module.css";
import FooterData from "./FooterData.json";
import Link from "next/link";

function Footer(props) {
  const { gyanJson } = FooterData;
  const heart = "https://www.workmob.com/static/media/heart.33403302.svg";
  return (
    <React.Fragment>
      {!props?.dontShowSubFooter && (
        <div className={style.page_footer}>
          <div className="container">
            <div className={style.submain_div}>
              <div className={style.footer_left}>
                <div className={style.footer_copyright}>
                  &copy; {new Date().getFullYear()} Workmob Pvt. Ltd. All rights
                  reserved.
                </div>
                <div>
                  <Link
                    href="https://www.workmob.com/about"
                    target="_blank"
                    className={style.footerLink}
                  >
                    About
                  </Link>
                  <Link
                    href="https://www.workmob.com/terms"
                    target="_blank"
                    className={style.footerLink}
                  >
                    Terms
                  </Link>
                  <Link
                    className={style.footerLink}
                    href="https://www.workmob.com/legal"
                    target="_blank"
                  >
                    Legal
                  </Link>
                  <Link
                    className={style.footerLink}
                    href="https://www.workmob.com/privacy"
                    target="_blank"
                  >
                    Privacy
                  </Link>
                  <Link
                    className={style.footerLink}
                    href="https://www.workmob.com/brand-ambassador"
                    target="_blank"
                  >
                    Ambassador
                  </Link>
                </div>
              </div>
              <div className={style.footer_social}>
                <Link
                  href="https://www.facebook.com/workmobapp/"
                  target="_blank"
                  className={style.btn_social_icon}
                >
                  <img
                    src="https://cdn.workmob.com/stories_workmob/images/common/facebook.svg"
                    alt="fb"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/workmobapp/"
                  target="_blank"
                  className={style.btn_social_icon}
                >
                  <img
                    src="https://cdn.workmob.com/stories_workmob/images/common/instagram.svg"
                    alt="instagram"
                  />
                </Link>
                <Link
                  href="https://youtube.com/channel/UCqOjwc1ZJmhy5oJJM3rhziA"
                  target="_blank"
                  className={style.btn_social_icon}
                >
                  <img
                    src="https://cdn.workmob.com/stories_workmob/images/common/youtube.svg"
                    alt="youtube"
                  />
                </Link>
                <Link
                  href="https://twitter.com/Workmob"
                  target="_blank"
                  className={style.btn_social_icon}
                >
                  <img
                    src="https://cdn.workmob.com/stories_workmob/images/common/twitter.svg"
                    alt="twitter"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/workmobapp/"
                  target="_blank"
                  className={style.btn_social_icon}
                >
                  <img
                    src="https://cdn.workmob.com/stories_workmob/images/common/linkedin.svg"
                    alt="linkedin"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={style.HomePageFooter}>
        <div className={style.footerMainContainer}>
          <div className={style.footerMiddle}>
            <p className={style.footer_meriKahani}>
              <img src="/images/gyan_footer.png" alt="gyanmanch-footer" />
            </p>
            <p className={style.footer_celebrating} />
            <p className={style.footer_titleBox}>{gyanJson?.paragraph}</p>
            <p className={style.footer_banaoApniPehchan}>
              <span className={style.orange}>बनाओ </span>
              <span className={style.white}>अपनी </span>
              <span className={style.green}>पहचान</span>
            </p>
          </div>
        </div>
        <div className={style.bottomContent}>
          <p className={`${style.footer_text} hide-m`}>{gyanJson.textleft}</p>
          <p className={style.footer_madeWithLove}>
            <span>Made with</span>
            <img src={heart} alt="heart" width={12} height={12} />
            <span>in Bharat</span>
          </p>
          <p
            className={`${style.footer_text} ${style.footer_align_right} hide-m`}
          >
            {gyanJson.textright}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
