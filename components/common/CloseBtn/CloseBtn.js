"use client";
import React from "react";
import { useRouter } from "next/navigation";
import style from "./CloseBtn.module.css";
import { RxCross2 } from "react-icons/rx";

const CloseBtn = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className={style.waveBtn}>
      <i
        role="button"
        tabIndex="0"
        onKeyDown={goBack}
        onClick={goBack}
        className={`${style.btnClose} icon`}
      >
        <RxCross2 strokeWidth="0.7px" className={style.crossicon} />
      </i>
      <div
        role="button"
        tabIndex="0"
        onKeyDown={goBack}
        onClick={goBack}
        className={style.closeBtnWave}
      >
        &nbsp;
      </div>
    </div>
  );
};

export default CloseBtn;
