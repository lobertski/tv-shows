import React, { createContext } from "react";

export const Context = createContext<any>({}); // The goal is to seperate the logic and the view
const HeaderProvider: React.FC<any> = ({ children }) => {
  const onClick = () => alert("TEST!"); // Test function to see if the function is pass to List View
  return <Context.Provider value={{ onClick }}>{children}</Context.Provider>;
};

export default HeaderProvider;
