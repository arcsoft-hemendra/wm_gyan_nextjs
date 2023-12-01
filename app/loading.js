"use client";
import React from 'react'
import style from './loading.module.css';
import { Bars } from 'react-loader-spinner';

const loading = () => {
  return (
    <div className={`${style.loader}`}>
    <Bars
      height={100}
      width={100}
      color="#f96332"
      ariaLabel="bars-loading"
      visible={true}
    />
  </div>
  )
}

export default loading