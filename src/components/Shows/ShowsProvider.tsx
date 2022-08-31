/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShows } from "./redux-slice";

export const Context = createContext<any>({});
const ShowsProvider: React.FC<any> = ({ children }) => {
  const [shows, setShows] = useState<Array<{}>>([]);
  const dispatch = useDispatch<any>();
  const payload = useSelector((state: any) => state.popular_shows);

  useEffect(() => {
    dispatch(fetchShows());
  }, []);

  useEffect(() => {
    setShows(payload?.shows ?? []);
    return;
  }, [payload]);
  return <Context.Provider value={{ shows }}>{children}</Context.Provider>;
};

export default ShowsProvider;
