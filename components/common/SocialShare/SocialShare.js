"use client";
import React, { useRef, useEffect, useState } from "react";
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
import { usePathname } from "next/navigation";

const SocialShare = (props) => {
  const pathname = usePathname();
  const hiddenInputRef = useRef();
  const [isClient, setIsClient] = useState(false);
  const iconSize = 30;
  const HOST = "https://www.workmob.com";
  const shareUrl = HOST + pathname;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const copyHref = () => {
    if (typeof window !== "undefined") {
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

  if (isClient) {
    return (
      <div className={style.socialshare}>
        <ul className={style.socialdiv}>
          <li data-tooltip-position="left" data-tooltip="Share on Facebook">
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={iconSize} round />
            </FacebookShareButton>
          </li>
          <li data-tooltip-position="left" data-tooltip="Share on Whatsapp">
            <WhatsappShareButton
              title={props?.storyHeading}
              separator={" : "}
              url={shareUrl}
            >
              <WhatsappIcon size={iconSize} round />
            </WhatsappShareButton>
          </li>
          <li data-tooltip-position="left" data-tooltip="Share on Linkedin">
            <LinkedinShareButton title={props?.storyHeading} url={shareUrl}>
              <LinkedinIcon size={iconSize} round />
            </LinkedinShareButton>
          </li>
          <li data-tooltip-position="left" data-tooltip="Share on Twitter">
            <TwitterShareButton url={shareUrl}>
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
              <img width={window?.innerWidth < 768 ? 20 : 12} src={copysvg} />
              <input type="text" ref={hiddenInputRef} hidden />
            </button>
          </li>
        </ul>
      </div>
    );
  }
};

export default SocialShare;
