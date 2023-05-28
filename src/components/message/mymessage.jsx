import React, { Fragment } from "react";
import "./messagetext.css";
export const Mymessage = ({ data }) => {
  return (
    <>
      <div
        className={`text-messagewrap ${
          data.from == "me" ? "mymessage" : "yourmessage"
        }`}>
        <p>{data.text}</p>
      </div>
    </>
  );
};
