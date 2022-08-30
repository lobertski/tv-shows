import React, { createContext } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext<any>({}); // The goal is to seperate the logic and the view
const DescriptionProvider: React.FC<any> = ({ children }) => {
  const { state = {} } = useLocation();
  const { id = "" } = state as Record<string, any>;
  return <Context.Provider value={{ id }}>{children}</Context.Provider>;
};

export default DescriptionProvider;
