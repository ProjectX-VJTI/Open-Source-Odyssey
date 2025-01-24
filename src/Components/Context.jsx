import React, { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();

export const ContextProvider = ({ children }) => {

  const [siteMode,setSiteMode]=useState(localStorage.getItem("siteMode") || "dark")

  const value = {
    siteMode,setSiteMode
  };
 

  useEffect(() => {
    localStorage.setItem("siteMode", siteMode);
  }, [siteMode]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const myHook = () => {
  const context = useContext(Context);
  return context;
};

export default myHook;