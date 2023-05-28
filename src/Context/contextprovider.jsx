import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [message, setMessage] =
    useState([
      {
        id: 1,
        text: "hello world programm",
        from: "me",
      },
      {
        id: 2,
        text: "hello world test",
        from: "other",
      },
      {
        id: 3,
        text: "hello world test",
        from: "me",
      },
      {
        id: 4,
        text: "hello world test",
        from: "other",
      },
      {
        id: 5,
        text: "hello world test",
        from: "other",
      },
    ]) || [];

  return (
    <Context.Provider value={{ message, setMessage }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
