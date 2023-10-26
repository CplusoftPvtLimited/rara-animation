import React, { createContext, useContext, useState } from "react";

const ScrollContext = createContext({
  scrollPosFunction: null,
  setScrollPosFunction: () => {},
});

export const ScrollProvider = ({ children }) => {
  const [scrollPosFunction, setScrollPosFunction] = useState(null);
  console.log(
    "🚀 ~ file: index.jsx:7 ~ ScrollProvider ~ scrollPosFunction:",
    scrollPosFunction
  );

  return (
    <ScrollContext.Provider value={{ scrollPosFunction, setScrollPosFunction }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
