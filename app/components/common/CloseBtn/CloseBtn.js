'use client'
import React from "react";
import { useRouter } from 'next/navigation'
import style from "./CloseBtn.module.css";

const CloseBtn = () => {
  const router = useRouter()

  const goBack = () =>{
    router.back()
  }

  return (
    <div className={style.waveBtn}>
      <i
        role="button"
        tabIndex="0"
        onKeyDown={goBack}
        onClick={goBack}
        className={`${style.btnClose} icon icon-cancel`}
      />
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
