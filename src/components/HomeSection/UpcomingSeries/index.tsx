import React from "react";
import UpcomingSeriesProvider from "./UpcomingSeriesProvider";
import UpcomingSeriesView from "./UpcomingSeriesView";

const UpcomingSeries = (props: any) => {
  return (
    <div>
      <UpcomingSeriesProvider {...props}>
        <UpcomingSeriesView {...props} />
      </UpcomingSeriesProvider>
    </div>
  );
};

export default UpcomingSeries;
