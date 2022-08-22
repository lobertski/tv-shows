import React, { useContext } from "react";
import withFetchAPI from "../../hoc/section";
import DisplayFetchView from "../DisplayFetch/DisplayFetchView";
import { Context } from "./ShowsProvider";

const ShowsView: React.FC = () => {
  const { shows = [] } = useContext(Context);
  const ShowsHOC = withFetchAPI(DisplayFetchView, shows);
  return ShowsHOC
};

export default ShowsView;
