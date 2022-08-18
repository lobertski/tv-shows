/* eslint-disable no-useless-computed-key */
import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IShowList, IShow } from "./types";
export const Context = createContext<any>({}); // The goal is to seperate the logic and the view
const HomeAsideProvider: React.FC<any> = ({ children }) => {
  const [shows, setShows] = useState<Partial<IShowList>>({
    20: [],
    21: [],
    22: [],
    23: [],
  });
  const { upcoming_shows = [] } = useSelector(
    (state: any) => state.upcoming_shows
  );

  useEffect(() => {
    upcoming_shows.map((show: IShow) => {
      if (show?.airtime?.slice(0, 2) === "20") {
        setShows((prev) => ({ ...prev, [20]: [...shows[20], show] }));
        console.log(shows[20], "YES");
      } else if (show?.airtime?.slice(0, 2) === "21") {
        setShows((prev) => ({ ...prev, [21]: [...shows[21], show] }));
      } else if (show?.airtime?.slice(0, 2) === "22") {
        setShows((prev) => ({ ...prev, [22]: [...shows[22], show] }));
      } else if (show?.airtime?.slice(0, 2) === "23") {
        setShows((prev) => ({ ...prev, [23]: [...shows[23], show] }));
      }
      return null;
    });
  }, [upcoming_shows]);

  return <Context.Provider value={{ shows }}>{children}</Context.Provider>;
};

export default HomeAsideProvider;
