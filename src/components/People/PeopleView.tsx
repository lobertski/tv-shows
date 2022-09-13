import React, { useContext } from "react";
import withFetchAPI from "../../hoc/section";
import DisplayFetchView from "../DisplayFetch/DisplayFetchView";
import { Context } from "./PeopleProvider";

const PeopleView: React.FC = () => {
  const { people = [] } = useContext(Context);
  const PeopleHOC = withFetchAPI(DisplayFetchView, people, "People");
  return PeopleHOC;
};

export default PeopleView;
