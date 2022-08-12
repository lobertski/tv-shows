import React, { createContext, useEffect, useState } from "react";
import { getShows } from "../../api/getShowsRequest";

export const Context = createContext<any>({});
const SectionHomeProvider: React.FC<any> = ({ children }) => {
  const [shows, setShows] = useState<Array<{}>>([]);
  const getData = async () => {
    const payload = await getShows();
    setShows(payload?.data.slice(0, 3) ?? []);
  };

  useEffect(() => {
    getData();
  }, []);
  return <Context.Provider value={{ shows }}>{children}</Context.Provider>;
};

export default SectionHomeProvider;
