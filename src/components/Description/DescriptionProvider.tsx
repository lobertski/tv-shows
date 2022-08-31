/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchShowById } from "./redux-slice";

export const Context = createContext<any>({}); // The goal is to seperate the logic and the view
const DescriptionProvider: React.FC<any> = ({ children }) => {
  const { state = {} } = useLocation();
  const dispatch = useDispatch<any>();
  const { show = {} } = useSelector((state: any) => state.show_by_id);
  const { id = "" } = state as Record<string, any>;

  useEffect(() => {
    dispatch(fetchShowById(id));
  }, []);

  return <Context.Provider value={{ show }}>{children}</Context.Provider>;
};

export default DescriptionProvider;
