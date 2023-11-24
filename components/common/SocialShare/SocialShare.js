"use client";
import React, { useRef } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import style from "./SocialShare.module.css";

const SocialShare = (props) => {
  const hiddenInputRef = useRef();
  const iconSize = 30;

  const copyHref = () => {
    if (typeof window !== 'undefined') {
      const input = hiddenInputRef.current;
      input.value = window.decodeURIComponent(window.location.href);
      input.hidden = false;
      input.select();
      input.focus();
      document.execCommand("copy");
      input.hidden = true;
      input.value = "";
    }
  };
  const copysvg =
    "https://cdn.workmob.com/stories_workmob/images/common/link.svg";

  return (
    <div className={style.socialshare}>
      <ul className={style.socialdiv}>
        <li data-tooltip-position="left" data-tooltip="Share on Facebook">
          <FacebookShareButton>
            <FacebookIcon size={iconSize} round />
          </FacebookShareButton>
        </li>
        <li data-tooltip-position="left" data-tooltip="Share on Whatsapp">
          <WhatsappShareButton title={props?.storyHeading} separator={" : "}>
            <WhatsappIcon size={iconSize} round />
          </WhatsappShareButton>
        </li>
        <li data-tooltip-position="left" data-tooltip="Share on Linkedin">
          <LinkedinShareButton title={props?.storyHeading}>
            <LinkedinIcon size={iconSize} round />
          </LinkedinShareButton>
        </li>
        <li data-tooltip-position="left" data-tooltip="Share on Twitter">
          <TwitterShareButton>
            <TwitterIcon size={iconSize} round />
          </TwitterShareButton>
        </li>
        <li data-tooltip-position="left" data-tooltip="Email">
          <EmailShareButton
            // url={` - ${copyLink}`}
            subject={props?.emailSub}
            body={`${props?.emailText}`}
          >
            <EmailIcon size={iconSize} round />
          </EmailShareButton>
        </li>
        <li data-tooltip-position="left" data-tooltip="Copy">
          <button
            id="copy"
            onClick={copyHref}
            className={style.copy_div}
            style={{
              width: iconSize,
              height: iconSize,
              background: "purple",
            }}
          >
            <img width={typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 12} src={copysvg} />
            <input type="text" ref={hiddenInputRef} hidden />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SocialShare;
