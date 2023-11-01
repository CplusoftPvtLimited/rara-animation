import React, { createContext, useContext, useState } from "react";

export const ScrollContext = createContext();

export const ScrollContextProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  return (
    <ScrollContext.Provider
      value={{ scrollY, setScrollY, scrollPos, setScrollPos }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
