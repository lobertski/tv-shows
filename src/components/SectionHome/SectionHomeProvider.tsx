import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShows } from "./redux-slice";

export const Context = createContext<any>({});
const SectionHomeProvider: React.FC<any> = ({ children }) => {
  const [shows, setShows] = useState<Array<{}>>([]);
  const dispatch = useDispatch<any>();
  const payload = useSelector((state: any) => state.sectionHomeReducer);
  console.log(payload, "THIS");

  useEffect(() => {
    dispatch(fetchShows());
    setShows(payload?.shows.slice(0, 3) ?? []);
  }, []);
  return <Context.Provider value={{ shows }}>{children}</Context.Provider>;
};

export default SectionHomeProvider;
