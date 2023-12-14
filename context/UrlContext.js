"use client";
import React, { createContext, useState } from "react";

export const UrlContextProvider = createContext();

const UrlContext = ({ children }) => {
  const [urlChange, setUrlChange] = useState(true);
  return (
    <UrlContextProvider.Provider value={{ urlChange, setUrlChange }}>
      {children}
    </UrlContextProvider.Provider >
  );
};

export default UrlContext;
