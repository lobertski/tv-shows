import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingShows } from "./redux-slice";

export const Context = createContext<any>({});
const UpcomingSeriesProvider: React.FC<any> = ({ children }) => {
  const [shows, setShows] = useState<Array<{}>>([]);
  const dispatch = useDispatch<any>();
  const payload = useSelector((state: any) => state.upcoming_shows);
  useEffect(() => {
    dispatch(fetchUpcomingShows());
  }, []);

  useEffect(() => {
    console.log(payload?.upcoming_shows, "upcoming_shows");
    setShows(payload?.upcoming_shows?.slice(0, 5) ?? []);
    return;
  }, [payload]);
  return <Context.Provider value={{ shows }}>{children}</Context.Provider>;
};

export default UpcomingSeriesProvider;
