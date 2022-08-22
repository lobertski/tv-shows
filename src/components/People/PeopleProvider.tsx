import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShows } from "./redux-slice";

export const Context = createContext<any>({});
const PeopleProvider: React.FC<any> = ({ children }) => {
  const [people, setPeople] = useState<Array<{}>>([]);
  const dispatch = useDispatch<any>();
  const payload = useSelector((state: any) => state.popular_shows);

  useEffect(() => {
    dispatch(fetchShows("people"));
  }, []);

  useEffect(() => {
    setPeople(payload?.shows ?? []);
    return;
  }, [payload]);
  return <Context.Provider value={{ people }}>{children}</Context.Provider>;
};

export default PeopleProvider;
