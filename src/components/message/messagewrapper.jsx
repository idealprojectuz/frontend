import React from "react";
import "./wrapper.css";
export const Messagewrapper = ({ children }) => {
  return (
    <>
      <div className="messageWrapper">{children}</div>
      <div className="shadows"></div>
    </>
  );
};
