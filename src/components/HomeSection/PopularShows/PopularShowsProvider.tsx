import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShows } from "./redux-slice";

export const Context = createContext<any>({});
const PopularShowsProvider: React.FC<any> = ({ children }) => {
  const [shows, setShows] = useState<Array<{}>>([]);
  const dispatch = useDispatch<any>();
  const payload = useSelector((state: any) => state.sectionHomeReducer);

  useEffect(() => {
    dispatch(fetchShows());
  }, []);

  useEffect(() => {
    setShows(payload?.shows?.slice(0, 5) ?? []);
    return;
  }, [payload]);
  return <Context.Provider value={{ shows }}>{children}</Context.Provider>;
};

export default PopularShowsProvider;
