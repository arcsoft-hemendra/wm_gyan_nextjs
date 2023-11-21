import React from "react";
import { Bars } from "react-loader-spinner";

import style from "./Loader.module.css";

const LoaderComponent = (props) => {
  return (
    <div className={props?.type ? "" : `${style.loader}`}>
      <Bars
        height={100}
        width={100}
        color="#f96332"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
};

export default LoaderComponent;
